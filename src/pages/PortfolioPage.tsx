import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Code2, Smartphone, ShoppingBag, Zap, Eye, X, Layout, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { PageType } from '../App';

interface PortfolioPageProps {
  navigateToPage: (page: PageType) => void;
}

const projects = [
  {
    id: 1,
    title: 'منصة التجارة الإلكترونية الذكية',
    titleEn: 'Smart E-commerce Platform',
    category: 'ecommerce',
    description: 'متجر إلكتروني متكامل مع نظام إدارة متقدم وتكامل مع أنظمة الدفع المحلية والعالمية',
    longDescription: 'طورنا منصة تجارة إلكترونية شاملة لشركة رائدة في مصر، تتضمن واجهة متجر عصرية، نظام إدارة كامل للمنتجات والمخزون، تكامل مع بوابات الدفع المتعددة، وتطبيق جوال مصاحب. النظام يدعم آلاف المنتجات ويتعامل مع أكثر من 10,000 طلب شهرياً بكفاءة عالية.',
    client: 'شركة تجارية كبرى',
    duration: '6 أشهر',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
    icon: ShoppingBag,
    results: [
      'زيادة المبيعات بنسبة 300%',
      'خفض تكلفة التشغيل بنسبة 40%',
      'معدل رضا العملاء 96%',
    ],
  },
  {
    id: 2,
    title: 'نظام إدارة المشاريع المتقدم',
    titleEn: 'Advanced Project Management System',
    category: 'webapp',
    description: 'نظام شامل لإدارة المشاريع والفرق مع ميزات متقدمة للتخطيط والتتبع',
    longDescription: 'نظام متكامل لإدارة المشاريع يتضمن لوحات تحكم تفاعلية، إدارة المهام والمواعيد، تتبع الوقت والميزانية، تقارير مفصلة، وتكامل مع أدوات العمل الأخرى. يخدم النظام أكثر من 500 مستخدم في 50 شركة مختلفة.',
    client: 'شركة استشارات',
    duration: '8 أشهر',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
    icon: Layout,
    results: [
      'تحسين الإنتاجية بنسبة 60%',
      'توفير 30% من الوقت',
      '500+ مستخدم نشط',
    ],
  },
  {
    id: 3,
    title: 'تطبيق توصيل الطعام',
    titleEn: 'Food Delivery App',
    category: 'mobile',
    description: 'تطبيق موبايل متكامل للأندرويد والآيفون مع نظام طلبات وتتبع فوري',
    longDescription: 'تطبيق توصيل طعام شامل يربط بين المطاعم والعملاء، مع نظام طلبات سهل، تتبع فوري للطلب، تكامل مع نظام الدفع الإلكتروني، وإدارة المطاعم والسائقين. التطبيق حقق أكثر من 50,000 تحميل في أول 3 أشهر.',
    client: 'شركة توصيل',
    duration: '7 أشهر',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'Google Maps', 'Stripe'],
    gradient: 'linear-gradient(135deg, #00B2FF, #10B981)',
    icon: Smartphone,
    results: [
      '50,000+ تحميل',
      'تقييم 4.8/5',
      '1000+ طلب يومي',
    ],
  },
  {
    id: 4,
    title: 'موقع عقاري تفاعلي',
    titleEn: 'Interactive Real Estate Website',
    category: 'website',
    description: 'موقع عقاري مع بحث متقدم وجولات افتراضية 360',
    longDescription: 'منصة عقارية متكاملة تعرض العقارات بطريقة تفاعلية مع صور عالية الجودة، جولات افتراضية 360 درجة، بحث متقدم بخرائط تفاعلية، مقارنة العقارات، وحاسبة القروض العقارية. الموقع زاد من التفاعل بنسبة 250%.',
    client: 'شركة عقارات',
    duration: '4 أشهر',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS S3'],
    gradient: 'linear-gradient(135deg, #2776EA, #1A5490)',
    icon: Code2,
    results: [
      'زيادة التفاعل 250%',
      'معدل تحويل 15%',
      '200+ عقار مدرج',
    ],
  },
  {
    id: 5,
    title: 'تطبيق تعليمي ذكي',
    titleEn: 'Smart Learning App',
    category: 'mobile',
    description: 'منصة تعليمية تفاعلية مع دروس فيديو واختبارات ذكية',
    longDescription: 'تطبيق تعليمي شامل يقدم دروس فيديو عالية الجودة، اختبارات تفاعلية، متابعة التقدم، شهادات، ونظام تواصل بين الطلاب والمعلمين. التطبيق يخدم أكثر من 20,000 طالب ويقدم مئات الدروس في مختلف المجالات.',
    client: 'منصة تعليمية',
    duration: '9 أشهر',
    technologies: ['React Native', 'Python', 'Django', 'PostgreSQL', 'Vimeo'],
    gradient: 'linear-gradient(135deg, #10B981, #00B2FF)',
    icon: Code2,
    results: [
      '20,000+ طالب',
      '500+ درس',
      'معدل إتمام 85%',
    ],
  },
  {
    id: 6,
    title: 'نظام حجز المواعيد الطبية',
    titleEn: 'Medical Appointment System',
    category: 'webapp',
    description: 'نظام إلكتروني لحجز المواعيد مع الأطباء والعيادات',
    longDescription: 'نظام متكامل لحجز المواعيد الطبية يربط بين المرضى والأطباء، مع إدارة المواعيد، التذكيرات التلقائية، السجلات الطبية الإلكترونية، والدفع الإلكتروني. النظام يخدم 50+ عيادة و1000+ طبيب.',
    client: 'مجموعة طبية',
    duration: '6 أشهر',
    technologies: ['Angular', 'Laravel', 'MySQL', 'Twilio', 'AWS'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
    icon: Layout,
    results: [
      '50+ عيادة',
      '1000+ طبيب',
      '5000+ حجز شهري',
    ],
  },
];

