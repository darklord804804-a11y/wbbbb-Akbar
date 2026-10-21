import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText, 
  Layers, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Tag 
} from 'lucide-react';
import { studyResourcesData, StudyResource, ResourceType } from '../data/resourcesData';
import { StudyResourceModal } from './StudyResourceModal';
import { ActivePage } from './Header';

interface ResourceLibraryProps {
  onNavigate?: (page: ActivePage) => void;
  defaultClassFilter?: string;
}

export const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ 
  onNavigate,
  defaultClassFilter = 'all' 
}) => {
  const [selectedClass, setSelectedClass] = useState<string>(defaultClassFilter);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalResource, setActiveModalResource] = useState<StudyResource | null>(null);

  // Filter items
  const filteredResources = studyResourcesData.filter((item) => {
    // Class filter
    if (selectedClass !== 'all' && item.classId !== selectedClass) return false;
    // Subject filter
    if (selectedSubject !== 'all' && item.subject.toLowerCase() !== selectedSubject.toLowerCase()) return false;
    // Type filter
    if (selectedType !== 'all' && item.type !== selectedType) return false;
    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubject = item.subject.toLowerCase().includes(q);
      const matchChapter = item.chapter.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSubject && !matchChapter && !matchTags) return false;
    }
    return true;
  });

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E0E7EF]" id="study-resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-[#E88724]" />
            FBISE Academic Repository
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Notes & Study Materials
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Structured chapter summaries, formula sheets, SLO solved questions, and marking schemes curated for Federal Board students.
          </p>
        </div>

        {/* Filter Controls Box */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-[#E0E7EF] mb-8 space-y-4">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-[#637083]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, chapter name (e.g. Kinematics, Equilibrium, Mole), or keyword..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123B70] text-sm text-[#172235]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-xs text-[#637083] hover:text-[#172235]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            
            {/* Class Filter */}
            <div>
              <label className="block text-xs font-bold text-[#637083] uppercase mb-1">
                Filter by Class
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-medium text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
              >
                <option value="all">All Classes (9, 10, 11, 12)</option>
                <option value="class-9">Class 9 (SSC-I)</option>
                <option value="class-10">Class 10 (SSC-II)</option>
                <option value="class-11">Class 11 (HSSC-I)</option>
                <option value="class-12">Class 12 (HSSC-II)</option>
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-xs font-bold text-[#637083] uppercase mb-1">
                Filter by Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-medium text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
              >
                <option value="all">All Subjects</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
              </select>
            </div>

            {/* Resource Type Filter */}
            <div>
              <label className="block text-xs font-bold text-[#637083] uppercase mb-1">
                Filter by Resource Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-medium text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
              >
                <option value="all">All Types</option>
                <option value="Chapter Notes">Chapter Notes</option>
                <option value="Solved Exercises">Solved Exercises</option>
                <option value="Formula Sheets">Formula Sheets</option>
                <option value="Paper Patterns">Paper Patterns</option>
                <option value="Short Questions">Short Questions</option>
                <option value="Important MCQs">Important MCQs</option>
              </select>
            </div>

          </div>

          {/* Active Filter Pills Bar */}
          <div className="flex flex-wrap items-center justify-between text-xs text-[#637083] pt-2 border-t border-[#E0E7EF]">
            <span>
              Showing <strong>{filteredResources.length}</strong> matching educational study materials
            </span>
            {(selectedClass !== 'all' || selectedSubject !== 'all' || selectedType !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedClass('all');
                  setSelectedSubject('all');
                  setSelectedType('all');
                  setSearchQuery('');
                }}
                className="text-[#123B70] font-bold hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-lg transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#F1F6FC] text-[#123B70] border border-[#D3E0EE]">
                      {res.classLabel} • {res.subject}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      {res.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0B2348] leading-snug mb-1 hover:text-[#123B70] transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#637083] mb-2">{res.chapter}</p>
                  <p className="text-xs text-[#637083] line-clamp-3 leading-relaxed mb-4">
                    {res.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {res.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] bg-[#F8FAFC] text-[#637083] px-2 py-0.5 rounded border border-[#E0E7EF]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Area */}
                <div className="pt-4 border-t border-[#E0E7EF] space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#637083]">
                    <span>Format: {res.format}</span>
                    <span>{res.fileSizeEstimate}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => setActiveModalResource(res)}
                      className="py-2.5 px-3 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Study & Read</span>
                    </button>

                    <button
                      onClick={() => setActiveModalResource(res)}
                      className="py-2.5 px-3 rounded-xl border border-[#D3E0EE] bg-white hover:bg-[#F1F6FC] text-[#123B70] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#E88724]" />
                      <span>Get Material</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State as explicitly specified in Section 11 */
          <div className="bg-white rounded-2xl border border-[#E0E7EF] p-12 text-center max-w-lg mx-auto shadow-xs space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F1F6FC] text-[#123B70] flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 opacity-60" />
            </div>
            <h4 className="text-lg font-bold text-[#0B2348]">No Resources Match Your Selection</h4>
            <p className="text-xs text-[#637083] leading-relaxed">
              No resources are available for this specific selection yet. Please check back for upcoming study materials or reset your search filters.
            </p>
            <button
              onClick={() => {
                setSelectedClass('all');
                setSelectedSubject('all');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors cursor-pointer"
            >
              Reset Filters & Show All
            </button>
          </div>
        )}

        {/* Modal Viewer */}
        {activeModalResource && (
          <StudyResourceModal
            resource={activeModalResource}
            onClose={() => setActiveModalResource(null)}
          />
        )}

      </div>
    </section>
  );
};
