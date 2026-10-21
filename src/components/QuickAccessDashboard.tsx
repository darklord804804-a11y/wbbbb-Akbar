import React from 'react';
import { 
  GraduationCap, 
  Video, 
  BookOpen, 
  CheckSquare, 
  FileText, 
  ArrowUpRight 
} from 'lucide-react';
import { ActivePage } from './Header';

interface QuickAccessProps {
  onNavigate: (page: ActivePage) => void;
}

export const QuickAccessDashboard: React.FC<QuickAccessProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'class-9',
      title: 'Class 9',
      subtitle: 'SSC Part 1',
      icon: GraduationCap,
      target: 'class-9' as ActivePage,
      color: '#123B70',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'class-10',
      title: 'Class 10',
      subtitle: 'SSC Part 2 (Matric)',
      icon: GraduationCap,
      target: 'class-10' as ActivePage,
      color: '#2166A5',
      bgColor: 'bg-sky-50',
    },
    {
      id: 'class-11',
      title: 'Class 11',
      subtitle: 'HSSC-I (1st Year)',
      icon: GraduationCap,
      target: 'class-11' as ActivePage,
      color: '#E88724',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'class-12',
      title: 'Class 12',
      subtitle: 'HSSC-II (2nd Year)',
      icon: GraduationCap,
      target: 'class-12' as ActivePage,
      color: '#F2B632',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 'video-lectures',
      title: 'Video Lectures',
      subtitle: 'YouTube Lessons',
      icon: Video,
      target: 'resources' as ActivePage,
      color: '#FF0000',
      bgColor: 'bg-red-50',
    },
    {
      id: 'notes-mcqs',
      title: 'Notes & MCQs',
      subtitle: 'Chapter Summaries',
      icon: BookOpen,
      target: 'notes' as ActivePage,
      color: '#21865B',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'test-series',
      title: 'Test Series',
      subtitle: 'Interactive Practice',
      icon: CheckSquare,
      target: 'test-series' as ActivePage,
      color: '#123B70',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'past-papers',
      title: 'Past Papers',
      subtitle: '2020–2025 FBISE',
      icon: FileText,
      target: 'past-papers' as ActivePage,
      color: '#637083',
      bgColor: 'bg-slate-50',
    },
  ];

  return (
    <section className="bg-[#F1F6FC] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E0E7EF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2348] tracking-tight">
              What Do You Want to Study Today?
            </h2>
            <p className="text-sm text-[#637083] mt-1">
              Quick access to board curriculum materials, lecture archives, and assessment series.
            </p>
          </div>
          <span className="mt-2 sm:mt-0 text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#123B70] border border-[#E0E7EF] shadow-2xs">
            Instant Resource Navigation
          </span>
        </div>

        {/* 8 Compact Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={() => onNavigate(card.target)}
                className="group flex flex-col items-center justify-between p-4 bg-white rounded-xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center relative cursor-pointer"
              >
                <div className="absolute top-2 right-2 text-[#637083] opacity-0 group-hover:opacity-100 group-hover:text-[#123B70] transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${card.bgColor} transition-transform group-hover:scale-110`}
                  style={{ color: card.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="w-full">
                  <h3 className="font-bold text-[#172235] group-hover:text-[#123B70] text-sm leading-tight transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-[#637083] mt-0.5 truncate">
                    {card.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
