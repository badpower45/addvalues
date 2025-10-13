import { motion } from 'motion/react';
import { Target, Award, Users, Rocket, Code2, Zap, Heart, TrendingUp, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageType } from '../App';

interface AboutPageProps {
  navigateToPage: (page: PageType) => void;
}

const values = [
  {
    icon: Target,
    title: 'الجودة أولاً',
    titleEn: 'Quality First',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع',
    color: '#2776EA',
  },
  {
    icon: Rocket,
    title: 'الابتكار المستمر',
    titleEn: 'Continuous Innovation',
    description: 'نواكب أحدث التقنيات والتطورات',
    color: '#00B2FF',
  },
  {
    icon: Heart,
    title: 'رضا العملاء',
    titleEn: 'Client Satisfaction',
    description: 'نجاحكم هو هدفنا الأساسي',
    color: '#10B981',
  },
  {
    icon: Shield,
    title: 'الشفافية',
    titleEn: 'Transparency',
    description: 'تواصل واضح في كل مرحلة',
    color: '#1A5490',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'التأسيس',
    description: 'بدأت CodePulse كفريق صغير من المطورين الشغوفين',
  },
  {
    year: '2020',
    title: '50+ مشروع',
    description: 'أكملنا أكثر من 50 مشروع ناجح لعملاء في مصر والخليج',
  },
  {
    year: '2021',
    title: 'التوسع',
    description: 'توسعنا لخدمة أسواق جديدة وزيادة حجم الفريق',
  },
  {
    year: '2022',
    title: '100+ عميل',
    description: 'وصلنا إلى 100+ عميل راضٍ عن خدماتنا',
  },
  {
    year: '2023',
    title: 'الريادة',
    description: 'أصبحنا من الشركات الرائدة في تطوير البرمجيات',
  },
  {
    year: '2024',
    title: 'النمو المستمر',
    description: '150+ مشروع و95% معدل رضا العملاء',
  },
];

const techStack = [
  'React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Laravel',
  'Python', 'Django', 'Flutter', 'React Native', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure',
];

const stats = [
  { number: '150+', label: 'مشروع ناجح', labelEn: 'Successful Projects' },
  { number: '100+', label: 'عميل راضٍ', labelEn: 'Happy Clients' },
  { number: '95%', label: 'معدل الرضا', labelEn: 'Satisfaction Rate' },
  { number: '5+', label: 'سنوات خبرة', labelEn: 'Years Experience' },
];

