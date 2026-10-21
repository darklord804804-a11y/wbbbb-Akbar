import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Target, 
  BellRing, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Award 
} from 'lucide-react';
import { ActivePage } from './Header';

interface AboutAcademyProps {
  onNavigate: (page: ActivePage) => void;
  onOpenDisclaimer: () => void;
}

export const AboutAcademy: React.FC<AboutAcademyProps> = ({ onNavigate, onOpenDisclaimer }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E0E7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Academy Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#E88724]" />
              Dedicated Educational Mission
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight leading-tight">
              About Akbar Study Smart Academy
            </h2>

            <div className="space-y-4 text-base text-[#637083] leading-relaxed">
              <p>
                <strong className="text-[#172235]">Akbar Study Smart Academy</strong> is an educational platform dedicated to helping students achieve their academic goals. We provide exam-focused study materials, online learning resources, subject explanations, practice tests, and academic updates to support students throughout their preparation.
              </p>
              <p>
                Our goal is to make learning more accessible, understandable, and organized. Through structured resources and regular practice, we encourage students to build confidence, strengthen their understanding, and prepare for their future opportunities.
              </p>
              <p>
                Whether you are studying in <span className="font-semibold text-[#172235]">Class 9, 10, 11, or 12</span>, preparing for <span className="font-semibold text-[#172235]">FBISE examinations</span>, or exploring university entry tests, our platform helps you find relevant educational resources in one convenient place.
              </p>
            </div>

            {/* Three Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F1F6FC] border border-[#E0E7EF]">
                <div className="w-9 h-9 rounded-lg bg-[#123B70] text-white flex items-center justify-center mb-2.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B2348] text-sm">Organized Study Materials</h4>
                <p className="text-xs text-[#637083] mt-1">Structured notes, formulas, and chapter summaries.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/40">
                <div className="w-9 h-9 rounded-lg bg-[#E88724] text-white flex items-center justify-center mb-2.5">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B2348] text-sm">Exam-Focused Practice</h4>
                <p className="text-xs text-[#637083] mt-1">Interactive MCQ testing engine and past papers.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E0E7EF]">
                <div className="w-9 h-9 rounded-lg bg-[#21865B] text-white flex items-center justify-center mb-2.5">
                  <BellRing className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#0B2348] text-sm">Academic Updates</h4>
                <p className="text-xs text-[#637083] mt-1">Verified date sheets, notifications, and alerts.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('notes')}
                className="px-6 py-3 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Resources</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('results')}
                className="px-5 py-3 rounded-xl bg-[#FFF8E8] hover:bg-[#FDE8BD] border border-[#F2B632] text-[#0B2348] font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#E88724]" />
                <span>Our Results & Testimonials</span>
              </button>

              <button
                onClick={onOpenDisclaimer}
                className="px-4 py-3 rounded-xl text-xs font-semibold text-[#637083] hover:text-[#123B70] transition-colors flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-[#21865B]" />
                <span>Read Institutional Disclaimer</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition with Educational Graphic */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-[#F1F6FC] to-[#E5EDF7] rounded-3xl p-6 sm:p-8 border border-[#D3E0EE] shadow-lg">
              
              {/* Badge top */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D3E0EE]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E88724]"></div>
                  <span className="font-bold text-xs uppercase tracking-wider text-[#0B2348]">
                    Student-Centric Architecture
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#637083]">Federal Board Focus</span>
              </div>

              {/* Graphical Layout representation */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-xs border border-[#E0E7EF] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#123B70]/10 text-[#123B70] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#172235] text-sm">SLO Concept Clarity</h5>
                    <p className="text-xs text-[#637083]">Aligned with modern FBISE question papers avoiding blind memorization.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-xs border border-[#E0E7EF] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E88724]/15 text-[#E88724] flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#172235] text-sm">Regular Self-Testing</h5>
                    <p className="text-xs text-[#637083]">Instant diagnostic scorecards with complete answer explanations.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-xs border border-[#E0E7EF] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#21865B]/15 text-[#21865B] flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#172235] text-sm">Entry Test Bridge</h5>
                    <p className="text-xs text-[#637083]">Smooth transition from intermediate F.Sc to NUST NET, MDCAT & ECAT.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Note */}
              <div className="mt-6 pt-4 border-t border-[#D3E0EE] text-center">
                <p className="text-xs italic text-[#637083]">
                  "Empowering students across Pakistan to approach examinations with clarity, confidence, and strategy."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
