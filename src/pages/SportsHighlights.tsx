import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Share2, Trophy, ArrowRight } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Youth Sports Highlights
          </h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Capture and share your young athlete's memorable moments with personalized digital albums
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Youth sports"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Camera className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-green-900">
                Automated Photo Collection
              </h3>
              <p className="text-green-700">
                Coaches and team photographers can easily upload game photos, while our AI automatically identifies and organizes pictures by player.
              </p>
            </div>
            <div className="space-y-2">
              <Share2 className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-green-900">
                Instant Sharing
              </h3>
              <p className="text-green-700">
                Share personalized digital albums with parents, featuring their child's best moments from every game.
              </p>
            </div>
            <div className="space-y-2">
              <Trophy className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-semibold text-green-900">
                Highlight Reels
              </h3>
              <p className="text-green-700">
                Create custom highlight collections for each player, making it easy to celebrate their achievements and progress.
              </p>
            </div>
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