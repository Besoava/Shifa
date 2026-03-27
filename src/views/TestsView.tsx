import { motion } from 'motion/react';
import { Search, Activity, Droplets, Sun, FlaskConical, TrendingUp, Timer, Pill, CheckCircle } from 'lucide-react';
import { TESTS } from '../constants';
import { cn } from '../lib/utils';

export default function TestsView() {
  const categories = ['الكل', 'تحاليل الدم', 'الهرمونات', 'الفيتامينات'];
  
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8 md:py-12">
      {/* Header */}
      <header className="text-center mb-12 md:mb-16 hero-glow py-8 md:py-12">
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-4">دليل التحاليل والأسعار</h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto px-4">نقدم أدق النتائج المخبرية باستخدام أحدث التقنيات العالمية. ابحث عن التحليل المطلوب واطلع على التكلفة والتعليمات.</p>
      </header>

      {/* Search & Filter */}
      <section className="mb-10 md:mb-12">
        <div className="bg-surface-container-low rounded-2xl md:rounded-xl p-4 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <div className="relative w-full md:flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
            <input 
              className="w-full bg-surface-container-highest border-none rounded-xl md:rounded-lg py-4 pr-12 pl-4 text-on-surface focus:ring-2 focus:ring-secondary transition-all placeholder:text-outline/50" 
              placeholder="ابحث عن اسم التحليل (مثال: CBC, Glucose)..." 
              type="text"
            />
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={cn(
                  "px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium whitespace-nowrap transition-all text-sm md:text-base",
                  i === 0 ? "bg-primary text-on-primary font-bold shadow-lg shadow-primary/10" : "bg-surface-container-highest text-on-surface hover:bg-surface-variant"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Package */}
        <div className="lg:col-span-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border-r-4 border-primary">
          <div>
            <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">الأكثر طلباً</span>
            <h2 className="font-headline text-2xl font-bold mb-2">باقة الفحص الشامل</h2>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">فحص شامل مصمم بأعلى معايير الدقة المحلية لضمان موثوقية النتائج. يتضمن 25 تحليلاً تغطي وظائف الكبد والكلى والدم والسكري والدهون.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-secondary" />
                صورة دم كاملة (CBC)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-secondary" />
                تحليل سكر صائم
              </li>
              <li className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-secondary" />
                وظائف كلى وكبد
              </li>
            </ul>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs text-outline block">سعر العرض</span>
              <span className="text-3xl font-bold text-primary">450 <small className="text-sm">جنية</small></span>
            </div>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">احجز الآن</button>
          </div>
        </div>

        {/* Test List */}
        <div className="lg:col-span-2 space-y-4">
          {TESTS.map((test, index) => (
            <motion.div 
              key={test.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface-container-low hover:bg-surface-container rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center transition-all group gap-4 md:gap-0 border border-outline-variant/5 hover:border-primary/20"
            >
              <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform flex-shrink-0 shadow-inner">
                  {getIcon(test.icon)}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-base md:text-lg text-on-surface group-hover:text-primary transition-colors">{test.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-outline bg-surface-container-highest px-2 py-0.5 rounded-full">
                      <Timer size={10} />
                      {test.time}
                    </span>
                    <span className="text-[10px] md:text-xs text-secondary font-medium">{test.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-8 w-full sm:w-auto justify-between sm:justify-end border-t border-outline-variant/10 sm:border-none pt-4 sm:pt-0">
                <div className="text-left sm:text-right">
                  <span className="text-2xl md:text-3xl font-headline font-bold text-primary">{test.price}</span>
                  <span className="text-[10px] md:text-xs text-outline mr-1">جنية</span>
                </div>
                <button className="bg-primary text-on-primary px-8 sm:px-6 py-3 sm:py-2 rounded-xl sm:rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">حجز</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instructions */}
      <section className="mt-20">
        <div className="bg-surface-container rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="font-headline text-3xl font-bold mb-6">تعليمات ما قبل التحليل</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="text-primary"><Timer size={40} /></div>
                  <div>
                    <h4 className="font-bold mb-2">الصيام الطبي</h4>
                    <p className="text-sm text-on-surface-variant">تتطلب بعض التحاليل مثل السكر والدهون صياماً لمدة 8-12 ساعة. يُسمح بشرب الماء فقط.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary"><Pill size={40} /></div>
                  <div>
                    <h4 className="font-bold mb-2">الأدوية المعتادة</h4>
                    <p className="text-sm text-on-surface-variant">يُرجى إبلاغ المختبر بأي أدوية تتناولها بانتظام، خاصة أدوية السيولة أو الغدة.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <img 
                src="https://picsum.photos/seed/medical-lab/600/400" 
                alt="Lab Precision" 
                className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function getIcon(name: string) {
  switch (name) {
    case 'Activity': return <Activity />;
    case 'Droplets': return <Droplets />;
    case 'Sun': return <Sun />;
    case 'FlaskConical': return <FlaskConical />;
    case 'TrendingUp': return <TrendingUp />;
    default: return <Activity />;
  }
}
