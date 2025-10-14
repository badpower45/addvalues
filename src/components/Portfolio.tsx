import { Button } from './ui/button';
import { ExternalLink, Code2, Zap, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { PageType } from '../App';
import dakanLogo from '../assets/portfolio/dakan-logo.png';
import oldiesLogo from '../assets/portfolio/oldies-logo.png';
import gedoAzizLogo from '../assets/portfolio/gedo-aziz-logo.png';

interface PortfolioProps {
  navigateToPage: (page: PageType) => void;
}

const projects = [
  {
    title: 'نظام إدارة الحضور والرواتب - دكان',
    titleEn: 'Smart Attendance & Payroll System - Dakan',
    category: 'Web App',
    description: 'نظام ذكي لإدارة الحضور والانصراف بتقنية Geofencing، متابعة فورية للموظفين، وحساب آلي للرواتب مع نظام صلاحيات متعدد المستويات',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing', 'RBAC'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
    icon: Code2,
    logo: dakanLogo,
  },
  {
    title: 'نظام إدارة الحضور والرواتب - Oldies',
    titleEn: 'Smart Attendance & Payroll System - Oldies',
    category: 'Web App',
    description: 'نظام ذكي لإدارة الحضور والانصراف بتقنية Geofencing، متابعة فورية للموظفين، وحساب آلي للرواتب مع نظام صلاحيات متعدد المستويات',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing', 'RBAC'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
    icon: Code2,
    logo: oldiesLogo,
  },
  {
    title: 'نظام إدارة الحضور والرواتب - جدو عزيز',
    titleEn: 'Smart Attendance & Payroll System - Gedo Aziz',
    category: 'Web App',
    description: 'نظام ذكي لإدارة الحضور والانصراف بتقنية Geofencing، متابعة فورية للموظفين، وحساب آلي للرواتب مع نظام صلاحيات متعدد المستويات',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing', 'RBAC'],
    gradient: 'linear-gradient(135deg, #00B2FF, #10B981)',
    icon: Code2,
    logo: gedoAzizLogo,
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
                {/* Company Logo - Full Image */}
                <div 
                  className="relative h-96 overflow-hidden cursor-pointer"
                  onClick={() => navigateToPage('portfolio')}
                >
                  <img 
                    src={project.logo} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white text-white hover:bg-white hover:text-[var(--codepulse-blue)] transition-all duration-300"
                      >
                        <ExternalLink className="ml-2" size={20} />
                        عرض التفاصيل
                      </Button>
                    </motion.div>
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
