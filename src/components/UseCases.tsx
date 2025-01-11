import { motion } from "framer-motion";
import { ArrowRight, Camera, Calendar, Users, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const useCases = [
  {
    title: "Early Childhood Documentation",
    description:
      "Streamline capturing classroom memories with automated photo organization and personalized weekly newsletters for parents.",
    image: "/lovable-uploads/ac017222-f593-4924-b9f4-6ce591a880d0.png",
    icon: <Camera className="w-6 h-6 text-blue-500" />,
    link: "/preschool-newsletter",
    features: [
      "Automated photo organization",
      "Face recognition for personalization",
      "Weekly newsletter generation",
      "Calendar integration"
    ]
  },
  {
    title: "Yearbook Creation Suite",
    description:
      "Empower yearbook staff with AI-powered image organization, smart tagging, and automated caption generation.",
    image: "photo-1588072432836-e10032774350",
    icon: <Image className="w-6 h-6 text-purple-500" />,
    link: "/yearbook-catalog",
    features: [
      "Smart image tagging",
      "AI caption suggestions",
      "Template integration",
      "Event categorization"
    ]
  },
  {
    title: "Sports Highlights Platform",
    description:
      "Create personalized digital albums for parents featuring their children's sports moments and achievements.",
    image: "photo-1515238152791-8216bfdf89a7",
    icon: <Users className="w-6 h-6 text-green-500" />,
    link: "/sports-highlights",
    features: [
      "Automated highlight reels",
      "Player recognition",
      "Real-time sharing",
      "Event organization"
    ]
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-framed-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-framed-900 mb-4">
            Transforming Image Management
          </h2>
          <p className="text-lg text-framed-600 max-w-2xl mx-auto">
            Discover how Framed revolutionizes content creation across different industries
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
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {useCase.icon}
                </div>
                <img
                  src={useCase.image.startsWith("photo") 
                    ? `https://images.unsplash.com/${useCase.image}`
                    : useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover opacity-75 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {useCase.icon}
                  <h3 className="text-xl font-semibold text-framed-900">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-framed-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2 mb-6">
                  {useCase.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-framed-600">
                      <Calendar className="w-4 h-4 mr-2 text-framed-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={useCase.link}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-framed-900 hover:text-framed-700 hover:bg-framed-50"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};