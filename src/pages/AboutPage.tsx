import { motion } from 'motion/react';
import { Target, Award, Users, Rocket, Code2, Heart, TrendingUp, Shield, Clock, Zap, CheckCircle, Globe, Sparkles, Building2, Lightbulb, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageType } from '../App';

interface AboutPageProps {
  navigateToPage: (page: PageType) => void;
}

const coreValues = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We deliver exceptional software solutions built with precision, attention to detail, and industry best practices.',
    color: '#2776EA',
  },
  {
    icon: Rocket,
    title: 'Innovation Driven',
    description: 'We stay ahead of technology trends, continuously learning and implementing cutting-edge solutions.',
    color: '#00B2FF',
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Your success is our mission. We build long-term partnerships focused on achieving your business goals.',
    color: '#10B981',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Clear communication, honest timelines, and regular updates throughout every stage of your project.',
    color: '#1A5490',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into understanding your business goals, target audience, and technical requirements.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating wireframes, mockups, and user experiences that align with your vision and user needs.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Building robust, scalable solutions using modern technologies and agile development practices.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Thorough testing, deployment, and ensuring everything runs smoothly in production.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Ongoing support, optimization, and enhancements to grow with your business needs.',
    icon: TrendingUp,
  },
];

const expertise = [
  { category: 'Frontend', technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'] },
  { category: 'Backend', technologies: ['Node.js', 'Laravel', 'Python', 'Django', 'PostgreSQL'] },
  { category: 'Mobile', technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'] },
  { category: 'Cloud & DevOps', technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
];

const stats = [
  { number: '95%', label: 'Client Satisfaction', icon: Award },
  { number: '5+', label: 'Years Experience', icon: Clock },
  { number: '50+', label: 'Projects Delivered', icon: CheckCircle },
  { number: '20+', label: 'Happy Clients', icon: Users },
];

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Founded by passionate developers committed to delivering exceptional software solutions.',
  },
  {
    year: '2020-2021',
    title: 'Building Trust',
    description: 'Established reputation for quality work, expanded service offerings, and built lasting client relationships.',
  },
  {
    year: '2022-2023',
    title: 'Rapid Growth',
    description: 'Scaled team, adopted cutting-edge technologies, and delivered complex enterprise solutions.',
  },
  {
    year: '2024',
    title: 'Excellence Achieved',
    description: 'Reached 95% client satisfaction rate, delivered 50+ successful projects, and became trusted technology partners.',
  },
];

export function AboutPage({ navigateToPage }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-[#1A5490] via-[#2776EA] to-[#00B2FF]"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--electric-blue), transparent)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #00B2FF, transparent)',
            filter: 'blur(70px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={20} className="animate-pulse" />
              <span>About AddValues</span>
            </motion.div>

            <motion.h1
              className="mb-6"
              style={{
                fontSize: 'clamp(42px, 6.5vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.1',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Digital Transformation Partner
            </motion.h1>
            
            <motion.p
              className="mb-4"
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: '600',
                opacity: '0.95',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building Tomorrow's Technology Today
            </motion.p>
            
            <motion.p
              className="max-w-3xl mx-auto opacity-90 mb-10"
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              We are a team of expert software engineers committed to delivering innovative technology solutions that help businesses grow, scale, and succeed in the digital age.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToPage('contact')}
                  size="lg"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--codepulse-blue)',
                    padding: '24px 36px',
                    fontSize: '18px',
                  }}
                >
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToPage('portfolio')}
                  size="lg"
                  variant="outline"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.3)',
                    padding: '24px 36px',
                    fontSize: '18px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 relative"
        style={{
          background: 'linear-gradient(180deg, rgba(39, 118, 234, 0.05) 0%, white 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="text-center border-0 h-full"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    background: 'white',
                  }}
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="mx-auto mb-3"
                      style={{ color: 'var(--codepulse-blue)' }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <stat.icon size={32} />
                    </motion.div>
                    <motion.p
                      style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', delay: index * 0.1 + 0.2 }}
                    >
                      {stat.number}
                    </motion.p>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--tech-gray)',
                        fontWeight: '600',
                      }}
                    >
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3MzA4MzI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AddValues Team Collaboration"
                  className="w-full h-[500px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, transparent 50%, rgba(26, 84, 144, 0.85) 100%)',
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 right-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p style={{ fontSize: '24px', fontWeight: '700' }}>
                    Building Exceptional Software Since 2019
                  </p>
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 glass p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  boxShadow: '0 20px 60px rgba(39, 118, 234, 0.4)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className="text-white text-center">
                  <Globe size={40} className="mx-auto mb-2" />
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>
                    Global Standards
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  color: 'white',
                }}
              >
                <Building2 size={20} />
                <span>Who We Are</span>
              </motion.div>

              <h2
                className="mb-6"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 44px)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2',
                }}
              >
                Empowering Businesses Through Technology
              </h2>

              <p
                className="mb-6"
                style={{
                  color: 'var(--tech-gray)',
                  lineHeight: '1.9',
                  fontSize: '18px',
                }}
              >
                AddValues is more than a software development company – we're your strategic technology partner. Founded in 2019, we've grown from a small team of passionate developers into a trusted provider of enterprise-grade software solutions.
              </p>

              <p
                className="mb-6"
                style={{
                  color: 'var(--tech-gray)',
                  lineHeight: '1.9',
                  fontSize: '18px',
                }}
              >
                Our mission is to enable businesses to achieve their goals through innovative, efficient, and scalable software solutions. We believe technology should serve growth and progress, which is why we work closely with our clients to understand their needs and deliver customized solutions.
              </p>

              <p
                className="mb-8"
                style={{
                  color: 'var(--tech-gray)',
                  lineHeight: '1.9',
                  fontSize: '18px',
                }}
              >
                We're committed to high quality, continuous innovation, and transparency in every interaction. Each project is an opportunity to build long-term partnerships with our clients.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: CheckCircle, text: 'Agile Development' },
                  { icon: Shield, text: 'Secure & Scalable' },
                  { icon: Zap, text: 'Fast Delivery' },
                  { icon: Award, text: 'Quality Assured' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(39, 118, 234, 0.15), rgba(0, 178, 255, 0.15))',
                      }}
                    >
                      <item.icon size={20} style={{ color: 'var(--codepulse-blue)' }} />
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--deep-tech-blue)' }}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToPage('services')}
                  size="lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    color: 'white',
                  }}
                >
                  <span className="flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight size={18} />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--light-gray)' }}>
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
              <Heart size={20} />
              <span>Our Values</span>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              The Principles That Guide Us
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--tech-gray)', fontSize: '18px', lineHeight: '1.7' }}
            >
              Our core values define who we are and how we work with every client
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="text-center border-0 h-full group"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
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
                      className="mb-4"
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                      }}
                    >
                      {value.title}
                    </h3>
                    
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        lineHeight: '1.7',
                        fontSize: '15px',
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

      {/* Our Process */}
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
              <Zap size={20} />
              <span>Our Process</span>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              How We Work With You
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--tech-gray)', fontSize: '18px', lineHeight: '1.7' }}
            >
              A proven methodology that ensures project success from concept to deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="border-0 h-full relative overflow-hidden"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div
                      className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl"
                      style={{
                        background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: '700',
                      }}
                    >
                      {step.number}
                    </div>

                    <motion.div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mt-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(39, 118, 234, 0.15), rgba(0, 178, 255, 0.15))',
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon size={28} style={{ color: 'var(--codepulse-blue)' }} />
                    </motion.div>

                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        lineHeight: '1.6',
                        fontSize: '14px',
                      }}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Success Story
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--tech-gray)', fontSize: '18px', lineHeight: '1.7' }}
            >
              From humble beginnings to becoming a trusted technology partner
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line for desktop */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
              style={{
                background: 'linear-gradient(180deg, var(--codepulse-blue), var(--electric-blue))',
              }}
            />

            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 lg:mb-20 ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                  }`}
                >
                  <motion.div
                    className="p-8 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="inline-block px-5 py-2 rounded-full mb-4"
                      style={{
                        background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                        color: 'white',
                        fontSize: '22px',
                        fontWeight: '700',
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.div>
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        lineHeight: '1.7',
                        fontSize: '16px',
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-10 w-6 h-6 rounded-full -translate-x-1/2"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    boxShadow: '0 0 0 4px rgba(255,255,255,1)',
                  }}
                  whileHover={{ scale: 1.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Showcase */}
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
              <span>Our Expertise</span>
            </motion.div>

            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--deep-tech-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technologies We Master
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--tech-gray)', fontSize: '18px', lineHeight: '1.7' }}
            >
              Modern, battle-tested technologies to build robust software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="border-0 h-full"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent className="p-6">
                    <h3
                      className="mb-4 pb-3 border-b"
                      style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                      }}
                    >
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                            }}
                          />
                          <span
                            style={{
                              fontSize: '15px',
                              color: 'var(--tech-gray)',
                              fontWeight: '500',
                            }}
                          >
                            {tech}
                          </span>
                        </motion.div>
                      ))}
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
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
        }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, white, transparent)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket size={64} className="mx-auto mb-8" />
            </motion.div>
            
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: '700',
                lineHeight: '1.2',
              }}
            >
              Ready to Transform Your Business?
            </h2>
            
            <p
              className="mb-10 max-w-2xl mx-auto"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                opacity: '0.95',
              }}
            >
              Let's discuss your project and discover how we can help you achieve your digital goals. Get a free consultation and detailed quote within 24 hours.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToPage('contact')}
                  size="lg"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--codepulse-blue)',
                    padding: '28px 40px',
                    fontSize: '20px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                  }}
                >
                  <span className="flex items-center gap-2">
                    Start Your Project Today
                    <ArrowRight size={24} />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigateToPage('portfolio')}
                  size="lg"
                  variant="outline"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.4)',
                    padding: '28px 40px',
                    fontSize: '20px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
