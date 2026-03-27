import { motion } from 'motion/react';
import { Clock, CheckCircle, Shield, MapPin, Smartphone, QrCode } from 'lucide-react';
import { ReactNode } from 'react';

export default function AppointmentsView() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-10 md:py-20">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-6xl font-extrabold text-on-surface mb-4 md:mb-6 tracking-tight leading-tight">حجز المواعيد والزيارات المنزلية</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">بخطوات بسيطة، يمكنك حجز موعدك في المعمل أو طلب زيارة منزلية لفريقنا الطبي المتخصص للوصول إليك أينما كنت.</p>
      </header>

      {/* Info Ticker */}
      <div className="bg-surface-container-low rounded-2xl md:rounded-xl p-4 md:p-6 mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-outline-variant/10 overflow-x-auto no-scrollbar">
        <div className="flex-shrink-0 w-full md:w-auto">
          <InfoItem icon={<Clock />} title="ساعات العمل الرسمية" description="يومياً من الساعة 8:00 صباحاً حتى 10:00 مساءً" />
        </div>
        <div className="hidden md:block w-px h-10 bg-outline-variant/20"></div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <InfoItem icon={<CheckCircle />} title="النتائج السريعة" description="تظهر معظم النتائج خلال 6-12 ساعة من الفحص" />
        </div>
        <div className="hidden md:block w-px h-10 bg-outline-variant/20"></div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <InfoItem icon={<Shield />} title="دقة ومصداقية" description="نلتزم بأعلى المعايير المهنية لضمان نتائج موثوقة" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Lab Form */}
        <section className="bg-surface-container rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden border border-outline-variant/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">🔬</span> موعد في المختبر
          </h2>
          <form className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <InputGroup label="الاسم الكامل" placeholder="أدخل اسمك كما في الهوية" />
              <InputGroup label="رقم الجوال" placeholder="05xxxxxxxx" type="tel" dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-on-surface-variant px-1">نوع التحليل</label>
              <select className="w-full bg-surface-container-highest border-none rounded-2xl py-4 px-4 text-on-surface focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer">
                <option>اختر نوع الفحص...</option>
                <option>تحليل دم شامل (CBC)</option>
                <option>باقة الفحص الشامل</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <InputGroup label="التاريخ المفضل" type="date" />
              <InputGroup label="الوقت المفضل" type="time" />
            </div>
            <button className="w-full bg-primary text-on-primary font-bold py-4 md:py-5 rounded-2xl md:rounded-full text-base md:text-lg mt-4 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95">
              تأكيد الحجز في المختبر
            </button>
          </form>
        </section>

        {/* Home Visit Form */}
        <section className="bg-surface-container rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden border border-outline-variant/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
          <h2 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-secondary">🏠</span> طلب زيارة منزلية
          </h2>
          <form className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <InputGroup label="الاسم الكامل" placeholder="الاسم الرباعي" />
              <InputGroup label="رقم التواصل" placeholder="05xxxxxxxx" type="tel" dir="ltr" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-on-surface-variant px-1">عنوان المنزل</label>
              <div className="relative">
                <input className="w-full bg-surface-container-highest border-none rounded-2xl py-4 px-4 pr-12 text-on-surface focus:ring-2 focus:ring-secondary transition-all" placeholder="الحي، الشارع، رقم المنزل" />
                <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <InputGroup label="تاريخ الزيارة" type="date" />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-on-surface-variant px-1">الفترة الزمنية</label>
                <select className="w-full bg-surface-container-highest border-none rounded-2xl py-4 px-4 text-on-surface focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer">
                  <option>صباحاً (8 - 12)</option>
                  <option>ظهراً (12 - 4)</option>
                  <option>مساءً (4 - 9)</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-secondary text-on-secondary font-bold py-4 md:py-5 rounded-2xl md:rounded-full text-base md:text-lg mt-4 shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all active:scale-95">
              إرسال طلب الزيارة
            </button>
          </form>
        </section>
      </div>

      {/* Why Choose Us */}
      <section className="mt-32">
        <h2 className="text-3xl font-bold mb-12 text-center">لماذا تختار معمل الشفاء؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-end">
            <img 
              src="https://picsum.photos/seed/laboratory-technician/1200/600" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              alt="Lab Tech"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-3">أحدث الأجهزة التشخيصية</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-xl">نمتلك أحدث ما توصل إليه العلم في مجال المختبرات الطبية، لضمان نتائج مخبرية دقيقة تساهم في رحلة علاجك.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-primary rounded-3xl p-8 flex flex-col justify-between text-on-primary">
            <CheckCircle size={48} />
            <div>
              <h3 className="text-xl font-bold mb-2">ثقة وخبرة</h3>
              <p className="text-sm opacity-90">أكثر من 15 عاماً من الخبرة في تقديم الخدمات المخبرية المتميزة لمجتمعنا.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-surface-container-high rounded-3xl p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <Shield size={32} />
            </div>
            <h3 className="text-lg font-bold">خصوصية تامة</h3>
            <p className="text-sm text-on-surface-variant">يتم التعامل مع كافة بياناتك ونتائج فحوصاتك بسرية تامة وأمان رقمي متطور.</p>
          </div>
          
          <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-secondary mb-3">تطبيق الشفاء للهاتف</h3>
              <p className="text-on-surface-variant mb-4">احصل على نتائجك فور صدورها، وتابع سجل فحوصاتك التاريخي عبر تطبيقنا الذكي.</p>
              <div className="flex gap-4">
                <button className="h-10 w-28 bg-surface-variant rounded-lg border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-highest transition-colors text-xs">App Store</button>
                <button className="h-10 w-28 bg-surface-variant rounded-lg border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-highest transition-colors text-xs">Google Play</button>
              </div>
            </div>
            <div className="w-40 h-40 bg-gradient-to-tr from-surface-variant to-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
              <QrCode size={64} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoItem({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-primary">{title}</h3>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder, type = "text", dir, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-on-surface-variant px-1 mr-1">{label}</label>
      <input 
        type={type}
        dir={dir}
        className="w-full bg-surface-container-highest border-none rounded-2xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/30 shadow-sm" 
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
