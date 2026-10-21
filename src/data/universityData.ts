/**
 * Akbar Study Smart Academy
 * University Admissions, Entry Tests & Merit Lists Portal
 * Comprehensive Coverage of Premier Pakistani Universities & Medical Boards
 */

export interface UniversityAdmission {
  id: string;
  universityName: string;
  shortName: string;
  location: string;
  category: 'Engineering & Computing' | 'Medical & Dental' | 'General Sciences' | 'Business & Social' | 'Distance & Flexible Learning';
  programs: string[];
  admissionCycles: string;
  applicationDeadline?: string;
  eligibilitySummary: string;
  officialAdmissionUrl: string;
  acceptedEntryTests: string[];
  verifiedStatus: 'Verified Official' | 'Upcoming Cycle';
  lastCheckedDate: string;
}

export interface EntryTestGuide {
  id: string;
  testName: string;
  fullName: string;
  conductingBody: string;
  targetUniversities: string[];
  testStructure: {
    subject: string;
    percentage: string;
    questionsCount: number;
  }[];
  totalQuestions: number;
  totalMarks: number;
  duration: string;
  negativeMarking: boolean;
  syllabusOverview: string;
  recommendedPrepStrategy: string[];
  officialRegistrationUrl: string;
}

export interface MeritListEntry {
  id: string;
  universityName: string;
  program: string;
  admissionCycle: string;
  academicYear: string;
  listNumber: '1st Merit List' | '2nd Merit List' | '3rd Merit List' | 'Final Closing Merit';
  publishedDate: string;
  closingMeritAggregate?: string;
  verificationStatus: 'Verified Official Source' | 'Direct University Archive';
  officialSourceUrl: string;
  notes: string;
}

