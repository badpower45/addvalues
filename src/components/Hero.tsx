import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, Sparkles, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  navigateToPage: (page: PageType) => void;
}

export function Hero({ navigateToPage }: HeroProps) {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTk1MTEzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Software development team working together"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2776EA]/95 via-[#1A5490]/90 to-[#00B2FF]/85 dark:from-[#1e293b]/95 dark:via-[#0f172a]/90 dark:to-[#334155]/85"
        />
      </div>
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Floating Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--electric-blue), transparent)',
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--electric-blue), transparent)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{ y: [0, -30, 0], rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Code2 size={40} color="rgba(255,255,255,0.2)" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4"
          animate={{ y: [0, 30, 0], rotate: [0, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Rocket size={50} color="rgba(255,255,255,0.2)" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles size={35} color="rgba(255,255,255,0.2)" />
        </motion.div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(var(--electric-blue) 1px, transparent 1px), linear-gradient(90deg, var(--electric-blue) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-0 z-20">
        <div className="text-center text-white">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 glass"
            style={{ border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <Sparkles size={20} className="animate-pulse" />
            <span className="font-medium">Your Digital Transformation Partner</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: '500',
              lineHeight: '1.2',
              fontFamily: 'var(--font-arabic-heading)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              حول أفكارك التجارية
            </motion.span>
            <br />
            <span
              className="inline-block px-6 py-2 rounded-2xl mt-2"
              style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              إلى حلول رقمية متطورة
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-4"
            style={{
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: '400',
              opacity: '0.95',
              background: 'linear-gradient(90deg, #fff, var(--electric-blue), #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom Software Development for Forward-Thinking Businesses
          </motion.p>

          {/* Value Proposition */}
          <motion.p
            className="max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{
              fontSize: '20px',
              opacity: '0.9',
              fontFamily: 'Cairo, sans-serif',
              lineHeight: '1.8',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            نساعد الشركات على النمو والتطور من خلال تطوير مواقع الويب والتطبيقات والأنظمة المخصصة باستخدام أحدث التقنيات
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigateToPage('contact')}
                size="lg"
                className="group relative overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--codepulse-blue)',
                  fontFamily: 'Cairo, sans-serif',
                  padding: '28px 40px',
                  fontSize: '20px',
                  borderRadius: '16px',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  ابدأ مشروعك الآن
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--electric-blue), var(--codepulse-blue))',
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigateToPage('portfolio')}
                size="lg"
                className="glass group"
                style={{
                  borderColor: 'white',
                  color: 'white',
                  fontFamily: 'Cairo, sans-serif',
                  padding: '28px 40px',
                  fontSize: '20px',
                  borderRadius: '16px',
                  border: '2px solid rgba(255,255,255,0.5)',
                }}
              >
                <Play className="ml-2 group-hover:scale-125 transition-transform" size={24} />
                شاهد أعمالنا
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: '150+', label: 'مشروع ناجح' },
              { number: '95%', label: 'رضا العملاء' },
              { number: '5+', label: 'سنوات خبرة' },
              { number: '24/7', label: 'دعم فني' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  style={{
                    fontSize: '32px',
                    fontWeight: '500',
                    background: 'linear-gradient(135deg, #fff, var(--electric-blue))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                >
                  {stat.number}
                </motion.div>
                <div style={{ opacity: '0.9', fontFamily: 'Cairo, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
