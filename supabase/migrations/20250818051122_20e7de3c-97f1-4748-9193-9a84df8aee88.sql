-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  company TEXT,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create generations table for AI-generated content
CREATE TABLE public.generations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('cold_email', 'cover_letter')),
  input_data JSONB NOT NULL,
  generated_content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on generations
ALTER TABLE public.generations ENABLE ROW LEVEL SECURITY;

-- Generations policies
CREATE POLICY "Users can view their own generations" ON public.generations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own generations" ON public.generations FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create support threads table
CREATE TABLE public.support_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL DEFAULT 'Support Request',
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on support_threads
ALTER TABLE public.support_threads ENABLE ROW LEVEL SECURITY;

-- Support threads policies
CREATE POLICY "Users can view their own threads" ON public.support_threads FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);
CREATE POLICY "Users can create support threads" ON public.support_threads FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create support messages table
CREATE TABLE public.support_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID NOT NULL REFERENCES public.support_threads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  is_ai_response BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on support_messages
ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

-- Support messages policies
CREATE POLICY "Users can view messages in their threads" ON public.support_messages 
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.support_threads 
    WHERE id = thread_id 
    AND (user_id = auth.uid() OR user_id IS NULL)
  )
);

CREATE POLICY "Users can create messages in their threads" ON public.support_messages 
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.support_threads 
    WHERE id = thread_id 
    AND (user_id = auth.uid() OR user_id IS NULL)
  )
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_support_threads_updated_at
  BEFORE UPDATE ON public.support_threads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profiles
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();