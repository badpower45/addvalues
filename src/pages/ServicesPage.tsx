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
    title: 'Custom Website Development',
    description: 'We design and develop professional custom websites perfectly tailored to your business needs. Our websites are fast, secure, and user-friendly.',
    features: [
      'Professional UI/UX design',
      'Responsive development for all devices',
      'Search engine optimization (SEO)',
      'Content management dashboard',
      'Payment system integration',
      'Advanced security & data protection',
      'High-speed performance',
      'Detailed reports & analytics',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'WordPress', 'Laravel'],
    gradient: 'linear-gradient(135deg, #2776EA, #00B2FF)',
  },
  {
    icon: Layout,
    title: 'Advanced Web Applications',
    description: 'We build complex web systems and applications to manage and automate business operations, with modern user interfaces and high performance.',
    features: [
      'Integrated management systems (ERP/CRM)',
      'Interactive dashboards',
      'Large database management',
      'Business process automation',
      'Real-time reports & analytics',
      'Multi-level permissions',
      'Advanced API interfaces',
      'Automatic backups',
    ],
    technologies: ['Node.js', 'Python', 'Laravel', 'Django', 'PostgreSQL', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #1A5490, #2776EA)',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Professional online stores with everything you need to start and successfully manage your e-commerce business.',
    features: [
      'Professional store interface',
      'Product & inventory management',
      'Multiple payment gateways',
      'Shipping & delivery system',
      'Order & invoice management',
      'Promotions & coupon system',
      'Product ratings & reviews',
      'Sales reports & statistics',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Stripe', 'PayPal'],
    gradient: 'linear-gradient(135deg, #00B2FF, #2776EA)',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Professional mobile apps for Android and iPhone with modern design and exceptional user experience.',
    features: [
      'Native Android & iOS apps',
      'Cross-platform hybrid apps',
      'Modern user interface design',
      'Cloud services integration',
      'Push notifications',
      'In-app payments',
      'Maps & geolocation',
      'Multi-language support',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
    gradient: 'linear-gradient(135deg, #2776EA, #1A5490)',
  },
  {
    icon: Network,
    title: 'System Integration & API',
    description: 'We connect your existing systems and build APIs for seamless integration between all your technology platforms.',
    features: [
      'REST API design & development',
      'External system integration',
      'Automatic data synchronization',
      'Workflow automation',
      'Payment service integration',
      'CRM & ERP integration',
      'Comprehensive API documentation',
      'Advanced testing & security',
    ],
    technologies: ['REST API', 'GraphQL', 'Webhooks', 'Microservices', 'Docker', 'Kubernetes'],
    gradient: 'linear-gradient(135deg, #00B2FF, #1A5490)',
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting',
    description: 'Specialized consulting to help you make the right technical decisions and plan your digital transformation strategy.',
    features: [
      'Technical requirements analysis',
      'Choosing the right technologies',
      'Infrastructure planning',
      'Digital transformation strategy',
      'Code & performance review',
      'Technical team training',
      'Security best practices',
      'Performance evaluation & optimization',
    ],
    technologies: ['Consultation', 'Code Review', 'Architecture', 'DevOps', 'Security', 'Training'],
    gradient: 'linear-gradient(135deg, #1A5490, #00B2FF)',
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
              }}
            >
              Our Specialized Services
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
              }}
            >
              We deliver comprehensive software development services with the highest quality standards to achieve your digital goals
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
                          className="mb-4"
                          style={{
                            fontSize: '28px',
                            fontWeight: '700',
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          style={{
                            lineHeight: '1.7',
                            opacity: '0.95',
                            fontSize: '16px',
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
                        }}
                      >
                        Key Features:
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
                        }}
                      >
                        Technologies Used:
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

                      {/* CTA Button */}
                      <div className="pt-6 border-t border-gray-200">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={() => navigateToPage('contact')}
                            className="w-full relative overflow-hidden group"
                            size="lg"
                            style={{
                              background: service.gradient,
                              color: 'white',
                              padding: '14px 24px',
                            }}
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              Get Free Consultation
                              <ArrowRight size={18} />
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
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                opacity: '0.95',
              }}
            >
              Get a free consultation and detailed quote within 24 hours
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigateToPage('contact')}
                size="lg"
                className="shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--codepulse-blue)',
                  padding: '28px 40px',
                  fontSize: '20px',
                }}
              >
                <span className="flex items-center gap-2">
                  Contact Us Now
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
