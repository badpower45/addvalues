import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.about': 'من نحن',
    'nav.portfolio': 'أعمالنا',
    'nav.contact': 'اتصل بنا',
    'header.cta': 'احصل على عرض مجاني',
    
    // Hero
    'hero.badge': 'شريكك في التحول الرقمي',
    'hero.title.part1': 'حول أفكارك التجارية',
    'hero.title.part2': 'إلى حلول رقمية متطورة',
    'hero.subtitle': 'تطوير برمجيات مخصصة للشركات ذات التفكير المستقبلي',
    'hero.description': 'نساعد الشركات على النمو والتطور من خلال تطوير مواقع الويب والتطبيقات والأنظمة المخصصة باستخدام أحدث التقنيات',
    'hero.cta.start': 'ابدأ مشروعك الآن',
    'hero.cta.view': 'شاهد أعمالنا',
    'hero.stats.projects': 'مشروع ناجح',
    'hero.stats.satisfaction': 'رضا العملاء',
    'hero.stats.experience': 'سنوات خبرة',
    'hero.stats.support': 'دعم فني',
    
    // Services
    'services.badge': 'خدماتنا',
    'services.title': 'خدماتنا المتخصصة',
    'services.subtitle': 'نقدم مجموعة شاملة من الخدمات التقنية لتحويل أفكارك إلى واقع رقمي',
    'services.learnMore': 'اعرف أكثر',
    'service.website.title': 'تطوير المواقع المخصصة',
    'service.website.desc': 'مواقع ويب احترافية مصممة خصيصاً لاحتياجات شركتك مع تصميم عصري ووظائف متقدمة',
    'service.website.features': 'تصميم متجاوب|إدارة محتوى|تحسين السيو|أمان عالي',
    'service.webapp.title': 'تطبيقات الويب المتقدمة',
    'service.webapp.desc': 'أنظمة وتطبيقات ويب معقدة لإدارة وأتمتة العمليات التجارية بكفاءة عالية',
    'service.webapp.features': 'لوحات تحكم|إدارة البيانات|تقارير تحليلية|واجهات مستخدم متقدمة',
    'service.ecommerce.title': 'حلول التجارة الإلكترونية',
    'service.ecommerce.desc': 'متاجر إلكترونية متكاملة مع أنظمة الدفع وإدارة المخزون والشحن',
    'service.ecommerce.features': 'بوابات دفع متعددة|إدارة المنتجات|تتبع الطلبات|تقارير المبيعات',
    'service.mobile.title': 'تطبيقات الهواتف الذكية',
    'service.mobile.desc': 'تطبيقات احترافية للأندرويد والآيفون مع تجربة مستخدم استثنائية',
    'service.mobile.features': 'تطبيقات native|تطبيقات هجينة|تكامل مع الخدمات|إشعارات فورية',
    'service.integration.title': 'ربط وتكامل الأنظمة',
    'service.integration.desc': 'ربط أنظمتك الحالية وأتمتة سير العمل لتحسين الكفاءة والإنتاجية',
    'service.integration.features': 'APIs|قواعد بيانات|أتمتة العمليات|مزامنة البيانات',
    'service.consulting.title': 'الاستشارات التقنية',
    'service.consulting.desc': 'استشارات متخصصة في استراتيجية التكنولوجيا والتحول الرقمي لشركتك',
    'service.consulting.features': 'تحليل المتطلبات|اختيار التقنيات|خطط التطوير|إدارة المشاريع',
    'service.landing.title': 'صفحات الهبوط التسويقية',
    'service.landing.desc': 'تصميم صفحات هبوط احترافية لتحسين حملاتك التسويقية وزيادة معدلات التحويل',
    'service.landing.features': 'تصميم جذاب|تحسين التحويل|سرعة تحميل|تتبع وتحليل',
    
    // Free MVP Banner
    'mvp.badge': 'عرض حصري لفترة محدودة',
    'mvp.title.part1': 'احصل على',
    'mvp.title.part2': 'استشارة مجانية',
    'mvp.title.part3': 'من خبرائنا التقنيين!',
    'mvp.description': 'استشارة تقنية شاملة ومجانية بالكامل! نساعدك في تحويل فكرتك إلى خطة تنفيذية واضحة. احصل على توصيات مخصصة، تقييم احترافي لمشروعك، وخطة عمل متكاملة من فريقنا المتخصص.',
    'mvp.cta.book': 'احجز استشارتك المجانية الآن',
    'mvp.cta.services': 'تعرف على خدماتنا',
    'mvp.feature1': 'مجانية بالكامل',
    'mvp.feature2': 'استشارة من خبراء متخصصين',
    'mvp.feature3': 'خطة عمل واضحة ومفصلة',
    
    // Why Choose Us
    'why.badge': 'لماذا نحن',
    'why.title': 'لماذا تختار AddValues؟',
    'why.subtitle': 'نجمع بين الخبرة التقنية والابتكار لتقديم حلول برمجية تتجاوز توقعاتك',
    'why.expert.title': 'فريق خبراء',
    'why.expert.desc': 'فريق تطوير متمرس بخبرة تزيد عن 5 سنوات في التقنيات الحديثة',
    'why.tech.title': 'تقنيات حديثة',
    'why.tech.desc': 'أحدث الأطر: React، Node.js، Laravel، Flutter',
    'why.delivery.title': 'التزام بالمواعيد',
    'why.delivery.desc': 'معدل تسليم في الموعد 97٪ مع تتبع شفاف للمشروع',
    'why.support.title': 'دعم شامل',
    'why.support.desc': 'دعم فني وخدمات صيانة على مدار الساعة طوال أيام الأسبوع',
    
    // How We Work
    'how.badge': 'عمليتنا',
    'how.title': 'عملية العمل معنا',
    'how.subtitle': 'نتبع منهجية واضحة ومنظمة لضمان نجاح مشروعك',
    'how.step1.title': 'اكتشاف وتخطيط',
    'how.step1.desc': 'تحليل المتطلبات وتحديد نطاق المشروع (1-2 أسبوع)',
    'how.step2.title': 'تصميم وتطوير',
    'how.step2.desc': 'تصميم واجهة المستخدم والتطوير مع تحديثات أسبوعية (4-8 أسابيع)',
    'how.step3.title': 'اختبار وضمان الجودة',
    'how.step3.desc': 'اختبار شامل وضمان الجودة (1-2 أسبوع)',
    'how.step4.title': 'إطلاق ودعم',
    'how.step4.desc': 'النشر والتدريب ودعم الصيانة المستمر',
    
    // Testimonials
    'testimonials.badge': 'آراء العملاء',
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'آراء حقيقية من عملائنا المميزين',
    
    // Coming Soon Banner
    'coming.badge': 'مفاجأة قادمة',
    'coming.title': 'قريباً... انتظروا المفاجأة! 🎉',
    'coming.subtitle': 'تعاقد جديد مع عميل مميز',
    'coming.description': 'نحن متحمسون للإعلان عن شراكة جديدة مع عميل استثنائي على مشروع مبتكر! المشروع قيد التنفيذ الآن بأعلى معايير الجودة والاحترافية. ترقبوا الكشف عن التفاصيل قريباً...',
    'coming.cta': 'شاهد مشاريعنا القادمة',
    
    // Contact Form
    'contact.badge': 'تواصل معنا',
    'contact.title': 'ابدأ مشروعك معنا اليوم',
    'contact.subtitle': 'احصل على استشارة مجانية وعرض سعر خلال 24 ساعة',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'اسم الشركة',
    'contact.projectType': 'نوع المشروع',
    'contact.budget': 'الميزانية المتوقعة',
    'contact.message': 'تفاصيل المشروع',
    'contact.placeholder.projectType': 'اختر نوع المشروع',
    'contact.placeholder.budget': 'اختر الميزانية',
    'contact.placeholder.message': 'أخبرنا المزيد عن مشروعك...',
    'contact.type.website': 'موقع ويب',
    'contact.type.mobile': 'تطبيق جوال',
    'contact.type.system': 'نظام إدارة',
    'contact.type.ecommerce': 'متجر إلكتروني',
    'contact.type.consulting': 'استشارة تقنية',
    'contact.type.other': 'أخرى',
    'contact.budget.5000-': 'أقل من 5000$',
    'contact.budget.5000-15000': '5000-15000$',
    'contact.budget.15000-30000': '15000-30000$',
    'contact.budget.30000+': 'أكثر من 30000$',
    'contact.submit': 'إرسال طلب العرض',
    'contact.sending': 'جاري الإرسال...',
    'contact.error.name': 'الاسم مطلوب',
    'contact.error.email': 'البريد الإلكتروني مطلوب',
    'contact.error.emailInvalid': 'البريد الإلكتروني غير صحيح',
    'contact.error.phone': 'رقم الهاتف مطلوب',
    'contact.error.phoneInvalid': 'رقم الهاتف غير صحيح',
    'contact.error.message': 'تفاصيل المشروع مطلوبة',
    'contact.success': 'تم إرسال طلبك بنجاح!',
    'contact.successDesc': 'سنتواصل معك خلال 24 ساعة',
    
    // Footer
    'footer.description': 'شريكك الموثوق في التحول الرقمي وتطوير الحلول البرمجية المبتكرة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.legal': 'قانوني',
    'footer.contact': 'تواصل معنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.location': 'بورسعيد، مصر',
    'footer.hours': 'الأحد - الخميس\n9 صباحاً - 6 مساءً',
    'footer.rights': '© 2025 AddValues. جميع الحقوق محفوظة',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'header.cta': 'Get Free Quote',
    
    // Hero
    'hero.badge': 'Your Digital Transformation Partner',
    'hero.title.part1': 'Transform Your Business Ideas',
    'hero.title.part2': 'Into Advanced Digital Solutions',
    'hero.subtitle': 'Custom Software Development for Forward-Thinking Businesses',
    'hero.description': 'We help businesses grow and evolve through developing custom websites, applications, and systems using the latest technologies',
    'hero.cta.start': 'Start Your Project Now',
    'hero.cta.view': 'View Our Work',
    'hero.stats.projects': 'Successful Projects',
    'hero.stats.satisfaction': 'Client Satisfaction',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.support': 'Technical Support',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Our Specialized Services',
    'services.subtitle': 'We offer a comprehensive range of technical services to transform your ideas into digital reality',
    'services.learnMore': 'Learn More',
    'service.website.title': 'Custom Website Development',
    'service.website.desc': 'Professional websites designed specifically for your company needs with modern design and advanced functionality',
    'service.website.features': 'Responsive Design|Content Management|SEO Optimization|High Security',
    'service.webapp.title': 'Web Applications',
    'service.webapp.desc': 'Complex web systems and applications to manage and automate business operations with high efficiency',
    'service.webapp.features': 'Dashboards|Data Management|Analytics Reports|Advanced UI',
    'service.ecommerce.title': 'E-commerce Solutions',
    'service.ecommerce.desc': 'Complete online stores with payment systems, inventory management, and shipping',
    'service.ecommerce.features': 'Multiple Gateways|Product Management|Order Tracking|Sales Reports',
    'service.mobile.title': 'Mobile Applications',
    'service.mobile.desc': 'Professional applications for Android and iPhone with exceptional user experience',
    'service.mobile.features': 'Native Apps|Hybrid Apps|Service Integration|Push Notifications',
    'service.integration.title': 'System Integration',
    'service.integration.desc': 'Connect your existing systems and automate workflows to improve efficiency and productivity',
    'service.integration.features': 'APIs|Databases|Process Automation|Data Sync',
    'service.consulting.title': 'Technical Consulting',
    'service.consulting.desc': 'Specialized consulting in technology strategy and digital transformation for your company',
    'service.consulting.features': 'Requirements Analysis|Technology Selection|Development Plans|Project Management',
    'service.landing.title': 'Landing Pages',
    'service.landing.desc': 'Professional landing page design to improve your marketing campaigns and increase conversion rates',
    'service.landing.features': 'Attractive Design|Conversion Optimization|Fast Loading|Tracking & Analytics',
    
    // Free MVP Banner
    'mvp.badge': 'Limited Time Exclusive Offer',
    'mvp.title.part1': 'Get a',
    'mvp.title.part2': 'Free Consultation',
    'mvp.title.part3': 'From Our Technical Experts!',
    'mvp.description': 'Comprehensive and completely free technical consultation! We help you transform your idea into a clear execution plan. Get personalized recommendations, professional project evaluation, and a complete action plan from our specialized team.',
    'mvp.cta.book': 'Book Your Free Consultation Now',
    'mvp.cta.services': 'Explore Our Services',
    'mvp.feature1': 'Completely Free',
    'mvp.feature2': 'Consultation from Specialized Experts',
    'mvp.feature3': 'Clear and Detailed Action Plan',
    
    // Why Choose Us
    'why.badge': 'Why Choose Us',
    'why.title': 'Why Choose AddValues?',
    'why.subtitle': 'We combine technical expertise and innovation to deliver software solutions that exceed your expectations',
    'why.expert.title': 'Expert Team',
    'why.expert.desc': 'Experienced development team with 5+ years in modern technologies',
    'why.tech.title': 'Modern Tech',
    'why.tech.desc': 'Latest frameworks: React, Node.js, Laravel, Flutter',
    'why.delivery.title': 'On-Time Delivery',
    'why.delivery.desc': '97% on-time delivery rate with transparent project tracking',
    'why.support.title': 'Full Support',
    'why.support.desc': '24/7 technical support and maintenance services',
    
    // How We Work
    'how.badge': 'Our Process',
    'how.title': 'Our Working Process',
    'how.subtitle': 'We follow a clear and organized methodology to ensure the success of your project',
    'how.step1.title': 'Discovery & Planning',
    'how.step1.desc': 'Requirements analysis and project scope definition (1-2 weeks)',
    'how.step2.title': 'Design & Development',
    'how.step2.desc': 'UI/UX design and development with weekly progress updates (4-8 weeks)',
    'how.step3.title': 'Testing & QA',
    'how.step3.desc': 'Comprehensive testing and quality assurance (1-2 weeks)',
    'how.step4.title': 'Launch & Support',
    'how.step4.desc': 'Deployment, training, and ongoing maintenance support',
    
    // Testimonials
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real feedback from our valued clients',
    
    // Coming Soon Banner
    'coming.badge': 'Coming Soon Surprise',
    'coming.title': 'Coming Soon... Stay Tuned! 🎉',
    'coming.subtitle': 'New Contract with a Distinguished Client',
    'coming.description': 'We are excited to announce a new partnership with an exceptional client on an innovative project! The project is currently in development with the highest standards of quality and professionalism. Stay tuned for the details to be revealed soon...',
    'coming.cta': 'View Our Upcoming Projects',
    
    // Contact Form
    'contact.badge': 'Get in Touch',
    'contact.title': 'Start Your Project With Us Today',
    'contact.subtitle': 'Get a free consultation and price quote within 24 hours',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name',
    'contact.projectType': 'Project Type',
    'contact.budget': 'Expected Budget',
    'contact.message': 'Project Details',
    'contact.placeholder.projectType': 'Choose project type',
    'contact.placeholder.budget': 'Choose budget',
    'contact.placeholder.message': 'Tell us more about your project...',
    'contact.type.website': 'Website',
    'contact.type.mobile': 'Mobile App',
    'contact.type.system': 'Management System',
    'contact.type.ecommerce': 'E-commerce Store',
    'contact.type.consulting': 'Technical Consulting',
    'contact.type.other': 'Other',
    'contact.budget.5000-': 'Less than $5000',
    'contact.budget.5000-15000': '$5000-$15000',
    'contact.budget.15000-30000': '$15000-$30000',
    'contact.budget.30000+': 'More than $30000',
    'contact.submit': 'Submit Quote Request',
    'contact.sending': 'Sending...',
    'contact.error.name': 'Name is required',
    'contact.error.email': 'Email is required',
    'contact.error.emailInvalid': 'Invalid email address',
    'contact.error.phone': 'Phone number is required',
    'contact.error.phoneInvalid': 'Invalid phone number',
    'contact.error.message': 'Project details are required',
    'contact.success': 'Your request was sent successfully!',
    'contact.successDesc': 'We will contact you within 24 hours',
    
    // Footer
    'footer.description': 'Your trusted partner in digital transformation and innovative software solutions',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.location': 'Port Said, Egypt',
    'footer.hours': 'Sunday - Thursday\n9 AM - 6 PM',
    'footer.rights': '© 2025 AddValues. All Rights Reserved',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguageState(savedLang);
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
