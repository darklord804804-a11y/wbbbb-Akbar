import React, { useState } from 'react';
import { 
  Sparkles, 
  AlertTriangle, 
  FileText, 
  Download, 
  Eye, 
  HelpCircle, 
  Layers, 
  Clock, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import { guessPapersData, GuessPaper, guessPapersDisclaimer } from '../data/guessPapersData';
import { ActivePage } from './Header';

interface GuessPapersProps {
  onNavigate?: (page: ActivePage) => void;
}

export const GuessPapersSection: React.FC<GuessPapersProps> = ({ onNavigate }) => {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [activePaperModal, setActivePaperModal] = useState<GuessPaper | null>(null);

  const filteredPapers = guessPapersData.filter((paper) => {
    if (selectedClass === 'all') return true;
    return paper.classId === selectedClass;
  });

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E0E7EF]" id="guess-papers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E88724]/10 text-[#E88724] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#E88724]" />
            High-Priority Revision Materials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Guess Papers & Important Questions
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Focus your revision with organized practice materials and high-priority topics.
          </p>
        </div>

        {/* Mandatory Transparency Notice Box as required by Section 12 & 22 */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-[#FFF8E8] border border-[#F2B632] flex items-start gap-4 shadow-xs">
          <div className="w-9 h-9 rounded-xl bg-[#F2B632] text-[#0B2348] flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-[#8A5E04] uppercase tracking-wide">
              Important Examination Notice
            </h4>
            <p className="text-xs sm:text-sm text-[#8A5E04] mt-1 leading-relaxed font-medium">
              "{guessPapersDisclaimer}"
            </p>
            <p className="text-[11px] text-[#A27108] mt-1">
              Akbar Study Smart Academy does not make unrealistic claims such as "100% leaked questions" or "guaranteed marks". Our papers compile the highest-yield SLO conceptual topics identified through multi-year past paper analysis.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Classes' },
            { id: 'class-9', label: 'Class 9 (SSC-I)' },
            { id: 'class-10', label: 'Class 10 (SSC-II)' },
            { id: 'class-11', label: 'Class 11 (1st Year)' },
            { id: 'class-12', label: 'Class 12 (2nd Year)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedClass(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === tab.id
                  ? 'bg-[#123B70] text-white shadow-sm'
                  : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF] hover:text-[#172235]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Guess Papers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#E88724]/60 shadow-xs hover:shadow-xl transition-all p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#123B70] text-white">
                    {paper.classLabel} • {paper.subject}
                  </span>
                  <span className="text-xs font-bold text-[#E88724] bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    {paper.academicYear} Board SLO
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B2348] mt-2 mb-2 leading-snug">
                  {paper.title}
                </h3>

                <p className="text-xs text-[#637083] mb-4">
                  Examination Type: <strong>{paper.examinationType}</strong> • Format: {paper.format}
                </p>

                {/* Priority Topics Focus */}
                <div className="space-y-2 mb-5">
                  <div className="text-[11px] font-bold text-[#172235] uppercase tracking-wider">
                    High-Priority Chapter Topics:
                  </div>
                  <ul className="space-y-1.5">
                    {paper.priorityTopics.map((topic, i) => (
                      <li key={i} className="text-xs text-[#637083] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E88724] mt-1.5 shrink-0"></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-[#E0E7EF] flex items-center justify-between gap-3">
                <button
                  onClick={() => setActivePaperModal(paper)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Paper & Questions</span>
                </button>

                <button
                  onClick={() => setActivePaperModal(paper)}
                  className="py-2.5 px-4 rounded-xl border border-[#D3E0EE] bg-[#F8FAFC] hover:bg-white text-[#123B70] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#E88724]" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Viewing Full Guess Paper */}
        {activePaperModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-popup-backdrop">
            <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E0E7EF] overflow-hidden flex flex-col max-h-[90vh] animate-popup-content">
              
              <div className="bg-[#0B2348] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#123B70]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#E88724] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {activePaperModal.classLabel} Practice Paper
                    </span>
                    <span className="text-xs text-[#A6C0DE] font-medium">{activePaperModal.subject}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {activePaperModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePaperModal(null)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="p-4 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/50 text-xs text-[#8A5E04]">
                  <strong>Notice: </strong>
                  {guessPapersDisclaimer}
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-[#0B2348]">
                    Featured Sample Questions for High-Yield Revision:
                  </h4>

                  {activePaperModal.sampleQuestions.map((sq, i) => (
                    <div key={i} className="p-4 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-[#123B70]">
                        <span>{sq.section}</span>
                        <span className="bg-white px-2 py-0.5 rounded border border-[#D3E0EE]">{sq.marks} Marks</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#172235] font-medium leading-relaxed">
                        {sq.questionText}
                      </p>
                      <div className="text-[11px] text-[#637083]">
                        Evaluation Category: <span className="font-semibold text-[#E88724]">{sq.sloCategory}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#F1F6FC] border border-[#D3E0EE] text-xs text-[#123B70]">
                  <strong className="block mb-1 font-bold">Preparation Strategy:</strong>
                  <p className="text-[#637083]">{activePaperModal.preparationAdvice}</p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex items-center justify-between">
                <span className="text-xs text-[#637083]">Akbar Study Smart Academy Revision Hub</span>
                <button
                  onClick={() => setActivePaperModal(null)}
                  className="px-5 py-2 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] cursor-pointer"
                >
                  Close Paper
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
