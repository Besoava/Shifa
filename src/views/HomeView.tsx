import { motion } from 'motion/react';
import { CalendarCheck, Home, ClipboardList, ShieldCheck, Zap, ArrowLeft, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';
import { ReactNode } from 'react';

export default function HomeView({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 md:pt-32 hero-grid overflow-hidden">
        {/* Decorative DNA-like background element */}
        <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] opacity-10 pointer-events-none select-none hidden md:block">
          <svg viewBox="0 0 200 200" className="w-full h-full text-secondary fill-current animate-spin-slow">
            <path d="M100,20 C120,20 140,40 140,60 C140,80 120,100 100,100 C80,100 60,80 60,60 C60,40 80,20 100,20 Z M100,180 C120,180 140,160 140,140 C140,120 120,100 100,100 C80,100 60,120 60,140 C60,160 80,180 100,180 Z" />
            <circle cx="100" cy="100" r="10" />
          </svg>
        </div>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 md:opacity-100">
          <div className="w-full h-40 md:h-64 bg-transparent ekg-line">
            <svg className="w-full h-full stroke-secondary fill-none stroke-[1.5] md:stroke-[0.5]" viewBox="0 0 1000 100">
              <path d="M0 50 L100 50 L110 30 L120 70 L130 50 L250 50 L260 10 L280 90 L300 50 L450 50 L460 40 L470 60 L480 50 L1000 50" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[600px] md:h-[600px] bg-secondary/15 rounded-full blur-[60px] md:blur-[120px] pointer-events-none animate-pulse-slow mt-0 mb-[200px]"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-5 md:px-6 max-w-4xl mx-0 mt-[-46px] mb-12 md:mb-[200px] pb-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-8 flex justify-center items-center gap-2 md:gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_#7dffa2]"></span>
            <span className="text-secondary font-black tracking-[0.15em] text-[11px] md:text-sm uppercase">مركز تشخيصي معتمد عالمياً</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black font-headline text-on-surface mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1]">
            معمل <span className="text-primary drop-shadow-[0_0_15px_rgba(250,189,0,0.3)]">الشفاء</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-on-surface-variant mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2 font-medium">
            دقة التشخيص هي الخطوة الأولى نحو الشفاء. نقدم خدمات مخبرية بأحدث التقنيات العالمية ومعايير الجودة الدقيقة.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-sm mx-auto sm:max-w-none">
            <button 
              onClick={() => onNavigate('tests')}
              className="w-full sm:w-auto group relative overflow-hidden bg-primary text-on-primary px-8 md:px-12 py-4.5 md:py-6 rounded-2xl md:rounded-full font-black text-lg md:text-xl shadow-2xl shadow-primary/30 transition-all active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <ClipboardList className="group-hover:rotate-12 transition-transform" size={24} />
                حجز تحليلك الآن
              </div>
            </button>
            <button 
              onClick={() => onNavigate('appointments')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-secondary/30 bg-secondary/5 text-secondary px-8 md:px-12 py-4.5 md:py-6 rounded-2xl md:rounded-full font-black text-lg md:text-xl hover:bg-secondary/15 hover:border-secondary/60 transition-all active:scale-95"
            >
              <Home size={24} />
              طلب زيارة منزلية
            </button>
          </div>

          {/* Search Bar for Tests - Highly Functional Replacement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 max-w-md mx-auto relative group"
          >
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-on-surface-variant/50 group-focus-within:text-primary transition-colors">
              <ClipboardList size={20} />
            </div>
            <input 
              type="text" 
              placeholder="ابحث عن اسم التحليل هنا..."
              className="w-full bg-surface-container-high/50 backdrop-blur-sm border-2 border-outline-variant/30 rounded-2xl py-4 pr-12 pl-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:bg-surface-container-high transition-all text-right font-medium shadow-lg"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-black shadow-md active:scale-95 transition-transform">
              بحث
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Badges for Mobile - Bento Style */}
        <div className="md:hidden grid grid-cols-2 gap-3 mt-4 px-6 w-full max-w-md mr-0 mb-8">
          <div className="bg-surface-container-high/80 backdrop-blur-md p-4 rounded-3xl border border-outline-variant/20 flex flex-col gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow-inner"><Zap size={20}/></div>
            <div>
              <div className="text-xs font-black text-on-surface">نتائج سريعة</div>
              <div className="text-[9px] text-on-surface-variant">خلال ساعات فقط</div>
            </div>
          </div>
          <div className="bg-surface-container-high/80 backdrop-blur-md p-4 rounded-3xl border border-outline-variant/20 flex flex-col gap-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shadow-inner"><ShieldCheck size={20}/></div>
            <div>
              <div className="text-xs font-black text-on-surface">دقة معتمدة</div>
              <div className="text-[9px] text-on-surface-variant">بأعلى المعايير</div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-on-surface-variant opacity-40 mr-0 mb-8"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">اسحب للأسفل</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="py-20 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent opacity-50"></div>
        <div className="max-w-6xl mx-auto px-5 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">كيف نعمل</span>
            <h2 className="text-4xl md:text-6xl font-headline text-on-surface mb-6 font-black tracking-tight">خطوات بسيطة لصحتك</h2>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(250,189,0,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Vertical line on mobile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-outline-variant/20 md:hidden"></div>
            
            <StepCard 
              number="01"
              icon={<CalendarCheck size={36} />}
              title="احجز موعدك"
              description="اختر الفحص المناسب لك من قائمتنا الشاملة بكل سهولة ويسر عبر الموقع أو التطبيق."
              color="primary"
            />
            <StepCard 
              number="02"
              icon={<Home size={36} />}
              title="زيارة منزلية أو في المختبر"
              description="نصل إليك في منزلك براحة تامة أو نتشرف بزيارتك في مختبرنا المجهز بأحدث التقنيات."
              color="secondary"
            />
            <StepCard 
              number="03"
              icon={<ClipboardList size={36} />}
              title="استلم نتائجك"
              description="احصل على نتائجك عبر الواتساب أو من خلال موقعنا الإلكتروني بسرعة ودقة متناهية."
              color="primary"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              <img 
                className="w-full h-[350px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://picsum.photos/seed/laboratory/1200/800" 
                alt="Modern Lab"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 left-4 md:left-8 glass-panel p-5 md:p-8 rounded-3xl border border-secondary/10 backdrop-blur-xl">
                <h3 className="text-lg md:text-2xl font-headline text-on-surface mb-2 font-black">تقنيات الجيل القادم</h3>
                <p className="text-xs md:text-base text-on-surface-variant font-medium">نستخدم أحدث أجهزة التحليل الآلي لضمان أقل نسبة خطأ بشري وسرعة في استخراج النتائج.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-headline text-on-surface mb-6 leading-tight font-black">لماذا يختار العملاء معمل الشفاء؟</h2>
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed font-medium">نحن نلتزم بأعلى معايير الجودة والسلامة في كل فحص نقوم به، من سحب العينة حتى تسليم التقرير النهائي.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <FeatureItem 
                  icon={<Zap />}
                  title="نتائج سريعة"
                  description="احصل على نتائجك في غضون ساعات قليلة عبر تطبيقنا أو الواتساب."
                  color="primary"
                />
                <FeatureItem 
                  icon={<ShieldCheck />}
                  title="دقة ومصداقية"
                  description="حاصلون على شهادات الجودة العالمية ISO في التحاليل الطبية."
                  color="secondary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 md:py-32 px-5 md:px-12 bg-surface overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-right">
            <div className="max-w-xl">
              <span className="text-primary font-black uppercase tracking-widest text-xs md:text-sm mb-2 block">باقاتنا المختارة</span>
              <h2 className="text-4xl md:text-6xl font-headline text-on-surface mt-2 md:mt-4 font-black tracking-tight leading-tight">الفحوصات الشاملة للأمان التام</h2>
            </div>
            <button 
              onClick={() => onNavigate('tests')}
              className="group text-secondary hover:text-primary transition-all flex items-center gap-3 font-black text-sm md:text-base bg-secondary/5 px-8 py-4 rounded-full border border-secondary/20 hover:border-secondary/50 shadow-lg shadow-secondary/5"
            >
              عرض جميع الباقات
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative h-[450px] md:h-[500px] rounded-[3rem] overflow-hidden group bg-surface-container-highest border border-outline-variant/10 shadow-2xl"
            >
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end z-20 bg-gradient-to-t from-background via-background/40 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-secondary text-on-secondary text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-secondary/20">الأكثر طلباً</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-secondary/40"></div>)}
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl font-headline text-on-surface mb-4 md:mb-6 font-black tracking-tight">باقة الشفاء الفضية</h3>
                <p className="text-base md:text-xl text-on-surface-variant max-w-lg mb-10 md:mb-12 font-medium leading-relaxed opacity-90">تشمل 25 فحصاً أساسياً للاطمئنان على وظائف الكبد والكلى والسكر والدهون وصورة الدم الكاملة.</p>
                <button className="w-full sm:w-fit bg-secondary text-on-secondary px-12 py-5 md:py-6 rounded-2xl md:rounded-full font-black text-lg md:text-xl hover:shadow-[0_20px_40px_rgba(125,255,162,0.3)] transition-all active:scale-95">احجز الآن</button>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none z-10">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                  src="https://picsum.photos/seed/microscope/1200/800" 
                  alt="Microscopic view"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 mix-blend-overlay"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-high p-10 md:p-12 rounded-[3rem] border border-outline-variant/10 flex flex-col justify-between hover:border-primary/40 transition-all group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20">باقة VIP</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline text-on-surface mb-8 md:mb-10 font-black tracking-tight">باقة الذهب الكاملة</h3>
                <ul className="space-y-5 md:space-y-6 text-on-surface-variant font-medium">
                  <PackageFeature label="فحص شامل لجميع الهرمونات" />
                  <PackageFeature label="زيارة منزلية مجانية" />
                  <PackageFeature label="استشارة طبيب مختص" />
                  <PackageFeature label="تقرير مفصل بالنتائج" />
                  <PackageFeature label="خصم 20% على الفحوصات الإضافية" />
                </ul>
              </div>
              <div className="mt-12 pt-10 border-t border-outline-variant/10 flex justify-between items-center relative z-10">
                <div>
                  <span className="text-[10px] md:text-xs text-outline font-black uppercase tracking-widest block mb-2 opacity-60">سعر الباقة</span>
                  <span className="text-primary text-4xl md:text-5xl font-headline font-black tracking-tighter">950 <small className="text-sm">جنية</small></span>
                </div>
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-primary text-on-primary flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all shadow-[0_20px_40px_rgba(250,189,0,0.3)]">
                  <ShoppingCart size={32} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-secondary font-black uppercase tracking-widest text-xs mb-2 block">آراء عملائنا</span>
            <h2 className="text-4xl md:text-6xl font-headline text-on-surface mb-6 font-black tracking-tight">ثقتكم هي سر نجاحنا</h2>
            <div className="h-2 w-24 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(125,255,162,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="أحمد محمد"
              role="عميل دائم"
              content="تجربة ممتازة جداً، الدقة في المواعيد والنتائج وصلتني على الواتساب في نفس اليوم. أنصح الجميع بالتعامل معهم."
              rating={5}
            />
            <TestimonialCard 
              name="سارة علي"
              role="زيارة منزلية"
              content="خدمة الزيارة المنزلية كانت مريحة جداً، الممرضة كانت محترفة جداً والتعامل راقي. شكراً لكم."
              rating={5}
              delay={0.2}
            />
            <TestimonialCard 
              name="خالد عبدالله"
              role="فحص شامل"
              content="الباقات الشاملة عندهم موفرة جداً والتقرير كان مفصل وواضح. أفضل معمل تحاليل تعاملت معه."
              rating={5}
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ number, icon, title, description, color }: { number: string, icon: ReactNode, title: string, description: string, color: 'primary' | 'secondary' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={cn(
        "bg-surface-container-low p-10 rounded-[3rem] border border-outline-variant/10 transition-all group relative overflow-hidden shadow-xl",
        color === 'primary' ? "hover:border-primary/40" : "hover:border-secondary/40"
      )}
    >
      <div className="absolute top-6 left-8 text-6xl font-black opacity-5 group-hover:opacity-10 transition-opacity font-headline">
        {number}
      </div>

      <div className={cn(
        "absolute top-0 right-0 w-40 h-40 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity",
        color === 'primary' ? "bg-primary" : "bg-secondary"
      )}></div>
      
      <div className={cn(
        "w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative z-10",
        color === 'primary' ? "bg-primary/15 text-primary shadow-primary/10" : "bg-secondary/15 text-secondary shadow-secondary/10"
      )}>
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-headline text-on-surface mb-4 font-black relative z-10">{title}</h3>
      <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-medium relative z-10">{description}</p>
    </motion.div>
  );
}

