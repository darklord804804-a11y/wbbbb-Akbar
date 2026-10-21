import React, { useState } from 'react';
import { 
  MessageCircle, 
  Youtube, 
  Instagram, 
  Facebook, 
  Video, 
  ExternalLink, 
  PhoneCall, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  Headphones 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const SocialConnectSection: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const socials = [
    {
      ...siteConfig.socials.whatsapp,
      icon: MessageCircle,
      iconColor: '#25D366',
      badge: 'Fastest Broadcast Alerts',
    },
    {
      ...siteConfig.socials.youtube,
      icon: Youtube,
      iconColor: '#FF0000',
      badge: 'Video Lectures',
    },
    {
      ...siteConfig.socials.instagram,
      icon: Instagram,
      iconColor: '#E1306C',
      badge: 'Daily Flashcards',
    },
    {
      ...siteConfig.socials.facebook,
      icon: Facebook,
      iconColor: '#1877F2',
      badge: 'Community Group',
    },
    {
      ...siteConfig.socials.tiktok,
      icon: Video,
      iconColor: '#000000',
      badge: 'Quick Revision',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E0E7EF]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#E88724]" />
            Official Contact & Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Connect with Akbar Study Smart Academy
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Have questions about notes, test series, guess papers, or admissions? Call our direct helpline or chat with us on WhatsApp.
          </p>
        </div>

        {/* DIRECT CONTACT NUMBERS PROMINENT BANNER */}
        <div className="mb-14 bg-gradient-to-br from-[#0B2348] via-[#123B70] to-[#071730] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#123B70] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F2B632]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2B632] text-[#0B2348] text-xs font-black uppercase tracking-wider">
                <Headphones className="w-4 h-4" />
                <span>Direct Contact Helplines</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Call or WhatsApp Our Academic Team
              </h3>
              <p className="text-xs sm:text-sm text-[#D3E0EE] leading-relaxed">
                Reach out directly for student registration inquiries, FBISE board study material guidance, and online class schedules.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#F2B632] pt-1">
                <Clock className="w-4 h-4" />
                <span>Available Mon – Sat: 9:00 AM – 9:00 PM PST</span>
              </div>
            </div>

            {/* Two Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-[540px]">
              {siteConfig.phoneNumbers.map((phone, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:border-[#F2B632] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-extrabold tracking-wider bg-[#F2B632] text-[#0B2348] px-2 py-0.5 rounded">
                        {idx === 0 ? 'Helpline 1' : 'Helpline 2'}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>

                    <h4 className="font-black text-xl sm:text-2xl text-white tracking-wide font-mono mt-1">
                      {phone.display}
                    </h4>
                    <p className="text-xs font-semibold text-[#F2B632] mt-0.5">{phone.label}</p>
                    <p className="text-[11px] text-[#A6C0DE] mt-1">{phone.role}</p>
                  </div>

                  {/* Call & WhatsApp Action Buttons */}
                  <div className="pt-4 mt-4 border-t border-white/15 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={phone.telUri}
                        className="py-2 px-3 rounded-xl bg-white hover:bg-[#F1F6FC] text-[#0B2348] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#123B70]" />
                        <span>Call</span>
                      </a>

                      <a
                        href={phone.whatsappUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => handleCopy(phone.number)}
                      className="w-full py-1.5 px-2 text-[10px] text-[#A6C0DE] hover:text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedNumber === phone.number ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Sub-heading for Social Channels */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E0E7EF]">
          <div>
            <h3 className="font-extrabold text-xl text-[#0B2348]">Official Social Media Communities</h3>
            <p className="text-xs text-[#637083]">Follow our verified channels for daily educational content</p>
          </div>
        </div>

        {/* 5 Social Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socials.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.id}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-[#E0E7EF] bg-[#F8FAFC] hover:bg-white hover:border-[#123B70]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ color: soc.iconColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#123B70] border border-[#E0E7EF]">
                      {soc.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0B2348] group-hover:text-[#123B70] transition-colors mb-1">
                    {soc.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#E88724] mb-2">{soc.handle}</p>
                  <p className="text-xs text-[#637083] leading-relaxed line-clamp-2">
                    {soc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E0E7EF] mt-4 flex items-center justify-between text-xs font-bold text-[#123B70] group-hover:text-[#0B2348]">
                  <span>{soc.callToAction}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}

          {/* Quick Info & Location Card */}
          <div className="p-6 rounded-2xl border border-[#E0E7EF] bg-white shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#123B70]">
                <MapPin className="w-5 h-5 text-[#E88724]" />
                <h4 className="font-bold text-base text-[#0B2348]">Academy Headquarters</h4>
              </div>
              <p className="text-xs text-[#637083] leading-relaxed mb-4">
                {siteConfig.address.note}
              </p>
              <div className="text-xs bg-[#F8FAFC] p-3 rounded-xl border border-[#E0E7EF] space-y-2 text-[#172235]">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#123B70] shrink-0" />
                  <a href={`mailto:${siteConfig.contactEmail}`} className="hover:underline truncate">
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#21865B] shrink-0" />
                  <span className="font-semibold">{siteConfig.phoneNumbers[0].display}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E88724] shrink-0" />
                  <span className="font-semibold">{siteConfig.phoneNumbers[1].display}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E0E7EF] mt-4 text-[11px] text-[#637083]">
              Islamabad / Rawalpindi & Nationwide Online Pakistan
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
