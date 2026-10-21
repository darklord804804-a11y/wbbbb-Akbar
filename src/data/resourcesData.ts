/**
 * Akbar Study Smart Academy
 * FBISE Study Materials & Resource Library
 */

export type ResourceType = 
  | 'Chapter Notes'
  | 'Short Questions'
  | 'Long Questions'
  | 'Important MCQs'
  | 'Solved Exercises'
  | 'Formula Sheets'
  | 'Paper Patterns'
  | 'Marking Schemes';

export interface StudyResource {
  id: string;
  title: string;
  classId: 'class-9' | 'class-10' | 'class-11' | 'class-12' | 'entry-test';
  classLabel: string;
  subject: string;
  chapter: string;
  chapterNumber?: number;
  type: ResourceType;
  format: 'Interactive Guide & PDF' | 'SLO Question Bank' | 'Formula Sheet' | 'Official Model Breakdown';
  lastUpdated: string;
  pagesEstimate: number;
  fileSizeEstimate: string;
  summary: string;
  tags: string[];
  fullContent: {
    overview: string;
    keyDefinitions: { term: string; definition: string }[];
    importantFormulas?: { name: string; formula: string; explanation: string }[];
    conceptualQuestions: { q: string; a: string; boardFrequency: string }[];
    studyTips: string[];
  };
}

