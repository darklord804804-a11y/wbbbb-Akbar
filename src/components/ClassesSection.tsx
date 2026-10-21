import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  FileText, 
  CheckSquare, 
  ArrowRight, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { classesData, ClassLevel } from '../data/classesData';
import { ClassDetailModal } from './ClassDetailModal';
import { ActivePage } from './Header';

interface ClassesSectionProps {
  onNavigate: (page: ActivePage) => void;
  selectedClassId?: string | null;
}

export const ClassesSection: React.FC<ClassesSectionProps> = ({ 
  onNavigate,
  selectedClassId,
}) => {
  const [modalClass, setModalClass] = useState<ClassLevel | null>(
    selectedClassId 
      ? classesData.find(c => c.id === selectedClassId) || null 
      : null
  );

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E0E7EF]" id="classes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4 text-[#E88724]" />
            FBISE Federal Board Programs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Explore Classes 9–12
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Find subject resources, lectures, notes, and practice materials for your class.
          </p>
        </div>

        {/* 4 Large Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {classesData.map((cls) => {
            return (
              <div
                key={cls.id}
                className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Banner / Badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#123B70] text-white flex items-center justify-center font-black text-xl shadow-md group-hover:bg-[#E88724] transition-colors">
                      {cls.numeric}
                    </span>
                    <span className="text-[11px] font-bold text-[#2166A5] bg-[#F1F6FC] px-2.5 py-1 rounded-full border border-[#D3E0EE]">
                      {cls.shortTitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2348] tracking-tight group-hover:text-[#123B70] transition-colors">
                    {cls.title}
                  </h3>
                  <p className="text-xs font-medium text-[#E88724] mt-0.5">
                    {cls.stage}
                  </p>

                  <p className="text-xs text-[#637083] leading-relaxed mt-3 line-clamp-3">
                    {cls.description}
                  </p>

                  {/* Highlights Bullet Badges */}
                  <div className="mt-4 pt-3 border-t border-[#E0E7EF] space-y-1.5">
                    <div className="text-[11px] font-bold text-[#172235] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#123B70]"></span>
                      {cls.subjects.length} Core Subjects Covered
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cls.subjects.slice(0, 4).map((s) => (
                        <span key={s.id} className="text-[10px] bg-[#F8FAFC] text-[#637083] px-2 py-0.5 rounded border border-[#E0E7EF]">
                          {s.name}
                        </span>
                      ))}
                      {cls.subjects.length > 4 && (
                        <span className="text-[10px] bg-[#F1F6FC] text-[#123B70] font-semibold px-1.5 py-0.5 rounded">
                          +{cls.subjects.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Links & CTA */}
                <div className="p-6 pt-4 bg-[#F8FAFC]/50 border-t border-[#E0E7EF] mt-6 space-y-3">
                  {/* Secondary Quick Action Links */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-[#123B70]">
                    <button
                      onClick={() => setModalClass(cls)}
                      className="text-left py-1 hover:underline flex items-center gap-1 text-[#2166A5] cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#123B70]" />
                      <span>View Subjects</span>
                    </button>
                    <button
                      onClick={() => onNavigate('notes')}
                      className="text-left py-1 hover:underline flex items-center gap-1 text-[#2166A5] cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#21865B]" />
                      <span>Download Notes</span>
                    </button>
                    <button
                      onClick={() => onNavigate('resources')}
                      className="text-left py-1 hover:underline flex items-center gap-1 text-[#2166A5] cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5 text-[#E88724]" />
                      <span>Watch Lectures</span>
                    </button>
                    <button
                      onClick={() => onNavigate('test-series')}
                      className="text-left py-1 hover:underline flex items-center gap-1 text-[#2166A5] cursor-pointer"
                    >
                      <CheckSquare className="w-3.5 h-3.5 text-[#123B70]" />
                      <span>Practice MCQs</span>
                    </button>
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    onClick={() => setModalClass(cls)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#0B2348]"
                  >
                    <span>Explore Class</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive */}
        {modalClass && (
          <ClassDetailModal
            classLevel={modalClass}
            onClose={() => setModalClass(null)}
            onNavigate={onNavigate}
          />
        )}

      </div>
    </section>
  );
};
