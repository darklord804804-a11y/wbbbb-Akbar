import React from 'react';
import { 
  GraduationCap, 
  MessageCircle, 
  Youtube, 
  Instagram, 
  Facebook, 
  Video, 
  FileText, 
  ShieldCheck, 
  Heart, 
  ExternalLink 
} from 'lucide-react';
import { AcademyLogo } from './AcademyLogo';
import { siteConfig } from '../data/siteConfig';
import { ActivePage } from './Header';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenDisclaimer: () => void;
  onOpenHostingerGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDisclaimer,
  onOpenHostingerGuide,
}) => {
  return (
    <footer className="bg-[#0B2348] text-white border-t-4 border-[#F2B632]">
      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Academy Branding & Mission (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-md">
              <img
                src="/assets/academy-logo.svg"
                alt="Akbar Study Smart Academy Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div>
              <h3 className="text-lg font-black tracking-tight text-white uppercase">
                Akbar Study Smart Academy
              </h3>
              <p className="text-xs text-[#E88724] font-bold tracking-wider uppercase mt-0.5">
                Excellence in Board Examinations
              </p>
            </div>

            <p className="text-xs text-[#A6C0DE] leading-relaxed max-w-sm">
              Helping students prepare smarter with organized learning resources, practice materials, and educational updates. Dedicated to FBISE Federal Board Classes 9–12 and top university entry test readiness.
            </p>

            {/* Quick Social Icon Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Learning Pathways (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Learning
            </h4>
            <ul className="space-y-2 text-xs text-[#A6C0DE]">
              <li>
                <button
                  onClick={() => onNavigate('class-9')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Class 9 (SSC-I)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('class-10')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Class 10 (Matric)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('class-11')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Class 11 (1st Year)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('class-12')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Class 12 (2nd Year)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Video Lectures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('test-series')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Online Test Series
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Study Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Study Resources
            </h4>
            <ul className="space-y-2 text-xs text-[#A6C0DE]">
              <li>
                <button
                  onClick={() => onNavigate('notes')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Notes & Solved Exercises
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guess-papers')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer text-[#F2B632] font-semibold"
                >
                  Guess Papers 2026 (SLO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('past-papers')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Past Papers (2020–2025)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('entry-tests')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Entry Test Preparation (NET/MDCAT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('merit-lists')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Merit Lists Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('university-portal')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  University Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Support (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/15 pb-2">
              Connect & Register
            </h4>
            <ul className="space-y-2 text-xs text-[#A6C0DE]">
              <li>
                <button
                  onClick={() => onNavigate('register')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer font-bold text-white flex items-center gap-1.5"
                >
                  <span>Student Registration Form</span>
                  <span className="text-[10px] bg-[#F2B632] text-[#0B2348] px-1.5 rounded font-black">Free</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  About the Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('updates')}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer"
                >
                  Official Board Updates
                </button>
              </li>
              <li>
                <a
                  href="tel:03235792758"
                  className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 text-white font-bold"
                >
                  <span className="text-[#F2B632]">📞</span>
                  <span>0323-5792758 (Direct Helpline)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:03100878172"
                  className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 text-white font-bold"
                >
                  <span className="text-[#E88724]">📞</span>
                  <span>0310-0878172 (Admissions Desk)</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2B632] transition-colors flex items-center gap-1 text-[#25D366]"
                >
                  <span>Join WhatsApp Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2B632] transition-colors flex items-center gap-1 text-rose-400"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenHostingerGuide}
                  className="hover:text-[#F2B632] transition-colors cursor-pointer text-amber-300 underline decoration-dotted"
                >
                  Hostinger Deployment Guide
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box in Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center sm:text-left">
          <p className="text-[11px] text-[#A6C0DE]/80 leading-relaxed max-w-4xl">
            <strong>Transparency Notice:</strong> Akbar Study Smart Academy provides educational resources to support students' learning and examination preparation. Unless explicitly stated and verified, the platform is independent and does not represent an official examination board, university, or government authority. Students should confirm schedules through official institutional portals.
          </p>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6C0DE]">
          <div>
            © 2026 <strong>Akbar Study Smart Academy</strong>. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={onOpenDisclaimer} className="hover:text-[#F2B632] transition-colors">
              Disclaimer
            </button>
            <span>•</span>
            <button onClick={onOpenDisclaimer} className="hover:text-[#F2B632] transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenDisclaimer} className="hover:text-[#F2B632] transition-colors">
              Terms of Use
            </button>
            <span>•</span>
            <button onClick={onOpenHostingerGuide} className="hover:text-[#F2B632] transition-colors font-semibold">
              Hostinger Deploy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
