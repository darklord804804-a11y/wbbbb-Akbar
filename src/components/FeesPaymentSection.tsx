import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Copy, 
  Check, 
  MessageCircle, 
  AlertTriangle, 
  ShieldCheck, 
  HelpCircle, 
  FileCheck, 
  UploadCloud, 
  Building2, 
  Smartphone, 
  Info, 
  Send, 
  Clock, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { 
  paymentAccounts, 
  feeCourseTypes, 
  studentClassOptions, 
  OFFICIAL_ACADEMY_WHATSAPP, 
  PaymentSubmission 
} from '../data/feePaymentData';

const LOCAL_STORAGE_KEY = 'assa_fee_claims';

export const FeesPaymentSection: React.FC = () => {
  // Form State
  const [studentName, setStudentName] = useState('');
  const [selectedClass, setSelectedClass] = useState('10');
  const [courseType, setCourseType] = useState('FBISE Complete Test Series 2026');
  const [customCourse, setCustomCourse] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Easypaisa' | 'Meezan Bank'>('Easypaisa');
  const [transactionId, setTransactionId] = useState('');
  const [receiptFile, setReceiptFile] = useState<{ name: string; size: string; previewUrl: string | null } | null>(null);
  
  // UI & Feedback states
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedClaim, setSubmittedClaim] = useState<PaymentSubmission | null>(null);
  const [savedClaims, setSavedClaims] = useState<PaymentSubmission[]>([]);
  const [showAdminReview, setShowAdminReview] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [adminPinError, setAdminPinError] = useState(false);

  // Load existing local submissions
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setSavedClaims(JSON.parse(stored));
      }
    } catch {
      // Ignore JSON parse errors
    }
  }, []);

  // Copy Account Number with fallback
  const handleCopy = async (accountNum: string, accountId: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(accountNum);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = accountNum;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedId(accountId);
      setTimeout(() => setCopiedId(null), 3000);
    } catch (err) {
      console.error('Failed to copy account number:', err);
    }
  };

  // Handle receipt selection (preview only)
  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/') && file.type !== 'application/pdf') {
      alert('Please upload an image receipt (PNG, JPG, WebP) or PDF.');
      return;
    }

    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    const previewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : null;

    setReceiptFile({
      name: file.name,
      size: `${sizeInMB} MB`,
      previewUrl
    });
  };

  const removeReceipt = () => {
    if (receiptFile?.previewUrl) {
      URL.revokeObjectURL(receiptFile.previewUrl);
    }
    setReceiptFile(null);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!studentName.trim()) {
      newErrors.studentName = 'Please enter the student full name.';
    } else if (studentName.trim().length < 3) {
      newErrors.studentName = 'Name must be at least 3 characters.';
    }

    if (!selectedClass) {
      newErrors.selectedClass = 'Please select your class.';
    }

    const finalCourse = courseType === 'other' ? customCourse : courseType;
    if (!finalCourse.trim()) {
      newErrors.courseType = 'Please select or specify the course / fee type.';
    }

    if (!amountPaid.trim()) {
      newErrors.amountPaid = 'Please enter the amount paid in PKR.';
    } else if (isNaN(Number(amountPaid.replace(/,/g, ''))) || Number(amountPaid.replace(/,/g, '')) <= 0) {
      newErrors.amountPaid = 'Please enter a valid amount (e.g. 2500).';
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = 'Please select your payment method.';
    }

    if (!transactionId.trim()) {
      newErrors.transactionId = 'Transaction ID / Reference Number is required for verification.';
    } else if (transactionId.trim().length < 4) {
      newErrors.transactionId = 'Transaction ID appears too short. Check your bank receipt or SMS.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Generate WhatsApp message and redirect
  const handleContactSirOnWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = document.querySelector('.fee-error-target');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const effectiveCourse = courseType === 'other' ? customCourse.trim() : courseType;
    const cleanAmount = amountPaid.replace(/[^0-9]/g, '');

    // Strictly requested message format
    const message = 
`Assalam-o-Alaikum Sir, I have transferred my academy fee.

Student Name: ${studentName.trim()}
Class: ${selectedClass}
Course/Fee Type: ${effectiveCourse}
Amount Paid: PKR ${cleanAmount || amountPaid.trim()}
Payment Method: ${paymentMethod}
Transaction ID: ${transactionId.trim()}

Please verify my payment and confirm my registration. Thank you.`;

    // Generate local draft reference so student has tracking without false server claims
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `ASSA-PAY-${dateStr}-${randomSuffix}`;

    const newClaim: PaymentSubmission = {
      id: `claim-${Date.now()}`,
      referenceNumber,
      studentName: studentName.trim(),
      classLevel: selectedClass,
      courseType: effectiveCourse,
      amountPaid: cleanAmount || amountPaid.trim(),
      paymentMethod,
      transactionId: transactionId.trim(),
      receiptName: receiptFile?.name,
      submittedAt: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'Pending'
    };

    // Save locally on client device
    try {
      const updated = [newClaim, ...savedClaims];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      setSavedClaims(updated);
    } catch {
      // Ignore storage errors
    }

    setSubmittedClaim(newClaim);

    // Launch WhatsApp with confirmed academy phone number
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${OFFICIAL_ACADEMY_WHATSAPP.raw}?text=${encodedMessage}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Quick preset amount buttons
  const handlePresetAmount = (preset: string) => {
    setAmountPaid(preset);
    if (errors.amountPaid) {
      setErrors(prev => {
        const next = { ...prev };
        delete next.amountPaid;
        return next;
      });
    }
  };

  // Admin Pin Check (Passcode: 2345)
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin.trim() === '2345') {
      setIsAdminUnlocked(true);
      setAdminPinError(false);
    } else {
      setAdminPinError(true);
    }
  };

  // Update claim status in local admin review
  const handleUpdateClaimStatus = (id: string, status: 'Pending' | 'Verified' | 'Rejected') => {
    const updated = savedClaims.map(c => c.id === id ? { ...c, status } : c);
    setSavedClaims(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    if (submittedClaim && submittedClaim.id === id) {
      setSubmittedClaim({ ...submittedClaim, status });
    }
  };

  return (
    <section 
      id="fees-payment" 
      aria-labelledby="fees-payment-heading"
      className="bg-gradient-to-b from-[#F1F6FC] via-[#F8FAFC] to-[#EDF2F9] py-16 sm:py-20 border-t border-[#E0E7EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B70]/10 border border-[#123B70]/20 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <CreditCard className="w-4 h-4 text-[#E88724]" />
            <span>Official Academy Fee Accounts</span>
          </div>

          <h2 
            id="fees-payment-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2348] tracking-tight"
          >
            Fees & Payment
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
            Pay your academy fee through Easypaisa or Meezan Bank, then contact Sir on WhatsApp to confirm your payment.
          </p>

          {/* Quick Notice Badge */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#0B2348] bg-white px-4 py-2 rounded-xl border border-[#E0E7EF] shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#E88724]" />
            <span>Manual Verification Desk • Operational Hours: Mon–Sat 9:00 AM – 9:00 PM PST</span>
          </div>
        </div>

        {/* 1. Payment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Easypaisa */}
          <div className="bg-white rounded-3xl border-2 border-emerald-500/30 hover:border-emerald-500 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group">
            <div className="absolute top-5 right-5">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold border border-emerald-200">
                Easypaisa
              </span>
            </div>

            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2348]">
                    Easypaisa
                  </h3>
                  <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                    Instant Mobile Account
                  </p>
                </div>
              </div>

              {/* Account Details Box */}
              <div className="bg-[#F8FAFC] border border-[#E0E7EF] rounded-2xl p-5 mb-5 space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Account Name
                  </span>
                  <div className="text-lg sm:text-xl font-black text-[#0B2348] mt-0.5">
                    Farzana Mazhar
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E0E7EF]">
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Account Number / Mobile
                  </span>
                  <div className="flex items-center justify-between gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-700 tracking-wider">
                      03100878172
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('03100878172', 'easypaisa')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                        copiedId === 'easypaisa'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300'
                      }`}
                      aria-label="Copy Easypaisa account number"
                    >
                      {copiedId === 'easypaisa' ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Account Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-2 mb-6 text-sm text-[#475569]">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="font-medium leading-relaxed">
                    <strong>Instructions:</strong> Open Easypaisa, transfer the fee manually, and save the transaction receipt.
                  </p>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#64748B] pl-7">
                  <span>• Dial *786# or open Easypaisa App → Money Transfer → Easypaisa Mobile Account.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#64748B] pl-7">
                  <span>• Enter <strong className="text-[#0B2348]">03100878172</strong> & confirm recipient is <strong className="text-[#0B2348]">Farzana Mazhar</strong>.</span>
                </div>
              </div>
            </div>

            {/* Quick Action Reminder */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-900 flex items-center justify-between">
              <span className="font-semibold">Save SMS / screenshot for TRX ID</span>
              <span className="text-[11px] font-bold uppercase bg-white px-2 py-0.5 rounded text-emerald-800 border border-emerald-200">
                Fee Receipt
              </span>
            </div>
          </div>

          {/* Card 2: Meezan Bank */}
          <div className="bg-white rounded-3xl border-2 border-blue-500/30 hover:border-[#123B70] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group">
            <div className="absolute top-5 right-5">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-[#123B70] text-xs font-extrabold border border-blue-200">
                Meezan Bank
              </span>
            </div>

            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0B2348] flex items-center justify-center text-white shadow-md shadow-[#0B2348]/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-7 h-7 text-[#F2B632]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B2348]">
                    Meezan Bank
                  </h3>
                  <p className="text-xs text-[#123B70] font-bold uppercase tracking-wider">
                    Islamic Banking / IBFT
                  </p>
                </div>
              </div>

              {/* Account Details Box */}
              <div className="bg-[#F8FAFC] border border-[#E0E7EF] rounded-2xl p-5 mb-5 space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Account Title
                  </span>
                  <div className="text-lg sm:text-xl font-black text-[#0B2348] mt-0.5">
                    Faisal Ali
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E0E7EF]">
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Account Number
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-1">
                    <span className="text-xl sm:text-2xl font-mono font-black text-[#123B70] tracking-wider break-all">
                      00300114966512
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy('00300114966512', 'meezan')}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs shrink-0 self-start sm:self-auto ${
                        copiedId === 'meezan'
                          ? 'bg-[#123B70] text-white'
                          : 'bg-blue-100 hover:bg-blue-200 text-[#0B2348] border border-blue-300'
                      }`}
                      aria-label="Copy Meezan Bank account number"
                    >
                      {copiedId === 'meezan' ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Account Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-2 mb-6 text-sm text-[#475569]">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0B2348] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="font-medium leading-relaxed">
                    <strong>Instructions:</strong> Open your banking app or visit your bank, transfer the fee manually, and save the transaction receipt.
                  </p>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#64748B] pl-7">
                  <span>• Supports any 1Link / IBFT banking app (Meezan, HBL, UBL, Nayapay, Sadapay, etc.).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#64748B] pl-7">
                  <span>• Select <strong className="text-[#0B2348]">Meezan Bank</strong>, enter <strong className="text-[#0B2348]">00300114966512</strong>, title <strong className="text-[#0B2348]">Faisal Ali</strong>.</span>
                </div>
              </div>
            </div>

            {/* Quick Action Reminder */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 text-xs text-[#0B2348] flex items-center justify-between">
              <span className="font-semibold">Save receipt with Reference / RRN</span>
              <span className="text-[11px] font-bold uppercase bg-white px-2 py-0.5 rounded text-[#123B70] border border-blue-200">
                IBFT Slip
              </span>
            </div>
          </div>

        </div>

        {/* 2. Mandatory Rules & Disclaimers Banners */}
        <div className="space-y-4 mb-12 sm:mb-16">
          
          {/* Rule 1: Manual Verification Notice (Mandatory Requirement) */}
          <div className="bg-[#FFFBEB] border-2 border-[#F59E0B] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
            <AlertTriangle className="w-6 h-6 text-[#D97706] shrink-0 mt-0.5" />
            <div className="text-sm text-[#78350F] leading-relaxed">
              <span className="font-black block uppercase tracking-wide text-xs text-[#92400E] mb-1">
                Important Verification Notice
              </span>
              <p className="font-semibold">
                Your payment will be confirmed by the academy after manual verification. Submitting this form or opening WhatsApp does not confirm your payment.
              </p>
              <p className="text-xs text-[#92400E] mt-1 font-normal">
                This is a manual bank-transfer system, not an online payment gateway. Once you share the details, Sir will inspect the transaction statement and issue your official enrolment confirmation.
              </p>
            </div>
          </div>

          {/* Rule 2: Anti-Fraud & Banking Credentials Protection Notice */}
          <div className="bg-[#EFF6FF] border border-[#93C5FD] rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <div className="text-xs text-[#1E3A8A] leading-relaxed">
              <span className="font-bold text-[#1D4ED8] block mb-0.5">
                Academy Security Policy & Student Privacy
              </span>
              <p>
                The website and academy staff will <strong>never ask students for banking PINs, OTP codes, passwords, or ATM card numbers</strong>. Do not enter confidential credentials anywhere. Only transfer the stated tuition fee using your official banking or Easypaisa app.
              </p>
            </div>
          </div>

        </div>

        {/* 3. Student Payment Form Container */}
        <div className="bg-white rounded-3xl border border-[#E0E7EF] shadow-xl overflow-hidden max-w-4xl mx-auto">
          
          {/* Form Header Banner */}
          <div className="bg-gradient-to-r from-[#0B2348] via-[#123B70] to-[#0B2348] text-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#F2B632] text-xs font-bold uppercase tracking-wider border border-white/20">
                  Step 2 of 2: Submission Form
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                  Student Payment Details
                </h3>
                <p className="text-xs sm:text-sm text-[#A6C0DE] mt-1">
                  Fill in your transaction details below to format your confirmation message for Sir on WhatsApp.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">
                <Smartphone className="w-4 h-4 text-[#25D366]" />
                <div className="text-left">
                  <div className="text-[10px] text-white/70 uppercase font-bold">Helpline Target</div>
                  <div className="text-xs font-bold font-mono text-[#F2B632]">
                    {OFFICIAL_ACADEMY_WHATSAPP.display}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actual Form */}
          <form onSubmit={handleContactSirOnWhatsApp} className="p-6 sm:p-8 space-y-6">
            
            {/* Row 1: Student Full Name & Class */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 1: Student Full Name */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348] mb-2">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Muhammad Ali / Ayesha Khan"
                  value={studentName}
                  onChange={(e) => {
                    setStudentName(e.target.value);
                    if (errors.studentName) {
                      setErrors(prev => ({ ...prev, studentName: '' }));
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#F8FAFC] text-[#0B2348] font-medium text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.studentName
                      ? 'border-red-500 ring-red-200 fee-error-target'
                      : 'border-[#E0E7EF] focus:border-[#123B70] focus:ring-[#123B70]/10'
                  }`}
                  required
                />
                {errors.studentName && (
                  <p className="text-xs text-red-600 mt-1 font-semibold flex items-center gap-1">
                    <span>⚠</span> {errors.studentName}
                  </p>
                )}
              </div>

              {/* Field 2: Class Selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348] mb-2">
                  Class <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => {
                    setSelectedClass(e.target.value);
                    if (errors.selectedClass) {
                      setErrors(prev => ({ ...prev, selectedClass: '' }));
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] text-[#0B2348] font-medium text-sm focus:outline-none focus:border-[#123B70] focus:ring-2 focus:ring-[#123B70]/10 transition-all cursor-pointer"
                  required
                >
                  <option value="9">Class 9 (SSC Part 1 - FBISE)</option>
                  <option value="10">Class 10 (SSC Part 2 - Matric)</option>
                  <option value="11">Class 11 (HSSC Part 1 - 1st Year)</option>
                  <option value="12">Class 12 (HSSC Part 2 - 2nd Year)</option>
                  <option value="Other">Other (Entry Test / Repeaters / General)</option>
                </select>
                {errors.selectedClass && (
                  <p className="text-xs text-red-600 mt-1 font-semibold">
                    {errors.selectedClass}
                  </p>
                )}
              </div>

            </div>

            {/* Row 2: Course / Fee Type */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348] mb-2">
                Course / Fee Type <span className="text-red-500">*</span>
              </label>
              <select
                value={courseType}
                onChange={(e) => {
                  setCourseType(e.target.value);
                  if (errors.courseType) {
                    setErrors(prev => ({ ...prev, courseType: '' }));
                  }
                }}
                className="w-full px-4 py-3 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] text-[#0B2348] font-medium text-sm focus:outline-none focus:border-[#123B70] focus:ring-2 focus:ring-[#123B70]/10 transition-all cursor-pointer"
                required
              >
                {feeCourseTypes.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
                <option value="other">Other / Custom Course</option>
              </select>

              {courseType === 'other' && (
                <div className="mt-2.5">
                  <input
                    type="text"
                    placeholder="Specify Course or Fee description (e.g. Physics Chapter 1-5 Crash Course)"
                    value={customCourse}
                    onChange={(e) => setCustomCourse(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E0E7EF] bg-white text-sm text-[#0B2348] focus:outline-none focus:border-[#123B70]"
                    required
                  />
                </div>
              )}
              {errors.courseType && (
                <p className="text-xs text-red-600 mt-1 font-semibold">
                  {errors.courseType}
                </p>
              )}
            </div>

            {/* Row 3: Amount Paid (PKR) & Payment Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 3: Amount Paid (PKR) */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348] mb-2">
                  Amount Paid (PKR) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-xs text-[#64748B]">
                    PKR
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. 2500"
                    value={amountPaid}
                    onChange={(e) => {
                      setAmountPaid(e.target.value);
                      if (errors.amountPaid) {
                        setErrors(prev => ({ ...prev, amountPaid: '' }));
                      }
                    }}
                    className={`w-full pl-14 pr-4 py-3 rounded-xl border bg-[#F8FAFC] text-[#0B2348] font-mono font-bold text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.amountPaid
                        ? 'border-red-500 ring-red-200'
                        : 'border-[#E0E7EF] focus:border-[#123B70] focus:ring-[#123B70]/10'
                    }`}
                    required
                  />
                </div>

                {/* Quick preset amount chips */}
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  <span className="text-[11px] text-[#64748B] font-medium mr-1">Quick Select:</span>
                  {['1500', '2500', '3500', '5000'].map(val => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetAmount(val)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                        amountPaid === val 
                          ? 'bg-[#123B70] text-white border-[#123B70]' 
                          : 'bg-white hover:bg-[#F1F6FC] text-[#475569] border-[#E0E7EF]'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>

                {errors.amountPaid && (
                  <p className="text-xs text-red-600 mt-1 font-semibold flex items-center gap-1">
                    <span>⚠</span> {errors.amountPaid}
                  </p>
                )}
              </div>

              {/* Field 4: Payment Method Selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348] mb-2">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Option 1: Easypaisa */}
                  <label 
                    className={`flex items-center gap-2.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'Easypaisa'
                        ? 'border-emerald-600 bg-emerald-50/60 shadow-2xs'
                        : 'border-[#E0E7EF] bg-[#F8FAFC] hover:border-emerald-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Easypaisa"
                      checked={paymentMethod === 'Easypaisa'}
                      onChange={() => setPaymentMethod('Easypaisa')}
                      className="text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0B2348]">Easypaisa</div>
                      <div className="text-[10px] text-emerald-700 font-medium">03100878172</div>
                    </div>
                  </label>

                  {/* Option 2: Meezan Bank */}
                  <label 
                    className={`flex items-center gap-2.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      paymentMethod === 'Meezan Bank'
                        ? 'border-[#123B70] bg-blue-50/60 shadow-2xs'
                        : 'border-[#E0E7EF] bg-[#F8FAFC] hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="Meezan Bank"
                      checked={paymentMethod === 'Meezan Bank'}
                      onChange={() => setPaymentMethod('Meezan Bank')}
                      className="text-[#123B70] focus:ring-[#123B70] w-4 h-4"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0B2348]">Meezan Bank</div>
                      <div className="text-[10px] text-blue-700 font-medium">Faisal Ali</div>
                    </div>
                  </label>

                </div>

                {errors.paymentMethod && (
                  <p className="text-xs text-red-600 mt-1 font-semibold">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

            </div>

            {/* Row 4: Transaction ID & Receipt Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 5: Transaction ID */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348] mb-2">
                  Transaction ID (TRX / Ref No.) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10482947192 or IBFT-99214"
                  value={transactionId}
                  onChange={(e) => {
                    setTransactionId(e.target.value);
                    if (errors.transactionId) {
                      setErrors(prev => ({ ...prev, transactionId: '' }));
                    }
                  }}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#F8FAFC] text-[#0B2348] font-mono font-bold text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.transactionId
                      ? 'border-red-500 ring-red-200'
                      : 'border-[#E0E7EF] focus:border-[#123B70] focus:ring-[#123B70]/10'
                  }`}
                  required
                />
                <p className="text-[11px] text-[#64748B] mt-1.5">
                  Found in your Easypaisa confirmation SMS (Sender: 3737) or bank transfer digital receipt.
                </p>
                {errors.transactionId && (
                  <p className="text-xs text-red-600 mt-1 font-semibold flex items-center gap-1">
                    <span>⚠</span> {errors.transactionId}
                  </p>
                )}
              </div>

              {/* Field 6: Optional Receipt Upload Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-[#0B2348]">
                    Receipt Screenshot (Optional)
                  </label>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                    Direct on WhatsApp
                  </span>
                </div>

                {!receiptFile ? (
                  <label className="border-2 border-dashed border-[#CBD5E1] hover:border-[#123B70] rounded-xl p-3.5 flex flex-col items-center justify-center cursor-pointer bg-[#F8FAFC] hover:bg-[#F1F6FC] transition-colors text-center group">
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleReceiptUpload}
                      className="hidden"
                    />
                    <UploadCloud className="w-5 h-5 text-[#64748B] group-hover:text-[#123B70] mb-1" />
                    <span className="text-xs font-bold text-[#0B2348]">
                      Select or Drag Receipt Screenshot
                    </span>
                    <span className="text-[10px] text-[#64748B]">
                      PNG, JPG, or PDF (Local preview on device)
                    </span>
                  </label>
                ) : (
                  <div className="border border-[#CBD5E1] rounded-xl p-2.5 bg-[#F8FAFC] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {receiptFile.previewUrl ? (
                        <img 
                          src={receiptFile.previewUrl} 
                          alt="Receipt preview" 
                          className="w-10 h-10 object-cover rounded-lg border border-[#CBD5E1]" 
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#123B70] font-black text-xs">
                          DOC
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#0B2348] truncate">
                          {receiptFile.name}
                        </div>
                        <div className="text-[10px] text-[#64748B]">
                          {receiptFile.size} • Ready to send with chat
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeReceipt}
                      className="p-1 rounded-lg hover:bg-red-50 text-red-600 transition-colors text-xs font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                )}
                <p className="text-[10px] text-[#64748B] mt-1.5">
                  Tip: You can also attach this receipt image directly in your WhatsApp chat with Sir.
                </p>
              </div>

            </div>

            {/* WhatsApp Pre-fill Preview Box */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-[#E0E7EF]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#123B70] flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  WhatsApp Message Template (Auto-Generated)
                </span>
                <span className="text-[10px] text-[#64748B] font-mono">
                  To: {OFFICIAL_ACADEMY_WHATSAPP.display}
                </span>
              </div>
              
              <div className="bg-white rounded-xl p-3 border border-[#E2E8F0] text-xs font-mono text-[#334155] whitespace-pre-wrap leading-relaxed shadow-2xs">
{`Assalam-o-Alaikum Sir, I have transferred my academy fee.

Student Name: ${studentName.trim() || '[Student Name]'}
Class: ${selectedClass}
Course/Fee Type: ${courseType === 'other' ? (customCourse || '[Course/Fee Type]') : courseType}
Amount Paid: PKR ${amountPaid.trim() || '[Amount]'}
Payment Method: ${paymentMethod}
Transaction ID: ${transactionId.trim() || '[Transaction ID]'}

Please verify my payment and confirm my registration. Thank you.`}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.99] text-white font-black text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <MessageCircle className="w-6 h-6 fill-white/20 group-hover:scale-110 transition-transform" />
                <span>Contact Sir on WhatsApp to Confirm Payment</span>
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[11px] text-[#64748B] mt-3">
                Clicking this button will open WhatsApp with your pre-filled details directed to Sir's verified number ({OFFICIAL_ACADEMY_WHATSAPP.display}).
              </p>
            </div>

          </form>

          {/* Submission Feedback & Local Reference Box (Rendered after student submits) */}
          {submittedClaim && (
            <div className="border-t border-[#E0E7EF] bg-emerald-50/50 p-6 sm:p-8 animate-in fade-in duration-300">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-lg font-black text-emerald-950">
                      Payment Claim Details Prepared Successfully
                    </h4>
                    <span className="font-mono text-xs font-bold px-3 py-1 bg-white rounded-lg border border-emerald-300 text-emerald-800 shadow-2xs">
                      Ref: {submittedClaim.referenceNumber}
                    </span>
                  </div>

                  <p className="text-xs text-emerald-900 mt-2 leading-relaxed">
                    Your details have been formatted and saved locally on this device. If WhatsApp did not open automatically, you can click below to message Sir directly or copy your draft reference.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/${OFFICIAL_ACADEMY_WHATSAPP.raw}?text=${encodeURIComponent(
`Assalam-o-Alaikum Sir, I have transferred my academy fee.

Student Name: ${submittedClaim.studentName}
Class: ${submittedClaim.classLevel}
Course/Fee Type: ${submittedClaim.courseType}
Amount Paid: PKR ${submittedClaim.amountPaid}
Payment Method: ${submittedClaim.paymentMethod}
Transaction ID: ${submittedClaim.transactionId}

Please verify my payment and confirm my registration. Thank you.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Chat with Sir</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(submittedClaim.referenceNumber, 'ref')}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2 transition-colors shadow-2xs cursor-pointer"
                    >
                      {copiedId === 'ref' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-700" />
                          <span>Copied Reference!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Reference ID</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Clarification Notice */}
                  <div className="mt-4 bg-white/80 rounded-xl p-3 border border-emerald-200 text-[11px] text-[#475569] flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>
                      Notice: Your payment remains marked as <strong>Pending</strong> until Sir matches the Transaction ID with the bank statement and sends your confirmed registration roll number.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Note inside form container */}
          <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#123B70]" />
              <span>Official Akbar Study Smart Academy Admissions Protocol</span>
            </div>

            {/* Admin Review Toggle */}
            <button
              type="button"
              onClick={() => setShowAdminReview(!showAdminReview)}
              className="text-[11px] text-[#123B70] hover:text-[#0B2348] font-bold underline cursor-pointer"
            >
              {showAdminReview ? 'Hide Academy Admin Panel' : 'Academy Staff / Admin Review Panel'}
            </button>
          </div>

        </div>

        {/* 4. Academy Admin / Staff Review Section (Visible when toggled) */}
        {showAdminReview && (
          <div className="mt-8 bg-white rounded-3xl border border-[#CBD5E1] p-6 sm:p-8 max-w-4xl mx-auto shadow-lg animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-[#E0E7EF] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B2348] text-white flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#F2B632]" />
                </div>
                <div>
                  <h4 className="font-black text-lg text-[#0B2348]">
                    Academy Staff Verification Panel
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Review manual fee claims, inspect transaction IDs, and update verification statuses.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-blue-50 text-[#123B70] px-3 py-1 rounded-full border border-blue-200 font-bold">
                  {savedClaims.length} Claim{savedClaims.length !== 1 ? 's' : ''} Stored
                </span>
                {isAdminUnlocked && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsAdminUnlocked(false);
                      setAdminPin('');
                    }}
                    className="text-xs font-bold px-3 py-1 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg cursor-pointer transition-colors"
                  >
                    Lock Panel
                  </button>
                )}
              </div>
            </div>

            {!isAdminUnlocked ? (
              <form onSubmit={handleAdminLogin} className="max-w-md mx-auto py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 mx-auto flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#0B2348]">Authorized Admin / Staff Access Only</h5>
                  <p className="text-xs text-[#64748B] mt-1">
                    Enter the confidential academy staff passcode (PIN) to access and verify student fee submissions.
                  </p>
                </div>
                <div className="flex gap-2 justify-center max-w-xs mx-auto">
                  <input
                    type="password"
                    placeholder="Enter PIN"
                    value={adminPin}
                    onChange={(e) => {
                      setAdminPin(e.target.value);
                      if (adminPinError) setAdminPinError(false);
                    }}
                    maxLength={10}
                    className="px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-sm text-center font-mono tracking-widest focus:outline-none focus:border-[#123B70] w-full"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#123B70] text-white text-xs font-bold hover:bg-[#0B2348] cursor-pointer shrink-0 transition-colors"
                  >
                    Unlock
                  </button>
                </div>
                {adminPinError && (
                  <p className="text-xs text-red-600 font-bold flex items-center justify-center gap-1">
                    <span>⚠</span> Incorrect passcode. Access restricted to authorized academy staff.
                  </p>
                )}
              </form>
            ) : (
              <div className="space-y-6">
                
                {/* Database Synchronization Notice */}
                <div className="bg-[#F1F6FC] rounded-2xl p-4 border border-[#B0D2F3] text-xs text-[#123B70] flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#123B70] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold block mb-0.5">Database & Secure Storage Architecture</span>
                    <p>
                      Payment records currently persist in client storage on this browser. For multi-device cloud persistence where academy staff, accountant, and Sir can synchronize live from separate devices with RBAC rules, connect Firebase Firestore or Cloud SQL database.
                    </p>
                  </div>
                </div>

                {/* Claims Table / List */}
                {savedClaims.length === 0 ? (
                  <div className="text-center py-8 text-sm text-[#64748B]">
                    No fee payment claims submitted yet on this browser. Fill in the form above and click WhatsApp to create your first claim.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#E0E7EF] bg-[#F8FAFC] text-[#475569] uppercase tracking-wider font-extrabold">
                          <th className="py-3 px-3">Reference / Date</th>
                          <th className="py-3 px-3">Student Name</th>
                          <th className="py-3 px-3">Class & Course</th>
                          <th className="py-3 px-3">Amount & Method</th>
                          <th className="py-3 px-3">Transaction ID</th>
                          <th className="py-3 px-3">Status</th>
                          <th className="py-3 px-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E0E7EF]">
                        {savedClaims.map((claim) => (
                          <tr key={claim.id} className="hover:bg-[#F8FAFC] transition-colors">
                            <td className="py-3 px-3">
                              <div className="font-mono font-bold text-[#0B2348]">{claim.referenceNumber}</div>
                              <div className="text-[10px] text-[#64748B]">{claim.submittedAt}</div>
                            </td>
                            <td className="py-3 px-3 font-bold text-[#0B2348]">
                              {claim.studentName}
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-bold text-[#123B70]">Class {claim.classLevel}</span>
                              <div className="text-[11px] text-[#475569]">{claim.courseType}</div>
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-black text-emerald-800">PKR {claim.amountPaid}</div>
                              <span className="text-[10px] text-[#64748B]">{claim.paymentMethod}</span>
                            </td>
                            <td className="py-3 px-3 font-mono font-bold text-[#0B2348] select-all">
                              {claim.transactionId}
                            </td>
                            <td className="py-3 px-3">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase border ${
                                claim.status === 'Verified'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                  : claim.status === 'Rejected'
                                  ? 'bg-red-50 text-red-700 border-red-300'
                                  : 'bg-amber-50 text-amber-700 border-amber-300'
                              }`}>
                                {claim.status}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right space-x-1.5 whitespace-nowrap">
                              <button
                                type="button"
                                onClick={() => handleUpdateClaimStatus(claim.id, 'Verified')}
                                className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] cursor-pointer"
                                title="Mark as Verified after confirming bank deposit"
                              >
                                Verify
                              </button>
                              <button
                                type="button"
                                onClick={() => handleUpdateClaimStatus(claim.id, 'Rejected')}
                                className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] cursor-pointer"
                                title="Mark as Rejected"
                              >
                                Reject
                              </button>
                              <button
                                type="button"
                                onClick={() => handleUpdateClaimStatus(claim.id, 'Pending')}
                                className="px-2 py-1 rounded bg-amber-500 hover:bg-amber-600 text-white font-bold text-[10px] cursor-pointer"
                                title="Set back to Pending"
                              >
                                Reset
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
