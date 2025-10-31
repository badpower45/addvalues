import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Zap, Eye, X, Layout, Filter, Camera, Plane } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { PageType } from '../App';
import dakanLogo from '../assets/portfolio/dakan-logo.png';
import oldiesLogo from '../assets/portfolio/oldies-logo.png';
import gedoAzizLogo from '../assets/portfolio/gedo-aziz-logo.png';
import egySafariLogo from '../assets/portfolio/egy-safari-logo.png';
import khaledElshamyPhoto from '../assets/portfolio/khaled-elshamy-photo.png';

interface PortfolioPageProps {
  navigateToPage: (page: PageType) => void;
}

const projects = [
  {
    id: 1,
    title: 'نظام إدارة الحضور والرواتب الذكي - دكان',
    titleEn: 'Smart Attendance & Payroll System - Dakan',
    category: 'webapp',
    description: 'نظام ذكي لإدارة الحضور والانصراف بتقنية Geofencing، متابعة فورية للموظفين، وحساب آلي للرواتب',
    longDescription: 'نظام متطور لإدارة حضور وانصراف الموظفين تم تطويره خصيصاً لشركة دكان. يعتمد النظام على تقنية Geofencing المتقدمة للتحقق التلقائي من موقع الموظف عند تسجيل الحضور والانصراف، مما يضمن دقة البيانات. يتضمن النظام لوحة تحكم مباشرة (Live Monitoring Dashboard) لمتابعة حالة الموظفين في الوقت الفعلي، نظام إدارة صلاحيات احترافي بثلاث مستويات (Super Admin للمالك، Restaurant Manager للمدير، HR/Payroll Manager للمحاسب)، تقارير تفصيلية لساعات العمل والحضور، وحساب تلقائي دقيق للرواتب بناءً على الساعات الفعلية.',
    client: 'شركة دكان',
    duration: '5 أشهر',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing API', 'RBAC System', 'Real-time Dashboard'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
    icon: Layout,
    logo: dakanLogo,
    results: [
      'دقة 100% في حساب الرواتب',
      'توفير 40% من وقت الإدارة',
      'متابعة فورية للحضور والانصراف',
      'تقارير تفصيلية آلية',
    ],
  },
  {
    id: 2,
    title: 'نظام إدارة الحضور والرواتب الذكي - Oldies',
    titleEn: 'Smart Attendance & Payroll System - Oldies',
    category: 'webapp',
    description: 'نظام ذكي لإدارة الحضور والانصراف بتقنية Geofencing، متابعة فورية للموظفين، وحساب آلي للرواتب',
    longDescription: 'نظام متطور لإدارة حضور وانصراف الموظفين تم تطويره خصيصاً لشركة Oldies. يعتمد النظام على تقنية Geofencing المتقدمة للتحقق التلقائي من موقع الموظف عند تسجيل الحضور والانصراف، مما يضمن دقة البيانات. يتضمن النظام لوحة تحكم مباشرة (Live Monitoring Dashboard) لمتابعة حالة الموظفين في الوقت الفعلي، نظام إدارة صلاحيات احترافي بثلاث مستويات (Super Admin للمالك، Restaurant Manager للمدير، HR/Payroll Manager للمحاسب)، تقارير تفصيلية لساعات العمل والحضور، وحساب تلقائي دقيق للرواتب بناءً على الساعات الفعلية.',
    client: 'شركة Oldies',
    duration: '5 أشهر',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing API', 'RBAC System', 'Real-time Dashboard'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
    icon: Layout,
    logo: oldiesLogo,
    results: [
      'دقة 100% في حساب الرواتب',
      'توفير 40% من وقت الإدارة',
      'متابعة فورية للحضور والانصراف',
      'تقارير تفصيلية آلية',
    ],
  },
  {
    id: 3,
    title: 'نظام إدارة الحضور والرواتب الذكي - جدو عزيز',
    titleEn: 'Smart Attendance & Payroll System - Gedo Aziz',
    category: 'webapp',
    description: 'نظام ذكي لإدارة الحضور والانصراف بتقنية Geofencing، متابعة فورية للموظفين، وحساب آلي للرواتب',
    longDescription: 'نظام متطور لإدارة حضور وانصراف الموظفين تم تطويره خصيصاً لشركة جدو عزيز. يعتمد النظام على تقنية Geofencing المتقدمة للتحقق التلقائي من موقع الموظف عند تسجيل الحضور والانصراف، مما يضمن دقة البيانات. يتضمن النظام لوحة تحكم مباشرة (Live Monitoring Dashboard) لمتابعة حالة الموظفين في الوقت الفعلي، نظام إدارة صلاحيات احترافي بثلاث مستويات (Super Admin للمالك، Restaurant Manager للمدير، HR/Payroll Manager للمحاسب)، تقارير تفصيلية لساعات العمل والحضور، وحساب تلقائي دقيق للرواتب بناءً على الساعات الفعلية.',
    client: 'شركة جدو عزيز',
    duration: '5 أشهر',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing API', 'RBAC System', 'Real-time Dashboard'],
    gradient: 'linear-gradient(135deg, #00B2FF, #10B981)',
    icon: Layout,
    logo: gedoAzizLogo,
    results: [
      'دقة 100% في حساب الرواتب',
      'توفير 40% من وقت الإدارة',
      'متابعة فورية للحضور والانصراف',
      'تقارير تفصيلية آلية',
    ],
  },
  {
    id: 4,
    title: 'تصميم موقع وتطبيق احترافي - Egy Safari',
    titleEn: 'Professional Website & App Design - Egy Safari',
    category: 'design',
    description: 'تصميم كامل لموقع وتطبيق احترافي لواحدة من أكبر شركات السياحة في بورسعيد',
    longDescription: 'قمنا بتصميم موقع إلكتروني وتطبيق احترافي متكامل لشركة Egy Safari، إحدى أكبر وأعرق شركات السياحة في بورسعيد. يتميز المشروع بتصميم عصري يعكس روح السياحة المصرية الأصيلة، مع واجهات مستخدم جذابة وسهلة الاستخدام. تم تطوير نظام متكامل لعرض الرحلات السياحية، الحجوزات، ومعرض الصور للأماكن السياحية. بدأنا مع الشركة عقداً طويل الأمد لتطوير موقع وتطبيق كامل بأعلى معايير البرمجة والتصميم، مما يعكس ثقة العملاء في جودة عملنا واحترافيتنا.',
    client: 'Egy Safari - شركة سياحة في بورسعيد',
    duration: 'مستمر',
    technologies: ['Website Design', 'Mobile App Design', 'UI/UX Design', 'Tourism Platform', 'Booking System'],
    gradient: 'linear-gradient(135deg, #FF6B35, #F7931E)',
    icon: Plane,
    logo: egySafariLogo,
    link: 'http://egy-safary.odoo.com/',
    results: [
      'تصميم عصري يعكس الهوية السياحية',
      'واجهة مستخدم سهلة وجذابة',
      'عقد طويل الأمد للتطوير',
      'ثقة من أكبر شركات السياحة',
    ],
  },
  {
    id: 5,
    title: 'موقع تصوير احترافي - خالد الشامي',
    titleEn: 'Professional Photography Portfolio - Khaled Elshamy',
    category: 'portfolio',
    description: 'موقع شخصي احترافي لعرض أعمال التصوير الفوتوغرافي بتصميم جذاب ومعرض تفاعلي',
    longDescription: 'طورنا موقعاً إلكترونياً احترافياً للمصور خالد الشامي لعرض أعماله الفوتوغرافية المميزة. يتميز الموقع بتصميم عصري وأنيق يبرز جمال الصور وجودتها العالية، مع معرض تفاعلي متقدم يسمح للزوار بمشاهدة الأعمال بطريقة احترافية. تم تصميم الموقع ليكون متجاوباً تماماً مع جميع الأجهزة، مع تحسين سرعة التحميل للصور عالية الجودة. الموقع يعكس الطابع الفني والاحترافي للمصور ويساعد في عرض أعماله بشكل مميز.',
    client: 'خالد الشامي - مصور فوتوغرافي',
    duration: '3 أشهر',
    technologies: ['Portfolio Website', 'Photography Gallery', 'Responsive Design', 'Image Optimization', 'Modern UI'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: Camera,
    logo: khaledElshamyPhoto,
    link: 'https://deluxe-monstera-4313af.netlify.app/',
    instagram: 'https://www.instagram.com/khaledelshamy.360/',
    results: [
      'معرض تفاعلي احترافي للأعمال',
      'تصميم متجاوب على جميع الأجهزة',
      'تحسين عرض الصور عالية الجودة',
      'هوية بصرية مميزة للمصور',
    ],
  },
];

const categories = [
  { id: 'all', label: 'الكل', labelEn: 'All' },
  { id: 'webapp', label: 'تطبيقات ويب', labelEn: 'Web Apps' },
  { id: 'design', label: 'تصميم', labelEn: 'Design' },
  { id: 'portfolio', label: 'معارض أعمال', labelEn: 'Portfolios' },
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
                      {/* Company Logo - Full Image */}
                      <motion.div
                        className="relative h-80 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={project.logo} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay on Hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
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