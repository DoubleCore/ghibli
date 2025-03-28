// src/components/Features.tsx
// import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

const featureItems = [
  {
    icon: "🎨",
    title: "吉卜力风格转换",
    description:
      "通过先进的AI技术，将您的普通照片转换成宫崎骏动画风格的艺术作品。",
  },
  {
    icon: "📱",
    title: "随时随地上传",
    description:
      "支持从手机、电脑上传照片，甚至可以直接拍照进行转换，随时捕捉灵感。",
  },
  {
    icon: "⚡",
    title: "高速处理",
    description:
      "强大的AI引擎保证快速处理您的图片，几秒钟内即可获得转换结果。",
  },
  {
    icon: "💾",
    title: "云端保存",
    description:
      "所有转换后的作品都会保存在您的账户中，随时可以查看、下载和分享。",
  },
  {
    icon: "🔍",
    title: "多种风格选择",
    description:
      "提供多种吉卜力电影风格选择，如《千与千寻》、《龙猫》、《天空之城》等经典作品。",
  },
  {
    icon: "🌟",
    title: "高质量输出",
    description:
      "高分辨率输出，让您的转换作品清晰精美，适合打印和分享。",
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
            className="mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          >
            神奇功能
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            体验宫崎骏动画的魔力，将您的日常照片转换成充满想象力的艺术作品。
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