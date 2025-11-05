import { Users, Cpu, Clock, Headphones, Zap, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced development team with 5+ years in modern technologies',
    color: '#2776EA',
  },
  {
    icon: Cpu,
    title: 'Modern Tech',
    description: 'Latest frameworks: React, Node.js, Laravel, Flutter',
    color: '#00B2FF',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '97% on-time delivery rate with transparent project tracking',
    color: '#1A5490',
  },
  {
    icon: Headphones,
    title: 'Full Support',
    description: '24/7 technical support and maintenance services',
    color: '#10B981',
  },
];

export function WhyChooseUs() {
  const [inView, setInView] = useState(false);
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, var(--codepulse-blue), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, var(--success-green), var(--electric-blue))',
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Award size={20} />
            <span>Why Choose Us</span>
          </motion.div>

          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '500',
              background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            Why Choose AddValues?
          </h2>
          <p className="text-slate-600 dark:text-slate-300" style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            We combine technical expertise and innovation to deliver software solutions that exceed your expectations
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative overflow-hidden rounded-3xl p-8 h-full bg-white dark:bg-slate-700 shadow-xl dark:shadow-2xl"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}10, ${benefit.color}30)`,
                  }}
                />

                <div className="relative z-10 text-center">
                  {/* Floating Icon Container */}
                  <motion.div
                    className="relative mb-6 mx-auto"
                    style={{ width: '120px', height: '120px' }}
                  >
                    {/* Animated rings behind icon */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}40)`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-2 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${benefit.color}30, ${benefit.color}50)`,
                      }}
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="absolute inset-4 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon size={48} color="white" />
                    </motion.div>

                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Zap size={24} style={{ color: benefit.color }} />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: '22px',
                      fontWeight: '500',
                      color: 'var(--deep-tech-blue)',
                      fontFamily: 'var(--font-arabic-heading)',
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--tech-gray)',
                      lineHeight: '1.7',
                      fontSize: '15px',
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  style={{
                    background: `radial-gradient(circle at top right, ${benefit.color}, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-dark"
            style={{
              background: 'linear-gradient(135deg, var(--codepulse-blue)15, var(--electric-blue)15)',
              backdropFilter: 'blur(10px)',
              border: '2px solid var(--electric-blue)40',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready to start your project?
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap size={24} style={{ color: 'var(--electric-blue)' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
