import { motion } from 'motion/react';
import { Sparkles, Rocket, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import type { PageType } from '../App';

interface FreeMVPBannerProps {
  navigateToPage: (page: PageType) => void;
}

export function FreeMVPBanner({ navigateToPage }: FreeMVPBannerProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--codepulse-blue)] via-[var(--deep-tech-blue)] to-[var(--electric-blue)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">عرض حصري لفترة محدودة</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-white mb-6"
          >
            <span className="block mb-2 text-white/90">متركّزش على الأعمال السابقة</span>
            <span className="block bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
              جرّب بنفسك مجاناً
            </span>
            <span className="block mt-2 text-white/90">واتفرّج على الـ MVP بتاعك!</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            أول استشارة مجانية بالكامل! احنا مش بس بنتكلم عن الخبرة، احنا بنديك فرصة تشوف بنفسك
            قدراتنا التقنية. هنبني معاك نسخة أولية (MVP) من فكرتك بدون أي تكلفة.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => navigateToPage('mvp' as PageType)}
              size="lg"
              className="group bg-white text-[var(--codepulse-blue)] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-6 h-auto"
            >
              <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-[-4px] transition-transform" />
              <span>اعرف أكتر عن عرض الـ MVP المجاني</span>
            </Button>

            <Button
              onClick={() => navigateToPage('contact')}
              size="lg"
              variant="outline"
              className="group bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 px-8 py-6 h-auto"
            >
              <span>ابدأ الاستشارة المجانية الآن</span>
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-[4px] transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>بدون التزام مادي</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>جلسة استشارية كاملة</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>MVP حقيقي قابل للعمل</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg-primary)] to-transparent"></div>
    </section>
  );
}
