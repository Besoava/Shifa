import { motion, AnimatePresence } from 'motion/react';
import { User, Home, ClipboardList, Calendar, Phone, Menu, X } from 'lucide-react';
import { ViewType } from '../types';
import { cn } from '../lib/utils';
import { useState } from 'react';

interface NavbarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: <Home size={20} /> },
    { id: 'tests', label: 'خدماتنا', icon: <ClipboardList size={20} /> },
    { id: 'appointments', label: 'المواعيد', icon: <Calendar size={20} /> },
    { id: 'contact', label: 'اتصل بنا', icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/10 backdrop-blur-xl">
        <div className="flex justify-between items-center px-4 md:px-12 py-3 md:py-6 w-full max-w-screen-2xl mx-auto">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onViewChange('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary font-bold text-xl group-hover:rotate-12 transition-transform">
              ش
            </div>
            <div className="text-lg md:text-2xl font-bold text-on-surface font-headline">
              معمل الشفاء
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as ViewType)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-1",
                  currentView === item.id 
                    ? "text-primary" 
                    : "text-on-surface hover:text-secondary"
                )}
              >
                {item.label}
                {currentView === item.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="p-2 text-on-surface hover:bg-surface-variant rounded-full transition-all">
              <User size={22} />
            </button>
            <button 
              onClick={() => onViewChange('appointments')}
              className="hidden sm:block bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            >
              حجز موعد
            </button>
            <button 
              className="md:hidden p-2 text-on-surface"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-surface-container border-b border-outline-variant/10 p-4 space-y-2"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id as ViewType);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "w-full text-right p-3 rounded-xl flex items-center justify-between",
                    currentView === item.id ? "bg-primary/10 text-primary" : "text-on-surface"
                  )}
                >
                  <span>{item.label}</span>
                  {item.icon}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <div className="glass-panel rounded-[2.5rem] p-2 flex justify-around items-center border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-500 relative py-2 px-4 rounded-2xl",
                currentView === item.id ? "text-primary bg-primary/10" : "text-on-surface-variant opacity-60"
              )}
            >
              <div className="transition-transform duration-500 active:scale-90">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold mt-0.5">{item.label}</span>
              {currentView === item.id && (
                <motion.div 
                  layoutId="bottom-nav-indicator"
                  className="absolute -bottom-1 w-6 h-1 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
