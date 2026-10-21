import React, { useState } from 'react';
import { 
  Video, 
  Youtube, 
  Play, 
  Clock, 
  BookOpen, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { lecturesData, VideoLecture } from '../data/lecturesData';
import { siteConfig } from '../data/siteConfig';

export const LectureSection: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [activeLecture, setActiveLecture] = useState<VideoLecture | null>(null);

  const filteredLectures = lecturesData.filter((lec) => {
    if (selectedClass === 'all') return true;
    return lec.classId === selectedClass;
  });

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E0E7EF]" id="lectures">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0000]/10 text-[#FF0000] text-xs font-bold uppercase tracking-wider mb-3">
            <Youtube className="w-4 h-4 text-[#FF0000]" />
            Official YouTube Learning Channel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Learn Through Video Lectures
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Revisit difficult concepts, study at your own pace, and strengthen your understanding with subject-focused video lessons.
          </p>
        </div>

        {/* Featured YouTube Channel Banner Card */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-[#0B2348] via-[#123B70] to-[#2166A5] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#FF0000] shadow-md shrink-0">
              <Youtube className="w-10 h-10" />
            </div>
            <div>
              <div className="inline-block bg-[#F2B632] text-[#0B2348] text-[10px] font-black px-2 py-0.5 rounded uppercase mb-1">
                Official Academy Channel
              </div>
              <h3 className="text-xl sm:text-2xl font-black">Akbar Study Smart Academy</h3>
              <p className="text-xs sm:text-sm text-[#D3E0EE] mt-0.5 max-w-md">
                Subscribe for weekly Federal Board chapter explanations, SLO numerical solutions, and board exam tips.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.socials.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#F2B632] hover:bg-[#E89B19] text-[#0B2348] font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Youtube className="w-5 h-5 text-[#FF0000]" />
            <span>Visit Our YouTube Channel</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Lectures' },
            { id: 'class-9', label: 'Class 9' },
            { id: 'class-10', label: 'Class 10' },
            { id: 'class-11', label: 'Class 11' },
            { id: 'class-12', label: 'Class 12' },
            { id: 'entry-test', label: 'Entry Test' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedClass(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedClass === tab.id
                  ? 'bg-[#123B70] text-white shadow-sm'
                  : 'bg-white text-[#637083] border border-[#E0E7EF] hover:bg-[#F1F6FC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Lectures Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLectures.map((lec) => (
            <div
              key={lec.id}
              className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Thumbnail Representation Graphic */}
              <div className="relative bg-gradient-to-br from-[#0B2348] to-[#1E4D8C] h-44 flex flex-col items-center justify-center text-white p-6 text-center">
                <span className="absolute top-3 left-3 bg-[#E88724] text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  {lec.classLabel}
                </span>

                <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-xs text-[10px] font-semibold text-white px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F2B632]" />
                  {lec.duration}
                </span>

                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-0.5 fill-white" />
                </div>

                <div className="font-bold text-sm tracking-wide text-white line-clamp-1">{lec.subject}</div>
                <div className="text-[11px] text-[#A6C0DE] line-clamp-1">{lec.chapter}</div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0B2348] mb-1.5 leading-snug">
                    {lec.title}
                  </h4>
                  <p className="text-xs text-[#637083] line-clamp-2 leading-relaxed mb-3">
                    {lec.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#123B70]">
                      Key Outcomes:
                    </span>
                    <ul className="space-y-0.5">
                      {lec.learningOutcomes.map((o, idx) => (
                        <li key={idx} className="text-[11px] text-[#637083] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#21865B] shrink-0" />
                          <span className="truncate">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Watch Button */}
                <div className="pt-3 border-t border-[#E0E7EF]">
                  <a
                    href={siteConfig.socials.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Youtube className="w-4 h-4 text-[#FF0000]" />
                    <span>Watch Lesson on YouTube</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
