import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-framed-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,113,143,0.1),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-framed-100 text-framed-900 rounded-full mb-6">
            Revolutionizing Image Search
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-framed-900 mb-6 tracking-tight">
            Smart Image Organization Through AI
          </h1>
          <p className="text-xl text-framed-600 mb-8 max-w-2xl mx-auto">
            Harness the power of facial recognition and metadata collection for
            seamless image searching and content creation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-framed-900 hover:bg-framed-800 text-white transition-all duration-300"
            >
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-framed-200 hover:bg-framed-50 text-framed-900"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};