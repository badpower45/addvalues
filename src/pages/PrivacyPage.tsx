import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, Mail } from 'lucide-react';
import { PageType } from '../App';

interface PrivacyPageProps {
  navigateToPage: (page: PageType) => void;
}

export function PrivacyPage({ navigateToPage }: PrivacyPageProps) {
  const sections = [
    {
      icon: FileText,
      title: 'المقدمة',
      content: `في AddValues، نحن ملتزمون بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام خدماتنا التقنية.`,
    },
    {
      icon: Database,
      title: 'المعلومات التي نجمعها',
      content: `نقوم بجمع المعلومات التالية:`,
      list: [
        'معلومات الاتصال: الاسم، البريد الإلكتروني، رقم الهاتف',
        'معلومات الشركة: اسم الشركة، المجال، حجم العمل',
        'البيانات التقنية: عنوان IP، نوع المتصفح، نظام التشغيل',
        'بيانات المشاريع: متطلبات المشروع، الميزانية، الجدول الزمني',
        'سجلات الاستخدام: كيفية تفاعلك مع منصتنا وخدماتنا',
      ],
    },
    {
      icon: UserCheck,
      title: 'كيفية استخدام معلوماتك',
      content: `نستخدم المعلومات المجمعة للأغراض التالية:`,
      list: [
        'تقديم وتطوير خدماتنا التقنية والبرمجية',
        'التواصل معك بشأن مشاريعك واستفساراتك',
        'تحسين تجربة المستخدم وتخصيص الخدمات',
        'إرسال تحديثات حول خدماتنا والعروض الخاصة (بموافقتك)',
        'تحليل البيانات لتحسين أداء منصتنا',
        'الامتثال للمتطلبات القانونية والتنظيمية',
      ],
    },
    {
      icon: Lock,
      title: 'حماية البيانات والأمان',
      content: `نتخذ إجراءات أمنية صارمة لحماية بياناتك:`,
      list: [
        'تشفير البيانات باستخدام بروتوكولات SSL/TLS',
        'تخزين آمن على خوادم محمية بجدران نارية متقدمة',
        'مصادقة ثنائية العامل للوصول إلى الأنظمة',
        'مراجعات أمنية دورية واختبارات الاختراق',
        'تدريب مستمر للموظفين على أفضل ممارسات الأمان',
        'نسخ احتياطي منتظم للبيانات مع تشفير',
      ],
    },
    {
      icon: Eye,
      title: 'مشاركة المعلومات',
      content: `نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:`,
      list: [
        'مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل أعمالنا (مثل خدمات الاستضافة)',
        'عند الحاجة للامتثال للقوانين أو الإجراءات القانونية',
        'لحماية حقوقنا وممتلكاتنا وسلامة عملائنا',
        'في حالة اندماج أو استحواذ (مع إشعارك مسبقاً)',
      ],
    },
    {
      icon: Shield,
      title: 'حقوقك',
      content: `لديك الحق في:`,
      list: [
        'الوصول إلى بياناتك الشخصية التي نحتفظ بها',
        'تصحيح أو تحديث معلوماتك في أي وقت',
        'طلب حذف بياناتك (وفقاً للقوانين المعمول بها)',
        'الاعتراض على معالجة بياناتك لأغراض معينة',
        'طلب نقل بياناتك إلى مزود خدمة آخر',
        'سحب موافقتك على معالجة البيانات في أي وقت',
      ],
    },
    {
      icon: AlertCircle,
      title: 'الكوكيز وتقنيات التتبع',
      content: `نستخدم ملفات تعريف الارتباط (Cookies) وتقنيات مشابهة لـ:`,
      list: [
        'تذكر تفضيلاتك وإعداداتك',
        'فهم كيفية استخدامك لموقعنا',
        'تحسين أداء وسرعة الموقع',
        'تقديم محتوى مخصص بناءً على اهتماماتك',
        'يمكنك التحكم في ملفات تعريف الارتباط من إعدادات المتصفح الخاص بك',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A5490] via-[#2776EA] to-[#00B2FF] dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 text-white py-24">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-lg mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Shield size={40} />
            </motion.div>
            
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              سياسة الخصوصية
            </h1>
            
            <p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              التزامنا بحماية بياناتك وخصوصيتك
            </p>
            
            <p className="mt-4 opacity-75" style={{ fontFamily: 'Inter, sans-serif' }}>
              آخر تحديث: نوفمبر 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-6 md:px-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#2776EA] to-[#00B2FF] dark:from-blue-600 dark:to-cyan-600 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <section.icon size={28} />
                </motion.div>
                
                <div className="flex-1">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                  >
                    {section.title}
                  </h2>
                  
                  <p
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                    style={{ fontFamily: 'Cairo, sans-serif', lineHeight: '2' }}
                  >
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          style={{ fontFamily: 'Cairo, sans-serif', lineHeight: '1.9' }}
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#2776EA] to-[#00B2FF] mt-2.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-100 dark:border-slate-600"
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#2776EA] to-[#00B2FF] flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Mail size={28} />
              </motion.div>
              
              <div>
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  هل لديك أسئلة حول سياسة الخصوصية؟
                </h3>
                
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Cairo, sans-serif', lineHeight: '2' }}
                >
                  إذا كان لديك أي استفسارات أو مخاوف بشأن كيفية معالجة بياناتك، لا تتردد في التواصل معنا.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href="mailto:info@addvalues.tech"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2776EA] to-[#00B2FF] text-white rounded-lg hover:shadow-lg transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <Mail size={20} />
                    info@addvalues.tech
                  </a>
                  
                  <motion.button
                    onClick={() => navigateToPage('contact')}
                    className="px-6 py-3 bg-white dark:bg-slate-800 text-[#2776EA] dark:text-cyan-400 rounded-lg border-2 border-[#2776EA] dark:border-cyan-400 hover:bg-[#2776EA] hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 transition-all"
                    style={{ fontFamily: 'Cairo, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    تواصل معنا
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-600 dark:text-gray-400"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            <p className="text-sm">
              نحتفظ بالحق في تحديث هذه السياسة من وقت لآخر. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على موقعنا.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
