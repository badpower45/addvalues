import { Button } from './ui/button';
import { ExternalLink, Code2, Smartphone, ShoppingBag, Zap, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { PageType } from '../App';

interface PortfolioProps {
  navigateToPage: (page: PageType) => void;
}

const projects = [
  {
    title: 'منصة التجارة الإلكترونية',
    titleEn: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'متجر إلكتروني متكامل مع نظام إدارة متقدم',
    technologies: ['React', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
    icon: ShoppingBag,
  },
  {
    title: 'تطبيق إدارة المشاريع',
    titleEn: 'Project Management App',
    category: 'Web App',
    description: 'نظام شامل لإدارة المشاريع والفرق',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
    icon: Code2,
  },
  {
    title: 'تطبيق توصيل الطعام',
    titleEn: 'Food Delivery App',
    category: 'Mobile App',
    description: 'تطبيق موبايل للأندرويد والآيفون',
    technologies: ['Flutter', 'Firebase', 'REST API'],
    gradient: 'linear-gradient(135deg, #00B2FF, #10B981)',
    icon: Smartphone,
  },
];

export function Portfolio({ navigateToPage }: PortfolioProps) {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
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
            <Eye size={20} />
            <span>Our Work</span>
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
            نماذج من أعمالنا
          </h2>
          <p style={{ color: 'var(--tech-gray)', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            مشاريع ناجحة ساعدت عملاءنا على تحقيق أهدافهم الرقمية
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={index === 1 ? 'md:mt-12' : ''}
            >
              <motion.div
                className="group relative overflow-hidden rounded-3xl bg-white h-full"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image/Visual with Icon */}
                <div
                  className="relative h-80 overflow-hidden"
                  style={{
                    background: project.gradient,
                  }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                    animate={hoveredIndex === index ? {
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                    } : {}}
                    transition={{ duration: 8, repeat: Infinity }}
                  />

                  {/* Large icon in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={hoveredIndex === index ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <project.icon size={120} color="rgba(255,255,255,0.3)" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Floating tech icons */}
                  <motion.div
                    className="absolute top-10 left-10"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Code2 size={32} color="rgba(255,255,255,0.5)" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-10 right-10"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Zap size={28} color="rgba(255,255,255,0.5)" />
                  </motion.div>

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={hoveredIndex === index ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.4, type: 'spring' }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-[var(--codepulse-blue)] transition-all duration-300"
                      >
                        <ExternalLink className="ml-2" size={20} />
                        عرض المشروع
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-6 right-6 px-4 py-2 rounded-full backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: 'white',
                      fontSize: '13px',
                      fontWeight: '500',
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: '24px',
                      fontWeight: '500',
                      color: 'var(--deep-tech-blue)',
                      fontFamily: 'var(--font-arabic-heading)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-1"
                    style={{
                      fontSize: '14px',
                      color: 'var(--electric-blue)',
                      fontWeight: '400',
                    }}
                  >
                    {project.titleEn}
                  </p>

                  <p
                    className="mb-6"
                    style={{
                      color: 'var(--tech-gray)',
                      lineHeight: '1.7',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 rounded-full"
                        style={{
                          background: `${project.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}15`,
                          color: 'var(--deep-tech-blue)',
                          fontSize: '13px',
                          fontWeight: '500',
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: project.gradient.match(/#[a-fA-F0-9]{6}/)?.[0] + '30',
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: project.gradient,
                    padding: '3px',
                    borderRadius: 'inherit',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigateToPage('portfolio')}
              size="lg"
              className="relative overflow-hidden group shadow-xl"
              style={{
                background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                color: 'white',
                fontFamily: 'Cairo, sans-serif',
                padding: '24px 40px',
                fontSize: '18px',
                borderRadius: '16px',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                شاهد جميع المشاريع
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink size={20} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, var(--electric-blue), var(--deep-tech-blue))',
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
