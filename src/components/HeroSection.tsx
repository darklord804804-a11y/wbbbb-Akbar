import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Award, 
  Video, 
  Check
} from 'lucide-react';
import { AcademyLogo } from './AcademyLogo';
import { ActivePage } from './Header';

interface HeroSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F6FC] via-[#F8FAFC] to-white pt-8 pb-16 lg:py-20 border-b border-[#E0E7EF]">
      {/* Subtle academic background pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#D7E4F2" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#2F80C3]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-5 right-10 w-96 h-96 bg-[#F2B632]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B70]/10 border border-[#123B70]/20 text-[#123B70] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E88724]"></span>
              WELCOME TO AKBAR STUDY SMART ACADEMY
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0B2348] tracking-tight leading-[1.15]">
              Study Smart.{' '}
              <span className="text-[#2166A5]">Prepare Better.</span>{' '}
              <span className="relative inline-block text-[#123B70]">
                Achieve More.
                <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#F2B632]/35 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#637083] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your learning partner for <span className="font-semibold text-[#172235]">FBISE Class 9, 10, 11, and 12</span>. Explore expert-guided lectures, exam-focused notes, MCQs, test series, past papers, and important academic updates—all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('notes')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Study Resources</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('register')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#F2B632] hover:bg-[#E89B19] text-[#0B2348] font-bold text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#0B2348]" />
                <span>Register Now</span>
              </button>
            </div>

            {/* Three Trust Indicators */}
            <div className="pt-4 border-t border-[#E0E7EF] grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-[#123B70]/10 flex items-center justify-center text-[#123B70]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#172235]">Classes 9–12</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-[#E88724]/15 flex items-center justify-center text-[#E88724]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#172235]">Exam-Focused</span>
              </div>

              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-full bg-[#21865B]/15 flex items-center justify-center text-[#21865B]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#172235]">Online Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academy Brand Element & Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Academy Card */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#E0E7EF] p-6 sm:p-8 overflow-hidden">
              {/* Corner Gold Ribbon Accent */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F2B632] to-[#E88724] text-[#0B2348] text-[11px] font-extrabold uppercase px-4 py-1 rounded-bl-xl shadow-xs">
                FBISE Federal Board
              </div>

              {/* Main Brand Logo Display */}
              <div className="flex flex-col items-center text-center mt-2 mb-6">
                <div className="p-3 bg-[#F1F6FC] rounded-2xl border border-[#D3E0EE] shadow-inner mb-3">
                  <img
                    src="/assets/academy-logo.svg"
                    alt="Akbar Study Smart Academy Official Brand Mark"
                    className="h-32 sm:h-36 w-auto object-contain mx-auto"
                  />
                </div>
                <p className="text-xs text-[#637083] font-medium max-w-xs">
                  Official Academic Learning Platform for Federal Board Examinations & Entry Test Guidance
                </p>
              </div>

              {/* Interactive Quick Jumps Inside Card */}
              <div className="space-y-2.5 pt-2 border-t border-[#E0E7EF]">
                <div className="text-[11px] font-bold text-[#637083] uppercase tracking-wider text-left">
                  Quick Focus Channels
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigate('test-series')}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF] text-left transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#123B70]/10 text-[#123B70] flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#172235] group-hover:text-[#123B70]">Online MCQs</div>
                      <div className="text-[10px] text-[#637083]">Practice Tests</div>
                    </div>
                  </button>

                  <button
                    onClick={() => onNavigate('guess-papers')}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF] text-left transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E88724]/15 text-[#E88724] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#172235] group-hover:text-[#E88724]">Guess Papers</div>
                      <div className="text-[10px] text-[#637083]">2026 Board SLO</div>
                    </div>
                  </button>

                  <button
                    onClick={() => onNavigate('past-papers')}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF] text-left transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#21865B]/15 text-[#21865B] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#172235] group-hover:text-[#21865B]">Past Papers</div>
                      <div className="text-[10px] text-[#637083]">2020–2025 Archive</div>
                    </div>
                  </button>

                  <button
                    onClick={() => onNavigate('university-portal')}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF] text-left transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#2F80C3]/15 text-[#2F80C3] flex items-center justify-center shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#172235] group-hover:text-[#2F80C3]">Entry Tests</div>
                      <div className="text-[10px] text-[#637083]">NET / ECAT / MDCAT</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-4 p-2.5 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/40 flex items-center justify-between text-xs text-[#8A5E04]">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E88724] shrink-0" />
                  <span className="font-semibold">SLO Curriculum Oriented</span>
                </div>
                <span className="font-bold text-[11px] bg-white px-2 py-0.5 rounded text-[#0B2348] border border-[#F2B632]/30">
                  FBISE Standards
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
