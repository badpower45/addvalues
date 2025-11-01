import { motion } from 'motion/react';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Code, Shield, Mail } from 'lucide-react';
import { PageType } from '../App';

interface TermsPageProps {
  navigateToPage: (page: PageType) => void;
}

export function TermsPage({ navigateToPage }: TermsPageProps) {
  const sections = [
    {
      icon: FileText,
      title: 'نطاق الخدمة',
      content: `توفر AddValues خدمات تطوير البرمجيات والحلول التقنية المخصصة. تشمل خدماتنا على سبيل المثال لا الحصر:`,
      list: [
        'تطوير تطبيقات الويب والهاتف المحمول',
        'تصميم وتطوير المواقع الإلكترونية',
        'تطوير حلول MVP (الحد الأدنى من المنتج القابل للتطبيق)',
        'استشارات تقنية وتحليل الأنظمة',
        'الصيانة والدعم الفني للتطبيقات',
        'خدمات التكامل مع الأنظمة الخارجية',
      ],
    },
    {
      icon: CheckCircle,
      title: 'التزامات العميل',
      content: `عند استخدام خدماتنا، أنت توافق على:`,
      list: [
        'تقديم معلومات دقيقة وكاملة عن متطلبات مشروعك',
        'التعاون معنا وتوفير الوصول اللازم للموارد والمعلومات',
        'الالتزام بجداول المراجعة والموافقة المتفق عليها',
        'دفع الرسوم المستحقة في المواعيد المحددة',
        'احترام حقوق الملكية الفكرية للأدوات والمكتبات المستخدمة',
        'عدم استخدام خدماتنا لأغراض غير قانونية أو مخالفة للآداب',
      ],
    },
    {
      icon: Code,
      title: 'التزاماتنا كمزود خدمة',
      content: `نلتزم بـ:`,
      list: [
        'تقديم خدمات تقنية عالية الجودة وفقاً للمعايير المهنية',
        'الالتزام بالجداول الزمنية والمواعيد النهائية المتفق عليها',
        'الحفاظ على سرية معلومات مشروعك',
        'توفير الدعم الفني خلال فترة الضمان المحددة',
        'استخدام أفضل الممارسات في تطوير البرمجيات',
        'إبلاغك بأي تحديات أو تأخيرات محتملة بشكل استباقي',
      ],
    },
    {
      icon: Scale,
      title: 'الملكية الفكرية',
      content: `حقوق الملكية الفكرية تُحدد كالتالي:`,
      list: [
        'الكود المخصص المطور لمشروعك يصبح ملكاً لك بعد الدفع الكامل',
        'نحتفظ بحقوق إعادة استخدام المكونات والمكتبات العامة',
        'أي أدوات أو إطارات عمل مفتوحة المصدر تبقى خاضعة لترخيصها الأصلي',
        'التصاميم والأكواد يمكن عرضها في معرض أعمالنا (بموافقتك)',
        'لا يجوز نسخ أو توزيع أعمالنا دون إذن كتابي',
        'نحتفظ بالحق في استخدام المعرفة العامة المكتسبة من المشاريع',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'المدفوعات والإلغاء',
      content: `سياسة المدفوعات والإلغاء:`,
      list: [
        'تُحدد الأسعار بناءً على نطاق العمل المتفق عليه',
        'نطلب عادةً دفعة مقدمة بنسبة 30-50% لبدء المشروع',
        'الدفعات المرحلية تُحدد حسب معالم المشروع المتفق عليها',
        'في حالة الإلغاء، يتم احتساب رسوم للعمل المنجز فقط',
        'المبالغ المدفوعة مقابل عمل مكتمل غير قابلة للاسترداد',
        'يحق لنا إيقاف العمل في حالة التأخر في الدفع لأكثر من 14 يوماً',
      ],
    },
    {
      icon: Shield,
      title: 'الضمان والمسؤولية',
      content: `نقدم ضمانات محدودة:`,
      list: [
        'نضمن خلو الكود من العيوب الجوهرية لمدة 30-90 يوماً (حسب الاتفاق)',
        'الضمان لا يغطي المشاكل الناتجة عن تعديلات من طرف ثالث',
        'مسؤوليتنا محدودة بقيمة العقد المتفق عليه',
        'لا نتحمل المسؤولية عن الأضرار غير المباشرة أو خسائر الأعمال',
        'الضمان لا يشمل مشاكل الخوادم أو البنية التحتية الخارجية',
        'يتطلب الضمان تقديم تقارير مفصلة عن الأخطاء',
      ],
    },
    {
      icon: XCircle,
      title: 'الاستخدام المحظور',
      content: `يُحظر استخدام خدماتنا لـ:`,
      list: [
        'أي أنشطة غير قانونية أو احتيالية',
        'انتهاك حقوق الملكية الفكرية للآخرين',
        'نشر محتوى ضار أو مسيء أو غير لائق',
        'محاولة اختراق أو تعطيل أنظمتنا أو أنظمة الآخرين',
        'جمع معلومات المستخدمين بطرق غير مشروعة',
        'إرسال رسائل بريد إلكتروني غير مرغوب فيها (SPAM)',
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
              <Scale size={40} />
            </motion.div>
            
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              شروط الاستخدام
            </h1>
            
            <p
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              القواعد والشروط التي تحكم استخدام خدماتنا التقنية
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
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-100 dark:border-slate-600"
          >
            <p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif', lineHeight: '2' }}
            >
              مرحباً بك في AddValues. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يُرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا. إذا كنت لا توافق على أي من هذه الشروط، يُرجى عدم استخدام خدماتنا.
            </p>
          </motion.div>

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

          {/* Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700"
          >
            <h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              حل النزاعات
            </h3>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{ fontFamily: 'Cairo, sans-serif', lineHeight: '2' }}
            >
              في حالة نشوء أي نزاع، نشجع التواصل المباشر لحل المشكلة بشكل ودي. إذا تعذر ذلك، يخضع أي نزاع للقوانين المصرية ويتم حله من خلال التحكيم أو المحاكم المختصة في بورسعيد، مصر.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-100 dark:border-slate-600"
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
                  هل لديك استفسارات؟
                </h3>
                
                <p
                  className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Cairo, sans-serif', lineHeight: '2' }}
                >
                  إذا كان لديك أي أسئلة حول هذه الشروط، يسعدنا مساعدتك.
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

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-600 dark:text-gray-400"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            <p className="text-sm leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التعديلات الجوهرية ستدخل حيز التنفيذ بعد 30 يوماً من نشرها على موقعنا. استمرارك في استخدام خدماتنا بعد التعديلات يعني موافقتك على الشروط الجديدة.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
