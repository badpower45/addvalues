import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Instagram, Heart, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { PageType } from '../App';

interface FooterProps {
  navigateToPage: (page: PageType) => void;
}

export function Footer({ navigateToPage }: FooterProps) {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-br from-[#1A5490] via-[#2776EA] to-[#00B2FF] dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 text-white"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Zap size={24} />
              </div>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: '500',
                }}
              >
                AddValues
              </h3>
            </motion.div>
            <p
              className="mb-6 opacity-90 leading-relaxed"
              style={{
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              شريكك الموثوق في التحول الرقمي وتطوير الحلول البرمجية المبتكرة
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'خدماتنا', page: 'services' as PageType },
                { label: 'أعمالنا', page: 'portfolio' as PageType },
                { label: 'من نحن', page: 'about' as PageType },
                { label: 'اتصل بنا', page: 'contact' as PageType },
              ].map((link, index) => (
                <motion.li
                  key={link.page}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <motion.button
                    onClick={() => navigateToPage(link.page)}
                    className="opacity-90 hover:opacity-100 transition-all duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
                    />
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              قانوني
            </h4>
            <ul className="space-y-3">
              {['سياسة الخصوصية', 'شروط الاستخدام'].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.button
                    className="opacity-90 hover:opacity-100 transition-all duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
                    />
                    {link}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: 'القاهرة، مصر', font: 'Cairo' },
                { icon: Phone, text: '+20 xxx xxx xxxx', font: 'Inter' },
                { icon: Mail, text: 'info@addvalues.tech', font: 'Inter' },
                { icon: Clock, text: 'الأحد - الخميس\n9 صباحاً - 6 مساءً', font: 'Cairo' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 opacity-90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={20} className="mt-1 flex-shrink-0" />
                  </motion.div>
                  <span
                    style={{
                      fontFamily: `${item.font}, sans-serif`,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Media Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: Linkedin, label: 'LinkedIn', color: '#0077B5' },
              { icon: Facebook, label: 'Facebook', color: '#1877F2' },
              { icon: Twitter, label: 'Twitter', color: '#1DA1F2' },
              { icon: Instagram, label: 'Instagram', color: '#E4405F' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden group"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
                aria-label={social.label}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
              >
                <social.icon size={20} className="relative z-10" />
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: social.color }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Privacy Links */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p
              className="opacity-90 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-arabic-body)' }}
            >
              © 2025 AddValues. جميع الحقوق محفوظة
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
            </p>
            <div className="flex items-center gap-4 text-sm opacity-80">
              <a
                href="#privacy"
                className="hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'var(--font-arabic-body)' }}
              >
                سياسة الخصوصية | Privacy Policy
              </a>
              <span>•</span>
              <a
                href="#terms"
                className="hover:opacity-100 transition-opacity"
                style={{ fontFamily: 'var(--font-arabic-body)' }}
              >
                الشروط والأحكام | Terms & Conditions
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </footer>
  );
}
