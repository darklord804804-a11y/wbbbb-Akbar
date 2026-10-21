/**
 * Akbar Study Smart Academy
 * Guess Papers & High-Priority Revision Questions for FBISE
 */

export interface GuessPaper {
  id: string;
  title: string;
  classId: 'class-9' | 'class-10' | 'class-11' | 'class-12';
  classLabel: string;
  subject: string;
  academicYear: number;
  examinationType: 'Annual 1 Examination' | 'Annual 2 Examination' | 'Pre-Board Model Exam';
  format: 'Structured Practice Paper (PDF & View)';
  priorityTopics: string[];
  sampleQuestions: {
    section: 'Section B (Short Conceptual Questions)' | 'Section C (Long Detailed Questions)';
    questionText: string;
    marks: number;
    sloCategory: string;
  }[];
  preparationAdvice: string;
}

export const guessPapersDisclaimer = 
  "Guess papers and important questions are provided for revision and practice. They do not guarantee the questions that will appear in an examination.";

export const guessPapersData: GuessPaper[] = [
  {
    id: 'guess-9-phy-2026',
    title: 'Class 9 Physics High-Priority Practice Paper (2026)',
    classId: 'class-9',
    classLabel: 'Class 9',
    subject: 'Physics',
    academicYear: 2026,
    examinationType: 'Annual 1 Examination',
    format: 'Structured Practice Paper (PDF & View)',
    priorityTopics: [
      'Graphical Derivation of 2nd & 3rd Equations of Motion',
      'Newton’s Second Law & Momentum Conservation in Collisions',
      'Pascal’s Principle & Hydraulic Lift Calculations',
      'Latent Heat of Fusion & Vaporization Experiments',
    ],
    sampleQuestions: [
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'State Newton’s Second Law of Motion and derive the mathematical relation F = ma from rate of change of momentum.',
        marks: 3,
        sloCategory: 'Understanding & Derivation',
      },
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'A car of mass 1200 kg moving at 20 m/s is brought to rest in 50 m. Calculate the uniform braking force required.',
        marks: 3,
        sloCategory: 'Application / Numerical',
      },
      {
        section: 'Section C (Long Detailed Questions)',
        questionText: 'Explain the working principle of a Hydraulic Press based on Pascal’s Law. Derive the expression for force magnification and state two practical applications in daily life.',
        marks: 7,
        sloCategory: 'Comprehensive Analytical SLO',
      },
    ],
    preparationAdvice: 'Ensure you review the definitions of inertia, centripetal acceleration, and solve all end-of-chapter conceptual questions from chapters 2, 3, and 7.',
  },
  {
    id: 'guess-10-phy-2026',
    title: 'Class 10 Physics High-Priority Practice Paper (2026)',
    classId: 'class-10',
    classLabel: 'Class 10',
    subject: 'Physics',
    academicYear: 2026,
    examinationType: 'Annual 1 Examination',
    format: 'Structured Practice Paper (PDF & View)',
    priorityTopics: [
      'Simple Pendulum SHM Derivation & Time Period Formula',
      'Total Internal Reflection & Critical Angle in Optical Fibers',
      'Coulomb’s Law & Combination of Capacitors (Series/Parallel)',
      'Faraday’s Law of Induction & Electric Transformer Working',
      'Logic Gates (NAND/NOR as Universal Gates) & Truth Tables',
    ],
    sampleQuestions: [
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'Differentiate between transverse and longitudinal waves with at least two examples for each. What is the relation v = fλ?',
        marks: 3,
        sloCategory: 'Knowledge & Understanding',
      },
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'Two capacitors of capacitances 6 μF and 12 μF are connected in series across a 12 V battery. Find the equivalent capacitance and charge on each capacitor.',
        marks: 3,
        sloCategory: 'Application / Numerical',
      },
      {
        section: 'Section C (Long Detailed Questions)',
        questionText: 'State Faraday’s Law of Electromagnetic Induction. Describe the construction, working principle, and energy losses of an AC Generator with a neat labeled schematic diagram.',
        marks: 7,
        sloCategory: 'Comprehensive Analytical SLO',
      },
    ],
    preparationAdvice: 'Focus on drawing clear ray diagrams for convex lenses and telescopes using a sharp pencil and ruler as marks are deducted for inaccurate rays.',
  },
  {
    id: 'guess-11-phy-2026',
    title: 'Class 11 (1st Year) Physics High-Priority Practice Paper (2026)',
    classId: 'class-11',
    classLabel: 'Class 11',
    subject: 'Physics',
    academicYear: 2026,
    examinationType: 'Annual 1 Examination',
    format: 'Structured Practice Paper (PDF & View)',
    priorityTopics: [
      'Scalar & Vector Products of Unit Vectors with Geometric Proofs',
      'Projectile Trajectory, Maximum Height, and Time of Flight',
      'Bernoulli’s Equation Derivation & Venturi Meter Applications',
      'Stationary Waves in Air Columns (Organ Pipes - Open & Closed)',
      'First Law of Thermodynamics Applied to Isothermal & Adiabatic Processes',
      'Carnot Engine Cycle and Efficiency Derivation',
    ],
    sampleQuestions: [
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'Show that work done in gravitational field is independent of the path followed by the body (Prove conservative nature of gravitational field).',
        marks: 3,
        sloCategory: 'Understanding & Proof',
      },
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'Calculate the speed of sound in air at 27 °C given that speed of sound at 0 °C is 332 m/s.',
        marks: 3,
        sloCategory: 'Application / Numerical',
      },
      {
        section: 'Section C (Long Detailed Questions)',
        questionText: 'What is Projectile Motion? Derive expressions for (i) Maximum Height, (ii) Time of Flight, and (iii) Horizontal Range of a projectile launched at an angle θ with the horizontal.',
        marks: 7,
        sloCategory: 'Comprehensive Derivation',
      },
    ],
    preparationAdvice: 'Re-derive the molar specific heats relation Cp - Cv = R and practice all numerical problems from Chapters 2, 3, 6, 8, and 11.',
  },
  {
    id: 'guess-12-phy-2026',
    title: 'Class 12 (2nd Year) Physics High-Priority Practice Paper (2026)',
    classId: 'class-12',
    classLabel: 'Class 12',
    subject: 'Physics',
    academicYear: 2026,
    examinationType: 'Annual 1 Examination',
    format: 'Structured Practice Paper (PDF & View)',
    priorityTopics: [
      'Gauss’s Law Applications (Infinite Sheet of Charge, Between Plates)',
      'Potentiometer Principle & Comparison of EMF of Two Cells',
      'Ampere’s Circuital Law & Solenoid Magnetic Field',
      'Motional EMF & Self/Mutual Inductance in Coils',
      'RLC Series Resonance Circuit Frequency and Impedance Curve',
      'Operational Amplifier as Inverting, Non-Inverting Amplifier & Comparator',
      'Photoelectric Effect Einstein’s Equation & Stopping Potential Graph',
      'Nuclear Fission Chain Reaction & Mass Defect/Binding Energy Curve',
    ],
    sampleQuestions: [
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'Explain why a voltmeter should have very high internal resistance while an ammeter should have very low internal resistance.',
        marks: 3,
        sloCategory: 'Conceptual Understanding',
      },
      {
        section: 'Section B (Short Conceptual Questions)',
        questionText: 'Calculate the de-Broglie wavelength of an electron accelerated through a potential difference of 100 V (m = 9.1 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J·s).',
        marks: 3,
        sloCategory: 'Application / Modern Physics',
      },
      {
        section: 'Section C (Long Detailed Questions)',
        questionText: 'Describe the experiment to determine the charge-to-mass (e/m) ratio of an electron using J.J. Thomson’s or magnetic deflection method. Derive the final mathematical formula for e/m.',
        marks: 7,
        sloCategory: 'Comprehensive Theory & Derivation',
      },
    ],
    preparationAdvice: 'Make sure you understand the difference between Section A MCQs (which test fine details from modern physics and atomic spectra) and Section C long questions.',
  },
];
