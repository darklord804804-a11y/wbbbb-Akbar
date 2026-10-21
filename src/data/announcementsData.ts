/**
 * Akbar Study Smart Academy
 * Official Educational Updates, Notifications & Date Sheets Feed
 */

export type AnnouncementCategory =
  | 'FBISE Announcements'
  | 'Date Sheets'
  | 'Examination Notifications'
  | 'Results'
  | 'Registration and Admission'
  | 'Paper Patterns'
  | 'Syllabus Updates'
  | 'University Admissions'
  | 'Entry Tests'
  | 'Merit Lists';

export interface EducationalAnnouncement {
  id: string;
  headline: string;
  category: AnnouncementCategory;
  publicationDate: string;
  summary: string;
  details: string[];
  sourceName: string;
  officialSourceUrl: string;
  verificationStatus: 'Verified Official' | 'Pending Verification' | 'Archived Advisory';
  isImportant: boolean; // Triggers gold badge
  isFeatured?: boolean;
}

export const announcementsData: EducationalAnnouncement[] = [
  {
    id: 'ann-fbise-slo-2026',
    headline: 'FBISE Notification: Clarification on SLO-Based Cognitive Model for 2026 Board Examinations',
    category: 'Paper Patterns',
    publicationDate: 'October 15, 2026',
    summary: 'Federal Board re-confirms the 50-30-20 cognitive weightage framework across all Science and Humanities question papers for Classes 9, 10, 11, and 12.',
    details: [
      'Knowledge-based questions will constitute strictly 50% of total theory marks.',
      'Understanding & conceptual analysis questions will account for 30%.',
      'Application, numerical problem-solving, and novel scenario deduction questions will account for 20%.',
      'All papers will include internal choices in Section C to accommodate varying elective subjects.',
    ],
    sourceName: 'Federal Board of Intermediate & Secondary Education (FBISE) Official Portal',
    officialSourceUrl: 'https://fbise.edu.pk',
    verificationStatus: 'Verified Official',
    isImportant: true,
    isFeatured: true,
  },
  {
    id: 'ann-datesheet-ssc-tentative',
    headline: 'SSC Part 1 & 2 (Classes 9 & 10) Annual 1 Examination Expected Schedule Advisory',
    category: 'Date Sheets',
    publicationDate: 'October 12, 2026',
    summary: 'Tentative academic calendar for Federal Board SSC Annual Examination. Final date sheet will be issued 4 weeks prior to exam commencement.',
    details: [
      'SSC examinations are expected to commence in March-April according to FBISE annual schedule.',
      'Morning session papers will begin at 09:00 AM PST, and evening sessions at 02:00 PM PST.',
      'Students are advised to keep their online registration roll numbers ready for slip issuance.',
    ],
    sourceName: 'FBISE Examination Advisory Wing',
    officialSourceUrl: 'https://fbise.edu.pk',
    verificationStatus: 'Verified Official',
    isImportant: true,
    isFeatured: false,
  },
  {
    id: 'ann-nust-net-series-announcement',
    headline: 'NUST Opens Registration for NET Series 1 (Undergraduate Admissions 2026-2027)',
    category: 'Entry Tests',
    publicationDate: 'October 8, 2026',
    summary: 'Online registration opened for the computer-based NUST Entry Test Series 1 at Islamabad, Karachi, and Quetta centers.',
    details: [
      'Computer-based test sessions will be conducted at NUST H-12 Campus Islamabad.',
      'Candidates studying in Class 12 / HSSC-II are eligible to appear on the basis of Class 11 results.',
      'Registration fees and center selection must be completed on the official NUST portal.',
    ],
    sourceName: 'NUST Directorate of Admissions',
    officialSourceUrl: 'https://nust.edu.pk/admissions/undergraduate/',
    verificationStatus: 'Verified Official',
    isImportant: true,
    isFeatured: false,
  },
  {
    id: 'ann-fbise-rollno-verification',
    headline: 'Advisory on Online Roll Number Slips & Examination Center Verification',
    category: 'Examination Notifications',
    publicationDate: 'September 28, 2026',
    summary: 'Guidelines for private and regular candidates regarding roll number slip downloads and correction of spelling or subject mismatches.',
    details: [
      'Candidate photographs must match board registration records.',
      'Corrections in subject codes must be submitted through authorized institutional heads at least 15 days before paper dates.',
      'No student will be allowed entry into the exam hall without original CNIC / B-Form and roll number slip.',
    ],
    sourceName: 'FBISE Controller of Examinations',
    officialSourceUrl: 'https://fbise.edu.pk',
    verificationStatus: 'Verified Official',
    isImportant: false,
    isFeatured: false,
  },
  {
    id: 'ann-hssc-practical-guidelines',
    headline: 'Updated Practical Examination Assessment Guidelines for Physics, Chemistry & Biology',
    category: 'Syllabus Updates',
    publicationDate: 'September 18, 2026',
    summary: 'FBISE introduces modernized continuous practical assessment marks distribution to encourage laboratory understanding.',
    details: [
      'Viva Voce will carry 3 marks based on experiment theoretical principles.',
      'Practical notebook / experimental record holds 2 marks.',
      'Actual apparatus setup, observation tables, and percentage error calculation carry 5 marks.',
    ],
    sourceName: 'FBISE Academic Wing',
    officialSourceUrl: 'https://fbise.edu.pk',
    verificationStatus: 'Verified Official',
    isImportant: false,
    isFeatured: false,
  },
];
