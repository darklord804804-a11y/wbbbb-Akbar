/**
 * Akbar Study Smart Academy
 * Centralized Site Configuration & Brand Assets
 */

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: string;
  color: string;
  description: string;
  callToAction: string;
}

export interface PhoneNumberConfig {
  number: string;
  raw: string;
  display: string;
  telUri: string;
  whatsappUri: string;
  label: string;
  role: string;
  verified: boolean;
  note: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  establishedYear: number;
  contactEmail: string;
  phoneNumbers: PhoneNumberConfig[];
  address: {
    city: string;
    region: string;
    country: string;
    note: string;
  };
  socials: {
    whatsapp: SocialLink;
    youtube: SocialLink;
    instagram: SocialLink;
    facebook: SocialLink;
    tiktok: SocialLink;
  };
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: "Akbar Study Smart Academy",
  shortName: "Akbar Academy",
  tagline: "Study Smart. Prepare Better. Achieve More.",
  subTagline: "Your dedicated learning partner for FBISE Federal Board Classes 9, 10, 11, and 12, as well as university entry test preparation.",
  establishedYear: 2024,
  contactEmail: "info@akbarstudysmartacademy.com",
  phoneNumbers: [
    {
      number: "0323-5792758",
      raw: "03235792758",
      display: "0323-5792758",
      telUri: "tel:03235792758",
      whatsappUri: "https://wa.me/923235792758",
      label: "Direct Contact & WhatsApp Helpline",
      role: "Academic Guidance, Notes & General Inquiries",
      verified: true,
      note: "Official direct phone and WhatsApp helpline for Akbar Study Smart Academy.",
    },
    {
      number: "0310-0878172",
      raw: "03100878172",
      display: "0310-0878172",
      telUri: "tel:03100878172",
      whatsappUri: "https://wa.me/923100878172",
      label: "Admissions & Student Support Desk",
      role: "Student Registration, Test Series & Board Guidance",
      verified: true,
      note: "Official student admissions and test series support desk.",
    },
  ],
  address: {
    city: "Islamabad / Rawalpindi",
    region: "Federal Capital",
    country: "Pakistan",
    note: "Serving students across Pakistan and overseas Federal Board (FBISE) institutions online.",
  },
  socials: {
    whatsapp: {
      id: "whatsapp",
      name: "WhatsApp Channel",
      url: "https://whatsapp.com/channel/0029VbAMQxi7j6g2ycJ2jE09",
      handle: "Akbar Study Smart Academy",
      icon: "MessageCircle",
      color: "#25D366",
      description: "Receive instant notifications for date sheets, FBISE roll number slips, guess papers, and revision notes.",
      callToAction: "Join Our WhatsApp Channel",
    },
    youtube: {
      id: "youtube",
      name: "YouTube Channel",
      url: "https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf",
      handle: "@akbarstudysmartacademy",
      icon: "Youtube",
      color: "#FF0000",
      description: "In-depth chapter lectures, numerical solving sessions, past paper analyses, and conceptual FBISE explanations.",
      callToAction: "Watch Our YouTube Lessons",
    },
    instagram: {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/akbar_study_smart_academy?igsh=MTQ1N2doZjJ2Mnk3YQ==",
      handle: "@akbar_study_smart_academy",
      icon: "Instagram",
      color: "#E1306C",
      description: "Daily study tips, formula revision flashcards, quiz stories, and important exam announcement highlights.",
      callToAction: "Follow on Instagram",
    },
    facebook: {
      id: "facebook",
      name: "Facebook Page",
      url: "https://www.facebook.com/share/18MpitdX3e/",
      handle: "Akbar Study Smart Academy",
      icon: "Facebook",
      color: "#1877F2",
      description: "Community announcements, student discussions, academic articles, and live Q&A session updates.",
      callToAction: "Visit Our Facebook Page",
    },
    tiktok: {
      id: "tiktok",
      name: "TikTok",
      url: "https://vt.tiktok.com/ZSCLLLBwM/",
      handle: "@akbarstudysmart",
      icon: "Video",
      color: "#000000",
      description: "60-second concept breakdowns, quick mnemonic tricks for chemistry/biology, and exam motivation.",
      callToAction: "Follow on TikTok",
    },
  },
  disclaimer: "Akbar Study Smart Academy provides educational resources to support students' learning and examination preparation. Unless explicitly stated and verified, the platform is independent and does not represent an official examination board, university, or government authority. Students should confirm examination schedules, admissions, merit lists, eligibility requirements, and official notifications through the relevant institution's official channels. Study materials and guess papers are provided for learning and revision and do not guarantee examination results.",
};
