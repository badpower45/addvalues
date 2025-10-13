import { motion } from 'motion/react';
import { Code, Layout, ShoppingCart, Smartphone, Network, Lightbulb, Check, Zap, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PageType } from '../App';

interface ServicesPageProps {
  navigateToPage: (page: PageType) => void;
}

const services = [
  {
    icon: Code,
    titleAr: 'تطوير المواقع المخصصة',
    titleEn: 'Custom Website Development',
    description: 'نصمم ونطور مواقع ويب احترافية مخصصة تناسب احتياجات عملك بشكل مثالي. مواقعنا سريعة، آمنة، وسهلة الاستخدام.',
    features: [
      'تصميم UI/UX احترافي',
      'تطوير متجاوب لجميع الأجهزة',
      'تحسين محركات البحث (SEO)',
      'لوحة تحكم لإدارة المحتوى',
      'تكامل مع أنظمة الدفع',
      'أمان متقدم وحماية البيانات',
      'سرعة تحميل عالية',
      'تقارير وتحليلات مفصلة',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'WordPress', 'Laravel'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
    price: 'تبدأ من 2,500$',
  },
  {
    icon: Layout,
    titleAr: 'تطبيقات الويب المتقدمة',
    titleEn: 'Advanced Web Applications',
    description: 'نبني أنظمة وتطبيقات ويب معقدة لإدارة وأتمتة العمليات التجارية، مع واجهات مستخدم حديثة وأداء عالي.',
    features: [
      'أنظمة إدارة متكاملة (ERP/CRM)',
      'لوحات تحكم تفاعلية',
      'إدارة قواعد البيانات الكبيرة',
      'أتمتة العمليات التجارية',
      'تقارير وتحليلات في الوقت الفعلي',
      'صلاحيات متعددة المستويات',
      'واجهات برمجة API متقدمة',
      'نسخ احتياطي تلقائي',
    ],
    technologies: ['Node.js', 'Python', 'Laravel', 'Django', 'PostgreSQL', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
    price: 'تبدأ من 5,000$',
  },
  {
    icon: ShoppingCart,
    titleAr: 'حلول التجارة الإلكترونية',
    titleEn: 'E-commerce Solutions',
    description: 'متاجر إلكترونية احترافية مع كل ما تحتاجه لبدء وإدارة تجارتك الإلكترونية بنجاح.',
    features: [
      'واجهة متجر احترافية',
      'إدارة المنتجات والمخزون',
      'بوابات دفع متعددة',
      'نظام الشحن والتوصيل',
      'إدارة الطلبات والفواتير',
      'نظام العروض والكوبونات',
      'تقييمات ومراجعات المنتجات',
      'تقارير المبيعات والإحصائيات',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Stripe', 'PayPal'],
    gradient: 'linear-gradient(135deg, #00B2FF, #2776EA)',
    price: 'تبدأ من 3,500$',
  },
  {
    icon: Smartphone,
    titleAr: 'تطبيقات الهواتف الذكية',
    titleEn: 'Mobile Applications',
    description: 'تطبيقات موبايل احترافية للأندرويد والآيفون بتصميم عصري وتجربة مستخدم استثنائية.',
    features: [
      'تطبيقات Native للأندرويد والآيفون',
      'تطبيقات هجينة متعددة المنصات',
      'تصميم واجهات مستخدم حديثة',
      'تكامل مع الخدمات السحابية',
      'إشعارات فورية (Push Notifications)',
      'الدفع داخل التطبيق',
      'خرائط وموقع جغرافي',
      'دعم عدة لغات',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    gradient: 'linear-gradient(135deg, #2776EA, #1A5490)',
    price: 'تبدأ من 6,000$',
  },
  {
    icon: Network,
    titleAr: 'ربط وتكامل الأنظمة',
    titleEn: 'System Integration & API',
    description: 'نربط أنظمتك الحالية ونبني واجهات برمجية لتكامل سلس بين جميع منصاتك التقنية.',
    features: [
      'تصميم وبناء REST APIs',
      'تكامل مع أنظمة خارجية',
      'مزامنة البيانات تلقائياً',
      'أتمتة سير العمل',
      'تكامل مع خدمات الدفع',
      'ربط CRM وERP',
      'وثائق API شاملة',
      'اختبار وأمان متقدم',
    ],
    technologies: ['REST API', 'GraphQL', 'Webhooks', 'Microservices', 'Docker', 'Kubernetes'],
    gradient: 'linear-gradient(135deg, #00B2FF, #1A5490)',
    price: 'تبدأ من 4,000$',
  },
  {
    icon: Lightbulb,
    titleAr: 'الاستشارات التقنية',
    titleEn: 'Technical Consulting',
    description: 'استشارات متخصصة لمساعدتك في اتخاذ القرارات التقنية الصحيحة وتخطيط استراتيجية التحول الرقمي.',
    features: [
      'تحليل المتطلبات التقنية',
      'اختيار التقنيات المناسبة',
      'تخطيط البنية التحتية',
      'استراتيجية التحول الرقمي',
      'مراجعة الكود والأداء',
      'تدريب الفرق التقنية',
      'أفضل ممارسات الأمان',
      'تقييم وتحسين الأداء',
    ],
    technologies: ['Consultation', 'Code Review', 'Architecture', 'DevOps', 'Security', 'Training'],
    gradient: 'linear-gradient(135deg, #1A5490, #00B2FF)',
    price: 'تبدأ من 1,500$',
  },
];

export function ServicesPage({ navigateToPage }: ServicesPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--deep-tech-blue) 0%, var(--codepulse-blue) 50%, var(--electric-blue) 100%)',
        }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20"
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

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 glass"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap size={20} className="animate-pulse" />
              <span>Our Services</span>
            </motion.div>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              خدماتنا المتخصصة
            </h1>
            <p
              className="mb-4"
              style={{
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                fontWeight: '600',
                opacity: '0.95',
              }}
            >
              Complete Software Development Services
            </p>
            <p
              className="max-w-3xl mx-auto opacity-90"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              نقدم مجموعة شاملة من خدمات التطوير البرمجي بأعلى معايير الجودة لتحقيق أهدافك الرقمية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="group border-0 h-full overflow-hidden"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent className="p-0">
                    {/* Service Header with Gradient */}
                    <motion.div
                      className="p-8 relative overflow-hidden"
                      style={{
                        background: service.gradient,
                        color: 'white',
                      }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      />

                      <div className="relative z-10">
                        <motion.div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                          }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <service.icon size={40} />
                        </motion.div>

                        <h3
                          className="mb-2"
                          style={{
                            fontSize: '28px',
                            fontWeight: '700',
                            fontFamily: 'Cairo, sans-serif',
                          }}
                        >
                          {service.titleAr}
                        </h3>
                        <p
                          className="mb-4"
                          style={{
                            fontSize: '16px',
                            opacity: '0.9',
                          }}
                        >
                          {service.titleEn}
                        </p>
                        <p
                          style={{
                            lineHeight: '1.7',
                            fontFamily: 'Cairo, sans-serif',
                            opacity: '0.95',
                          }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Service Details */}
                    <div className="p-8 bg-white">
                      {/* Features */}
                      <h4
                        className="mb-4"
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: 'var(--deep-tech-blue)',
                          fontFamily: 'Cairo, sans-serif',
                        }}
                      >
                        الميزات الرئيسية:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <motion.div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: service.gradient }}
                              whileHover={{ scale: 1.3, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Check size={12} color="white" />
                            </motion.div>
                            <span
                              style={{
                                fontSize: '14px',
                                color: 'var(--tech-gray)',
                                fontFamily: 'Cairo, sans-serif',
                              }}
                            >
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <h4
                        className="mb-3"
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: 'var(--deep-tech-blue)',
                          fontFamily: 'Cairo, sans-serif',
                        }}
                      >
                        التقنيات المستخدمة:
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-4 py-2 rounded-full"
                            style={{
                              background: `${service.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}15`,
                              color: 'var(--deep-tech-blue)',
                              fontSize: '13px',
                              fontWeight: '600',
                            }}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: `${service.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}30`,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div>
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'var(--tech-gray)',
                              opacity: '0.7',
                              fontFamily: 'Cairo, sans-serif',
                            }}
                          >
                            الأسعار
                          </p>
                          <p
                            style={{
                              fontSize: '24px',
                              fontWeight: '700',
                              background: service.gradient,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              fontFamily: 'Cairo, sans-serif',
                            }}
                          >
                            {service.price}
                          </p>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={() => navigateToPage('contact')}
                            className="relative overflow-hidden group"
                            style={{
                              background: service.gradient,
                              color: 'white',
                              fontFamily: 'Cairo, sans-serif',
                            }}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              احصل على عرض
                              <ArrowRight size={16} />
                            </span>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star size={60} className="mx-auto mb-6 animate-pulse" />
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              جاهز لبدء مشروعك؟
            </h2>
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                opacity: '0.95',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              احصل على استشارة مجانية وعرض سعر مفصل خلال 24 ساعة
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigateToPage('contact')}
                size="lg"
                className="shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--codepulse-blue)',
                  fontFamily: 'Cairo, sans-serif',
                  padding: '28px 40px',
                  fontSize: '20px',
                }}
              >
                <span className="flex items-center gap-2">
                  تواصل معنا الآن
                  <ArrowRight size={24} />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}