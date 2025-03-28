// src/components/Features.tsx
// import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

const featureItems = [
  {
    icon: "✨",
    title: "Beautiful Components",
    description:
      "Leverage our pre-built components to create stunning interfaces with minimal effort.",
  },
  {
    icon: "🎨",
    title: "Customizable Design",
    description:
      "Easily customize colors, sizes, and behaviors to match your brand identity.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description:
      "All components are designed to work flawlessly across all device sizes.",
  },
  {
    icon: "⚡",
    title: "Performance Optimized",
    description:
      "Built with performance in mind to ensure smooth interactions and fast load times.",
  },
  {
    icon: "🔒",
    title: "Accessibility First",
    description:
      "Designed with accessibility in mind, ensuring your app is usable by everyone.",
  },
  {
    icon: "🧩",
    title: "Modular Architecture",
    description:
      "Import only what you need, keeping your bundle size small and efficient.",
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Everything you need to build modern, beautiful interfaces that
            delight your users and elevate your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden border-indigo-100 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-block rounded-xl bg-indigo-100 p-3 text-2xl">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-indigo-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;