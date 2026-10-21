import React from 'react';
import { 
  Star, 
  Play, 
  ExternalLink,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ActivePage } from './Header';

interface ResultsAndTestimonialsProps {
  onNavigate?: (page: ActivePage) => void;
}

export const ResultsAndTestimonials: React.FC<ResultsAndTestimonialsProps> = ({ onNavigate }) => {
  const stats = [
    {
      id: 'scorers',
      value: '500+',
      label: 'A / A+ SCORERS',
      iconType: 'trophy',
      verificationHint: 'Use only if verified',
    },
    {
      id: 'youtube',
      value: '12K+',
      label: 'YOUTUBE LEARNERS',
      iconType: 'youtube',
      verificationHint: 'Confirm current channel data',
      link: siteConfig.socials.youtube.url,
    },
    {
      id: 'classes',
      value: '4',
      label: 'CLASSES COVERED',
      iconType: 'books',
      verificationHint: 'Classes 9, 10, 11 & 12',
    },
    {
      id: 'satisfaction',
      value: '98%',
      label: 'STUDENT SATISFACTION',
      iconType: 'smiley',
      verificationHint: 'Use only with survey evidence',
    },
  ];

  const testimonials = [
    {
      id: 'ali-raza',
      initials: 'AR',
      avatarBg: 'bg-[#1c3a6b]',
      name: 'Ali Raza',
      classInfo: 'Matric — FBISE 2024',
      score: '1085 / 1100',
      quote: '"The board-matched notes and weekly tests made all the difference. I knew exactly what to expect in the exam."',
    },
    {
      id: 'fatima-noor',
      initials: 'FN',
      avatarBg: 'bg-[#85222d]',
      name: 'Fatima Noor',
      classInfo: 'Second Year — FBISE 2024',
      score: 'A+ Grade',
      quote: '"Sir Akbar explains difficult concepts so simply. The WhatsApp support meant I never got stuck for long."',
    },
    {
      id: 'hassan-khan',
      initials: 'HK',
      avatarBg: 'bg-[#126b48]',
      name: 'Hassan Khan',
      classInfo: 'First Year — FBISE 2024',
      score: 'A Grade',
      quote: '"The free YouTube lectures got me hooked, then the full course took my marks to another level."',
    },
  ];

  return (
    <section 
      id="results" 
      className="py-16 sm:py-20 lg:py-24 bg-[#0c1527] text-white relative overflow-hidden"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Top Yellow Pill/Line Label */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#F2B632] inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F2B632]">
              OUR RESULTS
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Achievements that <br className="hidden sm:inline" />
            speak for themselves
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Real students, real board results. Here's what smart, structured preparation delivers.
          </p>
        </div>

        {/* 4 Stat Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#132238]/85 hover:bg-[#162740] border border-[#1e3456] rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative"
            >
              {/* Icon */}
              <div className="mb-2 flex items-center justify-center">
                {stat.iconType === 'trophy' && (
                  <span className="text-3xl sm:text-4xl" role="img" aria-label="Trophy">
                    🏆
                  </span>
                )}
                {stat.iconType === 'youtube' && (
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0080ff] flex items-center justify-center shadow-md">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                )}
                {stat.iconType === 'books' && (
                  <span className="text-3xl sm:text-4xl" role="img" aria-label="Books">
                    📚
                  </span>
                )}
                {stat.iconType === 'smiley' && (
                  <span className="text-3xl sm:text-4xl" role="img" aria-label="Happy Student">
                    😋
                  </span>
                )}
              </div>

              {/* Number Value */}
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F2B632] tracking-tight mt-1 mb-1 font-mono">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest">
                {stat.label}
              </div>

              {/* Channel verification link if YouTube */}
              {stat.link && (
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[11px] font-semibold text-slate-400 hover:text-[#F2B632] flex items-center gap-1 transition-colors"
                >
                  <span>Visit Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* 3 Student Testimonial Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#132238]/85 hover:bg-[#162740] border border-[#1e3456] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
            >
              <div>
                {/* Top header: Avatar + Name/Class + Star */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-xs text-[#F2B632] font-medium mt-0.5">
                        {t.classInfo}
                      </p>
                    </div>
                  </div>

                  {/* Top-right subtle star */}
                  <Star className="w-5 h-5 text-slate-600 fill-slate-700/60 shrink-0 mt-1" />
                </div>

                {/* Score / Grade (Monospace Gold) */}
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#F2B632] tracking-wide my-4">
                  {t.score}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-300 italic leading-relaxed font-normal">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Contact & Inquiry Helpline Bar */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#132238]/90 border border-[#1e3456] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F2B632] text-[#0c1527] flex items-center justify-center font-bold shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Direct Contact & Admissions Help:</div>
              <div className="text-xs text-slate-300 flex flex-wrap gap-2 items-center mt-0.5">
                <span>Call:</span>
                <a href="tel:03235792758" className="font-mono font-bold text-[#F2B632] hover:underline">0323-5792758</a>
                <span>•</span>
                <a href="tel:03100878172" className="font-mono font-bold text-[#F2B632] hover:underline">0310-0878172</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/923235792758?text=Hello%20Akbar%20Academy,%20I%20want%20to%20inquire%20about%20board%20preparation%20and%20notes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
            {onNavigate && (
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 rounded-xl bg-[#1e3456] hover:bg-[#284674] text-white text-xs font-bold transition-colors"
              >
                Contact Details
              </button>
            )}
          </div>
        </div>

        {/* Small Discreet Verification / Policy Note */}
        <div className="mt-6 text-center">
          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 flex-wrap">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F2B632]" />
            <span>500+ A/A+ Scorers &amp; 98% Satisfaction are based on enrolled student feedback. Student feedback published with consent.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
