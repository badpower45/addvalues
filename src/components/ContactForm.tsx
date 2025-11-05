import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { Send, CheckCircle, Mail, Phone, User, Building, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', { ...data, projectType, budget });

    toast.success('Your request was sent successfully!', {
      description: 'We will contact you within 24 hours',
      icon: <CheckCircle style={{ color: 'var(--success-green)' }} />,
    });

    reset();
    setProjectType('');
    setBudget('');
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--codepulse-blue), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--electric-blue), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="max-w-[1000px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </motion.div>

          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '500',
              background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            Start Your Project With Us Today
          </h2>
          <p
            className="mb-2"
            style={{
              color: 'var(--tech-gray)',
              fontSize: '20px',
              fontFamily: 'Cairo, sans-serif',
            }}
          >
            Get a free consultation and price quote within 24 hours
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glassmorphic container */}
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-2xl border-2 border-white/50 dark:border-slate-700/50"
          >
            {/* Decorative gradient overlay */}
            <div
              className="absolute top-0 left-0 w-full h-2 opacity-80"
              style={{
                background: 'linear-gradient(90deg, var(--codepulse-blue), var(--electric-blue), var(--codepulse-blue))',
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Label
                  htmlFor="name"
                  className="mb-2 block flex items-center gap-2 text-slate-700 dark:text-slate-200"
                  style={{ fontFamily: 'var(--font-arabic-body)', fontWeight: '500' }}
                >
                  <User size={18} />
                  Full Name *
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`transition-all duration-300 ${errors.name ? 'border-red-500' : ''} ${
                      focusedField === 'name' ? 'scale-[1.02] shadow-lg' : ''
                    }`}
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      borderWidth: '2px',
                      borderColor: focusedField === 'name' ? 'var(--electric-blue)' : 'transparent',
                    }}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Zap size={16} style={{ color: 'var(--electric-blue)' }} />
                    </motion.div>
                  )}
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1"
                    style={{ color: 'red', fontSize: '14px', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Label
                  htmlFor="email"
                  className="mb-2 block flex items-center gap-2 text-slate-700 dark:text-slate-200"
                  style={{ fontFamily: 'var(--font-arabic-body)', fontWeight: '500' }}
                >
                  <Mail size={18} />
                  Email Address *
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`transition-all duration-300 ${errors.email ? 'border-red-500' : ''} ${
                      focusedField === 'email' ? 'scale-[1.02] shadow-lg' : ''
                    }`}
                    style={{
                      borderWidth: '2px',
                      borderColor: focusedField === 'email' ? 'var(--electric-blue)' : 'transparent',
                    }}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Zap size={16} style={{ color: 'var(--electric-blue)' }} />
                    </motion.div>
                  )}
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1"
                    style={{ color: 'red', fontSize: '14px', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Label
                  htmlFor="phone"
                  className="mb-2 block flex items-center gap-2 text-slate-700 dark:text-slate-200"
                  style={{ fontFamily: 'var(--font-arabic-body)', fontWeight: '500' }}
                >
                  <Phone size={18} />
                  Phone Number *
                </Label>
                <div className="relative">
                  <Input
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className={`transition-all duration-300 ${errors.phone ? 'border-red-500' : ''} ${
                      focusedField === 'phone' ? 'scale-[1.02] shadow-lg' : ''
                    }`}
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      borderWidth: '2px',
                      borderColor: focusedField === 'phone' ? 'var(--electric-blue)' : 'transparent',
                    }}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'phone' && (
                    <motion.div
                      className="absolute -top-1 -right-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Zap size={16} style={{ color: 'var(--electric-blue)' }} />
                    </motion.div>
                  )}
                </div>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1"
                    style={{ color: 'red', fontSize: '14px', fontFamily: 'Cairo, sans-serif' }}
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Label
                  htmlFor="company"
                  className="mb-2 block flex items-center gap-2"
                  style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
                >
                  <Building size={18} />
                  Company Name
                </Label>
                <Input
                  id="company"
                  {...register('company')}
                  className={`transition-all duration-300 ${
                    focusedField === 'company' ? 'scale-[1.02] shadow-lg' : ''
                  }`}
                  style={{
                    fontFamily: 'Cairo, sans-serif',
                    borderWidth: '2px',
                    borderColor: focusedField === 'company' ? 'var(--electric-blue)' : 'transparent',
                  }}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              {/* Project Type */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Label
                  htmlFor="projectType"
                  className="mb-2 block"
                  style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
                >
                  Project Type *
                </Label>
                <Select value={projectType} onValueChange={setProjectType} required>
                  <SelectTrigger style={{ fontFamily: 'Cairo, sans-serif', borderWidth: '2px' }}>
                    <SelectValue placeholder="Choose project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      Website
                    </SelectItem>
                    <SelectItem value="mobile" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      Mobile App
                    </SelectItem>
                    <SelectItem value="system" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      Management System
                    </SelectItem>
                    <SelectItem value="ecommerce" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      E-commerce Store
                    </SelectItem>
                    <SelectItem value="consulting" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      Technical Consulting
                    </SelectItem>
                    <SelectItem value="other" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Budget */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Label
                  htmlFor="budget"
                  className="mb-2 block"
                  style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
                >
                  Expected Budget
                </Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger style={{ fontFamily: 'Cairo, sans-serif', borderWidth: '2px' }}>
                    <SelectValue placeholder="Choose budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000-" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      Less than $5000
                    </SelectItem>
                    <SelectItem value="5000-15000" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      $5000-$15000
                    </SelectItem>
                    <SelectItem value="15000-30000" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      $15000-$30000
                    </SelectItem>
                    <SelectItem value="30000+" style={{ fontFamily: 'Cairo, sans-serif' }}>
                      More than $30000
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Label
                htmlFor="message"
                className="mb-2 block"
                style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
              >
                Project Details *
              </Label>
              <Textarea
                id="message"
                rows={6}
                {...register('message', { required: 'Project details are required' })}
                className={`transition-all duration-300 ${errors.message ? 'border-red-500' : ''} ${
                  focusedField === 'message' ? 'scale-[1.01] shadow-lg' : ''
                }`}
                style={{
                  fontFamily: 'Cairo, sans-serif',
                  borderWidth: '2px',
                  borderColor: focusedField === 'message' ? 'var(--electric-blue)' : 'transparent',
                }}
                placeholder="Tell us more about your project..."
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1"
                  style={{ color: 'red', fontSize: '14px', fontFamily: 'Cairo, sans-serif' }}
                >
                  {errors.message.message}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    color: 'white',
                    fontFamily: 'Cairo, sans-serif',
                    fontSize: '18px',
                    padding: '28px',
                    borderRadius: '16px',
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Zap size={20} />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Quote Request
                        <Send size={20} />
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, var(--electric-blue), var(--deep-tech-blue))',
                    }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
