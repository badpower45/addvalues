import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Zap, Eye, X, Layout, Filter, Camera, Plane, Coffee, Vote, Sparkles, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { PageType } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import dakanLogo from '../assets/portfolio/dakan-logo.png';
import oldiesLogo from '../assets/portfolio/oldies-logo.png';
import gedoAzizLogo from '../assets/portfolio/gedo-aziz-logo.png';
import egySafariLogo from '../assets/portfolio/egy-safari-logo.png';
import khaledElshamyPhoto from '../assets/portfolio/khaled-elshamy-photo.png';
import maviCafeLogo from '../assets/portfolio/mavi-cafe-logo.png';
import hamedBondokPhoto from '../assets/portfolio/hamed-bondok-photo.png';
import mtrLogo from '../assets/portfolio/mtr-logo.jpg';
import asasLogo from '../assets/portfolio/asas-logo.png';

interface PortfolioPageProps {
  navigateToPage: (page: PageType) => void;
}

export function PortfolioPage({ navigateToPage }: PortfolioPageProps) {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: 1,
      key: 'dakan',
      category: 'webapp',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing API', 'RBAC System', 'Real-time Dashboard'],
      gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
      icon: Layout,
      logo: dakanLogo,
    },
    {
      id: 2,
      key: 'oldies',
      category: 'webapp',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing API', 'RBAC System', 'Real-time Dashboard'],
      gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
      icon: Layout,
      logo: oldiesLogo,
    },
    {
      id: 3,
      key: 'gedoaziz',
      category: 'webapp',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Geofencing API', 'RBAC System', 'Real-time Dashboard'],
      gradient: 'linear-gradient(135deg, #00B2FF, #10B981)',
      icon: Layout,
      logo: gedoAzizLogo,
    },
    {
      id: 4,
      key: 'egysafari',
      category: 'design',
      technologies: ['Website Design', 'Mobile App Design', 'UI/UX Design', 'Tourism Platform', 'Booking System'],
      gradient: 'linear-gradient(135deg, #FF6B35, #F7931E)',
      icon: Plane,
      logo: egySafariLogo,
      link: 'http://egy-safary.odoo.com/',
    },
    {
      id: 5,
      key: 'khaledelshamy',
      category: 'portfolio',
      technologies: ['Portfolio Website', 'Photography Gallery', 'Responsive Design', 'Image Optimization', 'Modern UI'],
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      icon: Camera,
      logo: khaledElshamyPhoto,
      link: 'https://deluxe-monstera-4313af.netlify.app/',
      instagram: 'https://www.instagram.com/khaledelshamy.360/',
    },
    {
      id: 6,
      key: 'mavicafe',
      category: 'pos',
      technologies: ['POS System', 'Inventory Management', 'Recipe System', 'Smart Alerts', 'Real-time Tracking', 'React', 'Node.js'],
      gradient: 'linear-gradient(135deg, #8B4513, #D2691E)',
      icon: Coffee,
      logo: maviCafeLogo,
    },
    {
      id: 7,
      key: 'hamedbondok',
      category: 'campaign',
      technologies: ['Campaign Website', 'Responsive Design', 'News Management', 'Contact Forms', 'Media Gallery', 'SEO'],
      gradient: 'linear-gradient(135deg, #D4AF37, #FFD700)',
      icon: Vote,
      logo: hamedBondokPhoto,
    },
    {
      id: 8,
      key: 'mtr',
      category: 'sports',
      technologies: ['Portfolio Website', 'Company Timeline', 'Martial Arts Academy', 'Responsive Design', 'Media Gallery', 'Achievement Showcase'],
      gradient: 'linear-gradient(135deg, #FF0000, #DC143C)',
      icon: Sparkles,
      logo: mtrLogo,
    },
    {
      id: 9,
      key: 'asas',
      category: 'erp',
      technologies: ['Odoo ERP', 'Web Development', 'Team Training', 'Business Management', 'Sales & Inventory', 'Accounting'],
      gradient: 'linear-gradient(135deg, #F7931E, #FDB813)',
      icon: Building2,
      logo: asasLogo,
      link: 'https://asas8.odoo.com',
    },
    {
      id: 10,
      key: 'comingsoon',
      category: 'comingsoon',
      technologies: ['Coming Soon', 'New Contract', 'Exciting Project'],
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      icon: Sparkles,
      logo: '',
      comingSoon: true,
    },
  ];

  const getProjectData = (project: any) => ({
    ...project,
    title: t(`project.${project.key}.title`),
    description: t(`project.${project.key}.description`),
    longDescription: t(`project.${project.key}.longDescription`),
    client: t(`project.${project.key}.client`),
    duration: t(`project.${project.key}.duration`),
    results: [
      t(`project.${project.key}.result1`),
      t(`project.${project.key}.result2`),
      t(`project.${project.key}.result3`),
      t(`project.${project.key}.result4`),
    ],
  });

  const categories = [
    { id: 'all', label: t('portfolio.category.all') },
    { id: 'webapp', label: t('portfolio.category.webapp') },
    { id: 'design', label: t('portfolio.category.design') },
    { id: 'portfolio', label: t('portfolio.category.portfolio') },
    { id: 'pos', label: t('portfolio.category.pos') },
    { id: 'campaign', label: t('portfolio.category.campaign') },
    { id: 'sports', label: t('portfolio.category.sports') },
    { id: 'erp', label: t('portfolio.category.erp') },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects.map(getProjectData)
      : projects.filter((p) => p.category === selectedCategory).map(getProjectData);

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
              <span>{language === 'en' ? 'Our Portfolio' : 'معرض أعمالنا'}</span>
            </motion.div>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              {t('portfolio.hero')}
            </h1>
            <p
              className="mb-4"
              style={{
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                fontWeight: '600',
                opacity: '0.95',
              }}
            >
              {t('portfolio.subtitle')}
            </p>
            <p
              className="max-w-3xl mx-auto opacity-90"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              {t('portfolio.description')}
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
              {t('portfolio.filter')}
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
                {category.label}
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
                              <ExternalLink className={language === 'ar' ? 'ml-2' : 'mr-2'} size={20} />
                              {t('portfolio.details')}
                            </Button>
                          </motion.div>
                        </motion.div>
                      </motion.div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3
                          className="mb-4"
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
                          {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
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
                  className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors`}
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
                    {t('portfolio.aboutProject')}
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
                      {t('portfolio.client')}
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
                      {t('portfolio.duration')}
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
                    {t('portfolio.technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
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
                    {t('portfolio.results')}
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result: string, idx: number) => (
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

                {/* Links */}
                {(selectedProject.link || selectedProject.instagram) && (
                  <div className="flex gap-4 pt-4">
                    {selectedProject.link && (
                      <Button
                        onClick={() => window.open(selectedProject.link, '_blank')}
                        variant="outline"
                        className="flex-1"
                        style={{
                          borderColor: selectedProject.gradient.match(/#[a-fA-F0-9]{6}/)?.[0],
                          color: selectedProject.gradient.match(/#[a-fA-F0-9]{6}/)?.[0],
                          fontFamily: 'Cairo, sans-serif',
                        }}
                      >
                        <ExternalLink className={language === 'ar' ? 'ml-2' : 'mr-2'} size={18} />
                        {t('portfolio.viewLive')}
                      </Button>
                    )}
                    {selectedProject.instagram && (
                      <Button
                        onClick={() => window.open(selectedProject.instagram, '_blank')}
                        variant="outline"
                        className="flex-1"
                        style={{
                          borderColor: selectedProject.gradient.match(/#[a-fA-F0-9]{6}/)?.[0],
                          color: selectedProject.gradient.match(/#[a-fA-F0-9]{6}/)?.[0],
                          fontFamily: 'Cairo, sans-serif',
                        }}
                      >
                        <ExternalLink className={language === 'ar' ? 'ml-2' : 'mr-2'} size={18} />
                        {t('portfolio.viewInstagram')}
                      </Button>
                    )}
                  </div>
                )}

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
                    {t('portfolio.startSimilar')}
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
              {t('portfolio.cta.title')}
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
              {t('portfolio.cta.description')}
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
                {t('portfolio.cta.button')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
