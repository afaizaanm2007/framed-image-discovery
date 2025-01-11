import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Tag, Sparkles, ArrowRight, Image, Layout, MessageSquare } from "lucide-react";

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
          <h1 className="text-5xl font-bold text-framed-900 mb-2">Framed</h1>
          <h2 className="text-4xl font-bold text-purple-900 mb-6">
            Yearbook Creation Suite
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Empower your yearbook staff with AI-powered image organization and smart content suggestions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="bg-purple-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Tag className="h-5 w-5 text-purple-500" />
                    <span className="text-sm font-medium text-purple-700">Smart Tags</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-purple-100 rounded-lg"></div>
                  <div className="aspect-video bg-purple-100 rounded-lg"></div>
                  <div className="aspect-video bg-purple-100 rounded-lg"></div>
                  <div className="aspect-video bg-purple-100 rounded-lg"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-purple-100 rounded w-3/4"></div>
                <div className="h-4 bg-purple-100 rounded w-1/2"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Tag className="h-8 w-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Smart Image Tagging
              </h3>
              <p className="text-purple-700">
                Automatically tag photos with student names, events, and activities
              </p>
            </div>
            <div className="space-y-2">
              <Layout className="h-8 w-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Template Integration
              </h3>
              <p className="text-purple-700">
                Upload your yearbook templates and get AI-powered layout suggestions
              </p>
            </div>
            <div className="space-y-2">
              <MessageSquare className="h-8 w-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-purple-900">
                Caption Generation
              </h3>
              <p className="text-purple-700">
                Get AI-generated caption suggestions for your yearbook photos
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-4">Features</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 bg-purple-50 rounded-xl">
              <Search className="h-6 w-6 text-purple-500 mb-2" />
              <h4 className="font-semibold mb-1">Quick Search</h4>
              <p className="text-sm text-gray-600">Find photos instantly by name or event</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <Tag className="h-6 w-6 text-purple-500 mb-2" />
              <h4 className="font-semibold mb-1">Auto-Tagging</h4>
              <p className="text-sm text-gray-600">AI identifies and tags people automatically</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <Layout className="h-6 w-6 text-purple-500 mb-2" />
              <h4 className="font-semibold mb-1">Smart Layout</h4>
              <p className="text-sm text-gray-600">Get AI-powered design suggestions</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <MessageSquare className="h-6 w-6 text-purple-500 mb-2" />
              <h4 className="font-semibold mb-1">Auto Captions</h4>
              <p className="text-sm text-gray-600">Generate engaging photo captions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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