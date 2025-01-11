import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Share2, Trophy, ArrowRight, Users, Star, Zap } from "lucide-react";

const SportsHighlights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-framed-900 mb-2">Framed</h1>
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Sports Highlights Platform
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Create personalized digital albums featuring your young athletes' memorable moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="bg-green-50 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-green-700">Game Highlights</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-green-100 rounded-lg"></div>
                  <div className="aspect-square bg-green-100 rounded-lg"></div>
                  <div className="aspect-square bg-green-100 rounded-lg"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-green-100 rounded w-3/4"></div>
                <div className="h-4 bg-green-100 rounded w-1/2"></div>
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
              <Camera className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-green-900">
                Automated Photo Collection
              </h3>
              <p className="text-green-700">
                Easily upload and organize game photos with AI-powered player recognition
              </p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-green-900">
                Player Recognition
              </h3>
              <p className="text-green-700">
                Our AI automatically identifies players and creates personalized albums
              </p>
            </div>
            <div className="space-y-2">
              <Share2 className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-green-900">
                Instant Sharing
              </h3>
              <p className="text-green-700">
                Share digital highlight reels with parents instantly after games
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
          <h3 className="text-2xl font-bold text-green-900 mb-4">Key Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Time-Saving</h4>
              <p className="text-sm text-gray-600">Automate photo organization and sharing</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Personalized</h4>
              <p className="text-sm text-gray-600">Each parent receives photos of their child</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Memorable</h4>
              <p className="text-sm text-gray-600">Capture and preserve special moments</p>
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
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SportsHighlights;