export const studyResourcesData: StudyResource[] = [
  {
    id: 'res-9-phy-ch2',
    title: 'Kinematics: Complete Revision Notes & SLO Solved Questions',
    classId: 'class-9',
    classLabel: 'Class 9',
    subject: 'Physics',
    chapter: 'Chapter 2: Kinematics',
    chapterNumber: 2,
    type: 'Chapter Notes',
    format: 'Interactive Guide & PDF',
    lastUpdated: 'October 2026',
    pagesEstimate: 14,
    fileSizeEstimate: '2.4 MB',
    summary: 'Comprehensive notes covering base concepts of motion, graphical analysis of distance/time and speed/time, and step-by-step derivation of the 3 equations of motion.',
    tags: ['Equations of Motion', 'Speed vs Velocity', 'Distance-Time Graph', 'Freely Falling Bodies'],
    fullContent: {
      overview: 'Kinematics is the branch of classical mechanics that describes the motion of points, bodies, and systems of bodies without consideration of the forces that cause them to move. In FBISE Class 9, special focus is placed on differentiating scalar and vector concepts, deriving motion equations graphically, and understanding gravitational acceleration.',
      keyDefinitions: [
        { term: 'Rest & Motion', definition: 'A body is at rest if it does not change its position with respect to its surroundings. It is in motion if it changes its position with respect to its surroundings. Both states are relative.' },
        { term: 'Displacement', definition: 'The shortest distance between two points in a specified direction. It is a vector quantity having SI unit meters (m).' },
        { term: 'Uniform Acceleration', definition: 'A body has uniform acceleration if it has equal changes in velocity in equal intervals of time, however small the intervals may be.' },
        { term: 'Terminal Velocity', definition: 'The constant maximum speed attained by a falling body when the drag force equals its weight.' },
      ],
      importantFormulas: [
        { name: 'Average Velocity', formula: 'v_avg = d / t', explanation: 'Total displacement divided by total time elapsed.' },
        { name: 'Acceleration', formula: 'a = (vf - vi) / t', explanation: 'Rate of change of velocity with respect to time.' },
        { name: '1st Equation of Motion', formula: 'vf = vi + at', explanation: 'Relates initial velocity, uniform acceleration, time, and final velocity.' },
        { name: '2nd Equation of Motion', formula: 'S = vi·t + 1/2·a·t²', explanation: 'Gives distance travelled under constant acceleration.' },
        { name: '3rd Equation of Motion', formula: '2aS = vf² - vi²', explanation: 'Calculates displacement without requiring time variable.' },
      ],
      conceptualQuestions: [
        {
          q: 'Can a body have zero velocity and non-zero acceleration simultaneously? Give an example.',
          a: 'Yes. When a ball is thrown vertically upwards, at the highest point of its trajectory, its instantaneous velocity is zero (vf = 0), but it experiences a downward gravitational acceleration of g = 9.8 m/s².',
          boardFrequency: 'Asked in FBISE 2021, 2023, 2024',
        },
        {
          q: 'Explain why distance is always greater than or equal to the magnitude of displacement.',
          a: 'Distance is the actual length of the path traversed, while displacement is the straight-line shortcut between starting and ending points. Distance can equal displacement only in unidirectional rectilinear motion.',
          boardFrequency: 'Asked in FBISE 2022, 2025',
        },
      ],
      studyTips: [
        'Always draw labeled speed-time graphs with proper axes and units when attempting Section B derivation questions.',
        'Convert all units to standard SI (e.g. km/h to m/s by multiplying by 5/18) before substituting into formulas.',
      ],
    },
  },
  {
    id: 'res-9-chm-ch1',
    title: 'Fundamentals of Chemistry: Mole Concept & Empirical Formula Master Sheet',
    classId: 'class-9',
    classLabel: 'Class 9',
    subject: 'Chemistry',
    chapter: 'Chapter 1: Fundamentals of Chemistry',
    chapterNumber: 1,
    type: 'Solved Exercises',
    format: 'SLO Question Bank',
    lastUpdated: 'September 2026',
    pagesEstimate: 16,
    fileSizeEstimate: '2.8 MB',
    summary: 'Step-by-step solutions to Avogadro’s number calculations, percentage composition, balancing chemical equations, and differentiating mixtures from compounds.',
    tags: ['Mole Concept', 'Avogadro Number', 'Empirical Formula', 'Valency Chart'],
    fullContent: {
      overview: 'Chapter 1 introduces atomic mass units, molecular mass, formula mass, and the central concept of the mole in quantitative chemistry. Mastery of stoichiometry here is essential for all future chemistry coursework.',
      keyDefinitions: [
        { term: 'Mole', definition: 'The amount of substance containing 6.022 × 10²³ elementary particles (atoms, molecules, or formula units).' },
        { term: 'Empirical Formula', definition: 'The simplest whole-number ratio of atoms of each element present in a compound.' },
        { term: 'Molecular Formula', definition: 'The actual number of atoms of each element present in one molecule of a compound: Molecular Formula = n × Empirical Formula.' },
        { term: 'Avogadro’s Constant', definition: 'The number of particles in one mole of any pure substance, equal to 6.022 × 10²³ mol⁻¹.' },
      ],
      importantFormulas: [
        { name: 'Number of Moles', formula: 'Moles = Mass in grams / Molar Mass (g/mol)', explanation: 'Primary formula for converting between grams and chemical amount.' },
        { name: 'Number of Particles', formula: 'Particles = Moles × 6.022 × 10²³', explanation: 'Converts chemical moles into actual count of atoms or molecules.' },
        { name: 'Percentage Composition', formula: '% Element = (Mass of element in 1 mol / Molar mass) × 100%', explanation: 'Determines weight contribution of individual elements.' },
      ],
      conceptualQuestions: [
        {
          q: 'Calculate the number of molecules present in 9 grams of pure water (H₂O).',
          a: 'Molar mass of H₂O = (2 × 1) + 16 = 18 g/mol. Moles = 9 / 18 = 0.5 mol. Molecules = 0.5 × 6.022 × 10²³ = 3.011 × 10²³ molecules.',
          boardFrequency: 'FBISE Repeated Numerical',
        },
        {
          q: 'Why is formula mass used for ionic substances instead of molecular mass?',
          a: 'Ionic compounds (such as NaCl) do not exist as isolated single molecules, but as 3D crystal lattices of alternating ions. Therefore, formula mass representing the empirical formula unit is used.',
          boardFrequency: 'High Priority Conceptual SLO',
        },
      ],
      studyTips: [
        'Memorize the atomic masses of the first 20 elements (H through Ca) to accelerate numerical calculations.',
        'Keep track of decimal precision in molar mass calculations to avoid round-off discrepancies.',
      ],
    },
  },
  {
    id: 'res-10-phy-ch12',
    title: 'Geometrical Optics: Ray Diagrams & Lens Formula Solved Bank',
    classId: 'class-10',
    classLabel: 'Class 10',
    subject: 'Physics',
    chapter: 'Chapter 12: Geometrical Optics',
    chapterNumber: 12,
    type: 'Formula Sheets',
    format: 'Formula Sheet',
    lastUpdated: 'October 2026',
    pagesEstimate: 12,
    fileSizeEstimate: '2.1 MB',
    summary: 'Complete ray diagram conventions for convex/concave mirrors and lenses, sign convention rules, Snell’s law, and optical instrument magnifications.',
    tags: ['Lens Formula', 'Snell Law', 'Total Internal Reflection', 'Refractive Index'],
    fullContent: {
      overview: 'Geometrical Optics deals with light propagation in terms of rays. The Federal Board exam consistently asks Section C questions involving ray tracing and numerical calculations using the mirror/lens formula with proper sign conventions.',
      keyDefinitions: [
        { term: 'Total Internal Reflection', definition: 'The phenomenon when light travelling from an optically denser to a rarer medium hits the interface at an angle greater than the critical angle, reflecting entirely back into the denser medium.' },
        { term: 'Critical Angle', definition: 'The angle of incidence in the denser medium for which the angle of refraction in the rarer medium is exactly 90°.' },
        { term: 'Power of a Lens', definition: 'The reciprocal of focal length measured in meters: P = 1 / f (in meters), with SI unit dioptres (D).' },
      ],
      importantFormulas: [
        { name: 'Mirror / Lens Equation', formula: '1 / f = 1 / p + 1 / q', explanation: 'f = focal length, p = object distance, q = image distance.' },
        { name: 'Magnification', formula: 'm = h_image / h_object = q / p', explanation: 'Ratio of image height to object height.' },
        { name: 'Snell’s Law', formula: 'n₁ sin θ₁ = n₂ sin θ₂', explanation: 'Relates refractive indices to angles of incidence and refraction.' },
        { name: 'Critical Angle Formula', formula: 'sin θ_c = 1 / n', explanation: 'Gives critical angle for a medium with refractive index n relative to air.' },
      ],
      conceptualQuestions: [
        {
          q: 'Why does a diamond sparkle with intense brilliance?',
          a: 'Diamond has a very high refractive index (n ≈ 2.42), which corresponds to a very small critical angle of approximately 24.4°. Specially cut facets cause incident light to undergo multiple total internal reflections before exiting.',
          boardFrequency: 'FBISE 2020, 2022, 2024',
        },
      ],
      studyTips: [
        'Remember the New Cartesian Sign Convention: real images have positive q, virtual images have negative q; convex lenses have positive f, concave lenses have negative f.',
      ],
    },
  },
  {
    id: 'res-11-phy-formulas',
    title: 'HSSC-I Physics: Complete Formulas & Derivations Summary',
    classId: 'class-11',
    classLabel: 'Class 11',
    subject: 'Physics',
    chapter: 'All Chapters (1 to 11)',
    type: 'Formula Sheets',
    format: 'Formula Sheet',
    lastUpdated: 'October 2026',
    pagesEstimate: 22,
    fileSizeEstimate: '3.6 MB',
    summary: 'All vital equations, scalar/vector relations, conservation laws, wave equations, and thermodynamics relations compiled for fast revision.',
    tags: ['1st Year Physics', 'Formula Handbook', 'Derivations', 'MDCAT / ECAT Ready'],
    fullContent: {
      overview: 'A complete quick-revision guide compiling every formula required for FBISE Class 11 Physics Board examinations and entry test preparations.',
      keyDefinitions: [
        { term: 'Bernoulli’s Principle', definition: 'For an incompressible, non-viscous fluid undergoing steady streamline flow, the sum of pressure, kinetic energy per unit volume, and potential energy per unit volume remains constant.' },
        { term: 'Doppler Effect', definition: 'The apparent change in frequency of a wave caused by relative motion between the source of the wave and the observer.' },
      ],
      importantFormulas: [
        { name: 'Centripetal Acceleration', formula: 'a_c = v² / r = r·ω²', explanation: 'Radial acceleration keeping an object on a curved trajectory.' },
        { name: 'Bernoulli’s Equation', formula: 'P + 1/2·ρ·v² + ρ·g·h = Constant', explanation: 'Conservation of mechanical energy in ideal fluids.' },
        { name: 'Carnot Efficiency', formula: 'η = 1 - (T_cold / T_hot)', explanation: 'Maximum theoretical thermal efficiency of a heat engine.' },
      ],
      conceptualQuestions: [
        {
          q: 'Can absolute zero temperature be achieved practically? Why?',
          a: 'No. The Third Law of Thermodynamics dictates that absolute zero (0 Kelvin) cannot be attained in a finite number of thermodynamic operations.',
          boardFrequency: 'FBISE Board Favorite Conceptual',
        },
      ],
      studyTips: [
        'Practice dimensional verification on all complex equations before solving numericals.',
      ],
    },
  },
  {
    id: 'res-12-chm-mechanisms',
    title: 'Class 12 Organic Chemistry: Complete Reaction Mechanisms & Synthetic Pathways',
    classId: 'class-12',
    classLabel: 'Class 12',
    subject: 'Chemistry',
    chapter: 'Chapters 7 to 13: Organic Chemistry',
    type: 'Chapter Notes',
    format: 'Interactive Guide & PDF',
    lastUpdated: 'September 2026',
    pagesEstimate: 28,
    fileSizeEstimate: '4.8 MB',
    summary: 'Visual reaction maps for SN1 vs SN2, E1 vs E2, Aldol condensation, Cannizzaro reaction, Grignard reagents, and electrophilic aromatic substitutions.',
    tags: ['Organic Chemistry', 'Reaction Mechanisms', 'SN1 vs SN2', 'Benzene Electrophilic Substitution'],
    fullContent: {
      overview: 'Organic Chemistry constitutes roughly 45% of the total theory marks in Class 12 Chemistry for Federal Board FBISE. This guide clarifies electron pushing mechanisms and synthetic conversions step-by-step.',
      keyDefinitions: [
        { term: 'Electrophile', definition: 'An electron-deficient species (Lewis acid) capable of accepting an electron pair to form a covalent bond.' },
        { term: 'Nucleophile', definition: 'An electron-rich chemical species (Lewis base) that donates an electron pair to an electrophile.' },
        { term: 'Markovnikov’s Rule', definition: 'When an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part adds to the carbon atom with the lesser number of hydrogen atoms.' },
      ],
      importantFormulas: [
        { name: 'SN2 Mechanism', formula: 'Rate = k [Alkyl Halide] [Nucleophile]', explanation: 'Bimolecular, concerted single-step with 100% inversion of configuration (Walden Inversion).' },
        { name: 'SN1 Mechanism', formula: 'Rate = k [Alkyl Halide]', explanation: 'Unimolecular two-step reaction proceeding through a planar carbocation intermediate with racemization.' },
      ],
      conceptualQuestions: [
        {
          q: 'Why is tertiary carbocation more stable than secondary and primary carbocations?',
          a: 'Tertiary carbocations have three alkyl groups that donate electron density through inductive effects (+I effect) and hyperconjugation (overlapping adjacent C-H σ-orbitals), effectively dispersing the positive charge.',
          boardFrequency: 'Asked in FBISE 2022, 2023, 2025',
        },
      ],
      studyTips: [
        'Group functional group reactions by type (electrophilic addition, nucleophilic substitution, elimination) rather than memorizing individual equations in isolation.',
      ],
    },
  },
  {
    id: 'res-pattern-fbise-2026',
    title: 'FBISE Official SLO Assessment Pattern & Marks Breakdown 2026',
    classId: 'class-10',
    classLabel: 'Classes 9–12',
    subject: 'All Subjects',
    chapter: 'Curriculum Standards',
    type: 'Paper Patterns',
    format: 'Official Model Breakdown',
    lastUpdated: 'October 2026',
    pagesEstimate: 8,
    fileSizeEstimate: '1.5 MB',
    summary: 'Detailed explanation of the Student Learning Outcomes (SLO) paper model: 50% Knowledge, 30% Understanding, and 20% Application, with Section A, B, and C rules.',
    tags: ['FBISE Pattern', 'SLO Framework', 'Marking Scheme', 'Board Guidelines'],
    fullContent: {
      overview: 'The Federal Board of Intermediate and Secondary Education (FBISE) has modernized its examination system from traditional rote-learning memory questions to Student Learning Outcomes (SLO) based cognitive assessments. This guide breaks down the official format across Sections A, B, and C.',
      keyDefinitions: [
        { term: 'Section A (Objective MCQs)', definition: 'Comprises 20% of total theory marks. Timed at strictly 20 minutes on OMR bubble sheets. No negative marking.' },
        { term: 'Section B (Short Answer Questions)', definition: 'Comprises 50% of total theory marks. Tests conceptual understanding and brief applications. Students typically attempt 11 out of 15 questions (3 marks each).' },
        { term: 'Section C (Long Detailed Questions)', definition: 'Comprises 30% of total theory marks. Tests extensive derivations, descriptive essays, and multi-step numerical problem solving with internal choices.' },
      ],
      importantFormulas: [
        { name: 'Cognitive Domain Allocation', formula: 'Knowledge (50%) + Understanding (30%) + Application (20%)', explanation: 'Target distribution of cognitive levels in FBISE question papers.' },
      ],
      conceptualQuestions: [
        {
          q: 'How does FBISE evaluate conceptual numerical questions in Section B and C?',
          a: 'Marks are allotted systematically: Given Data (0.5 mark), Relevant Formula (1.0 mark), Substitution & Working (1.0 mark), Final Answer with Correct SI Unit (0.5 mark). Writing the correct unit is mandatory.',
          boardFrequency: 'Official FBISE Examiner Instruction',
        },
      ],
      studyTips: [
        'Spend the first 5 minutes scanning Section B to select your strongest 11 questions before beginning your writeup.',
        'Use black ink ballpoint for headings and clean ballpoint or gel for body text as per FBISE exam guidelines.',
      ],
    },
  },
];
