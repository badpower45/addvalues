import { Search, PenTool, CheckCircle, Rocket, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Planning',
    description: 'Requirements analysis and project scope definition (1-2 weeks)',
    color: '#2776EA',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design & Development',
    description: 'UI/UX design and development with weekly progress updates (4-8 weeks)',
    color: '#00B2FF',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Testing & QA',
    description: 'Comprehensive testing and quality assurance (1-2 weeks)',
    color: '#1A5490',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Support',
    description: 'Deployment, training, and ongoing maintenance support',
    color: '#10B981',
  },
];

export function HowWeWork() {
  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-slate-800"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, var(--codepulse-blue), transparent)',
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
              background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--codepulse-blue))',
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Rocket size={20} />
            <span>Our Process</span>
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
            Our Working Process
          </h2>
          <p style={{ color: 'var(--tech-gray)', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            We follow a clear and organized methodology to ensure the success of your project
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'var(--codepulse-blue)', opacity: '0.2' }}
            />
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                background: 'linear-gradient(90deg, var(--codepulse-blue), var(--electric-blue))',
              }}
              initial={{ width: '0%' }}
              animate={inView ? { width: `${((activeStep + 1) / steps.length) * 100}%` } : {}}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <motion.div
                  className="bg-white rounded-2xl p-8 h-full relative overflow-hidden"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    border: `2px solid ${activeStep === index ? step.color : 'transparent'}`,
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  animate={{
                    boxShadow: activeStep === index
                      ? `0 20px 60px ${step.color}30`
                      : '0 10px 40px rgba(0,0,0,0.08)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on active */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeStep === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <motion.div
                      className="absolute -top-14 left-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                        color: 'white',
                        fontWeight: '500',
                        fontSize: '24px',
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      className="mt-8 mb-6 mx-auto relative"
                      style={{ width: '100px', height: '100px' }}
                    >
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: `${step.color}20` }}
                        animate={activeStep === index ? {
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.2, 0.5],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Icon */}
                      <motion.div
                        className="absolute inset-3 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}15, ${step.color}30)`,
                        }}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon size={48} style={{ color: step.color }} />
                      </motion.div>

                      {/* Floating sparkle */}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        animate={activeStep === index ? {
                          rotate: [0, 360],
                          scale: [1, 1.3, 1],
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Zap size={20} style={{ color: step.color }} />
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="mb-4 text-center"
                      style={{
                        fontSize: '22px',
                        fontWeight: '500',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'var(--font-arabic-heading)',
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-center mb-4"
                      style={{
                        color: 'var(--tech-gray)',
                        lineHeight: '1.7',
                        fontSize: '14px',
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Active indicator */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeStep === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color,
                          fontSize: '12px',
                          fontWeight: '500',
                        }}
                        animate={activeStep === index ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                        Active
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Connector Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-6">
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight
                        size={32}
                        style={{ color: 'var(--codepulse-blue)', transform: 'rotate(90deg)' }}
                      />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <motion.div
          className="flex justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {steps.map((step, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStep(index)}
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: activeStep === index ? step.color : 'rgba(0,0,0,0.2)',
                  width: activeStep === index ? '32px' : '12px',
                }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
