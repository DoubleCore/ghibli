// src/components/Hero.tsx
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,198,164,0.3),rgba(255,255,255,0))]" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-400/40 to-teal-300/40 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto px-6 text-center"
      >
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">吉卜力风格</span>
          <span className="mt-2 block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            照片转换器
          </span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl md:text-2xl">
          将您的照片转换成宫崎骏动画风格的艺术作品，体验吉卜力工作室的奇妙魔法。
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/30"
          >
            开始转换
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-300 text-lg text-emerald-700 transition-all hover:bg-emerald-50"
          >
            了解更多
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