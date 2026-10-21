/**
 * Akbar Study Smart Academy
 * Federal Board (FBISE) Past Papers & Model Papers Archive (2020 - 2025)
 */

export interface PastPaper {
  id: string;
  title: string;
  classId: 'class-9' | 'class-10' | 'class-11' | 'class-12';
  classLabel: string;
  subject: string;
  year: number;
  session: 'Annual I' | 'Annual II' | 'Model Paper SLO';
  boardName: 'FBISE Federal Board Islamabad';
  totalMarks: number;
  timeAllowed: string;
  sectionsBreakdown: {
    sectionA: string;
    sectionB: string;
    sectionC: string;
  };
  hasSolvedSolutions: boolean;
  officialSource: string;
  officialSourceUrl: string;
  summary: string;
}

export const pastPapersData: PastPaper[] = [
  {
    id: 'pp-9-phy-2025-a1',
    title: 'FBISE Class 9 Physics Past Paper 2025 (Annual I)',
    classId: 'class-9',
    classLabel: 'Class 9',
    subject: 'Physics',
    year: 2025,
    session: 'Annual I',
    boardName: 'FBISE Federal Board Islamabad',
    totalMarks: 65,
    timeAllowed: '2 Hours 40 Minutes',
    sectionsBreakdown: {
      sectionA: '12 MCQs (12 Marks, 20 mins) covering units, motion graphs, Pascal law, and thermal transfers',
      sectionB: 'Attempt 11 out of 15 Short Questions (33 Marks) on SLO conceptual applications',
      sectionC: 'Attempt 2 out of 3 Long Questions with numericals (20 Marks)',
    },
    hasSolvedSolutions: true,
    officialSource: 'FBISE Examination Archives',
    officialSourceUrl: 'https://fbise.edu.pk',
    summary: 'The 2025 Annual paper tested students heavily on graphical analysis of motion, Archimedes upthrust calculations, and heat capacity numericals.',
  },
  {
    id: 'pp-9-chm-2025-a1',
    title: 'FBISE Class 9 Chemistry Past Paper 2025 (Annual I)',
    classId: 'class-9',
    classLabel: 'Class 9',
    subject: 'Chemistry',
    year: 2025,
    session: 'Annual I',
    boardName: 'FBISE Federal Board Islamabad',
    totalMarks: 65,
    timeAllowed: '2 Hours 40 Minutes',
    sectionsBreakdown: {
      sectionA: '12 MCQs (12 Marks) focusing on electronic configuration, periodic trends, and molarity',
      sectionB: 'Attempt 11 out of 15 Short Questions (33 Marks) on chemical bonding and solutions',
      sectionC: 'Attempt 2 out of 3 Long Questions (20 Marks) including Rutherford model and Solvay process',
    },
    hasSolvedSolutions: true,
    officialSource: 'FBISE Examination Archives',
    officialSourceUrl: 'https://fbise.edu.pk',
    summary: 'Emphasized stoichiometry calculations and differences between covalent and coordinate bonding.',
  },
  {
    id: 'pp-10-phy-2025-a1',
    title: 'FBISE Class 10 Physics Past Paper 2025 (Annual I)',
    classId: 'class-10',
    classLabel: 'Class 10',
    subject: 'Physics',
    year: 2025,
    session: 'Annual I',
    boardName: 'FBISE Federal Board Islamabad',
    totalMarks: 65,
    timeAllowed: '2 Hours 40 Minutes',
    sectionsBreakdown: {
      sectionA: '12 MCQs (12 Marks) on lens formula, capacitors, transformers, and logic gate truth tables',
      sectionB: 'Attempt 11 out of 15 Short Questions (33 Marks) on wave motion, acoustics, and Ohm’s law',
      sectionC: 'Attempt 2 out of 3 Long Questions (20 Marks) on AC generator and radioactivity decay',
    },
    hasSolvedSolutions: true,
    officialSource: 'FBISE Examination Archives',
    officialSourceUrl: 'https://fbise.edu.pk',
    summary: 'A standard balanced SLO matric board examination featuring capacitor combination numericals.',
  },
  {
    id: 'pp-11-phy-2024-a1',
    title: 'FBISE Class 11 Physics Past Paper 2024 (Annual I)',
    classId: 'class-11',
    classLabel: 'Class 11',
    subject: 'Physics',
    year: 2024,
    session: 'Annual I',
    boardName: 'FBISE Federal Board Islamabad',
    totalMarks: 68,
    timeAllowed: '2 Hours 45 Minutes',
    sectionsBreakdown: {
      sectionA: '17 MCQs (17 Marks) testing dimensional analysis, vectors, projectile, and thermodynamics',
      sectionB: 'Attempt 14 out of 20 Short Questions (42 Marks) on physical optics and fluid flow',
      sectionC: 'Attempt 2 out of 3 Long Questions (26 Marks) on Carnot engine and Doppler effect',
    },
    hasSolvedSolutions: true,
    officialSource: 'FBISE Examination Archives',
    officialSourceUrl: 'https://fbise.edu.pk',
    summary: 'Strong focus on projectile motion numerical problems and derivations of young’s double slit experiment fringes.',
  },
  {
    id: 'pp-12-phy-2024-a1',
    title: 'FBISE Class 12 Physics Past Paper 2024 (Annual I)',
    classId: 'class-12',
    classLabel: 'Class 12',
    subject: 'Physics',
    year: 2024,
    session: 'Annual I',
    boardName: 'FBISE Federal Board Islamabad',
    totalMarks: 68,
    timeAllowed: '2 Hours 45 Minutes',
    sectionsBreakdown: {
      sectionA: '17 MCQs (17 Marks) on Gauss law, potentiometer, operational amplifiers, and nuclear reactions',
      sectionB: 'Attempt 14 out of 20 Short Questions (42 Marks) on AC circuits and modern physics',
      sectionC: 'Attempt 2 out of 3 Long Questions (26 Marks) on transformer, e/m ratio, and mass defect',
    },
    hasSolvedSolutions: true,
    officialSource: 'FBISE Examination Archives',
    officialSourceUrl: 'https://fbise.edu.pk',
    summary: 'Features in-depth Kirchhoff rules numericals and operational amplifier inverting configuration proofs.',
  },
  {
    id: 'pp-slo-model-10-phy',
    title: 'FBISE Class 10 Physics Official Model Paper (SLO Based)',
    classId: 'class-10',
    classLabel: 'Class 10',
    subject: 'Physics',
    year: 2025,
    session: 'Model Paper SLO',
    boardName: 'FBISE Federal Board Islamabad',
    totalMarks: 65,
    timeAllowed: '2 Hours 40 Minutes',
    sectionsBreakdown: {
      sectionA: '12 MCQs mapped directly to Student Learning Outcomes benchmark competencies',
      sectionB: '15 Conceptual Questions testing analytical thinking (Knowledge 50%, Understanding 30%, Application 20%)',
      sectionC: '3 Comprehensive Section C Questions with integrated numerical subparts',
    },
    hasSolvedSolutions: true,
    officialSource: 'FBISE Research & Curriculum Wing',
    officialSourceUrl: 'https://fbise.edu.pk',
    summary: 'The official benchmark model paper published by the Federal Board to illustrate cognitive SLO question formats.',
  },
];
