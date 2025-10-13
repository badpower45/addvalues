import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form@7.55.0';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner@2.0.3';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building, Zap, MessageSquare, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { PageType } from '../App';

interface ContactPageProps {
  navigateToPage: (page: PageType) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'العنوان',
    titleEn: 'Address',
    info: 'القاهرة، مصر\nالقاهرة الجديدة - التجمع الخامس',
    color: '#2776EA',
  },
  {
    icon: Phone,
    title: 'الهاتف',
    titleEn: 'Phone',
    info: '+20 xxx xxx xxxx\n+20 yyy yyy yyyy',
    color: '#00B2FF',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    titleEn: 'Email',
    info: 'info@codepulse.tech\nsupport@codepulse.tech',
    color: '#1A5490',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    titleEn: 'Working Hours',
    info: 'الأحد - الخميس\n9:00 صباحاً - 6:00 مساءً',
    color: '#10B981',
  },
];

const socialMedia = [
  { icon: Linkedin, label: 'LinkedIn', color: '#0077B5', link: '#' },
  { icon: Facebook, label: 'Facebook', color: '#1877F2', link: '#' },
  { icon: Twitter, label: 'Twitter', color: '#1DA1F2', link: '#' },
  { icon: Instagram, label: 'Instagram', color: '#E4405F', link: '#' },
];

