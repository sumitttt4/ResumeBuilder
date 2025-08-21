import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickGenerate from "@/components/QuickGenerate";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import ModernFooter from "@/components/ModernFooter";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AI Resume Builder - Create Professional Resumes with AI"
        description="Build ATS-friendly resumes and stunning portfolios with AI. Support for 20+ Indian languages, live preview, and one-click export. Trusted by 50,000+ professionals."
        keywords="AI resume builder, professional resume, ATS resume, portfolio generator, cover letter, cold email, job search, Indian languages, resume templates"
      />
      <Header />
      <main>
        <Hero />
        <QuickGenerate />
        <Features />
        <Templates />
        <Portfolio />
        <Pricing />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;
