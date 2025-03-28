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
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600"></div>
            <span className="text-xl font-bold text-gray-900">BeautifulUI</span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <ul className="flex gap-8">
              {["Home", "Features", "Testimonials", "Pricing", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-indigo-700"
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
              className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
            >
              Sign In
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
          className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-24 text-white"
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
              Ready to create beautiful interfaces?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-indigo-100"
            >
              Start building amazing experiences today with our comprehensive UI
              component library.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-indigo-50"
              >
                Get Started Now
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
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600"></div>
                <span className="text-lg font-bold">BeautifulUI</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">
                Creating beautiful interfaces that delight users and inspire
                developers.
              </p>
            </div>

            {[
              {
                title: "Products",
                links: ["Components", "Templates", "Plugins", "Pricing"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Tutorials", "Blog", "Support"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Legal"],
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
            <p>&copy; 2023 BeautifulUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;