import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  BellRing, 
  ExternalLink, 
  Search, 
  Calendar, 
  BookOpen, 
  Check, 
  ArrowRight, 
  Sparkles,
  Stethoscope,
  Laptop,
  Compass,
  FileCheck2,
  Clock
} from 'lucide-react';
import { 
  universityAdmissionsData, 
  entryTestGuidesData, 
  meritListsData, 
  UniversityAdmission, 
  EntryTestGuide, 
  MeritListEntry 
} from '../data/universityData';
import { ActivePage } from './Header';

interface UniversityPortalProps {
  onNavigate?: (page: ActivePage) => void;
  defaultTab?: 'admissions' | 'entry-tests' | 'merit-lists' | 'updates';
}

export const UniversityPortalSection: React.FC<UniversityPortalProps> = ({ 
  onNavigate,
  defaultTab = 'admissions' 
}) => {
  const [activeTab, setActiveTab] = useState<'admissions' | 'entry-tests' | 'merit-lists' | 'updates'>(defaultTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quickFilter, setQuickFilter] = useState('ALL');

  const quickFilterKeys = [
    { label: 'All', value: 'ALL' },
    { label: 'COMSATS', value: 'COMSATS' },
    { label: 'IIUI', value: 'IIUI' },
    { label: 'NUST', value: 'NUST' },
    { label: 'GIKI', value: 'GIKI' },
    { label: 'PIEAS', value: 'PIEAS' },
    { label: 'AIOU', value: 'AIOU' },
    { label: 'VU', value: 'VU' },
    { label: 'NUML', value: 'NUML' },
    { label: 'FJWU', value: 'FJWU' },
    { label: 'UE', value: 'UE' },
    { label: 'UL (UOL)', value: 'UL' },
    { label: 'UK (UoK)', value: 'UK' },
    { label: 'SZABMU MDCAT', value: 'SZABMU' },
    { label: 'BUHS MDCAT', value: 'BUHS' },
    { label: 'NUMS MDCAT', value: 'NUMS' },
    { label: 'PMDC MDCAT', value: 'PMDC' },
  ];

  const filteredUnis = universityAdmissionsData.filter((u) => {
    // Category dropdown filter
    if (selectedCategory !== 'all' && u.category !== selectedCategory) return false;

    // Quick filter buttons
    if (quickFilter !== 'ALL') {
      const matchShort = u.shortName.toLowerCase().includes(quickFilter.toLowerCase());
      const matchName = u.universityName.toLowerCase().includes(quickFilter.toLowerCase());
      if (!matchShort && !matchName) return false;
    }

    // Text search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        u.universityName.toLowerCase().includes(q) ||
        u.shortName.toLowerCase().includes(q) ||
        u.location.toLowerCase().includes(q) ||
        u.acceptedEntryTests.some((t) => t.toLowerCase().includes(q)) ||
        u.programs.some((p) => p.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E0E7EF]" id="university-portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4 text-[#E88724]" />
            Higher Education Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            University Admissions &amp; Student Portal
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Explore premier Pakistani universities (COMSATS, IIUI, NUST, GIKI, PIEAS, AIOU, VU, NUML, FJWU, UE, UL, UK), MDCAT boards (PMDC, SZABMU, NUMS, BUHS), entry test guides, and official closing merit archives.
          </p>
        </div>

        {/* 4 Main Portal Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-[#E0E7EF] pb-4">
          <button
            onClick={() => setActiveTab('admissions')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'admissions'
                ? 'bg-[#123B70] text-white shadow-md'
                : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF] hover:text-[#172235]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>University Directory ({universityAdmissionsData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('entry-tests')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'entry-tests'
                ? 'bg-[#123B70] text-white shadow-md'
                : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF] hover:text-[#172235]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>MDCAT &amp; Entry Tests ({entryTestGuidesData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('merit-lists')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'merit-lists'
                ? 'bg-[#123B70] text-white shadow-md'
                : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF] hover:text-[#172235]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Merit Lists Archive</span>
          </button>

          <button
            onClick={() => setActiveTab('updates')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'updates'
                ? 'bg-[#123B70] text-white shadow-md'
                : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF] hover:text-[#172235]'
            }`}
          >
            <BellRing className="w-4 h-4" />
            <span>Admission Alerts</span>
          </button>
        </div>

        {/* TAB 1: UNIVERSITY ADMISSIONS DIRECTORY */}
        {activeTab === 'admissions' && (
          <div className="space-y-6">
            
            {/* Search and Category Filter */}
            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E0E7EF] space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#637083]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search university (COMSATS, IIUI, NUST, GIKI, PIEAS, AIOU, VU, NUML, FJWU, UE, UL, UK, MDCAT) or program..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-64 p-2.5 rounded-xl border border-[#E0E7EF] bg-white text-xs font-semibold text-[#172235]"
                >
                  <option value="all">All Study Disciplines</option>
                  <option value="Engineering & Computing">Engineering &amp; Computing</option>
                  <option value="Medical & Dental">Medical &amp; Dental (MDCAT)</option>
                  <option value="General Sciences">General Sciences &amp; Education</option>
                  <option value="Business & Social">Business &amp; Social Sciences</option>
                  <option value="Distance & Flexible Learning">Distance Learning (VU, AIOU)</option>
                </select>
              </div>

              {/* Quick Institution Filter Chips */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-[#E0E7EF]">
                <span className="text-[11px] font-bold text-[#637083] mr-1">Quick Select:</span>
                {quickFilterKeys.map((chip) => (
                  <button
                    key={chip.value}
                    onClick={() => setQuickFilter(chip.value)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                      quickFilter === chip.value
                        ? 'bg-[#123B70] text-white shadow-2xs'
                        : 'bg-white border border-[#E0E7EF] text-[#637083] hover:text-[#0B2348] hover:border-[#123B70]/30'
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-[#637083] px-1">
              <span>Showing <strong>{filteredUnis.length}</strong> institutions matching your selection</span>
              {(searchQuery || selectedCategory !== 'all' || quickFilter !== 'ALL') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setQuickFilter('ALL');
                  }}
                  className="text-xs font-semibold text-[#E88724] hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>

            {/* University Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUnis.map((uni) => (
                <div
                  key={uni.id}
                  className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-lg transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Short Badge + Category Tag */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#123B70] text-white shadow-2xs tracking-wide">
                        {uni.shortName}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {uni.verifiedStatus}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-[#0B2348] mb-1 leading-snug">
                      {uni.universityName}
                    </h3>
                    <p className="text-xs text-[#637083] mb-3">{uni.location}</p>

                    <div className="space-y-2 text-xs text-[#172235] bg-[#F8FAFC] p-3 rounded-xl border border-[#E0E7EF] mb-4">
                      <div>
                        <strong>Admission Cycle:</strong> {uni.admissionCycles}
                      </div>
                      <div>
                        <strong>Required Tests:</strong>{' '}
                        <span className="text-[#123B70] font-semibold">{uni.acceptedEntryTests.join(', ')}</span>
                      </div>
                      <p className="text-[11px] text-[#637083] mt-1 leading-relaxed">
                        {uni.eligibilitySummary}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="text-[10px] font-bold text-[#637083] uppercase mb-1">
                        Popular Disciplines:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {uni.programs.slice(0, 5).map((p, i) => (
                          <span key={i} className="text-[10px] bg-[#F1F6FC] text-[#123B70] font-medium px-2 py-0.5 rounded border border-[#E0E7EF]">
                            {p}
                          </span>
                        ))}
                        {uni.programs.length > 5 && (
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            +{uni.programs.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E0E7EF]">
                    <a
                      href={uni.officialAdmissionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Official University Admission Portal</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: ENTRY TEST PREPARATION GUIDES (PMDC, SZABMU, NUMS, BUHS, NET, NTS) */}
        {activeTab === 'entry-tests' && (
          <div className="space-y-8">
            <div className="bg-[#FFF8E8] border border-[#F2B632]/50 p-4 rounded-2xl text-xs text-[#8A5E04] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Stethoscope className="w-5 h-5 text-[#E88724] shrink-0" />
                <div>
                  <strong>National MDCAT &amp; University Test Alignment: </strong>
                  MDCAT test format is unified under PMDC regulation and conducted regionally by SZABMU (Federal &amp; AJK), NUMS (Army Colleges), and BUMHS (Balochistan). Engineering &amp; Computing entries rely on NUST NET and NTS NAT.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entryTestGuidesData.map((guide) => (
                <div
                  key={guide.id}
                  className="bg-white rounded-2xl border border-[#E0E7EF] shadow-xs hover:shadow-lg transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-[#123B70] bg-[#F1F6FC] px-3 py-1 rounded-full border border-[#D3E0EE]">
                        {guide.testName}
                      </span>
                      {guide.negativeMarking ? (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                          Negative Marking Applies
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          No Negative Marking
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-base text-[#0B2348] mb-1">{guide.fullName}</h3>
                    <p className="text-xs text-[#637083] mb-4">Conducting Body: {guide.conductingBody}</p>

                    {/* Target Universities List */}
                    <div className="mb-4">
                      <div className="text-[11px] font-bold text-[#172235] mb-1">Target Institutions:</div>
                      <div className="flex flex-wrap gap-1">
                        {guide.targetUniversities.slice(0, 3).map((u, idx) => (
                          <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {u}
                          </span>
                        ))}
                        {guide.targetUniversities.length > 3 && (
                          <span className="text-[10px] text-slate-500">
                            +{guide.targetUniversities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Structure Breakdown */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-[#172235]">Subject Weightage &amp; Format:</div>
                      <div className="space-y-1">
                        {guide.testStructure.map((sub, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs text-[#637083] p-1.5 rounded bg-[#F8FAFC]">
                            <span>{sub.subject}</span>
                            <span className="font-bold text-[#0B2348]">{sub.percentage} ({sub.questionsCount} Qs)</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-[#637083] space-y-1 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <div><strong>Total:</strong> {guide.totalQuestions} Questions • {guide.totalMarks} Marks</div>
                      <div><strong>Time Allowed:</strong> {guide.duration}</div>
                    </div>

                    {/* Recommendations */}
                    <div className="p-3 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/50 text-xs text-[#8A5E04] space-y-1">
                      <strong className="block text-[11px] uppercase tracking-wide">Preparation Strategy:</strong>
                      <ul className="list-disc pl-3.5 space-y-0.5 text-[11px]">
                        {guide.recommendedPrepStrategy.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E0E7EF] mt-5">
                    <a
                      href={guide.officialRegistrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Official Test Portal</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#F1F6FC] border border-[#D3E0EE] text-center max-w-2xl mx-auto space-y-2">
              <h4 className="font-bold text-sm text-[#0B2348]">Looking for Entry Test Practice Tests?</h4>
              <p className="text-xs text-[#637083]">
                Try our timed diagnostic entry test engine featuring authentic questions modeled after NET, MDCAT, and ECAT styles.
              </p>
              <button
                onClick={() => onNavigate && onNavigate('test-series')}
                className="px-5 py-2.5 rounded-xl bg-[#E88724] hover:bg-[#d4781c] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                Launch Entry Test Practice Series →
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: MERIT LISTS DIRECTORY */}
        {activeTab === 'merit-lists' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E0E7EF] text-xs text-[#637083]">
              <strong className="text-[#0B2348]">Verified Merit Archive: </strong>
              Official closing aggregates from past undergraduate admission sessions for NUST, COMSATS, SZABMU FMC, NUMS AMC, BUMHS BMC, IIUI, FAST, and FJWU.
            </div>

            <div className="space-y-3">
              {meritListsData.map((merit) => (
                <div
                  key={merit.id}
                  className="p-5 rounded-2xl border border-[#E0E7EF] bg-white hover:border-[#123B70]/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black text-[#123B70] bg-[#F1F6FC] px-2.5 py-0.5 rounded">
                        {merit.universityName}
                      </span>
                      <span className="text-xs font-bold text-[#E88724] bg-amber-50 px-2 py-0.5 rounded">
                        {merit.academicYear}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {merit.verificationStatus}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {merit.listNumber}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#0B2348]">{merit.program}</h4>
                    <p className="text-xs text-[#637083]">{merit.notes}</p>
                    
                    {merit.closingMeritAggregate && (
                      <div className="text-xs font-bold text-[#123B70] pt-1">
                        Reported Cut-off: {merit.closingMeritAggregate}
                      </div>
                    )}
                  </div>

                  <div className="shrink-0">
                    <a
                      href={merit.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Official List</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ADMISSION UPDATES */}
        {activeTab === 'updates' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
              <BellRing className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Admission Alerts: </strong>
                Undergraduate admission cycles in Pakistan typically open in multiple series: NUST NET series begin in November-December; MDCAT (PMDC, SZABMU, NUMS, BUHS) registrations open in summer; and university sessions for COMSATS, IIUI, NUML, FJWU, UE, and UOL open for Fall and Spring intakes.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-[#E0E7EF] bg-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E88724]">Medical Admissions</span>
                <h4 className="font-bold text-sm text-[#0B2348]">PMDC, SZABMU, NUMS &amp; BUHS MDCAT</h4>
                <p className="text-xs text-[#637083] leading-relaxed">
                  F.Sc Pre-Medical students preparing for MBBS/BDS must register for the unified PMDC MDCAT administered by regional universities (SZABMU for ICT/AJK, NUMS for military medical colleges, BUMHS for Balochistan, UHS for Punjab).
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-[#E0E7EF] bg-white space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#123B70]">Engineering &amp; Computing</span>
                <h4 className="font-bold text-sm text-[#0B2348]">NUST NET, FAST, COMSATS &amp; NTS NAT</h4>
                <p className="text-xs text-[#637083] leading-relaxed">
                  Most computing faculties assess candidates based on mathematics and analytical reasoning. Appearing in early NTS NAT and NUST NET series maximizes aggregate chances before board exam result declarations.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
