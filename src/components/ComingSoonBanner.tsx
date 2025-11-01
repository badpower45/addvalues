import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';
import { PageType } from '../App';

interface ComingSoonBannerProps {
  navigateToPage: (page: PageType) => void;
}

export function ComingSoonBanner({ navigateToPage }: ComingSoonBannerProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      />

      <motion.div
        className="absolute top-10 left-10 opacity-20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Sparkles size={100} color="white" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 opacity-20"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Star size={80} color="white" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 glass"
            style={{
              border: '2px solid rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles size={24} color="white" />
            </motion.div>
            <span className="text-white font-bold text-lg">مفاجأة قادمة</span>
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Star size={24} color="white" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="mb-6 text-white"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '700',
              fontFamily: 'Cairo, sans-serif',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            قريباً... انتظروا المفاجأة! 🎉
          </motion.h2>

          <motion.p
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: '600',
              opacity: '0.95',
              fontFamily: 'Cairo, sans-serif',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.95 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            تعاقد جديد مع عميل مميز
          </motion.p>

          <motion.p
            className="text-white mb-10 max-w-3xl mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              opacity: '0.9',
              fontFamily: 'Cairo, sans-serif',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            نحن متحمسون للإعلان عن شراكة جديدة مع عميل استثنائي على مشروع مبتكر! 
            المشروع قيد التنفيذ الآن بأعلى معايير الجودة والاحترافية. 
            ترقبوا الكشف عن التفاصيل قريباً...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigateToPage('portfolio')}
                size="lg"
                className="relative overflow-hidden group shadow-2xl"
                style={{
                  background: 'white',
                  color: '#764ba2',
                  fontFamily: 'Cairo, sans-serif',
                  padding: '24px 40px',
                  fontSize: '18px',
                  borderRadius: '16px',
                  fontWeight: '700',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  شاهد مشاريعنا القادمة
                  <motion.div
                    animate={{ 
                      x: [0, 5, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles size={20} />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
