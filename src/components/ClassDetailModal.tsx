import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Video, 
  CheckSquare, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { ClassLevel, Subject } from '../data/classesData';
import { ActivePage } from './Header';

interface ClassDetailModalProps {
  classLevel: ClassLevel | null;
  onClose: () => void;
  onNavigate: (page: ActivePage) => void;
  onSelectResourceSubject?: (subjectName: string) => void;
}

export const ClassDetailModal: React.FC<ClassDetailModalProps> = ({
  classLevel,
  onClose,
  onNavigate,
  onSelectResourceSubject,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(
    classLevel?.subjects[0] || null
  );
  const [activeTab, setActiveTab] = useState<'chapters' | 'resources' | 'pattern'>('chapters');

  if (!classLevel) return null;

  const currentSubject = selectedSubject || classLevel.subjects[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-popup-backdrop">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-[#E0E7EF] overflow-hidden flex flex-col max-h-[92vh] animate-popup-content">
        
        {/* Modal Header */}
        <div className="bg-[#0B2348] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#123B70]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#F2B632] text-[#0B2348] text-xs font-black px-2.5 py-0.5 rounded uppercase">
                {classLevel.shortTitle}
              </span>
              <span className="text-xs text-[#A6C0DE] font-medium">{classLevel.stage}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {classLevel.title} FBISE Curriculum
            </h3>
            <p className="text-xs sm:text-sm text-[#D3E0EE] mt-1 max-w-2xl">
              {classLevel.description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Quick Jumps */}
        <div className="bg-[#F1F6FC] px-6 py-2.5 border-b border-[#E0E7EF] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-[#123B70]">
            <span>Fast Links for {classLevel.shortTitle}:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onNavigate('notes');
              }}
              className="px-3 py-1 bg-white hover:bg-[#123B70] hover:text-white rounded-md font-semibold text-[#123B70] border border-[#D3E0EE] transition-colors"
            >
              Study Notes
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('test-series');
              }}
              className="px-3 py-1 bg-white hover:bg-[#123B70] hover:text-white rounded-md font-semibold text-[#123B70] border border-[#D3E0EE] transition-colors"
            >
              Practice MCQs
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('guess-papers');
              }}
              className="px-3 py-1 bg-amber-50 hover:bg-[#E88724] hover:text-white rounded-md font-semibold text-amber-800 border border-amber-200 transition-colors"
            >
              Guess Papers 2026
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('past-papers');
              }}
              className="px-3 py-1 bg-white hover:bg-[#123B70] hover:text-white rounded-md font-semibold text-[#123B70] border border-[#D3E0EE] transition-colors"
            >
              Past Papers
            </button>
          </div>
        </div>

        {/* Modal Body: Left Subjects Sidebar + Right Detail View */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Subjects Sidebar */}
          <div className="md:col-span-4 border-r border-[#E0E7EF] bg-[#F8FAFC] p-4 overflow-y-auto max-h-[50vh] md:max-h-none">
            <div className="text-[11px] font-bold text-[#637083] uppercase tracking-wider mb-2 px-1">
              Select Subject ({classLevel.subjects.length} Available)
            </div>
            
            <div className="space-y-1.5">
              {classLevel.subjects.map((sub) => {
                const isSelected = currentSubject?.id === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubject(sub)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#123B70] shadow-sm text-[#123B70] font-bold'
                        : 'bg-white/60 border-transparent hover:bg-white hover:border-[#E0E7EF] text-[#172235]'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold leading-tight">{sub.name}</div>
                      <div className="text-[11px] text-[#637083] mt-0.5">
                        {sub.group} • {sub.chaptersCount} Chapters
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#F1F6FC] font-semibold text-[#123B70]">
                      {sub.totalMarks}M
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Detail View */}
          <div className="md:col-span-8 p-5 sm:p-6 overflow-y-auto max-h-[60vh] md:max-h-none space-y-5">
            {currentSubject && (
              <div>
                {/* Subject Header Card */}
                <div className="bg-[#F1F6FC] p-4 rounded-xl border border-[#D3E0EE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-bold text-[#0B2348]">{currentSubject.name}</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-[#123B70] text-white rounded">
                        {currentSubject.code}
                      </span>
                    </div>
                    <p className="text-xs text-[#637083] mt-1">{currentSubject.description}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold text-[#0B2348]">
                      Total: {currentSubject.totalMarks} Marks
                    </div>
                    <div className="text-[11px] text-[#637083]">
                      Theory: {currentSubject.theoryMarks}M
                      {currentSubject.practicalMarks ? ` | Practical: ${currentSubject.practicalMarks}M` : ''}
                    </div>
                  </div>
                </div>

                {/* Sub-tabs */}
                <div className="flex border-b border-[#E0E7EF] mt-5">
                  <button
                    onClick={() => setActiveTab('chapters')}
                    className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'chapters'
                        ? 'border-[#123B70] text-[#123B70]'
                        : 'border-transparent text-[#637083] hover:text-[#172235]'
                    }`}
                  >
                    Curriculum Chapters ({currentSubject.chapters.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'resources'
                        ? 'border-[#123B70] text-[#123B70]'
                        : 'border-transparent text-[#637083] hover:text-[#172235]'
                    }`}
                  >
                    Available Resources
                  </button>
                  <button
                    onClick={() => setActiveTab('pattern')}
                    className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'pattern'
                        ? 'border-[#123B70] text-[#123B70]'
                        : 'border-transparent text-[#637083] hover:text-[#172235]'
                    }`}
                  >
                    FBISE Exam Scheme
                  </button>
                </div>

                {/* Tab 1: Chapters List */}
                {activeTab === 'chapters' && (
                  <div className="space-y-3 mt-4">
                    {currentSubject.chapters.map((ch) => (
                      <div
                        key={ch.number}
                        className="p-3.5 rounded-xl border border-[#E0E7EF] bg-white hover:border-[#123B70]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#123B70]/10 text-[#123B70] font-bold text-xs flex items-center justify-center shrink-0">
                              {ch.number}
                            </span>
                            <h5 className="font-bold text-[#172235] text-sm">{ch.title}</h5>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-2 ml-8">
                            {ch.focusTopics.map((topic, i) => (
                              <span
                                key={i}
                                className="text-[11px] bg-[#F1F6FC] text-[#2166A5] px-2 py-0.5 rounded font-medium"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="sm:text-right shrink-0 ml-8 sm:ml-0">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            ch.weightage === 'Very High' 
                              ? 'bg-rose-100 text-rose-800'
                              : ch.weightage === 'High'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {ch.weightage} Weight
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Available Resources */}
                {activeTab === 'resources' && (
                  <div className="space-y-3 mt-4">
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E0E7EF]">
                      <h5 className="font-bold text-sm text-[#0B2348] mb-2">Learning Pack for {currentSubject.name}</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <button
                          onClick={() => {
                            onClose();
                            onNavigate('notes');
                          }}
                          className="p-3 rounded-lg bg-white border border-[#E0E7EF] hover:border-[#123B70] text-left flex items-center gap-3 transition-colors cursor-pointer"
                        >
                          <BookOpen className="w-5 h-5 text-[#123B70]" />
                          <div>
                            <div className="font-bold text-[#172235]">Chapter Notes & Solved Qs</div>
                            <div className="text-[#637083]">Interactive study guides</div>
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            onClose();
                            onNavigate('test-series');
                          }}
                          className="p-3 rounded-lg bg-white border border-[#E0E7EF] hover:border-[#123B70] text-left flex items-center gap-3 transition-colors cursor-pointer"
                        >
                          <CheckSquare className="w-5 h-5 text-[#E88724]" />
                          <div>
                            <div className="font-bold text-[#172235]">MCQ Practice Tests</div>
                            <div className="text-[#637083]">Instant grading & solution</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Exam Pattern */}
                {activeTab === 'pattern' && (
                  <div className="space-y-3 mt-4 text-xs">
                    <div className="p-4 rounded-xl bg-white border border-[#E0E7EF] space-y-2">
                      <h5 className="font-bold text-[#0B2348] text-sm">FBISE Paper Format Overview</h5>
                      <p className="text-[#637083]">
                        Exam follows the Federal Board SLO structure divided into 3 mandatory sections:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-[#172235]">
                        <li><strong>Section A (20% Marks):</strong> 12 to 17 MCQs administered via bubble sheet.</li>
                        <li><strong>Section B (50% Marks):</strong> Conceptual short questions testing understanding.</li>
                        <li><strong>Section C (30% Marks):</strong> Long questions with multi-step analytical numericals.</li>
                      </ul>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#637083]">
            Curriculum content updated according to latest FBISE standards.
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors cursor-pointer"
          >
            Close Curriculum View
          </button>
        </div>

      </div>
    </div>
  );
};
