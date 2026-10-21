import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Layers, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { pastPapersData, PastPaper } from '../data/pastPapersData';
import { ActivePage } from './Header';

interface PastPapersProps {
  onNavigate?: (page: ActivePage) => void;
}

export const PastPapersSection: React.FC<PastPapersProps> = ({ onNavigate }) => {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filteredPapers = pastPapersData.filter((paper) => {
    if (selectedClass !== 'all' && paper.classId !== selectedClass) return false;
    if (selectedSubject !== 'all' && paper.subject.toLowerCase() !== selectedSubject.toLowerCase()) return false;
    if (selectedYear !== 'all' && paper.year.toString() !== selectedYear) return false;
    return true;
  });

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E0E7EF]" id="past-papers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-[#21865B]" />
            Official FBISE Board Exam Archives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Past Papers & Paper Patterns
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Practice with authentic Federal Board past papers (2020–2025), official SLO model papers, and standardized marks distribution schemes.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-2xl border border-[#E0E7EF] shadow-xs mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Class */}
            <div>
              <label className="block text-xs font-bold text-[#637083] uppercase mb-1">
                Select Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-semibold text-[#172235]"
              >
                <option value="all">All Classes</option>
                <option value="class-9">Class 9 (SSC-I)</option>
                <option value="class-10">Class 10 (SSC-II)</option>
                <option value="class-11">Class 11 (HSSC-I)</option>
                <option value="class-12">Class 12 (HSSC-II)</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-bold text-[#637083] uppercase mb-1">
                Select Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-semibold text-[#172235]"
              >
                <option value="all">All Subjects</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Mathematics">Mathematics</option>
              </select>
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs font-bold text-[#637083] uppercase mb-1">
                Select Examination Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-semibold text-[#172235]"
              >
                <option value="all">All Years (2020–2025)</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>

          </div>
        </div>

        {/* Past Papers List */}
        <div className="space-y-4">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-md transition-all p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-[#123B70] text-white">
                    {paper.classLabel}
                  </span>
                  <span className="text-xs font-bold text-[#2166A5] bg-[#F1F6FC] px-2 py-0.5 rounded border border-[#D3E0EE]">
                    {paper.subject}
                  </span>
                  <span className="text-xs font-semibold text-[#637083] bg-slate-100 px-2 py-0.5 rounded">
                    {paper.session} • {paper.year}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Solved Solution Included
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B2348]">
                  {paper.title}
                </h3>

                <p className="text-xs text-[#637083] leading-relaxed max-w-3xl">
                  {paper.summary}
                </p>

                {/* Section breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px] text-[#172235]">
                  <div className="p-2 rounded bg-[#F8FAFC] border border-[#E0E7EF]">
                    <strong>Sec A:</strong> {paper.sectionsBreakdown.sectionA}
                  </div>
                  <div className="p-2 rounded bg-[#F8FAFC] border border-[#E0E7EF]">
                    <strong>Sec B:</strong> {paper.sectionsBreakdown.sectionB}
                  </div>
                  <div className="p-2 rounded bg-[#F8FAFC] border border-[#E0E7EF]">
                    <strong>Sec C:</strong> {paper.sectionsBreakdown.sectionC}
                  </div>
                </div>
              </div>

              {/* Actions & Official link */}
              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2 justify-center">
                <a
                  href={paper.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>FBISE Official Portal</span>
                </a>

                <div className="text-[10px] text-center text-[#637083]">
                  Source: {paper.officialSource}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