export function AboutPage({ navigateToPage }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-[#1A5490] via-[#2776EA] to-[#00B2FF] dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
      >
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--electric-blue), transparent)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
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
            >
              <Users size={20} className="animate-pulse" />
              <span>About Us</span>
            </motion.div>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              من نحن
            </h1>
            <p
              className="mb-4"
              style={{
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                fontWeight: '600',
                opacity: '0.95',
              }}
            >
              Your Digital Transformation Partner
            </p>
            <p
              className="max-w-3xl mx-auto opacity-90"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              نحن فريق من الخبراء المتخصصين في تطوير البرمجيات، ملتزمون بتقديم حلول تقنية مبتكرة تساعد الشركات على النمو والنجاح
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676275773827-f6554c1ef62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTk1MzU3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="CodePulse Team"
                  className="w-full h-[500px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 60%, rgba(39, 118, 234, 0.9) 100%)',
                  }}
                />
              </div>

              {/* Stats overlay */}
              <motion.div
                className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Award size={48} style={{ color: 'var(--codepulse-blue)' }} />
                  </motion.div>
                  <div>
                    <p
                      style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      #1
                    </p>
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        fontFamily: 'Cairo, sans-serif',
                        fontSize: '14px',
                      }}
                    >
                      في مصر والمنطقة
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  color: 'white',
                }}
              >
                <Target size={20} />
                <span>Our Mission</span>
              </motion.div>

              <h2
                className="mb-6"
                style={{
                  fontSize: 'clamp(32px, 4vw, 40px)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                نساعد الشركات على التحول الرقمي
              </h2>

              <p
                className="mb-6"
                style={{
                  color: 'var(--tech-gray)',
                  lineHeight: '1.9',
                  fontSize: '18px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                مهمتنا هي تمكين الشركات من تحقيق أهدافها من خلال تطوير حلول برمجية مبتكرة وفعالة. نؤمن بأن التكنولوجيا يجب أن تكون في خدمة النمو والتطور، ولذلك نعمل بشكل وثيق مع عملائنا لفهم احتياجاتهم وتقديم حلول مخصصة.
              </p>

              <p
                className="mb-8"
                style={{
                  color: 'var(--tech-gray)',
                  lineHeight: '1.9',
                  fontSize: '18px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                نحن ملتزمون بالجودة العالية، الابتكار المستمر، والشفافية في التعامل. كل مشروع نتعامل معه هو فرصة لبناء علاقة طويلة الأمد مع عملائنا.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToPage('contact')}
                  size="lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    color: 'white',
                    fontFamily: 'Cairo, sans-serif',
                  }}
                >
                  تواصل معنا
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              قيمنا الأساسية
            </h2>
            <p style={{ color: 'var(--tech-gray)', fontSize: '18px' }}>
              المبادئ التي نؤمن بها ونعمل على تحقيقها
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="text-center border-0 h-full"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: `${value.color}15`,
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon size={40} style={{ color: value.color }} />
                    </motion.div>

                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: '14px',
                        color: value.color,
                        fontWeight: '600',
                      }}
                    >
                      {value.titleEn}
                    </p>
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        lineHeight: '1.7',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section
        className="py-24 md:py-32"
        style={{
          background: 'linear-gradient(180deg, var(--light-gray) 0%, white 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                color: 'white',
              }}
            >
              <Clock size={20} />
              <span>Our Journey</span>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              رحلة النجاح
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
              style={{
                background: 'linear-gradient(180deg, var(--codepulse-blue), var(--electric-blue))',
              }}
            />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 lg:mb-24 ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                  }`}
                >
                  <motion.div
                    className="glass p-6 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="inline-block px-4 py-2 rounded-full mb-4"
                      style={{
                        background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: '700',
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.div>
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        lineHeight: '1.7',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 rounded-full -translate-x-1/2"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    boxShadow: '0 0 0 4px rgba(255,255,255,1)',
                  }}
                  whileHover={{ scale: 1.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                color: 'white',
              }}
            >
              <Code2 size={20} />
              <span>Tech Stack</span>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              التقنيات التي نستخدمها
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue)10, var(--electric-blue)10)',
                  border: '2px solid transparent',
                  backgroundClip: 'padding-box',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--deep-tech-blue)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  background: 'linear-gradient(135deg, var(--codepulse-blue)30, var(--electric-blue)30)',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <motion.p
                  style={{
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    fontWeight: '700',
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  {stat.number}
                </motion.p>
                <p
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Cairo, sans-serif',
                    opacity: '0.9',
                  }}
                >
                  {stat.label}
                </p>
                <p style={{ fontSize: '14px', opacity: '0.8' }}>
                  {stat.labelEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TrendingUp size={60} style={{ color: 'var(--codepulse-blue)' }} className="mx-auto mb-6" />
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(32px, 4vw, 40px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              هل أنت مستعد للانضمام إلينا؟
            </h2>
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{
                color: 'var(--tech-gray)',
                fontSize: '18px',
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              دعنا نساعدك في تحويل أفكارك إلى واقع رقمي
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigateToPage('contact')}
                size="lg"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  color: 'white',
                  fontFamily: 'Cairo, sans-serif',
                  padding: '24px 40px',
                  fontSize: '18px',
                }}
              >
                ابدأ مشروعك الآن
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}