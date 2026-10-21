import React from 'react';
import { X, ShieldCheck, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-popup-backdrop">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E0E7EF] overflow-hidden flex flex-col max-h-[90vh] animate-popup-content">
        
        {/* Header */}
        <div className="bg-[#0B2348] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#123B70]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#F2B632]" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Important Legal & Content Disclaimers</h3>
              <p className="text-xs text-[#A6C0DE]">Akbar Study Smart Academy Policies</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#172235] leading-relaxed">
          
          <div className="p-4 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/50 text-[#8A5E04] space-y-2">
            <h4 className="font-bold flex items-center gap-1.5 text-[#0B2348]">
              <AlertCircle className="w-4 h-4 text-[#E88724]" />
              <span>Independent Platform Status</span>
            </h4>
            <p>
              {siteConfig.disclaimer}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#0B2348] text-sm">Key Principles of Our Educational Resources:</h4>
            
            <div className="space-y-2">
              <div className="p-3 rounded-lg border border-[#E0E7EF] bg-[#F8FAFC]">
                <strong className="text-[#123B70]">No Guaranteed Exam Leaks: </strong>
                All guess papers, model questions, and revision notes are prepared by experienced educators based on past board trends and SLO curriculum guidelines. They are intended solely for revision and do not represent leaked or officially guaranteed exam papers.
              </div>

              <div className="p-3 rounded-lg border border-[#E0E7EF] bg-[#F8FAFC]">
                <strong className="text-[#123B70]">Official Board Announcements: </strong>
                Examination dates, roll number slips, syllabus modifications, and fee deadlines must be confirmed through the official Federal Board website (<a href="https://fbise.edu.pk" target="_blank" rel="noopener noreferrer" className="text-[#123B70] underline font-bold">fbise.edu.pk</a>).
              </div>

              <div className="p-3 rounded-lg border border-[#E0E7EF] bg-[#F8FAFC]">
                <strong className="text-[#123B70]">University Admissions & Merit Lists: </strong>
                Closing merits, test dates, and quotas are sourced from historical university admissions disclosures. Students should refer to individual university portals for active session schedules.
              </div>

              <div className="p-3 rounded-lg border border-[#E0E7EF] bg-[#F8FAFC]">
                <strong className="text-[#123B70]">Student Privacy & Data Protection: </strong>
                Student registration data collected via our website is used strictly for academic guidance, test schedule notifications, and learning resource updates. We do not sell or share student information with unauthorized third parties.
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
