import { useEffect, useRef, useState } from 'react';
import { Code, Layout, ShoppingCart, Smartphone, Network, Lightbulb, ArrowRight, Zap, Check, Megaphone } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { PageType } from '../App';

interface ServicesProps {
  navigateToPage: (page: PageType) => void;
}

const services = [
  {
    icon: Code,
    title: 'Custom Website Development',
    description: 'Professional websites designed specifically for your company needs with modern design and advanced functionality',
    features: ['Responsive Design', 'Content Management', 'SEO Optimization', 'High Security'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
  },
  {
    icon: Layout,
    title: 'Web Applications',
    description: 'Complex web systems and applications to manage and automate business operations with high efficiency',
    features: ['Dashboards', 'Data Management', 'Analytics Reports', 'Advanced UI'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment systems, inventory management, and shipping',
    features: ['Multiple Gateways', 'Product Management', 'Order Tracking', 'Sales Reports'],
    gradient: 'linear-gradient(135deg, #00B2FF, #2776EA)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Professional applications for Android and iPhone with exceptional user experience',
    features: ['Native Apps', 'Hybrid Apps', 'Service Integration', 'Push Notifications'],
    gradient: 'linear-gradient(135deg, #2776EA, #1A5490)',
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'Connect your existing systems and automate workflows to improve efficiency and productivity',
    features: ['APIs', 'Databases', 'Process Automation', 'Data Sync'],
    gradient: 'linear-gradient(135deg, #00B2FF, #1A5490)',
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting',
    description: 'Specialized consulting in technology strategy and digital transformation for your company',
    features: ['Requirements Analysis', 'Technology Selection', 'Development Plans', 'Project Management'],
    gradient: 'linear-gradient(135deg, #1A5490, #00B2FF)',
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    description: 'Professional landing page design to improve your marketing campaigns and increase conversion rates',
    features: ['Attractive Design', 'Conversion Optimization', 'Fast Loading', 'Tracking & Analytics'],
    gradient: 'linear-gradient(135deg, #FF6B35, #F7931E)',
  },
];

export function Services({ navigateToPage }: ServicesProps) {
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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-slate-800"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--codepulse-blue), transparent)',
          filter: 'blur(60px)',
        }}
      />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(80px)',
        }}
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
              background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap size={20} />
            <span>Our Services</span>
          </motion.div>

          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '500',
              background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            Our Specialized Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300" style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            We offer a comprehensive range of technical services to transform your ideas into digital reality
          </p>
        </motion.div>

        {/* Services Grid - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={index === 1 || index === 4 ? 'md:mt-12' : ''}
            >
              <Card
                className="group relative overflow-hidden border-0 h-full bg-white dark:bg-slate-700 shadow-xl dark:shadow-2xl"
              >
                {/* Gradient Border Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: service.gradient,
                    padding: '2px',
                    borderRadius: 'inherit',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <CardContent className="p-8 relative z-10">
                  {/* Large Icon with Gradient Background */}
                  <motion.div
                    className="mb-8 w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: service.gradient,
                    }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={48} color="white" />
                    
                    {/* Floating sparkle effect */}
                    <motion.div
                      className="absolute top-2 right-2"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap size={16} color="rgba(255,255,255,0.8)" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="mb-4 text-slate-800 dark:text-slate-100"
                    style={{
                      fontSize: '24px',
                      fontWeight: '500',
                      fontFamily: 'var(--font-arabic-heading)',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-6 text-slate-600 dark:text-slate-300"
                    style={{
                      lineHeight: '1.8',
                      fontFamily: 'var(--font-arabic-body)',
                      fontSize: '15px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features Grid - More Visual */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-slate-600"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: service.gradient }}
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check size={12} color="white" strokeWidth={3} />
                        </motion.div>
                        <span
                          className="text-xs md:text-sm text-slate-800 dark:text-white font-semibold"
                          style={{
                            fontFamily: 'Cairo, sans-serif',
                          }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link with animated arrow */}
                  <motion.button
                    onClick={() => navigateToPage('services')}
                    className="flex items-center gap-2 group/link"
                    style={{
                      color: 'var(--codepulse-blue)',
                      fontFamily: 'var(--font-arabic-body)',
                      fontWeight: '500',
                    }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>
                </CardContent>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: service.gradient,
                    filter: 'blur(20px)',
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
