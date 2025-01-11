import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import {
  Camera,
  Upload,
  Users,
  Play,
  Download,
  Share2,
  Trophy,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

const SportsHighlights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
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

        {/* Coach Upload Interface Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">Coach Dashboard</h3>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-dashed border-green-200 text-center">
                  <Upload className="h-12 w-12 mx-auto text-green-500 mb-4" />
                  <h4 className="font-semibold text-green-900 mb-2">Upload Game Content</h4>
                  <p className="text-green-600 text-sm mb-4">
                    Drag and drop photos & videos or click to browse
                  </p>
                  <Button variant="outline" className="bg-white">
                    Select Files
                  </Button>
                </div>
                
                {/* Recent Uploads */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-900">Recent Uploads</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-video bg-green-100 rounded-lg relative group cursor-pointer overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <Play className="text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Distribution Section */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-green-100 p-6">
                  <h4 className="font-semibold text-green-900 mb-4">Share with Parents</h4>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-green-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <Users className="text-green-500" />
                          <div>
                            <p className="font-medium text-green-900">Player {i}</p>
                            <p className="text-sm text-green-600">12 new highlights</p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">
                          Share
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Parent View Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">Parent View</h3>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-video bg-green-100 rounded-xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Button size="sm" variant="outline" className="bg-white">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">Game Highlight {i}</h4>
                    <p className="text-sm text-green-600">March {i}, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Easy Uploads</h4>
              <p className="text-sm text-gray-600">Upload photos and videos directly from your device</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Automatic Sorting</h4>
              <p className="text-sm text-gray-600">AI identifies players and creates personalized albums</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Instant Sharing</h4>
              <p className="text-sm text-gray-600">Share highlights with parents immediately</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
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