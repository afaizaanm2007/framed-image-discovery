import { motion } from "framer-motion";
import { Search, Image, Database, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced Facial Recognition",
    description:
      "Instantly identify and categorize faces across your entire image library with state-of-the-art AI technology.",
  },
  {
    icon: Image,
    title: "Smart Content Creation",
    description:
      "Generate and organize content efficiently using intelligent image analysis and categorization.",
  },
  {
    icon: Database,
    title: "Metadata Enhancement",
    description:
      "Automatically extract and enrich image metadata for improved searchability and organization.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description:
      "Process and analyze images in real-time for immediate results and seamless integration.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-framed-900 mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-framed-600 max-w-2xl mx-auto"
          >
            Discover how our technology transforms the way you handle digital
            imagery
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-framed-50 hover:bg-framed-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-framed-900 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-framed-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-framed-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};