function FeatureItem({ icon, title, description, color }: { icon: ReactNode, title: string, description: string, color: 'primary' | 'secondary' }) {
  return (
    <div className={cn(
      "flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-surface-container-high hover:bg-surface-variant transition-colors border-r-4 shadow-md",
      color === 'primary' ? "border-primary" : "border-secondary"
    )}>
      <div className={cn(
        "w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl flex-shrink-0 shadow-lg",
        color === 'primary' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
      )}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg md:text-xl font-headline text-on-surface mb-1 md:mb-2 font-black">{title}</h4>
        <p className="text-sm md:text-base text-on-surface-variant font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PackageFeature({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3 text-sm md:text-base">
      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0 shadow-inner">
        <ShieldCheck size={14} />
      </div>
      <span className="opacity-90">{label}</span>
    </li>
  );
}

function TestimonialCard({ name, role, content, rating, delay = 0 }: { name: string, role: string, content: string, rating: number, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-surface-container-high p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-xl relative group"
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Zap key={i} size={16} className="text-primary fill-primary" />
        ))}
      </div>
      <p className="text-on-surface-variant mb-8 font-medium leading-relaxed italic">"{content}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-black">
          {name[0]}
        </div>
        <div>
          <h4 className="text-on-surface font-black text-lg">{name}</h4>
          <span className="text-xs text-outline font-bold uppercase tracking-widest">{role}</span>
        </div>
      </div>
    </motion.div>
  );
}