export function ContactPage({ navigateToPage }: ContactPageProps) {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', { ...data, projectType, budget });

    toast.success('تم إرسال طلبك بنجاح!', {
      description: 'سنتواصل معك خلال 24 ساعة',
      icon: <CheckCircle style={{ color: 'var(--success-green)' }} />,
    });

    reset();
    setProjectType('');
    setBudget('');
    setIsSubmitting(false);
  };

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
            >
              <MessageSquare size={20} className="animate-pulse" />
              <span>Get In Touch</span>
            </motion.div>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: '700',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              تواصل معنا
            </h1>
            <p
              className="mb-4"
              style={{
                fontSize: 'clamp(22px, 3.5vw, 32px)',
                fontWeight: '600',
                opacity: '0.95',
              }}
            >
              Let's Start Your Digital Journey
            </p>
            <p
              className="max-w-3xl mx-auto opacity-90"
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                fontFamily: 'Cairo, sans-serif',
              }}
            >
              نحن هنا للإجابة على أسئلتك ومساعدتك في تحقيق أهدافك الرقمية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="border-0 h-full text-center"
                  style={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `${info.color}15`,
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon size={32} style={{ color: info.color }} />
                    </motion.div>
                    <h3
                      className="mb-1"
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      {info.title}
                    </h3>
                    <p
                      className="mb-3"
                      style={{
                        fontSize: '12px',
                        color: info.color,
                        fontWeight: '600',
                      }}
                    >
                      {info.titleEn}
                    </p>
                    <p
                      style={{
                        color: 'var(--tech-gray)',
                        fontSize: '14px',
                        lineHeight: '1.7',
                        fontFamily: 'Cairo, sans-serif',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {info.info}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Side - Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    color: 'white',
                  }}
                >
                  <Mail size={20} />
                  <span>Contact Form</span>
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
                  أرسل لنا رسالة
                </h2>
                <p
                  className="mb-8"
                  style={{
                    color: 'var(--tech-gray)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: 'Cairo, sans-serif',
                  }}
                >
                  املأ النموذج وسنتواصل معك خلال 24 ساعة
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="rounded-3xl p-8 relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                      border: '2px solid rgba(255,255,255,0.5)',
                    }}
                  >
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
                          className="mb-2 block flex items-center gap-2"
                          style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
                        >
                          <User size={18} />
                          الاسم الكامل *
                        </Label>
                        <div className="relative">
                          <Input
                            id="name"
                            {...register('name', { required: 'الاسم مطلوب' })}
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
                          className="mb-2 block flex items-center gap-2"
                          style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
                        >
                          <Mail size={18} />
                          البريد الإلكتروني *
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            {...register('email', {
                              required: 'البريد الإلكتروني مطلوب',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'البريد الإلكتروني غير صحيح',
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
                          className="mb-2 block flex items-center gap-2"
                          style={{ fontFamily: 'Cairo, sans-serif', color: 'var(--deep-tech-blue)', fontWeight: '600' }}
                        >
                          <Phone size={18} />
                          رقم الهاتف *
                        </Label>
                        <Input
                          id="phone"
                          {...register('phone', {
                            required: 'رقم الهاتف مطلوب',
                            pattern: {
                              value: /^[0-9+\-\s()]+$/,
                              message: 'رقم الهاتف غير صحيح',
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
                          اسم الشركة
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
                          نوع المشروع *
                        </Label>
                        <Select value={projectType} onValueChange={setProjectType} required>
                          <SelectTrigger style={{ fontFamily: 'Cairo, sans-serif', borderWidth: '2px' }}>
                            <SelectValue placeholder="اختر نوع المشروع" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              موقع ويب
                            </SelectItem>
                            <SelectItem value="mobile" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              تطبيق جوال
                            </SelectItem>
                            <SelectItem value="system" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              نظام إدارة
                            </SelectItem>
                            <SelectItem value="ecommerce" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              متجر إلكتروني
                            </SelectItem>
                            <SelectItem value="consulting" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              استشارة تقنية
                            </SelectItem>
                            <SelectItem value="other" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              أخرى
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
                          الميزانية المتوقعة
                        </Label>
                        <Select value={budget} onValueChange={setBudget}>
                          <SelectTrigger style={{ fontFamily: 'Cairo, sans-serif', borderWidth: '2px' }}>
                            <SelectValue placeholder="اختر الميزانية" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000-" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              أقل من 5000$
                            </SelectItem>
                            <SelectItem value="5000-15000" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              5000-15000$
                            </SelectItem>
                            <SelectItem value="15000-30000" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              15000-30000$
                            </SelectItem>
                            <SelectItem value="30000+" style={{ fontFamily: 'Cairo, sans-serif' }}>
                              أكثر من 30000$
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
                        تفاصيل المشروع *
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        {...register('message', { required: 'تفاصيل المشروع مطلوبة' })}
                        className={`transition-all duration-300 ${errors.message ? 'border-red-500' : ''} ${
                          focusedField === 'message' ? 'scale-[1.01] shadow-lg' : ''
                        }`}
                        style={{
                          fontFamily: 'Cairo, sans-serif',
                          borderWidth: '2px',
                          borderColor: focusedField === 'message' ? 'var(--electric-blue)' : 'transparent',
                        }}
                        placeholder="أخبرنا المزيد عن مشروعك..."
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
                                جاري الإرسال...
                              </>
                            ) : (
                              <>
                                إرسال طلب العرض
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
                </form>
              </motion.div>
            </div>

            {/* Right Side - Info & Social */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                {/* Support Box */}
                <Card
                  className="border-0 mb-8"
                  style={{
                    background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                    color: 'white',
                  }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="inline-block"
                    >
                      <Zap size={48} className="mb-4" />
                    </motion.div>
                    <h3
                      className="mb-3"
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      دعم سريع ومتاح
                    </h3>
                    <p
                      className="mb-6"
                      style={{
                        lineHeight: '1.8',
                        fontFamily: 'Cairo, sans-serif',
                        opacity: '0.95',
                      }}
                    >
                      فريقنا متاح للرد على استفساراتك وتقديم المساعدة في أي وقت
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} />
                        <span style={{ fontFamily: 'Cairo, sans-serif' }}>
                          استجابة خلال 24 ساعة
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} />
                        <span style={{ fontFamily: 'Cairo, sans-serif' }}>
                          استشارة مجانية
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} />
                        <span style={{ fontFamily: 'Cairo, sans-serif' }}>
                          عرض سعر مفصل
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="border-0" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                  <CardContent className="p-8">
                    <h3
                      className="mb-6"
                      style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: 'var(--deep-tech-blue)',
                        fontFamily: 'Cairo, sans-serif',
                      }}
                    >
                      تابعنا على
                    </h3>
                    <div className="space-y-4">
                      {socialMedia.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                          style={{
                            backgroundColor: 'var(--light-gray)',
                          }}
                          whileHover={{
                            backgroundColor: `${social.color}15`,
                            x: 10,
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${social.color}20` }}
                          >
                            <social.icon size={24} style={{ color: social.color }} />
                          </div>
                          <span
                            style={{
                              fontWeight: '600',
                              color: 'var(--tech-gray)',
                            }}
                          >
                            {social.label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-96" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="text-center p-8 rounded-2xl"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            }}
          >
            <MapPin size={48} style={{ color: 'var(--codepulse-blue)' }} className="mx-auto mb-4" />
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--deep-tech-blue)',
                fontFamily: 'Cairo, sans-serif',
                marginBottom: '8px',
              }}
            >
              موقعنا
            </h3>
            <p style={{ color: 'var(--tech-gray)', fontFamily: 'Cairo, sans-serif' }}>
              القاهرة الجديدة - التجمع الخامس، القاهرة، مصر
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}