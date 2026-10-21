import React, { useState } from 'react';
import { 
  BellRing, 
  Search, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  Filter 
} from 'lucide-react';
import { announcementsData, EducationalAnnouncement, AnnouncementCategory } from '../data/announcementsData';
import { ActivePage } from './Header';

interface UpdatesProps {
  onNavigate?: (page: ActivePage) => void;
}

export const UpdatesSection: React.FC<UpdatesProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featured = announcementsData.find((a) => a.isFeatured);

  const filteredAnnouncements = announcementsData.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        item.headline.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.sourceName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const categories = [
    'all',
    'FBISE Announcements',
    'Date Sheets',
    'Examination Notifications',
    'Paper Patterns',
    'Syllabus Updates',
    'Entry Tests',
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E0E7EF]" id="updates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E88724]/10 text-[#E88724] text-xs font-bold uppercase tracking-wider mb-3">
            <BellRing className="w-4 h-4 text-[#E88724]" />
            Official Educational Feed
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Latest Educational Updates & Notifications
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Verified Federal Board FBISE date sheets, cognitive paper pattern notifications, and university admission announcements.
          </p>
        </div>

        {/* Featured Announcement Top Banner */}
        {featured && (
          <div className="max-w-4xl mx-auto mb-10 bg-gradient-to-br from-[#0B2348] to-[#123B70] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#123B70] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F2B632] text-[#0B2348] font-black text-[10px] uppercase px-4 py-1 rounded-bl-xl shadow-xs">
              ★ Featured High-Priority Notice
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-[#E88724] text-white px-2.5 py-0.5 rounded-full font-bold">
                  {featured.category}
                </span>
                <span className="text-[#A6C0DE] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.publicationDate}
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {featured.verificationStatus}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black leading-snug">
                {featured.headline}
              </h3>

              <p className="text-xs sm:text-sm text-[#D3E0EE] leading-relaxed max-w-3xl">
                {featured.summary}
              </p>

              {/* Bullet Points */}
              <div className="pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E0E7EF]">
                  {featured.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2B632] mt-1.5 shrink-0"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs">
                <span className="text-[#A6C0DE]">Source: {featured.sourceName}</span>
                <a
                  href={featured.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#F2B632] hover:bg-[#E89B19] text-[#0B2348] font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Original Board Source</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Search & Category Filter */}
        <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E0E7EF] mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#637083]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notifications by keyword or board topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#123B70] text-white'
                    : 'bg-white text-[#637083] border border-[#E0E7EF] hover:bg-[#F1F6FC]'
                }`}
              >
                {cat === 'all' ? 'All Updates' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Announcements Feed List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-md transition-all p-6 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#F1F6FC] text-[#123B70]">
                    {item.category}
                  </span>
                  {item.isImportant && (
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#FFF8E8] text-[#8A5E04] border border-[#F2B632]/50">
                      ★ Important Update
                    </span>
                  )}
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.verificationStatus}
                  </span>
                </div>

                <div className="text-xs text-[#637083] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.publicationDate}</span>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#0B2348]">
                {item.headline}
              </h4>

              <p className="text-xs sm:text-sm text-[#637083] leading-relaxed">
                {item.summary}
              </p>

              {item.details && item.details.length > 0 && (
                <ul className="list-disc pl-4 space-y-1 text-xs text-[#172235] bg-[#F8FAFC] p-3 rounded-xl border border-[#E0E7EF]">
                  {item.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              )}

              <div className="pt-3 border-t border-[#E0E7EF] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-[#637083]">Source: {item.sourceName}</span>
                <a
                  href={item.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#123B70] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Original Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
