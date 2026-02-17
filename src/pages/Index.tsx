import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import BenefitsSection from "@/components/BenefitsSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <BenefitsSection />
      <CategoriesSection />
      <ProductsSection />
      <TestimonialsSection />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
