import { motion } from 'motion/react';
import { 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Users, 
  Code, 
  MessageSquare, 
  Zap,
  Gift,
  Target,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import type { PageType } from '../App';

interface MVPPageProps {
  navigateToPage: (page: PageType) => void;
}

export function MVPPage({ navigateToPage }: MVPPageProps) {
  const benefits = [
    {
      icon: Gift,
      title: 'مجاني 100%',
      description: 'أول استشارة وبناء MVP بدون أي تكلفة على الإطلاق'
    },
    {
      icon: Zap,
      title: 'سرعة في التنفيذ',
      description: 'نبدأ العمل مباشرة ونسلّمك نتيجة ملموسة في وقت قياسي'
    },
    {
      icon: Target,
      title: 'حل لمشكلة حقيقية',
      description: 'نركز على بناء حل فعلي يحل مشكلة عملك الأساسية'
    },
    {
      icon: Shield,
      title: 'بدون التزام',
      description: 'مش هتدفع حاجة ومش مطلوب منك أي التزام مستقبلي'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'احجز استشارتك المجانية',
      description: 'تواصل معانا واحكيلنا عن فكرتك أو المشكلة اللي عايز تحلها',
      icon: MessageSquare
    },
    {
      number: '02',
      title: 'جلسة استشارية شاملة',
      description: 'هنتكلم معاك في تفاصيل المشروع ونحدد الأولويات والميزات الأساسية',
      icon: Users
    },
    {
      number: '03',
      title: 'نبني الـ MVP',
      description: 'فريقنا هيبدأ يشتغل على نسخة أولية عملية من فكرتك',
      icon: Code
    },
    {
      number: '04',
      title: 'استلم واتفرج',
      description: 'هنسلّمك MVP شغّال تقدر تجربه وتشوف قدراتنا التقنية بنفسك',
      icon: Rocket
    }
  ];

  const features = [
    'تصميم واجهة مستخدم احترافية',
    'كود نظيف وقابل للتطوير',
    'استضافة مجانية للنسخة التجريبية',
    'جلسة تدريبية على استخدام المنتج',
    'دعم فني لمدة أسبوع',
    'مستندات توضيحية للمشروع'
  ];

  const whyWeDo = [
    {
      icon: TrendingUp,
      title: 'نبني علاقات طويلة المدى',
      description: 'احنا مش بس بنقدم خدمة، احنا بنبني شراكات مع عملائنا'
    },
    {
      icon: Sparkles,
      title: 'نثبت خبرتنا عملياً',
      description: 'بدل الكلام الكتير، نوريك قدراتنا من خلال منتج حقيقي'
    },
    {
      icon: Users,
      title: 'نفهم احتياجاتك أكتر',
      description: 'العمل معاك على MVP بيخلينا نفهم طبيعة عملك وتحدياتك'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--codepulse-blue)] via-[var(--deep-tech-blue)] to-[var(--electric-blue)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-blob"></div>
            <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
            >
              <Gift className="w-5 h-5 text-yellow-300" />
              <span className="text-white">عرض حصري للشركات الجديدة</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white mb-6"
            >
              احصل على MVP مجاني لمشروعك
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 mb-10 text-xl leading-relaxed max-w-3xl mx-auto"
            >
              مش محتاج تصدق كلامنا عن خبرتنا التقنية. خلينا نثبتلك ده عملياً من خلال بناء نسخة
              أولية حقيقية من فكرتك - مجاناً تماماً!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigateToPage('contact')}
                size="lg"
                className="group bg-white text-[var(--codepulse-blue)] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-6 h-auto"
              >
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-4px] transition-transform" />
                <span>ابدأ الآن - مجاناً</span>
              </Button>

              <Button
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white px-8 py-6 h-auto"
              >
                <span>اعرف التفاصيل</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is MVP */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4 text-[var(--text-primary)]">ما هو الـ MVP؟</h2>
              <p className="text-[var(--text-secondary)] text-lg">
                MVP تعني Minimum Viable Product - أو "المنتج الأساسي القابل للعمل"
              </p>
            </div>

            <Card className="bg-[var(--card-bg)] border-[var(--border-color)]">
              <CardContent className="p-8">
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                  هي نسخة مبسّطة من فكرتك تحتوي على الميزات الأساسية فقط، بحيث تقدر تجربها وتشوف
                  إذا كانت بتحل المشكلة فعلاً قبل ما تستثمر في تطوير كامل. ده بيوفر عليك الوقت
                  والمال ويخليك تاخد قرارات مبنية على تجربة حقيقية مش مجرد تخمين.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--codepulse-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-[var(--codepulse-blue)]" />
                    </div>
                    <h4 className="mb-2 text-[var(--text-primary)]">سريع</h4>
                    <p className="text-[var(--text-secondary)]">نبنيه في أسابيع مش شهور</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--codepulse-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-[var(--codepulse-blue)]" />
                    </div>
                    <h4 className="mb-2 text-[var(--text-primary)]">مركّز</h4>
                    <p className="text-[var(--text-secondary)]">يحل المشكلة الرئيسية فقط</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-[var(--codepulse-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[var(--codepulse-blue)]" />
                    </div>
                    <h4 className="mb-2 text-[var(--text-primary)]">عملي</h4>
                    <p className="text-[var(--text-secondary)]">جاهز للاستخدام الفوري</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[var(--text-primary)]">ليه العرض ده؟</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              احنا واثقين من قدراتنا وعايزينك تشوف ده بنفسك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-[var(--card-bg)] border-[var(--border-color)] hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--codepulse-blue)] to-[var(--electric-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3 text-[var(--text-primary)]">{benefit.title}</h4>
                    <p className="text-[var(--text-secondary)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[var(--text-primary)]">إزاي بنشتغل؟</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              أربع خطوات بسيطة من الفكرة لمنتج شغّال
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute right-1/2 top-24 w-0.5 h-24 bg-gradient-to-b from-[var(--codepulse-blue)] to-transparent transform translate-x-1/2"></div>
                )}

                <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                  <div className="flex-1 text-right">
                    <Card className="bg-[var(--card-bg)] border-[var(--border-color)]">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div>
                            <div className="inline-block px-3 py-1 bg-[var(--codepulse-blue)]/10 text-[var(--codepulse-blue)] rounded-full mb-3">
                              الخطوة {step.number}
                            </div>
                            <h3 className="mb-3 text-[var(--text-primary)]">{step.title}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--codepulse-blue)] to-[var(--electric-blue)] rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4 text-[var(--text-primary)]">إيه اللي هتحصل عليه؟</h2>
              <p className="text-[var(--text-secondary)] text-lg">
                مش مجرد استشارة، ده منتج حقيقي شغّال
              </p>
            </div>

            <Card className="bg-[var(--card-bg)] border-[var(--border-color)]">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[var(--success-green)] flex-shrink-0 mt-1" />
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[var(--codepulse-blue)]/5 border border-[var(--codepulse-blue)]/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-[var(--codepulse-blue)] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="mb-2 text-[var(--text-primary)]">الإطار الزمني</h4>
                      <p className="text-[var(--text-secondary)]">
                        من أول جلسة استشارية لحد استلام المنتج: من 2-4 أسابيع (حسب تعقيد الفكرة)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-[var(--text-primary)]">ليه بنعمل كده؟</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              لأننا نؤمن ببناء علاقات حقيقية مع عملائنا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyWeDo.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-[var(--card-bg)] border-[var(--border-color)]">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--codepulse-blue)] to-[var(--deep-tech-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="mb-3 text-[var(--text-primary)]">{reason.title}</h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--codepulse-blue)] via-[var(--deep-tech-blue)] to-[var(--electric-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-white mb-6">
              جاهز تبدأ رحلتك معانا؟
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              خد الخطوة الأولى النهاردة واحجز استشارتك المجانية. هنتكلم عن فكرتك ونبدأ نبني
              المستقبل سوا.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigateToPage('contact')}
                size="lg"
                className="group bg-white text-[var(--codepulse-blue)] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-6 h-auto"
              >
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-4px] transition-transform" />
                <span>ابدأ الاستشارة المجانية</span>
              </Button>

              <Button
                onClick={() => navigateToPage('portfolio')}
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white/50 hover:bg-white/10 hover:border-white px-8 py-6 h-auto"
              >
                <span>شوف أعمالنا السابقة</span>
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </div>

            <p className="mt-8 text-white/70 text-sm">
              * العرض متاح لعدد محدود من الشركات كل شهر - احجز مكانك دلوقتي
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
