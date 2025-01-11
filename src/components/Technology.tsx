import { motion } from "framer-motion";

export const Technology = () => {
  return (
    <section className="py-24 bg-framed-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,113,143,0.1),rgba(39,35,47,0))]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-edge Technology
          </h2>
          <p className="text-lg text-framed-300 max-w-2xl mx-auto">
            Our advanced AI systems power the next generation of image processing
            and organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-framed-900/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Facial Recognition</h3>
            <p className="text-framed-300">
              State-of-the-art neural networks for accurate face detection and
              recognition across diverse datasets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-framed-900/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Metadata Analysis</h3>
            <p className="text-framed-300">
              Advanced algorithms extract and process image metadata for enhanced
              searchability and organization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl bg-framed-900/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-4">AI Processing</h3>
            <p className="text-framed-300">
              Real-time image processing and analysis powered by sophisticated
              machine learning models.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};