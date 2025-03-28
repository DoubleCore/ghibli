// src/components/Testimonials.tsx
import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "This UI library transformed our project. The components are beautifully designed and incredibly easy to implement. Our team's productivity has significantly improved.",
    author: "Sarah Johnson",
    role: "Product Designer, TechCorp",
    avatar: "SJ",
  },
  {
    quote:
      "I've worked with many UI libraries, but this one stands out. The attention to detail and smooth animations create an exceptional user experience that our customers love.",
    author: "Michael Chen",
    role: "Frontend Lead, InnovateLab",
    avatar: "MC",
  },
  {
    quote:
      "The responsive design of these components saved us countless hours of work. Everything just works beautifully across all screen sizes with minimal configuration.",
    author: "Alex Rivera",
    role: "UX Director, CreativeFlow",
    avatar: "AR",
  },
  {
    quote:
      "Not only are the components visually stunning, but they're also highly accessible. This has made our applications more inclusive and improved our overall user satisfaction.",
    author: "Priya Patel",
    role: "CTO, AccessibleTech",
    avatar: "PP",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Hear from the developers and designers who've transformed their
            projects with our components.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            onSelect={(index: number) => setActiveIndex(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="overflow-hidden border-indigo-100 bg-white shadow-xl shadow-indigo-100/20">
                      <CardContent className="flex flex-col items-center p-6 text-center md:p-10">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                          <Avatar className="h-14 w-14 border-2 border-white">
                            <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="mb-6 text-3xl text-indigo-500">"</div>
                        <p className="mb-6 text-lg text-gray-700 md:text-xl">
                          {testimonial.quote}
                        </p>
                        <h4 className="mb-1 font-semibold text-gray-900">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`block h-2.5 w-2.5 rounded-full transition-all ${
                    index === activeIndex % testimonials.length
                      ? "bg-indigo-600 scale-125"
                      : "bg-indigo-200"
                  }`}
                />
              ))}
            </div>
            <div className="absolute -top-12 right-0 flex gap-2">
              <CarouselPrevious className="h-8 w-8 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800" />
              <CarouselNext className="h-8 w-8 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;