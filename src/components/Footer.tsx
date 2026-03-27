import { Instagram, Twitter, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/10 mt-auto pb-24 md:pb-0">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary font-bold">ش</div>
              <div className="text-2xl font-bold text-on-surface font-headline">معمل الشفاء</div>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              دقة التشخيص هي الخطوة الأولى نحو الشفاء. نقدم خدمات مخبرية بأحدث التقنيات العالمية ومعايير الجودة الدقيقة.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 text-center md:text-right">
            <h4 className="text-on-surface font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><FooterLink label="الرئيسية" /></li>
              <li><FooterLink label="خدماتنا" /></li>
              <li><FooterLink label="الباقات" /></li>
              <li><FooterLink label="حجز موعد" /></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 text-center md:text-right">
            <h4 className="text-on-surface font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-on-surface-variant text-sm">
                <Phone size={16} className="text-primary" />
                <span>9200xxxxx</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-on-surface-variant text-sm">
                <Mail size={16} className="text-primary" />
                <span>info@alshifa.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-on-surface-variant text-sm">
                <MapPin size={16} className="text-primary" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1 text-center md:text-right">
            <h4 className="text-on-surface font-bold mb-6">النشرة البريدية</h4>
            <p className="text-on-surface-variant text-sm mb-4">اشترك ليصلك أحدث العروض والنصائح الطبية.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-surface-container-highest border-none rounded-xl py-3 px-4 text-sm text-on-surface focus:ring-2 focus:ring-primary transition-all"
              />
              <button className="bg-primary text-on-primary py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary/10 transition-all">اشتراك</button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-on-surface-variant text-xs text-center md:text-right">
            © 2024 معمل الشفاء. جميع الحقوق محفوظة. ترخيص وزارة الصحة رقم xxxxx
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all text-xs">سياسة الخصوصية</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all text-xs">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
      {icon}
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm">
      {label}
    </a>
  );
}
