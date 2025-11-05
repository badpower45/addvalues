import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Ahmed Mahmoud',
    company: 'Technical Director - Al Nour Trading Company',
    quote:
  'I worked with AddValues on developing our e-commerce store and the results exceeded all expectations. Professional team and committed to deadlines.',
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Sarah Abdullah',
    company: 'Founder - Educational Platform',
    quote:
      'They developed a complete mobile app for us with excellent design and performance. Communication was smooth and technical support continues even after launch.',
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'Mohammed Al-Khatib',
    company: 'CEO - Consulting Firm',
    quote:
      'The best software company I have worked with. They understood our requirements quickly and provided innovative technical solutions that greatly improved our efficiency.',
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'Layla Al-Sayed',
    company: 'Marketing Manager - Real Estate Company',
    quote:
  'Our new website increased customer engagement by 200%. Modern design and very fast. Thank you AddValues!',
    rating: 5,
    avatar: 'L',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#2776EA] to-[#1A5490] dark:from-slate-800 dark:to-slate-900"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 glass"
            style={{
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Quote size={20} />
            <span>Client Testimonials</span>
          </motion.div>

          <h2
            className="mb-4 text-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '500',
              fontFamily: 'var(--font-arabic-heading)',
            }}
          >
            ماذا يقول عملاؤنا
          </h2>
          <p
            className="text-white/90"
            style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}
          >
            نفخر بثقة عملائنا ونسعى دائماً لتجاوز توقعاتهم
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-14 h-14 rounded-full glass flex items-center justify-center"
            style={{ border: '2px solid rgba(255,255,255,0.3)' }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={28} color="white" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-14 h-14 rounded-full glass flex items-center justify-center"
            style={{ border: '2px solid rgba(255,255,255,0.3)' }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={28} color="white" />
          </motion.button>

          {/* Testimonial Cards Carousel */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <Card
                  className="border-0 h-full glass"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <CardContent className="p-10 md:p-12 h-full flex flex-col justify-between">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <Quote size={60} color="rgba(255,255,255,0.3)" />
                    </motion.div>

                    {/* Rating Stars */}
                    <motion.div
                      className="flex gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                        >
                          <Star size={24} fill="var(--warning-orange)" color="var(--warning-orange)" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.p
                      className="text-white mb-8 flex-grow"
                      style={{
                        lineHeight: '1.9',
                        fontFamily: 'Cairo, sans-serif',
                        fontSize: '20px',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.p>

                    {/* Client Info */}
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {/* Avatar */}
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, var(--electric-blue), var(--codepulse-blue))',
                          color: 'white',
                          fontWeight: '500',
                          fontSize: '24px',
                        }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {testimonials[currentIndex].avatar}
                      </motion.div>

                      <div>
                        <p
                          className="text-white mb-1"
                          style={{
                            fontWeight: '500',
                            fontSize: '18px',
                            fontFamily: 'var(--font-arabic-heading)',
                          }}
                        >
                          {testimonials[currentIndex].name}
                        </p>
                        <p
                          className="text-white/80"
                          style={{
                            fontSize: '14px',
                            fontFamily: 'Cairo, sans-serif',
                          }}
                        >
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8' : ''
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex ? 'var(--electric-blue)' : 'rgba(255,255,255,0.3)',
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
