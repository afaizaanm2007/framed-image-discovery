import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Technology } from "@/components/Technology";
import { UseCases } from "@/components/UseCases";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Technology />
      <UseCases />
      <CallToAction />
    </div>
  );
};

export default Index;