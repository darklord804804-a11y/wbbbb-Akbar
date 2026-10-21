import React, { useState } from 'react';
import { 
  MessageCircle, 
  PhoneCall, 
  X, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Clock 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FloatingContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Animated Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-[#E0E7EF] overflow-hidden animate-popup-content">
          {/* Popup Header */}
          <div className="bg-gradient-to-r from-[#0B2348] to-[#123B70] text-white p-4 flex items-center justify-between border-b border-[#123B70]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#F2B632]">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white leading-tight">
                  Akbar Academy Helpline
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span className="text-[10px] text-emerald-300 font-semibold">Active Student Support</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Popup Body */}
          <div className="p-4 space-y-3 bg-[#F8FAFC]">
            <p className="text-xs text-[#637083] leading-relaxed">
              Need assistance with FBISE Class 9–12 notes, 2026 guess papers, or online registrations?
            </p>

            {/* Direct Phone Numbers */}
            <div className="space-y-2">
              <a
                href={siteConfig.phoneNumbers[0].telUri}
                className="p-2.5 rounded-xl bg-white hover:bg-[#F1F6FC] border border-[#E0E7EF] hover:border-[#123B70]/40 flex items-center justify-between transition-all group shadow-2xs"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#123B70]">Direct Helpline 1</div>
                  <div className="text-xs font-mono font-bold text-[#0B2348]">
                    {siteConfig.phoneNumbers[0].display}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#123B70] group-hover:bg-[#0B2348] text-white text-[11px] font-bold flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" />
                  <span>Call</span>
                </span>
              </a>

              <a
                href={siteConfig.phoneNumbers[1].telUri}
                className="p-2.5 rounded-xl bg-white hover:bg-[#F1F6FC] border border-[#E0E7EF] hover:border-[#E88724]/40 flex items-center justify-between transition-all group shadow-2xs"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#E88724]">Admissions Desk 2</div>
                  <div className="text-xs font-mono font-bold text-[#0B2348]">
                    {siteConfig.phoneNumbers[1].display}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[#E88724] group-hover:bg-[#d4781c] text-white text-[11px] font-bold flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" />
                  <span>Call</span>
                </span>
              </a>
            </div>

            {/* WhatsApp Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://wa.me/923235792758?text=Hello%20Akbar%20Study%20Smart%20Academy,%20I%20have%20an%20inquiry%20about%20study%20resources"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WA</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#0B2348] hover:bg-[#123B70] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#F2B632]" />
                <span>WA Channel</span>
              </a>
            </div>
          </div>

          {/* Popup Footer */}
          <div className="bg-white px-4 py-2 border-t border-[#E0E7EF] flex items-center justify-between text-[10px] text-[#637083]">
            <span>Mon–Sat: 9am–9pm PST</span>
            <span className="font-semibold text-[#123B70]">Islamabad, PK</span>
          </div>
        </div>
      )}

      {/* Floating Toggle Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer border ${
          isOpen
            ? 'bg-[#0B2348] text-white border-white/20'
            : 'bg-gradient-to-r from-[#123B70] via-[#2166A5] to-[#E88724] text-white border-white/30 hover:shadow-xl hover:scale-105'
        }`}
        aria-label="Toggle contact helpline popup"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5 text-white" />
            <span className="text-xs font-extrabold tracking-wide">Close</span>
          </>
        ) : (
          <>
            <div className="relative">
              <MessageCircle className="w-5 h-5 text-white fill-white/20" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white animate-pulse"></span>
            </div>
            <div className="text-left hidden xs:block">
              <div className="text-[10px] font-bold text-[#F2B632] leading-none uppercase tracking-wider">
                Need Help?
              </div>
              <div className="text-xs font-black tracking-tight leading-none mt-0.5">
                0323-5792758
              </div>
            </div>
          </>
        )}
      </button>
    </div>
  );
};
