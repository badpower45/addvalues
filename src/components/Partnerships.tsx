import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Handshake, Sparkles } from 'lucide-react';
import gedoAzizLogo from '../assets/portfolio/gedo-aziz-logo.png';
import oldiesLogo from '../assets/portfolio/oldies-logo.png';
import dakanLogo from '../assets/portfolio/dakan-logo.png';

const partners = [
  {
    name: 'دكان',
    logo: dakanLogo,
    description: 'منصة تجارة إلكترونية',
    gradient: 'linear-gradient(135deg, #2E3FFF, #00D4FF)',
  },
  {
    name: 'Oldies',
    logo: oldiesLogo,
    description: 'مطعم Comfort Food',
    gradient: 'linear-gradient(135deg, #FF6B35, #F7931E)',
  },
  {
    name: 'Gedo Aziz',
    logo: gedoAzizLogo,
    description: 'سلسلة مطاعم مصرية أصيلة',
    gradient: 'linear-gradient(135deg, #FFD700, #FF6B35)',
  },
];

export function Partnerships() {
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
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Handshake size={20} />
            <span>شركاؤنا</span>
          </motion.div>

          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 42px)',
              fontWeight: '500',
              background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            عملاء نفتخر بالعمل معهم
          </h2>
          <p style={{ color: 'var(--tech-gray)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            شراكات ناجحة بنينا فيها حلول رقمية متطورة
          </p>
        </motion.div>

        {/* Partners Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-800 overflow-hidden"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: partner.gradient,
                  }}
                />

                {/* Sparkle Effect */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles size={24} style={{ color: 'var(--electric-blue)' }} />
                </motion.div>

                {/* Logo */}
                <div className="flex items-center justify-center mb-6 h-32">
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Partner Info */}
                <div className="text-center relative z-10">
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'var(--deep-tech-blue)',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {partner.name}
                  </h3>
                  <p
                    style={{
                      color: 'var(--tech-gray)',
                      fontSize: '14px',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {partner.description}
                  </p>
                </div>

                {/* Border Gradient Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{
                    background: partner.gradient,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(39, 118, 234, 0.1), rgba(0, 178, 255, 0.1))',
              color: 'var(--codepulse-blue)',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: 'Cairo, sans-serif',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={20} />
            نبني شراكات طويلة الأمد مع عملائنا
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
