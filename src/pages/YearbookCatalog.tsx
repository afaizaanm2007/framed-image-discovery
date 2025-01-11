import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Tag, Sparkles, ArrowRight } from "lucide-react";

const YearbookCatalog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Yearbook Image Management
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Streamline your yearbook creation process with AI-powered image organization and smart suggestions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Search className="h-8 w-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Smart Image Search
              </h3>
              <p className="text-purple-700">
                Quickly find photos by student name, event, club, or any custom tag. Our AI-powered search makes image organization effortless.
              </p>
            </div>
            <div className="space-y-2">
              <Tag className="h-8 w-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Automated Tagging
              </h3>
              <p className="text-purple-700">
                Save time with automatic face recognition and event tagging. Our system learns and suggests relevant tags for your photos.
              </p>
            </div>
            <div className="space-y-2">
              <Sparkles className="h-8 w-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-purple-900">
                AI Layout Assistant
              </h3>
              <p className="text-purple-700">
                Get smart suggestions for photo placement and captions based on your yearbook templates and content guidelines.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Yearbook creation process"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Start Creating <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default YearbookCatalog;