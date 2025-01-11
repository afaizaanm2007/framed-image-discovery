import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Image, Heart } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Weekly Class Newsletters
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Keep parents connected with personalized updates about their child's learning journey
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
              alt="Children in classroom"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Mail className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Automated Weekly Updates
              </h3>
              <p className="text-blue-700">
                Teachers can easily upload and organize classroom photos, while our system automatically creates personalized newsletters featuring each child.
              </p>
            </div>
            <div className="space-y-2">
              <Image className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Smart Photo Organization
              </h3>
              <p className="text-blue-700">
                Our AI-powered facial recognition ensures parents receive photos relevant to their child, creating a meaningful connection to classroom activities.
              </p>
            </div>
            <div className="space-y-2">
              <Heart className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-blue-900">
                Strengthen Parent Engagement
              </h3>
              <p className="text-blue-700">
                Keep parents involved in their child's educational journey with regular, personalized updates about classroom activities and achievements.
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
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PreschoolNewsletter;