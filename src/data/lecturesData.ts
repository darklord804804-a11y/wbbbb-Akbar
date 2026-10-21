/**
 * Akbar Study Smart Academy
 * Video Lectures & Online Learning Data
 */

export interface VideoLecture {
  id: string;
  title: string;
  classId: 'class-9' | 'class-10' | 'class-11' | 'class-12' | 'entry-test';
  classLabel: string;
  subject: string;
  chapter: string;
  topic: string;
  instructor?: string;
  duration?: string;
  viewsCount?: string;
  youtubeUrl: string;
  embedId?: string; // Optional verified embed ID
  description: string;
  featured: boolean;
  learningOutcomes: string[];
}

export const lecturesData: VideoLecture[] = [
  {
    id: 'lec-9-phy-eq-motion',
    title: 'Derivation of 3 Equations of Motion Made Simple',
    classId: 'class-9',
    classLabel: 'Class 9',
    subject: 'Physics',
    chapter: 'Chapter 2: Kinematics',
    topic: 'Graphical Proof of Motion Equations (SLO Focus)',
    duration: '24 mins',
    youtubeUrl: 'https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf',
    description: 'Clear graphical derivation of vf = vi + at, S = vit + 1/2at², and 2aS = vf² - vi² using speed-time graph with practical FBISE exam tips.',
    featured: true,
    learningOutcomes: [
      'Understand the physical meaning of slope and area under speed-time graph',
      'Step-by-step mathematical proof of all three equations',
      'Common mistakes students make in board exam paper checking',
    ],
  },
  {
    id: 'lec-10-chm-equilibrium',
    title: 'Chemical Equilibrium & Law of Mass Action in Detail',
    classId: 'class-10',
    classLabel: 'Class 10',
    subject: 'Chemistry',
    chapter: 'Chapter 9: Chemical Equilibrium',
    topic: 'Equilibrium Constant Kc Derivation & Numerical Problems',
    duration: '31 mins',
    youtubeUrl: 'https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf',
    description: 'Detailed explanation of forward vs reverse reactions, dynamic equilibrium condition, deriving Kc expression for general reactions, and units determination.',
    featured: true,
    learningOutcomes: [
      'Grasp why equilibrium is dynamic rather than static',
      'Derive equilibrium expressions for homogeneous gas reactions',
      'Calculate numerical values of Kc with proper units',
    ],
  },
  {
    id: 'lec-11-phy-vectors',
    title: 'Vectors Scalar & Vector Products Complete Conceptual Guide',
    classId: 'class-11',
    classLabel: 'Class 11',
    subject: 'Physics',
    chapter: 'Chapter 2: Vectors and Equilibrium',
    topic: 'Dot Product, Cross Product & Physical Applications',
    duration: '38 mins',
    youtubeUrl: 'https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf',
    description: 'Master dot products (work, power) and cross products (torque, magnetic force) with right-hand rule visualization and component methods.',
    featured: true,
    learningOutcomes: [
      'Calculate angle between two 3D vectors using dot product',
      'Determine vector perpendicular to plane using cross product',
      'Solve torque problems in 3D Cartesian coordinates',
    ],
  },
  {
    id: 'lec-12-mth-differentiation',
    title: 'Differentiation Masterclass: Product, Quotient & Chain Rules',
    classId: 'class-12',
    classLabel: 'Class 12',
    subject: 'Mathematics',
    chapter: 'Chapter 2: Differentiation',
    topic: 'Calculus Techniques for FBISE and ECAT/NET',
    duration: '42 mins',
    youtubeUrl: 'https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf',
    description: 'Essential rules of derivatives explained with step-by-step examples. Focuses on trigonometric, logarithmic, and composite function differentials.',
    featured: true,
    learningOutcomes: [
      'Apply chain rule smoothly on nested algebraic and trigonometric expressions',
      'Differentiate implicit relations without algebraic rearrangement errors',
      'Shortcut formulas for university entrance tests',
    ],
  },
  {
    id: 'lec-10-bio-genetics',
    title: 'Mendel’s Laws of Inheritance & Monohybrid Cross',
    classId: 'class-10',
    classLabel: 'Class 10',
    subject: 'Biology',
    chapter: 'Chapter 15: Inheritance',
    topic: 'Law of Segregation & Punnett Square Analysis',
    duration: '28 mins',
    youtubeUrl: 'https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf',
    description: 'Understand dominant vs recessive alleles, genotype vs phenotype, and how to construct Punnett squares accurately for FBISE questions.',
    featured: false,
    learningOutcomes: [
      'Define homozygous, heterozygous, alleles, and gene locus',
      'Predict F1 and F2 ratios for monohybrid and dihybrid crosses',
      'Common board questions on human ABO blood group inheritance',
    ],
  },
  {
    id: 'lec-et-mdcat-organic',
    title: 'MDCAT / NUMS High Yield Organic Chemistry Summary',
    classId: 'entry-test',
    classLabel: 'Entry Test',
    subject: 'Chemistry',
    chapter: 'High Yield Entry Test Topics',
    topic: 'SN1, SN2, E1, E2 and Carbonyl Condensation Reactions',
    duration: '45 mins',
    youtubeUrl: 'https://youtube.com/@akbarstudysmartacademy?si=3gcJ0zBQJgjN6ZDf',
    description: 'Rapid-fire breakdown of the most frequently tested organic reactions in MDCAT and NUMS examinations with reaction tricks and elimination techniques.',
    featured: true,
    learningOutcomes: [
      'Distinguish solvent and nucleophile conditions favoring SN2 over SN1',
      'Identify positive chemical test results (Lucas, Tollens, Fehling, Iodoform)',
      'Time-saving elimination methods for MCQ multiple-choice options',
    ],
  },
];
