import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,113,143,0.1),rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-framed-900 mb-4">
            Ready to Transform Your Image Management?
          </h2>
          <p className="text-lg text-framed-600 mb-8">
            Get in touch to learn how Framed can revolutionize your workflow with
            our cutting-edge AI technology.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-framed-900 hover:bg-framed-800 text-white"
            >
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-framed-200 hover:bg-framed-50 text-framed-900"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};