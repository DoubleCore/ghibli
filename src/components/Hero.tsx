// src/components/Hero.tsx
import React from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-400/40 to-purple-300/40 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1.5 text-sm font-medium text-white"
        >
          ✨ Beautifully Crafted UI Components
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Modern UI Design
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Reimagined
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl"
        >
          Experience the power of beautifully designed components with smooth
          animations and responsive layouts, perfect for creating stunning
          digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-300/30"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-indigo-300 text-lg text-indigo-700 transition-all hover:bg-indigo-50"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="container relative z-10 mx-auto mt-16 px-6"
      >
        <div className="mx-auto flex max-w-4xl justify-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-indigo-100 bg-white/70 p-4 shadow-xl shadow-indigo-200/20 backdrop-blur-sm md:h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 h-24 w-24 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                <p className="text-lg font-medium text-indigo-900">
                  Interactive Preview
                </p>
                <p className="text-sm text-gray-500">
                  Your beautiful components will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;