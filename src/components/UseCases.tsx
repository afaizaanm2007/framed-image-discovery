import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    title: "Digital Asset Management",
    description:
      "Organize and search through vast image libraries with intelligent facial recognition.",
    image: "photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Content Creation",
    description:
      "Streamline content creation workflow with automated image processing.",
    image: "photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Custom solutions for large-scale image management and processing needs.",
    image: "photo-1519389950473-47ba0277781c",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-framed-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-framed-900 mb-4">
            Use Cases
          </h2>
          <p className="text-lg text-framed-600 max-w-2xl mx-auto">
            Discover how Framed can transform your image management workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${useCase.image}`}
                  alt={useCase.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-framed-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-framed-600 mb-4">{useCase.description}</p>
                <Button
                  variant="ghost"
                  className="text-framed-900 hover:text-framed-700 p-0 hover:bg-transparent"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};