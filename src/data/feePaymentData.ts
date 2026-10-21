/**
 * Akbar Study Smart Academy
 * Manual Fees Payment System Configuration & Data
 */

export interface PaymentAccount {
  id: 'easypaisa' | 'meezan';
  title: string;
  badge: string;
  accountHolderLabel: string;
  accountHolderName: string;
  accountNumber: string;
  displayAccountNumber: string;
  instructions: string;
  steps: string[];
  color: {
    badgeBg: string;
    badgeText: string;
    accentBorder: string;
    gradientFrom: string;
    gradientTo: string;
    buttonBg: string;
    buttonHover: string;
  };
  iconType: 'easypaisa' | 'bank';
}

export const paymentAccounts: PaymentAccount[] = [
  {
    id: 'easypaisa',
    title: 'Easypaisa Mobile Account',
    badge: 'Instant Mobile Transfer',
    accountHolderLabel: 'Account Name',
    accountHolderName: 'Farzana Mazhar',
    accountNumber: '03100878172',
    displayAccountNumber: '0310 0878172',
    instructions: 'Open Easypaisa, transfer the fee manually, and save the transaction receipt.',
    steps: [
      'Open your Easypaisa App or dial *786#',
      'Select "Money Transfer" → "Easypaisa Account"',
      'Enter Mobile Number: 03100878172',
      'Verify recipient name: Farzana Mazhar',
      'Enter the required fee amount and proceed',
      'Save the confirmation SMS or transaction screenshot with the TRX ID'
    ],
    color: {
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      badgeText: 'text-emerald-700',
      accentBorder: 'border-emerald-500/30 hover:border-emerald-500',
      gradientFrom: 'from-emerald-600',
      gradientTo: 'to-teal-700',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
      buttonHover: 'hover:bg-emerald-50'
    },
    iconType: 'easypaisa'
  },
  {
    id: 'meezan',
    title: 'Meezan Bank (Islamic Banking)',
    badge: 'Direct Bank Transfer / IBFT',
    accountHolderLabel: 'Account Title',
    accountHolderName: 'Faisal Ali',
    accountNumber: '00300114966512',
    displayAccountNumber: '0030 0114 9665 12',
    instructions: 'Open your banking app or visit your bank, transfer the fee manually, and save the transaction receipt.',
    steps: [
      'Log in to any Pakistani mobile banking app (Meezan, HBL, Nayapay, Sadapay, UBL, Alfalah, etc.)',
      'Select "Send Money" / "Interbank Funds Transfer (IBFT)"',
      'Select Bank: Meezan Bank Limited',
      'Enter Account Number: 00300114966512',
      'Verify account title: Faisal Ali',
      'Complete transfer and save the digital receipt showing the Reference / RRN number'
    ],
    color: {
      badgeBg: 'bg-blue-50 text-blue-900 border-blue-200',
      badgeText: 'text-blue-700',
      accentBorder: 'border-blue-500/30 hover:border-[#123B70]',
      gradientFrom: 'from-[#0B2348]',
      gradientTo: 'to-[#123B70]',
      buttonBg: 'bg-[#123B70] hover:bg-[#0B2348]',
      buttonHover: 'hover:bg-blue-50'
    },
    iconType: 'bank'
  }
];

export const feeCourseTypes = [
  { id: 'monthly-tuition', name: 'Monthly Academy Tuition Fee' },
  { id: 'test-series-2026', name: 'FBISE Complete Test Series 2026' },
  { id: 'guess-notes-bundle', name: 'Board Guess Papers & Notes Bundle' },
  { id: 'past-papers-pack', name: 'Past Papers Solution & Marking Guide' },
  { id: 'entry-test-prep', name: 'MDCAT / NUMS / Entry Test Preparation' },
  { id: 'single-subject', name: 'Single Subject Special Guidance' },
  { id: 'registration-fee', name: 'Academy Enrolment & Registration Fee' },
  { id: 'other', name: 'Other Academic Service' }
];

export const studentClassOptions = [
  { id: '9', label: 'Class 9 (SSC Part 1 - FBISE)' },
  { id: '10', label: 'Class 10 (SSC Part 2 - Matric)' },
  { id: '11', label: 'Class 11 (HSSC Part 1 - 1st Year)' },
  { id: '12', label: 'Class 12 (HSSC Part 2 - 2nd Year)' },
  { id: 'Other', label: 'Other (Entry Test / Repeaters / MDCAT)' }
];

export interface PaymentSubmission {
  id: string;
  referenceNumber: string;
  studentName: string;
  classLevel: string;
  courseType: string;
  amountPaid: string;
  paymentMethod: 'Easypaisa' | 'Meezan Bank';
  transactionId: string;
  receiptName?: string;
  submittedAt: string;
  status: 'Pending' | 'Verified' | 'Rejected';
  adminNotes?: string;
}

/**
 * Official WhatsApp verification number for Akbar Study Smart Academy.
 * Confirmed: 0323-5792758 (International: 923235792758)
 * Do NOT assume Easypaisa recipient number (03100878172) is the WhatsApp helpline.
 */
export const OFFICIAL_ACADEMY_WHATSAPP = {
  raw: '923235792758',
  display: '0323-5792758',
  contactPerson: 'Sir / Academic Helpline',
  url: 'https://wa.me/923235792758'
};
