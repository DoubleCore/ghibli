// src/App.tsx
import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import { Button } from "./components/ui/button";
import { motion, useAnimation } from "framer-motion";

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600"></div>
            <span className="text-xl font-bold text-gray-900">GhibliPic</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <ul className="flex gap-8">
              {["首页", "特点", "用户评价", "常见问题", "联系我们"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-700"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              登录
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section
          id="call-to-action"
          className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 py-24 text-white"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/20" />
          </div>

          <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-3xl font-bold sm:text-4xl"
            >
              准备好体验吉卜力的魔法了吗？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-indigo-100"
            >
              立即上传您的照片，让AI将其转换成宫崎骏动画风格的艺术作品。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
              >
                立即开始创作
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600"></div>
                <span className="text-lg font-bold">GhibliPic</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">
                将您的照片转换成宫崎骏动画风格的艺术作品，创造独特的吉卜力魔法体验。
              </p>
            </div>

            {[
              {
                title: "服务",
                links: ["照片转换", "风格模板", "会员升级", "价格"],
              },
              {
                title: "资源",
                links: ["使用教程", "常见问题", "动画欣赏", "支持"],
              },
              {
                title: "关于我们",
                links: ["公司简介", "工作机会", "联系我们", "法律声明"],
              },
            ].map((group, index) => (
              <div key={index}>
                <h4 className="mb-4 font-medium">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} GhibliPic. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;