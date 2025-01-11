import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Image, Heart, Calendar } from "lucide-react";

const PreschoolNewsletter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-framed-900 mb-2">Framed</h1>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Early Childhood Documentation
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Streamline classroom memory capture with automated photo organization and personalized weekly newsletters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/lovable-uploads/ac017222-f593-4924-b9f4-6ce591a880d0.png"
              alt="Classroom activities"
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Calendar className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Calendar Integration
              </h3>
              <p className="text-blue-700">
                Automatically organize photos based on your class schedule and activities
              </p>
            </div>
            <div className="space-y-2">
              <Image className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Smart Photo Organization
              </h3>
              <p className="text-blue-700">
                AI-powered facial recognition ensures parents receive photos relevant to their child
              </p>
            </div>
            <div className="space-y-2">
              <Mail className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Automated Weekly Updates
              </h3>
              <p className="text-blue-700">
                Generate personalized newsletters featuring each child's activities and achievements
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
          <h3 className="text-2xl font-bold text-blue-900 mb-4">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">Upload Photos</h4>
              <p className="text-sm text-gray-600">Simply upload classroom photos through our easy-to-use interface</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">AI Processing</h4>
              <p className="text-sm text-gray-600">Our AI identifies students and organizes photos automatically</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">Weekly Delivery</h4>
              <p className="text-sm text-gray-600">Parents receive personalized updates about their child</p>
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
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PreschoolNewsletter;