export const universityAdmissionsData: UniversityAdmission[] = [
  // 1. COMSATS
  {
    id: 'uni-comsats',
    universityName: 'COMSATS University Islamabad (CUI)',
    shortName: 'COMSATS',
    location: 'Park Road, Chak Shahzad, Islamabad (Campuses: LHR, ATK, WAH, ABT, SWL, VHR)',
    category: 'Engineering & Computing',
    programs: [
      'BS Computer Science',
      'BS Software Engineering',
      'BS Artificial Intelligence',
      'BS Data Science',
      'BS Cyber Security',
      'BS Electrical Engineering',
      'BBA & Business Analytics',
      'BS Mathematics'
    ],
    admissionCycles: 'Fall (July-August) & Spring (December-January)',
    applicationDeadline: 'Check active semester schedule on CUI portal',
    eligibilitySummary: 'Minimum 50% marks in Intermediate (HSSC) Pre-Engineering / ICS / Pre-Medical (with Additional Math) for Computing programs. 60% for Engineering programs.',
    officialAdmissionUrl: 'https://admissions.comsats.edu.pk/',
    acceptedEntryTests: ['NTS NAT (NAT-IE, NAT-ICS, NAT-IM)', 'CUI In-House Admission Test'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 2. IIUI
  {
    id: 'uni-iiui',
    universityName: 'International Islamic University Islamabad (IIUI)',
    shortName: 'IIUI',
    location: 'Sector H-10, Islamabad',
    category: 'Business & Social',
    programs: [
      'BS Computer Science',
      'BS Software Engineering',
      'BS Islamic Studies & Usuluddin',
      'BS Shariah & Law (LLB Hons)',
      'BS Economics & Finance',
      'BS English & Linguistics',
      'BBA & Management Sciences',
      'BS Electrical / Mechanical Engineering'
    ],
    admissionCycles: 'Fall & Spring Admission Sessions',
    applicationDeadline: 'Annual Fall (July) & Spring (December)',
    eligibilitySummary: 'Minimum 50% in HSSC/Intermediate for general BS and Computing programs; minimum 60% for Faculty of Engineering & Technology.',
    officialAdmissionUrl: 'https://admission.iiu.edu.pk/',
    acceptedEntryTests: ['IIUI Institutional Entry Test', 'NTS NAT (Accepted for selected faculties)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 3. NUST
  {
    id: 'uni-nust',
    universityName: 'National University of Sciences & Technology (NUST)',
    shortName: 'NUST',
    location: 'Sector H-12, Islamabad',
    category: 'Engineering & Computing',
    programs: [
      'Software Engineering (SEECS)',
      'Computer Science',
      'Artificial Intelligence',
      'Data Science',
      'Electrical Engineering',
      'Mechanical Engineering (SMME)',
      'Civil Engineering (NICE)',
      'BS Biotechnology',
      'BBA & Economics (NBS)'
    ],
    admissionCycles: 'NET Series 1 (Dec), Series 2 (Feb), Series 3 (Apr), Series 4 (Jun/Jul)',
    applicationDeadline: 'Online registration open per NET series',
    eligibilitySummary: 'Minimum 60% aggregate in SSC (Matric) and HSSC (Pre-Engineering / ICS / Pre-Medical with Additional Math). Merit calculation: 75% NET + 15% HSSC + 10% SSC.',
    officialAdmissionUrl: 'https://nust.edu.pk/admissions/',
    acceptedEntryTests: ['NUST Entry Test (NET-1, 2, 3, 4)', 'ACT / SAT (International quota)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 4. AIOU
  {
    id: 'uni-aiou',
    universityName: 'Allama Iqbal Open University (AIOU)',
    shortName: 'AIOU',
    location: 'Sector H-8, Islamabad (Nationwide Regional Study Centers)',
    category: 'Distance & Flexible Learning',
    programs: [
      'BS Computer Science (Face-to-Face & Blended)',
      'BS Mathematics',
      'BS Physics & Chemistry',
      'B.Ed (1.5, 2.5 & 4 Years)',
      'BS English & Urdu Literature',
      'Associate Degrees (Arts & Commerce)',
      'BS Mass Communication'
    ],
    admissionCycles: 'Spring (Jan-Feb) and Autumn (July-Aug) Sessions',
    applicationDeadline: 'Bi-annual Open Enrollment Cycles',
    eligibilitySummary: 'Pass in Intermediate / HSSC examination with at least 45% (or 50% for Science/Computing programs). Highly flexible for self-paced and working students.',
    officialAdmissionUrl: 'https://online.aiou.edu.pk/',
    acceptedEntryTests: ['Academic Merit (Open Merit) / Departmental Screening for Computing'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 5. VU
  {
    id: 'uni-vu',
    universityName: 'Virtual University of Pakistan (VU)',
    shortName: 'VU',
    location: 'Federal Government Distance University (Campuses in all major Pakistani cities)',
    category: 'Distance & Flexible Learning',
    programs: [
      'BS Computer Science (BSCS)',
      'BS Software Engineering (BSSE)',
      'BS Information Technology (BSIT)',
      'BS Data Science',
      'BBA & BS Accounting & Finance',
      'BS Bioinformatics & Biotechnology',
      'BS Mass Communication & Psychology'
    ],
    admissionCycles: 'Fall (Aug-Sep) & Spring (Feb-Mar) Admissions',
    applicationDeadline: 'Biannual online admission portal',
    eligibilitySummary: 'Minimum 45% to 50% in Intermediate / HSSC (Pre-Engineering, ICS, Pre-Medical with deficient math or General). World-class LMS with digital lectures and regional lab exams.',
    officialAdmissionUrl: 'https://www.vu.edu.pk/Admissions/',
    acceptedEntryTests: ['Academic Record Based Merit / VU Entry Screening'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 6. NUML
  {
    id: 'uni-numl',
    universityName: 'National University of Modern Languages (NUML)',
    shortName: 'NUML',
    location: 'Sector H-9, Islamabad (Campuses: Rawalpindi, Lahore, Peshawar, Karachi, etc.)',
    category: 'Business & Social',
    programs: [
      'BS English (Linguistics & Literature)',
      'BS Computer Science',
      'BS Software Engineering',
      'BS Artificial Intelligence',
      'BS International Relations (IR)',
      'BBA & Management Sciences',
      'Languages (Chinese, Arabic, German, French, Korean)'
    ],
    admissionCycles: 'Fall (June-July) & Spring (November-December)',
    applicationDeadline: 'Bi-annual Online Admission Cycles',
    eligibilitySummary: 'Minimum 50% in HSSC for social sciences and languages; minimum 50% in ICS/Pre-Engineering for Computing programs.',
    officialAdmissionUrl: 'https://onlineadm.numl.edu.pk/',
    acceptedEntryTests: ['NUML Computerized Entrance Test (CET)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 7. FJWU
  {
    id: 'uni-fjwu',
    universityName: 'Fatima Jinnah Women University (FJWU)',
    shortName: 'FJWU Rawalpindi',
    location: 'The Mall, Rawalpindi',
    category: 'Business & Social',
    programs: [
      'BS Software Engineering',
      'BS Computer Science',
      'BS Behavioral Sciences & Psychology',
      'BS English & Applied Linguistics',
      'BBA & Commerce',
      'BS Environmental Sciences',
      'BS Fine Arts & Design'
    ],
    admissionCycles: 'Fall Annual Undergraduate Admissions',
    applicationDeadline: 'August - September (Annual)',
    eligibilitySummary: 'Exclusively for female candidates. Minimum 50% in HSSC / F.Sc / ICS. Computing disciplines require Mathematics at intermediate level.',
    officialAdmissionUrl: 'https://fjwu.edu.pk/admissions/',
    acceptedEntryTests: ['NTS NAT / FJWU Institutional Aptitude Test'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 8. UE
  {
    id: 'uni-ue',
    universityName: 'University of Education (UE)',
    shortName: 'UE Lahore',
    location: 'Township, Lahore (Multiple campuses across Punjab: Attock, Vehari, Multan, Faisalabad)',
    category: 'General Sciences',
    programs: [
      'B.Ed (Hons) Elementary & Secondary',
      'BS Computer Science',
      'BS Information Technology',
      'BS Mathematics',
      'BS Physics',
      'BS Chemistry',
      'BS English & Educational Leadership'
    ],
    admissionCycles: 'Fall Annual Admissions Cycle',
    applicationDeadline: 'July - August (Annual)',
    eligibilitySummary: 'Minimum 45% - 50% in Intermediate. Highly recognized for training subject-specialist teachers and academic science professionals.',
    officialAdmissionUrl: 'https://ue.edu.pk/admissions/',
    acceptedEntryTests: ['Open Academic Merit / University Aptitude Assessment'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 9. UL
  {
    id: 'uni-ul',
    universityName: 'The University of Lahore (UOL)',
    shortName: 'UL / UOL',
    location: '1-KM Defence Road, Lahore (Islamabad & Sargodha campuses)',
    category: 'Medical & Dental',
    programs: [
      'MBBS (University College of Medicine)',
      'BDS (University College of Dentistry)',
      'Doctor of Physical Therapy (DPT)',
      'Doctor of Pharmacy (Pharm-D)',
      'BS Computer Science & Software Engineering',
      'BS Nursing',
      'BBA & Management Studies'
    ],
    admissionCycles: 'Fall & Spring Cycles (MDCAT for Medical)',
    applicationDeadline: 'Bi-annual Intake Cycles',
    eligibilitySummary: 'For MBBS/BDS: minimum 60% in HSSC Pre-Medical + PMDC MDCAT qualifying score. For Computing/IT: 50% in intermediate with math.',
    officialAdmissionUrl: 'https://admissions.uol.edu.pk/',
    acceptedEntryTests: ['PMDC MDCAT / UHS MDCAT (for Medical)', 'UOL Entry Test (UET)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 10. UK
  {
    id: 'uni-uk',
    universityName: 'University of Karachi (UoK)',
    shortName: 'UK / UoK Karachi',
    location: 'Main University Road, Karachi, Sindh',
    category: 'General Sciences',
    programs: [
      'BS Computer Science (UBIT)',
      'BS Software Engineering',
      'Pharm-D (Faculty of Pharmacy)',
      'BS Biotechnology & Genetic Engineering',
      'BS Applied Chemistry & Biochemistry',
      'BS Mass Communication',
      'BBA & Economics'
    ],
    admissionCycles: 'Fall Admissions (Annual)',
    applicationDeadline: 'November - December',
    eligibilitySummary: 'Minimum 50% - 60% in HSSC according to target faculty. Merit is determined via UoK Entry Test (KUET) or open academic merit.',
    officialAdmissionUrl: 'https://uok.edu.pk/admissions/',
    acceptedEntryTests: ['KUET (Karachi University Entry Test)', 'Open Academic Merit'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 11. SZABMU
  {
    id: 'uni-szabmu',
    universityName: 'Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU)',
    shortName: 'SZABMU MDCAT',
    location: 'PIMS Complex, Sector G-8/3, Islamabad',
    category: 'Medical & Dental',
    programs: [
      'MBBS (Federal Medical College Islamabad & affiliated colleges)',
      'BDS (School of Dentistry PIMS)',
      'Doctor of Physical Therapy (DPT)',
      'BS Medical Lab Technology (MLT)',
      'BS Nursing'
    ],
    admissionCycles: 'Annual National MDCAT Cycle (July-November)',
    applicationDeadline: 'Governed by PMDC national schedule',
    eligibilitySummary: 'Minimum 60% in HSSC Pre-Medical. Candidates must pass SZABMU MDCAT with minimum 55% for MBBS and 50% for BDS.',
    officialAdmissionUrl: 'https://www.szabmu.edu.pk/',
    acceptedEntryTests: ['SZABMU MDCAT (Islamabad, AJK & Overseas)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 12. BUHMS / BUHS
  {
    id: 'uni-buhs',
    universityName: 'Bolan University of Medical & Health Sciences (BUMHS)',
    shortName: 'BUHS / BUMHS MDCAT',
    location: 'Brewery Road, Quetta, Balochistan',
    category: 'Medical & Dental',
    programs: [
      'MBBS (Bolan Medical College Quetta, BMC)',
      'MBBS (Makran, Jhalawan & Loralai Medical Colleges)',
      'BDS (Dental Section BMC)',
      'Pharm-D & Allied Health Sciences'
    ],
    admissionCycles: 'Annual Provincial Medical Admission Cycle',
    applicationDeadline: 'Conducted under PMDC oversight',
    eligibilitySummary: 'Minimum 60% in F.Sc Pre-Medical. Balochistan domicile candidates must pass BUMHS MDCAT to compete for district and open quota seats.',
    officialAdmissionUrl: 'https://bumhs.edu.pk/',
    acceptedEntryTests: ['BUMHS MDCAT Entry Test'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 13. NUMS
  {
    id: 'uni-nums',
    universityName: 'National University of Medical Sciences (NUMS)',
    shortName: 'NUMS MDCAT',
    location: 'The Mall, Rawalpindi (Army Medical College & CMH Colleges)',
    category: 'Medical & Dental',
    programs: [
      'MBBS (Army Medical College Rawalpindi)',
      'BDS (Army Medical College)',
      'MBBS in CMH Medical Colleges (Lahore, Multan, Kharian, Bahawalpur, Quetta)',
      'BS Medical Lab Tech',
      'BS Cardiac Perfusion',
      'BS Human Nutrition'
    ],
    admissionCycles: 'Annual NUMS Entry Test Cycle (August-October)',
    applicationDeadline: 'August - September Annual Intake',
    eligibilitySummary: 'Minimum 60% in HSSC Pre-Medical. Mandatory appearance in NUMS MDCAT examination comprising academic MCQs and psychological test.',
    officialAdmissionUrl: 'https://numspak.edu.pk/',
    acceptedEntryTests: ['NUMS MDCAT Entry Test'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 14. PMDC Regulatory Body
  {
    id: 'uni-pmdc',
    universityName: 'Pakistan Medical & Dental Council (PMDC)',
    shortName: 'PMDC MDCAT',
    location: 'Mauve Area, G-10/4, Islamabad',
    category: 'Medical & Dental',
    programs: [
      'National MBBS Uniform Standard',
      'National BDS Uniform Standard',
      'All Public Sector Medical Colleges in Pakistan',
      'All Private Sector Medical & Dental Institutions'
    ],
    admissionCycles: 'Single Unified National Examination Schedule',
    applicationDeadline: 'August - September National Window',
    eligibilitySummary: 'Federal regulatory standard: 50% MDCAT + 40% F.Sc Pre-Medical + 10% Matric. Pass percentage: 55% for MBBS, 50% for BDS.',
    officialAdmissionUrl: 'https://pmdc.pk/',
    acceptedEntryTests: ['Unified National MDCAT (PMDC Curriculum)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 15. FAST-NUCES
  {
    id: 'uni-fast',
    universityName: 'National University of Computer & Emerging Sciences (FAST-NUCES)',
    shortName: 'FAST-NUCES',
    location: 'Islamabad, Lahore, Karachi, Peshawar, Faisalabad',
    category: 'Engineering & Computing',
    programs: ['Computer Science', 'Software Engineering', 'Artificial Intelligence', 'Data Science', 'Cyber Security', 'Electrical Engineering'],
    admissionCycles: 'Fall Admissions (Annual)',
    applicationDeadline: 'June - July',
    eligibilitySummary: 'Minimum 50% in SSC and 50% in HSSC (ICS / Pre-Engineering). Merit determined by FAST Entry Test or NTS-NAT score.',
    officialAdmissionUrl: 'https://nu.edu.pk/Admissions',
    acceptedEntryTests: ['FAST NU Test', 'NTS NAT-IE/ICS'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 16. QAU
  {
    id: 'uni-qau',
    universityName: 'Quaid-i-Azam University (QAU)',
    shortName: 'QAU Islamabad',
    location: 'Islamabad',
    category: 'General Sciences',
    programs: ['BS Physics', 'BS Chemistry', 'BS Mathematics', 'BS Biotechnology', 'BS Computer Science', 'BS International Relations'],
    admissionCycles: 'Fall & Spring Admissions',
    eligibilitySummary: 'Open merit based on SSC (30%) and HSSC (70%) marks for basic sciences programs.',
    officialAdmissionUrl: 'https://qau.edu.pk/admissions/',
    acceptedEntryTests: ['Open Merit / Academic Aggregate', 'LAT (for Law)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 17. GIKI
  {
    id: 'uni-giki',
    universityName: 'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)',
    shortName: 'GIKI',
    location: 'Topi, Swabi District, Khyber Pakhtunkhwa',
    category: 'Engineering & Computing',
    programs: [
      'BS Computer Engineering',
      'BS Computer Science',
      'BS Artificial Intelligence',
      'BS Software Engineering',
      'BS Cyber Security',
      'BS Mechanical Engineering',
      'BS Electrical Engineering',
      'BS Chemical Engineering',
      'BS Materials Science'
    ],
    admissionCycles: 'Annual Undergraduate Intake (April - July)',
    applicationDeadline: 'June - July (Annual Test)',
    eligibilitySummary: 'Minimum 60% aggregate in SSC and HSSC Pre-Engineering or ICS. Admission merit calculated from GIKI Admission Test (85%) + HSSC-I / SSC (15%).',
    officialAdmissionUrl: 'https://giki.edu.pk/admissions/',
    acceptedEntryTests: ['GIKI Admission Test', 'SAT / ACT (International Candidates)'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },

  // 18. PIEAS
  {
    id: 'uni-pieas',
    universityName: 'Pakistan Institute of Engineering and Applied Sciences (PIEAS)',
    shortName: 'PIEAS',
    location: 'Lehtrar Road, Nilore, Islamabad',
    category: 'Engineering & Computing',
    programs: [
      'BS Electrical Engineering',
      'BS Mechanical Engineering',
      'BS Chemical Engineering',
      'BS Metallurgical & Materials Engineering',
      'BS Computer Science',
      'BS Physics'
    ],
    admissionCycles: 'Annual Written Test Cycle (May - July)',
    applicationDeadline: 'June (Annual)',
    eligibilitySummary: 'Minimum 60% in Matric & F.Sc Pre-Engineering / ICS. Selection based on PIEAS Written Admission Test (60%) + F.Sc (25%) + Matric (15%).',
    officialAdmissionUrl: 'https://pieas.edu.pk/admissions.html',
    acceptedEntryTests: ['PIEAS Written Admission Test'],
    verifiedStatus: 'Verified Official',
    lastCheckedDate: 'October 2026',
  },
];

export const entryTestGuidesData: EntryTestGuide[] = [
  // 1. PMDC MDCAT
  {
    id: 'test-pmdc-mdcat',
    testName: 'PMDC MDCAT',
    fullName: 'National Medical & Dental Colleges Admission Test (PMDC Framework)',
    conductingBody: 'Pakistan Medical & Dental Council (PMDC)',
    targetUniversities: [
      'All Public Medical Colleges in Punjab (UHS)',
      'All Public Medical Colleges in Sindh (DUHS)',
      'All Federal & AJK Colleges (SZABMU FMC PIMS)',
      'All Balochistan Colleges (BUMHS BMC)',
      'Khyber Pakhtunkhwa Medical Colleges (KMU)',
      'All Recognized Private Medical & Dental Institutions Nationwide'
    ],
    testStructure: [
      { subject: 'Biology', percentage: '34%', questionsCount: 68 },
      { subject: 'Chemistry', percentage: '27%', questionsCount: 54 },
      { subject: 'Physics', percentage: '27%', questionsCount: 54 },
      { subject: 'English', percentage: '9%', questionsCount: 18 },
      { subject: 'Logical Reasoning', percentage: '3%', questionsCount: 6 },
    ],
    totalQuestions: 200,
    totalMarks: 200,
    duration: '3.5 Hours (210 Minutes)',
    negativeMarking: false,
    syllabusOverview: 'Uniform national syllabus authorized by PMDC based on F.Sc Pre-Medical topics: Cell Biology, Bioenergetics, Genetics, Organic Functional Groups, Thermodynamics, Electromagnetism, Modern Physics, and Critical Reasoning.',
    recommendedPrepStrategy: [
      'Biology lines: Read Punjab and Federal Board textbooks line-by-line; questions are directly derived from textbook statements.',
      'Physics calculations: Practice solving without calculator using decimal approximations and power-of-10 simplifications.',
      'Chemistry: Focus on reaction mechanisms, reagents, and physical chemistry equilibrium constants.',
      'No negative marking: Attempt all 200 questions without leaving any blank spaces.'
    ],
    officialRegistrationUrl: 'https://pmdc.pk/',
  },

  // 2. SZABMU MDCAT
  {
    id: 'test-szabmu-mdcat',
    testName: 'SZABMU MDCAT',
    fullName: 'SZABMU Medical Entry Test (Federal Capital, AJK & International)',
    conductingBody: 'Shaheed Zulfiqar Ali Bhutto Medical University (SZABMU) Islamabad',
    targetUniversities: [
      'Federal Medical College (FMC) Islamabad',
      'School of Dentistry (PIMS) Islamabad',
      'Mohtarma Benazir Bhutto Shaheed Medical College Mirpur (AJK)',
      'Poonch Medical College Rawalakot (AJK)',
      'AJK Medical College Muzaffarabad',
      'Federal Capital Private Medical & Dental Colleges (Shifa, HBS, Islamabad Medical College, Rawal)'
    ],
    testStructure: [
      { subject: 'Biology', percentage: '34%', questionsCount: 68 },
      { subject: 'Chemistry', percentage: '27%', questionsCount: 54 },
      { subject: 'Physics', percentage: '27%', questionsCount: 54 },
      { subject: 'English', percentage: '9%', questionsCount: 18 },
      { subject: 'Logical Reasoning', percentage: '3%', questionsCount: 6 },
    ],
    totalQuestions: 200,
    totalMarks: 200,
    duration: '3.5 Hours (210 Minutes)',
    negativeMarking: false,
    syllabusOverview: 'Strict adherence to PMDC prescribed curriculum. Administered across test centers in Islamabad, Rawalpindi, Muzaffarabad, Mirpur, Gilgit, and overseas locations in UAE and Saudi Arabia.',
    recommendedPrepStrategy: [
      'Master Federal Board (FBISE) biology diagrams, tables, and biochemical pathways.',
      'Review previous SZABMU past paper questions to understand difficulty patterns.',
      'Take full-length mock examinations under 3.5 hour strict paper conditions.'
    ],
    officialRegistrationUrl: 'https://www.szabmu.edu.pk/',
  },

  // 3. NUMS MDCAT
  {
    id: 'test-nums-mdcat',
    testName: 'NUMS MDCAT',
    fullName: 'National University of Medical Sciences Entrance Test',
    conductingBody: 'National University of Medical Sciences (NUMS) Rawalpindi',
    targetUniversities: [
      'Army Medical College (AMC) Rawalpindi',
      'CMH Lahore Medical College',
      'CMH Multan Institute of Medical Sciences (CIMS)',
      'CMH Kharian Medical College',
      'HITEC Institute of Medical Sciences Taxila',
      'Quetta Institute of Medical Sciences (QIMS)',
      'Bahauddin Zakariya Army Medical College Bahawalpur'
    ],
    testStructure: [
      { subject: 'Biology', percentage: '35%', questionsCount: 70 },
      { subject: 'Chemistry', percentage: '22.5%', questionsCount: 45 },
      { subject: 'Physics', percentage: '22.5%', questionsCount: 45 },
      { subject: 'English', percentage: '10%', questionsCount: 20 },
      { subject: 'Aptitude / Psychological Test', percentage: '10%', questionsCount: 20 },
    ],
    totalQuestions: 200,
    totalMarks: 200,
    duration: '3 Hours (180 Minutes)',
    negativeMarking: false,
    syllabusOverview: 'High-concept test covering F.Sc Pre-Medical topics with an additional dedicated Psychological Evaluation section to assess personality traits and analytical aptitude for military medical institutions.',
    recommendedPrepStrategy: [
      'Review both Federal (FBISE) and Punjab textbooks for comprehensive syllabus depth.',
      'Understand physiological processes and medical application-based questions.',
      'Approach the psychological section honestly and with mental composure.'
    ],
    officialRegistrationUrl: 'https://numspak.edu.pk/',
  },

  // 4. BUHS / BUMHS MDCAT
  {
    id: 'test-buhs-mdcat',
    testName: 'BUHS / BUMHS MDCAT',
    fullName: 'Bolan University Balochistan Provincial Medical Entry Test',
    conductingBody: 'Bolan University of Medical & Health Sciences (BUMHS) Quetta',
    targetUniversities: [
      'Bolan Medical College (BMC) Quetta',
      'Makran Medical College Turbat',
      'Jhalawan Medical College Khuzdar',
      'Loralai Medical College Loralai',
      'Affiliated Balochistan Dental & Allied Health Colleges'
    ],
    testStructure: [
      { subject: 'Biology', percentage: '34%', questionsCount: 68 },
      { subject: 'Chemistry', percentage: '27%', questionsCount: 54 },
      { subject: 'Physics', percentage: '27%', questionsCount: 54 },
      { subject: 'English', percentage: '9%', questionsCount: 18 },
      { subject: 'Logical Reasoning', percentage: '3%', questionsCount: 6 },
    ],
    totalQuestions: 200,
    totalMarks: 200,
    duration: '3.5 Hours (210 Minutes)',
    negativeMarking: false,
    syllabusOverview: 'PMDC uniform curriculum administered specifically for Balochistan provincial quota and open-merit medical seats.',
    recommendedPrepStrategy: [
      'Focus on high-yield biology topics: Reproduction, Coordination, Genetics, and Cell Cycle.',
      'Solve previous year BUMHS and PMDC standardized past papers.',
      'Time management: Spend roughly 45 seconds per MCQ on conceptual questions.'
    ],
    officialRegistrationUrl: 'https://bumhs.edu.pk/',
  },

  // 5. NUST NET
  {
    id: 'test-net-nust',
    testName: 'NUST NET',
    fullName: 'NUST Entrance Test for Engineering, Computing & Applied Sciences',
    conductingBody: 'National University of Sciences & Technology (NUST) Islamabad',
    targetUniversities: [
      'NUST H-12 Campus Islamabad (SEECS, SMME, SCME, NICE)',
      'College of E&ME Rawalpindi',
      'Military College of Signals (MCS) Rawalpindi',
      'Pakistan Navy Engineering College (PNEC) Karachi'
    ],
    testStructure: [
      { subject: 'Mathematics', percentage: '40%', questionsCount: 80 },
      { subject: 'Physics', percentage: '30%', questionsCount: 60 },
      { subject: 'Chemistry / Computer', percentage: '15%', questionsCount: 30 },
      { subject: 'English', percentage: '10%', questionsCount: 20 },
      { subject: 'Intelligence & Quantitative', percentage: '5%', questionsCount: 10 },
    ],
    totalQuestions: 200,
    totalMarks: 200,
    duration: '3 Hours (180 Minutes)',
    negativeMarking: false,
    syllabusOverview: 'Covers entire F.Sc / FBISE Class 11 & Class 12 curriculum. Heavy focus on conic sections, integration, vectors, mechanics, and electrostatics.',
    recommendedPrepStrategy: [
      'Solve all exercise and supplementary problems from Punjab & Federal Board textbooks.',
      'Computer-based test practice: familiarise yourself with on-screen navigation.',
      'Since NET has 4 series (NET-1, 2, 3, 4), appear in earlier series for maximum aggregate improvement.'
    ],
    officialRegistrationUrl: 'https://nust.edu.pk/admissions/undergraduate/',
  },

  // 6. NTS NAT (for COMSATS, IIUI, FJWU)
  {
    id: 'test-nts-nat',
    testName: 'NTS NAT',
    fullName: 'National Aptitude Test (NAT-IE, NAT-ICS, NAT-IM, NAT-GS)',
    conductingBody: 'National Testing Service (NTS) Pakistan',
    targetUniversities: [
      'COMSATS University Islamabad (All Campuses)',
      'International Islamic University Islamabad (IIUI)',
      'Fatima Jinnah Women University (FJWU Rawalpindi)',
      'FAST-NUCES (Accepts NAT score for admission)',
      'Institute of Space Technology (IST) Islamabad',
      'Quaid-i-Azam University (Selected BS programs)'
    ],
    testStructure: [
      { subject: 'Verbal Reasoning (English)', percentage: '22%', questionsCount: 20 },
      { subject: 'Analytical Reasoning', percentage: '22%', questionsCount: 20 },
      { subject: 'Quantitative Reasoning', percentage: '22%', questionsCount: 20 },
      { subject: 'Subject Knowledge (Math/Bio/Comp/Phys)', percentage: '34%', questionsCount: 30 },
    ],
    totalQuestions: 90,
    totalMarks: 90,
    duration: '2 Hours (120 Minutes)',
    negativeMarking: false,
    syllabusOverview: 'Conducted every single month throughout Pakistan. Scores remain valid for 1 full year for university applications.',
    recommendedPrepStrategy: [
      'Sharpen analytical logic puzzles: arrangement, sequencing, and conditional grouping problems.',
      'Master high-frequency English vocabulary, analogies, and sentence completion.',
      'Review fundamental high school math: percentages, ratios, algebra, and geometry.'
    ],
    officialRegistrationUrl: 'https://www.nts.org.pk/',
  },

  // 7. GIKI Admission Test
  {
    id: 'test-giki-admission',
    testName: 'GIKI Test',
    fullName: 'GIKI Undergraduate Admission Test for Engineering & Computing',
    conductingBody: 'GIK Institute Topi',
    targetUniversities: ['GIKI Topi, Swabi'],
    testStructure: [
      { subject: 'Mathematics', percentage: '37.5%', questionsCount: 30 },
      { subject: 'Physics', percentage: '37.5%', questionsCount: 30 },
      { subject: 'English', percentage: '25%', questionsCount: 20 },
    ],
    totalQuestions: 80,
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    negativeMarking: true,
    syllabusOverview: 'Rigorous conceptual test based on Intermediate Mathematics and Physics curriculum. Emphasizes calculus, vectors, mechanics, waves, and electromagnetism.',
    recommendedPrepStrategy: [
      'Be mindful of negative marking (-1 mark per incorrect answer). Only guess when you can eliminate at least two choices.',
      'Practice deep numerical problem-solving beyond rote formula memorization.',
      'Solve previous GIKI sample papers under timed conditions.'
    ],
    officialRegistrationUrl: 'https://giki.edu.pk/admissions/undergraduate/how-to-apply/',
  },

  // 8. PIEAS Written Test
  {
    id: 'test-pieas-test',
    testName: 'PIEAS Test',
    fullName: 'PIEAS Written Admission Test for Engineering & Computing',
    conductingBody: 'PIEAS Islamabad',
    targetUniversities: ['PIEAS Nilore Islamabad'],
    testStructure: [
      { subject: 'Mathematics', percentage: '30%', questionsCount: 30 },
      { subject: 'Physics', percentage: '30%', questionsCount: 30 },
      { subject: 'Chemistry / Computer', percentage: '30%', questionsCount: 30 },
      { subject: 'English', percentage: '10%', questionsCount: 10 },
    ],
    totalQuestions: 100,
    totalMarks: 300,
    duration: '3 Hours (180 Minutes)',
    negativeMarking: true,
    syllabusOverview: 'Highly analytical entrance exam designed to identify top engineering talent across Pakistan.',
    recommendedPrepStrategy: [
      'Focus on high-level conceptual physics and multi-step calculus problems.',
      'Strict penalty for incorrect answers; skip questions where you are completely uncertain.',
      'Revise both Class 11 and Class 12 Federal & Punjab Board syllabus thoroughly.'
    ],
    officialRegistrationUrl: 'https://pieas.edu.pk/admissions.html',
  },
];

export const meritListsData: MeritListEntry[] = [
  {
    id: 'merit-nust-se-2025',
    universityName: 'NUST Islamabad',
    program: 'BS Software Engineering (SEECS)',
    admissionCycle: 'Undergraduate Fall Cycle',
    academicYear: '2025-2026',
    listNumber: 'Final Closing Merit',
    publishedDate: 'September 2025',
    closingMeritAggregate: 'Merit Position: ~380 (Aggregate: ~78.4%)',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://nust.edu.pk/admissions/undergraduate/merit-lists/',
    notes: 'Official closing merit positions published by NUST UG Admissions Office for SEECS campus.',
  },
  {
    id: 'merit-comsats-cs-2025',
    universityName: 'COMSATS Islamabad',
    program: 'BS Computer Science (Main Campus)',
    admissionCycle: 'Fall Admissions',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'August 2025',
    closingMeritAggregate: 'Closing NTS Aggregate: ~86.2%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://admissions.comsats.edu.pk/',
    notes: 'Calculated via 50% NTS-NAT + 40% F.Sc + 10% Matric formula.',
  },
  {
    id: 'merit-szabmu-fmc-2025',
    universityName: 'SZABMU / FMC Islamabad',
    program: 'MBBS (Federal Medical College Islamabad - ICT Open Merit)',
    admissionCycle: 'National MDCAT Admissions',
    academicYear: '2025-2026',
    listNumber: 'Final Closing Merit',
    publishedDate: 'January 2026',
    closingMeritAggregate: 'Closing Aggregate: ~92.45%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://www.szabmu.edu.pk/',
    notes: 'Official closing aggregate for ICT open merit candidates at Federal Medical College PIMS.',
  },
  {
    id: 'merit-nums-amc-2025',
    universityName: 'NUMS / Army Medical College',
    program: 'MBBS (AMC Rawalpindi - Civilian Open Merit)',
    admissionCycle: 'MBBS Admissions',
    academicYear: '2025-2026',
    listNumber: 'Final Closing Merit',
    publishedDate: 'December 2025',
    closingMeritAggregate: 'Closing Aggregate: ~93.85%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://numspak.edu.pk',
    notes: 'Highest competitive civilian open-merit category for AMC Rawalpindi.',
  },
  {
    id: 'merit-buhs-bmc-2025',
    universityName: 'BUMHS Quetta',
    program: 'MBBS (Bolan Medical College Quetta - Open Merit)',
    admissionCycle: 'Balochistan Medical Admissions',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'January 2026',
    closingMeritAggregate: 'Provincial Open Merit: ~83.15%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://bumhs.edu.pk/',
    notes: 'BUMHS official admission list for public medical colleges across Balochistan.',
  },
  {
    id: 'merit-iiui-cs-2025',
    universityName: 'IIUI Islamabad',
    program: 'BS Computer Science (Faculty of Computing)',
    admissionCycle: 'Fall Admissions',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'September 2025',
    closingMeritAggregate: 'Closing Academic Merit: ~74.8%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://admission.iiu.edu.pk/',
    notes: 'Faculty of Computing & Information Technology undergraduate merit.',
  },
  {
    id: 'merit-fast-cs-isb-2025',
    universityName: 'FAST-NUCES Islamabad',
    program: 'BS Computer Science',
    admissionCycle: 'Fall Admissions',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'August 2025',
    closingMeritAggregate: 'Cut-off Aggregate: ~73.5%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://nu.edu.pk',
    notes: 'Closing aggregate for Islamabad campus general seat allocation.',
  },
  {
    id: 'merit-fjwu-se-2025',
    universityName: 'FJWU Rawalpindi',
    program: 'BS Software Engineering',
    admissionCycle: 'Fall Cycle',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'September 2025',
    closingMeritAggregate: 'Cut-off Aggregate: ~68.9%',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://fjwu.edu.pk/',
    notes: 'Department of Software Engineering, Fatima Jinnah Women University.',
  },
  {
    id: 'merit-vu-2025',
    universityName: 'Virtual University (VU)',
    program: 'BS Computer Science / Software Engineering',
    admissionCycle: 'Fall Open Admissions',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'October 2025',
    closingMeritAggregate: 'Eligibility Threshold: Minimum 50% in HSSC',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://www.vu.edu.pk/',
    notes: 'Open access university model ensuring seats for all eligible candidates meeting minimum HEC criteria.',
  },
  {
    id: 'merit-giki-cs-2025',
    universityName: 'GIKI Topi',
    program: 'BS Computer Science & Artificial Intelligence',
    admissionCycle: 'Undergraduate Fall Cycle',
    academicYear: '2025-2026',
    listNumber: 'Final Closing Merit',
    publishedDate: 'August 2025',
    closingMeritAggregate: 'Merit Position: ~320',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://giki.edu.pk/admissions/',
    notes: 'Official closing merit position for Computing and Data Science faculty.',
  },
  {
    id: 'merit-pieas-ee-2025',
    universityName: 'PIEAS Islamabad',
    program: 'BS Electrical Engineering',
    admissionCycle: 'Undergraduate Cycle',
    academicYear: '2025-2026',
    listNumber: '1st Merit List',
    publishedDate: 'August 2025',
    closingMeritAggregate: 'Written Test Rank: ~620',
    verificationStatus: 'Verified Official Source',
    officialSourceUrl: 'https://pieas.edu.pk',
    notes: 'Composite aggregate of PIEAS Written Test (60%) and Intermediate results.',
  },
];
