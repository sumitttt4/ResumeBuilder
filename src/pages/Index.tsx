import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickGenerate from "@/components/QuickGenerate";
import Features from "@/components/Features";
import Templates from "@/components/Templates";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickGenerate />
        <Features />
        <Templates />
        <Portfolio />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
