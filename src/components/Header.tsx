import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  CheckCircle2, 
  BellRing, 
  PhoneCall, 
  FileText, 
  Sparkles,
  HelpCircle,
  Trophy
} from 'lucide-react';
import { AcademyLogo } from './AcademyLogo';
import { siteConfig } from '../data/siteConfig';

export type ActivePage = 
  | 'home'
  | 'about'
  | 'results'
  | 'classes'
  | 'class-9'
  | 'class-10'
  | 'class-11'
  | 'class-12'
  | 'resources'
  | 'notes'
  | 'mcqs'
  | 'guess-papers'
  | 'past-papers'
  | 'university-portal'
  | 'entry-tests'
  | 'merit-lists'
  | 'test-series'
  | 'updates'
  | 'register'
  | 'contact';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenDisclaimer: () => void;
  onOpenHostingerGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenDisclaimer,
  onOpenHostingerGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const navigateTo = (page: ActivePage) => {
    onNavigate(page);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E0E7EF] shadow-xs transition-all">
      {/* Top Banner Strip */}
      <div className="bg-[#0B2348] text-white py-1.5 px-4 text-xs font-medium border-b border-[#123B70]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-[#E88724] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              FBISE 2026
            </span>
            <span className="text-[#E0E7EF] truncate">
              Federal Board SLO-Based Notes, Guess Papers, Past Papers & Entry Test Prep
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] text-[#A6C0DE]">
            <a 
              href="tel:03235792758"
              className="text-white hover:text-[#F2B632] transition-colors flex items-center gap-1 font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F2B632]" />
              <span className="hidden xs:inline">Direct Contact:</span>
              <span className="text-[#F2B632]">0323-5792758</span>
            </a>
            <span className="text-[#637083] hidden sm:inline">|</span>
            <a 
              href="tel:03100878172"
              className="text-white hover:text-[#F2B632] transition-colors flex items-center gap-1 font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E88724]" />
              <span className="hidden xs:inline">Direct Contact 2:</span>
              <span className="text-[#F2B632]">0310-0878172</span>
            </a>
            <span className="text-[#637083] hidden md:inline">|</span>
            <a 
              href="https://wa.me/923235792758"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#F2B632] transition-colors flex items-center gap-1 text-[#25D366] font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              WhatsApp
            </a>
            <button 
              onClick={onOpenHostingerGuide}
              className="hover:text-white transition-colors underline decoration-dotted text-[11px] hidden md:inline"
            >
              Hostinger Guide
            </button>
            <button 
              onClick={onOpenDisclaimer}
              className="hover:text-white transition-colors text-[11px] hidden sm:inline"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Academy Name */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center focus:outline-hidden focus:ring-2 focus:ring-[#123B70] rounded-lg p-1 text-left"
          >
            <AcademyLogo variant="header" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {/* Home */}
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                activePage === 'home'
                  ? 'text-[#123B70] bg-[#F1F6FC]'
                  : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
              }`}
            >
              Home
            </button>

            {/* Academy Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('academy')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  ['about', 'register', 'contact'].includes(activePage)
                    ? 'text-[#123B70] bg-[#F1F6FC]'
                    : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
                }`}
              >
                Academy
                <ChevronDown className="w-4 h-4 text-[#637083]" />
              </button>

              {openDropdown === 'academy' && (
                <div className="absolute left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-[#E0E7EF] py-2 z-50 animate-dropdown-popup">
                  <button
                    onClick={() => navigateTo('about')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#123B70]" />
                    <div>
                      <div className="font-semibold">About the Academy</div>
                      <div className="text-xs text-[#637083]">Our mission & teaching philosophy</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('results')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <Trophy className="w-4 h-4 text-[#F2B632]" />
                    <div>
                      <div className="font-semibold">Our Results & Testimonials</div>
                      <div className="text-xs text-[#637083]">Top FBISE scorers & student feedback</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('register')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#E88724]" />
                    <div>
                      <div className="font-semibold">Registration Form</div>
                      <div className="text-xs text-[#637083]">Enroll in online test & study groups</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="w-full text-left px-4 py-2.5 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#21865B]" />
                    <div>
                      <div className="font-semibold">Contact & Support</div>
                      <div className="text-xs text-[#637083]">Official social links & inquiries</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Classes Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('classes')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  ['classes', 'class-9', 'class-10', 'class-11', 'class-12'].includes(activePage)
                    ? 'text-[#123B70] bg-[#F1F6FC]'
                    : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
                }`}
              >
                Classes
                <ChevronDown className="w-4 h-4 text-[#637083]" />
              </button>

              {openDropdown === 'classes' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E0E7EF] py-2 z-50 animate-dropdown-popup">
                  <div className="px-4 py-1 text-[11px] font-bold text-[#637083] uppercase tracking-wider border-b border-[#E0E7EF] mb-1">
                    FBISE Board Classes
                  </div>
                  <button
                    onClick={() => navigateTo('class-9')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center justify-between transition-colors"
                  >
                    <span className="font-medium">Class 9 (SSC Part 1)</span>
                    <span className="text-xs px-2 py-0.5 bg-[#F1F6FC] text-[#123B70] rounded-sm font-semibold">9th</span>
                  </button>
                  <button
                    onClick={() => navigateTo('class-10')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center justify-between transition-colors"
                  >
                    <span className="font-medium">Class 10 (SSC Part 2 - Matric)</span>
                    <span className="text-xs px-2 py-0.5 bg-[#F1F6FC] text-[#123B70] rounded-sm font-semibold">10th</span>
                  </button>
                  <button
                    onClick={() => navigateTo('class-11')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center justify-between transition-colors"
                  >
                    <span className="font-medium">Class 11 (HSSC Part 1 - 1st Year)</span>
                    <span className="text-xs px-2 py-0.5 bg-[#F1F6FC] text-[#123B70] rounded-sm font-semibold">11th</span>
                  </button>
                  <button
                    onClick={() => navigateTo('class-12')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center justify-between transition-colors"
                  >
                    <span className="font-medium">Class 12 (HSSC Part 2 - 2nd Year)</span>
                    <span className="text-xs px-2 py-0.5 bg-[#F1F6FC] text-[#123B70] rounded-sm font-semibold">12th</span>
                  </button>
                  <div className="border-t border-[#E0E7EF] my-1"></div>
                  <button
                    onClick={() => navigateTo('classes')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-[#123B70] hover:bg-[#F1F6FC] flex items-center justify-between"
                  >
                    <span>View All Class Curriculums</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Study Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('resources')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  ['resources', 'notes', 'mcqs', 'guess-papers', 'past-papers'].includes(activePage)
                    ? 'text-[#123B70] bg-[#F1F6FC]'
                    : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
                }`}
              >
                Study Resources
                <ChevronDown className="w-4 h-4 text-[#637083]" />
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E0E7EF] py-2 z-50 animate-dropdown-popup">
                  <button
                    onClick={() => navigateTo('notes')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#123B70]" />
                    <div>
                      <div className="font-semibold">Notes & Solved Exercises</div>
                      <div className="text-xs text-[#637083]">Chapter summaries & SLO questions</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('guess-papers')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-[#E88724]" />
                    <div>
                      <div className="font-semibold">Guess Papers 2026</div>
                      <div className="text-xs text-[#637083]">High-priority board revision papers</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('past-papers')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#21865B]" />
                    <div>
                      <div className="font-semibold">Past Papers & Model Papers</div>
                      <div className="text-xs text-[#637083]">FBISE papers (2020–2025) solved</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('resources')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#2F80C3]" />
                    <div>
                      <div className="font-semibold">Paper Patterns & Marking Schemes</div>
                      <div className="text-xs text-[#637083]">SLO 50-30-20 cognitive weightage</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* University Portal Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('university')}
                className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors ${
                  ['university-portal', 'entry-tests', 'merit-lists'].includes(activePage)
                    ? 'text-[#123B70] bg-[#F1F6FC]'
                    : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
                }`}
              >
                University Portal
                <ChevronDown className="w-4 h-4 text-[#637083]" />
              </button>

              {openDropdown === 'university' && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E0E7EF] py-2 z-50 animate-dropdown-popup">
                  <button
                    onClick={() => navigateTo('university-portal')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#123B70]" />
                    <div>
                      <div className="font-semibold">University Admissions</div>
                      <div className="text-xs text-[#637083]">NUST, FAST, GIKI, PIEAS, NUMS, QAU</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('entry-tests')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#E88724]" />
                    <div>
                      <div className="font-semibold">Entry Test Preparation</div>
                      <div className="text-xs text-[#637083]">NET, ECAT, MDCAT syllabus & strategy</div>
                    </div>
                  </button>
                  <button
                    onClick={() => navigateTo('merit-lists')}
                    className="w-full text-left px-4 py-2 text-sm text-[#172235] hover:bg-[#F1F6FC] hover:text-[#123B70] flex items-center gap-3 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#21865B]" />
                    <div>
                      <div className="font-semibold">Merit Lists & Results</div>
                      <div className="text-xs text-[#637083]">Closing merits & official links archive</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Test Series */}
            <button
              onClick={() => navigateTo('test-series')}
              className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                activePage === 'test-series'
                  ? 'text-[#123B70] bg-[#F1F6FC]'
                  : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
              }`}
            >
              Test Series
            </button>

            {/* Official Updates */}
            <button
              onClick={() => navigateTo('updates')}
              className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1.5 transition-colors ${
                activePage === 'updates'
                  ? 'text-[#123B70] bg-[#F1F6FC]'
                  : 'text-[#172235] hover:text-[#123B70] hover:bg-[#F8FAFC]'
              }`}
            >
              <BellRing className="w-4 h-4 text-[#E88724]" />
              <span>Updates</span>
            </button>
          </nav>

          {/* Right Action: Register Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => navigateTo('register')}
              className="bg-[#F2B632] hover:bg-[#E89B19] text-[#0B2348] font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#0B2348]" />
              <span>Register Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => navigateTo('register')}
              className="bg-[#F2B632] text-[#0B2348] font-bold text-xs px-3 py-1.5 rounded-md shadow-xs"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#172235] hover:text-[#123B70] hover:bg-[#F1F6FC] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E0E7EF] bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#E0E7EF]">
            <button
              onClick={() => navigateTo('home')}
              className="text-left py-2 px-3 text-sm font-semibold text-[#123B70] bg-[#F1F6FC] rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('test-series')}
              className="text-left py-2 px-3 text-sm font-semibold text-[#0B2348] hover:bg-[#F1F6FC] rounded-lg"
            >
              Test Series (MCQs)
            </button>
            <button
              onClick={() => navigateTo('updates')}
              className="text-left py-2 px-3 text-sm font-semibold text-[#0B2348] hover:bg-[#F1F6FC] rounded-lg flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#E88724]"></span>
              FBISE Updates
            </button>
            <button
              onClick={() => navigateTo('register')}
              className="text-left py-2 px-3 text-sm font-bold text-[#0B2348] bg-[#F2B632]/25 rounded-lg text-amber-900"
            >
              Register Now ✨
            </button>
          </div>

          {/* Classes Group */}
          <div>
            <div className="text-xs font-bold text-[#637083] uppercase tracking-wider mb-1.5 px-2">
              Explore Classes (FBISE)
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => navigateTo('class-9')}
                className="text-left p-2.5 text-xs font-semibold rounded-lg bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF]"
              >
                Class 9 (SSC-I)
              </button>
              <button
                onClick={() => navigateTo('class-10')}
                className="text-left p-2.5 text-xs font-semibold rounded-lg bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF]"
              >
                Class 10 (Matric)
              </button>
              <button
                onClick={() => navigateTo('class-11')}
                className="text-left p-2.5 text-xs font-semibold rounded-lg bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF]"
              >
                Class 11 (1st Year)
              </button>
              <button
                onClick={() => navigateTo('class-12')}
                className="text-left p-2.5 text-xs font-semibold rounded-lg bg-[#F8FAFC] hover:bg-[#F1F6FC] border border-[#E0E7EF]"
              >
                Class 12 (2nd Year)
              </button>
            </div>
          </div>

          {/* Study Resources Group */}
          <div>
            <div className="text-xs font-bold text-[#637083] uppercase tracking-wider mb-1.5 px-2">
              Study Resources
            </div>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo('notes')}
                className="w-full text-left py-2 px-3 text-sm font-medium hover:bg-[#F1F6FC] rounded-lg flex items-center justify-between"
              >
                <span>Notes & Solved Exercises</span>
                <span className="text-xs text-[#123B70]">Free</span>
              </button>
              <button
                onClick={() => navigateTo('guess-papers')}
                className="w-full text-left py-2 px-3 text-sm font-medium hover:bg-[#F1F6FC] rounded-lg flex items-center justify-between"
              >
                <span className="text-[#E88724] font-semibold">Guess Papers 2026</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">High Priority</span>
              </button>
              <button
                onClick={() => navigateTo('past-papers')}
                className="w-full text-left py-2 px-3 text-sm font-medium hover:bg-[#F1F6FC] rounded-lg"
              >
                Past Papers (2020–2025)
              </button>
            </div>
          </div>

          {/* University Portal Group */}
          <div>
            <div className="text-xs font-bold text-[#637083] uppercase tracking-wider mb-1.5 px-2">
              University Portal
            </div>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo('university-portal')}
                className="w-full text-left py-2 px-3 text-sm font-medium hover:bg-[#F1F6FC] rounded-lg"
              >
                University Admissions (NUST, FAST, GIKI, etc.)
              </button>
              <button
                onClick={() => navigateTo('entry-tests')}
                className="w-full text-left py-2 px-3 text-sm font-medium hover:bg-[#F1F6FC] rounded-lg"
              >
                Entry Test Preparation (NET, ECAT, MDCAT)
              </button>
              <button
                onClick={() => navigateTo('merit-lists')}
                className="w-full text-left py-2 px-3 text-sm font-medium hover:bg-[#F1F6FC] rounded-lg"
              >
                Merit Lists & Closing Merits
              </button>
            </div>
          </div>

          {/* Direct Helplines for Mobile */}
          <div className="p-3 rounded-xl bg-[#0B2348] text-white space-y-2">
            <div className="text-[11px] font-bold text-[#F2B632] flex items-center justify-between">
              <span>Direct Student Helplines</span>
              <span className="text-[10px] text-emerald-400 font-normal">Active Support</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:03235792758"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-center flex flex-col items-center"
              >
                <span className="text-[9px] text-[#A6C0DE] font-sans">Helpline 1</span>
                <span>0323-5792758</span>
              </a>
              <a
                href="tel:03100878172"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-center flex flex-col items-center"
              >
                <span className="text-[9px] text-[#A6C0DE] font-sans">Helpline 2</span>
                <span>0310-0878172</span>
              </a>
            </div>
            <div className="flex gap-2 pt-1">
              <a
                href="https://wa.me/923235792758"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-[11px] text-center"
              >
                WhatsApp Chat
              </a>
              <button
                onClick={() => navigateTo('contact')}
                className="flex-1 py-1.5 rounded-lg bg-white/15 text-white font-semibold text-[11px] text-center"
              >
                All Channels
              </button>
            </div>
          </div>

          {/* Academy Info Group */}
          <div className="border-t border-[#E0E7EF] pt-2">
            <div className="flex items-center justify-between text-xs text-[#637083] px-2 py-1">
              <button onClick={() => navigateTo('about')} className="hover:text-[#123B70] font-medium">About Academy</button>
              <button onClick={() => navigateTo('contact')} className="hover:text-[#123B70] font-medium">Contact & Socials</button>
              <button onClick={onOpenDisclaimer} className="hover:text-[#123B70] font-medium">Disclaimer</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