const categories = [
  { id: 'all', label: 'الكل', labelEn: 'All' },
  { id: 'website', label: 'مواقع', labelEn: 'Websites' },
  { id: 'webapp', label: 'تطبيقات ويب', labelEn: 'Web Apps' },
  { id: 'mobile', label: 'تطبيقات جوال', labelEn: 'Mobile Apps' },
  { id: 'ecommerce', label: 'تجارة إلكترونية', labelEn: 'E-commerce' },
];

export function PortfolioPage({ navigateToPage }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--deep-tech-blue) 0%, var(--codepulse-blue) 50%, var(--electric-blue) 100%)',
        }}
      >
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
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
              <Eye size={20} className="animate-pulse" />
              <span>Our Portfolio</span>
            </motion.div>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              أعمالنا المميزة
            </h1>
            <p
              className="mb-4"
              style={{
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                fontWeight: '600',
                opacity: '0.95',
              }}
            >
              Successful Projects & Happy Clients
            </p>
            <p
              className="max-w-3xl mx-auto opacity-90"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              استعرض مجموعة من مشاريعنا الناجحة التي ساعدت عملاءنا على تحقيق أهدافهم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Filter size={20} style={{ color: 'var(--codepulse-blue)' }} />
            <span
              style={{
                color: 'var(--tech-gray)',
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '600',
              }}
            >
              تصفية حسب:
            </span>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6 py-3 rounded-full transition-all duration-300"
                style={{
                  background:
                    selectedCategory === category.id
                      ? 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))'
                      : 'white',
                  color: selectedCategory === category.id ? 'white' : 'var(--tech-gray)',
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: '600',
                  boxShadow: selectedCategory === category.id
                    ? '0 10px 30px rgba(39, 118, 234, 0.3)'
                    : '0 2px 10px rgba(0,0,0,0.1)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block">{category.label}</span>
                <span className="block text-xs opacity-80">{category.labelEn}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={index === 1 || index === 4 ? 'md:mt-12' : ''}
                >
                  <Card
                    className="group border-0 overflow-hidden h-full cursor-pointer"
                    style={{
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardContent className="p-0">
                      {/* Project Visual */}
                      <motion.div
                        className="relative h-72 overflow-hidden"
                        style={{
                          background: project.gradient,
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Animated pattern */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />

                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            <project.icon size={100} color="rgba(255,255,255,0.4)" strokeWidth={1.5} />
                          </motion.div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                          className="absolute top-10 left-10"
                          animate={{
                            y: [0, -15, 0],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Code2 size={32} color="rgba(255,255,255,0.5)" />
                        </motion.div>
                        <motion.div
                          className="absolute bottom-10 right-10"
                          animate={{
                            y: [0, 15, 0],
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Zap size={28} color="rgba(255,255,255,0.5)" />
                        </motion.div>

                        {/* Hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-black/70 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-2 border-white text-white hover:bg-white hover:text-[var(--codepulse-blue)]"
                            >
                              <ExternalLink className="ml-2" size={20} />
                              التفاصيل
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3
                          className="mb-2"
                          style={{
                            fontSize: '22px',
                            fontWeight: '700',
                            color: 'var(--deep-tech-blue)',
                            fontFamily: 'Cairo, sans-serif',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="mb-1"
                          style={{
                            fontSize: '14px',
                            color: 'var(--electric-blue)',
                            fontWeight: '600',
                          }}
                        >
                          {project.titleEn}
                        </p>
                        <p
                          className="mb-4"
                          style={{
                            color: 'var(--tech-gray)',
                            lineHeight: '1.7',
                            fontFamily: 'Cairo, sans-serif',
                            fontSize: '15px',
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full"
                              style={{
                                background: `${project.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}15`,
                                color: 'var(--deep-tech-blue)',
                                fontSize: '12px',
                                fontWeight: '600',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span
                              className="px-3 py-1 rounded-full"
                              style={{
                                background: `${project.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}15`,
                                color: 'var(--deep-tech-blue)',
                                fontSize: '12px',
                                fontWeight: '600',
                              }}
                            >
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              
              {/* Header */}
              <div
                className="relative p-12 -m-6 mb-6 rounded-t-lg"
                style={{
                  background: selectedProject.gradient,
                  color: 'white',
                }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>

                <motion.div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <selectedProject.icon size={50} />
                </motion.div>

                <h2
                  className="mb-2"
                  style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    fontFamily: 'Cairo, sans-serif',
                  }}
                >
                  {selectedProject.title}
                </h2>
                <p style={{ fontSize: '18px', opacity: '0.9' }}>
                  {selectedProject.titleEn}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--deep-tech-blue)',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    عن المشروع:
                  </h3>
                  <p
                    style={{
                      color: 'var(--tech-gray)',
                      lineHeight: '1.9',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'var(--light-gray)' }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--tech-gray)',
                        opacity: '0.7',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      العميل
                    </p>
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {selectedProject.client}
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'var(--light-gray)' }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--tech-gray)',
                        opacity: '0.7',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      المدة
                    </p>
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {selectedProject.duration}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--deep-tech-blue)',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    التقنيات المستخدمة:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-4 py-2 rounded-full"
                        style={{
                          background: `${selectedProject.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}15`,
                          color: 'var(--deep-tech-blue)',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: `${selectedProject.gradient.match(/#[a-fA-F0-9]{6}/)?.[0]}30`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--deep-tech-blue)',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    النتائج المحققة:
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3"
                        style={{
                          color: 'var(--tech-gray)',
                          fontFamily: 'Cairo, sans-serif',
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: selectedProject.gradient,
                          }}
                        />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setSelectedProject(null);
                      navigateToPage('contact');
                    }}
                    size="lg"
                    className="w-full"
                    style={{
                      background: selectedProject.gradient,
                      color: 'white',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    ابدأ مشروعك المشابه
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

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
            <Zap size={60} className="mx-auto mb-6 animate-pulse" />
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              مستعد لبدء مشروعك؟
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
              دعنا نحول فكرتك إلى مشروع ناجح مثل هذه المشاريع
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
                احصل على استشارة مجانية
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}