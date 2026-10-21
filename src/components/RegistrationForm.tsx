import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  User, 
  BookOpen, 
  HelpCircle 
} from 'lucide-react';
import { ActivePage } from './Header';

interface RegistrationFormProps {
  onNavigate?: (page: ActivePage) => void;
  onOpenHostingerGuide?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ 
  onNavigate,
  onOpenHostingerGuide 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    classLevel: 'Class 10',
    board: 'Federal Board (FBISE)',
    studyGroup: 'Pre-Medical',
    city: '',
    preferredMethod: 'Self-Study Resources',
    interests: ['Notes', 'MCQs', 'Test Series'],
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [registrationRef, setRegistrationRef] = useState<string>('');

  // Validate form
  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Name should be at least 3 characters.';
    }

    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required for WhatsApp alerts.';
    } else {
      // Pakistani mobile format check: e.g. 03xx-xxxxxxx or 03xxxxxxxxx
      const cleanNum = formData.mobileNumber.replace(/[\s-]/g, '');
      if (!/^03[0-9]{9}$/.test(cleanNum) && !/^\+923[0-9]{9}$/.test(cleanNum)) {
        errs.mobileNumber = 'Please enter a valid Pakistani mobile number (e.g. 03001234567).';
      }
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.classLevel) {
      errs.classLevel = 'Please select your class.';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge the privacy notice to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable local storage persistence + API endpoint handover
    setTimeout(() => {
      const refCode = `ASA-${Math.floor(100000 + Math.random() * 900000)}`;
      
      try {
        const existingData = JSON.parse(localStorage.getItem('akbar_academy_registrations') || '[]');
        const record = {
          refCode,
          submittedAt: new Date().toISOString(),
          ...formData,
        };
        existingData.push(record);
        localStorage.setItem('akbar_academy_registrations', JSON.stringify(existingData));
      } catch (err) {
        console.warn('LocalStorage save notice:', err);
      }

      setRegistrationRef(refCode);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      classLevel: 'Class 10',
      board: 'Federal Board (FBISE)',
      studyGroup: 'Pre-Medical',
      city: '',
      preferredMethod: 'Self-Study Resources',
      interests: ['Notes', 'MCQs', 'Test Series'],
      message: '',
      consent: false,
    });
    setErrors({});
    setSubmissionSuccess(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E0E7EF]" id="register">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2B632]/20 text-[#8A5E04] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#E88724]" />
            Student Enrollment Form
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
            Join Akbar Study Smart Academy
          </h2>
          <p className="text-base text-[#637083] mt-2">
            Register to receive information about learning resources, online classes, test series, and educational updates.
          </p>
        </div>

        {/* Success Confirmation Card */}
        {submissionSuccess ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-200 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                Registration Acknowledged
              </span>
              <h3 className="text-2xl font-black text-[#0B2348] mt-3">
                Welcome to the Akbar Academy Community, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#637083] mt-2 max-w-lg mx-auto">
                Your registration reference number is{' '}
                <strong className="text-[#0B2348] font-mono text-base px-2 py-0.5 bg-[#F1F6FC] rounded border border-[#D3E0EE]">
                  {registrationRef}
                </strong>
                . Your details have been stored locally in the student portal registry.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E0E7EF] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#172235]">
              <div><strong>Class Registered:</strong> {formData.classLevel} ({formData.board})</div>
              <div><strong>Study Stream:</strong> {formData.studyGroup}</div>
              <div><strong>Mobile / WhatsApp:</strong> {formData.mobileNumber}</div>
              <div><strong>Study Preferences:</strong> {formData.interests.join(', ')}</div>
            </div>

            {/* Hostinger Integration Note */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-left text-xs text-blue-950 space-y-1 max-w-lg mx-auto">
              <div className="font-bold flex items-center gap-1.5 text-[#123B70]">
                <ShieldCheck className="w-4 h-4 text-[#21865B]" />
                <span>Production Hostinger Connection:</span>
              </div>
              <p className="text-blue-900/80 leading-relaxed">
                When deployed on Hostinger, this form connects seamlessly to your Hostinger MySQL database or PHP mailer script via <code>/api/register</code>. Full documentation is provided in the Hostinger Guide.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onNavigate && onNavigate('test-series')}
                className="px-6 py-2.5 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors cursor-pointer"
              >
                Start Practicing MCQs Now
              </button>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl border border-[#D3E0EE] text-[#637083] hover:text-[#172235] text-xs font-semibold"
              >
                Submit Another Registration
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E0E7EF] space-y-6"
          >
            {/* Row 1: Name and Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#637083]" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Muhammad Akbar / Fatima Ali"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs text-[#172235] bg-[#F8FAFC] focus:bg-white focus:outline-hidden focus:ring-2 ${
                      errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-[#E0E7EF] focus:ring-[#123B70]'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  Mobile / WhatsApp Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#637083]" />
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="03001234567"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs text-[#172235] bg-[#F8FAFC] focus:bg-white focus:outline-hidden focus:ring-2 ${
                      errors.mobileNumber ? 'border-rose-400 focus:ring-rose-400' : 'border-[#E0E7EF] focus:ring-[#123B70]'
                    }`}
                  />
                </div>
                {errors.mobileNumber && <p className="text-[11px] text-rose-600 mt-1">{errors.mobileNumber}</p>}
              </div>
            </div>

            {/* Row 2: Email and City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  Email Address <span className="text-xs text-[#637083] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#637083]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs text-[#172235] bg-[#F8FAFC] focus:bg-white focus:outline-hidden focus:ring-2 ${
                      errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-[#E0E7EF] focus:ring-[#123B70]'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  City / Location <span className="text-xs text-[#637083] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Islamabad / Rawalpindi / Lahore / Karachi"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E0E7EF] text-xs text-[#172235] bg-[#F8FAFC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
                />
              </div>
            </div>

            {/* Row 3: Class, Board, Study Group */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Class Level */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  Class <span className="text-rose-600">*</span>
                </label>
                <select
                  value={formData.classLevel}
                  onChange={(e) => setFormData({ ...formData, classLevel: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] focus:bg-white text-xs font-semibold text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
                >
                  <option value="Class 9">Class 9 (SSC Part 1)</option>
                  <option value="Class 10">Class 10 (SSC Part 2 - Matric)</option>
                  <option value="Class 11">Class 11 (HSSC Part 1 - 1st Year)</option>
                  <option value="Class 12">Class 12 (HSSC Part 2 - 2nd Year)</option>
                  <option value="Entry Test">University Entry Test (NET / MDCAT / ECAT)</option>
                </select>
              </div>

              {/* Examination Board */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  Examination Board
                </label>
                <select
                  value={formData.board}
                  onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] focus:bg-white text-xs font-semibold text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
                >
                  <option value="Federal Board (FBISE)">Federal Board (FBISE Islamabad)</option>
                  <option value="Rawalpindi Board">Punjab - Rawalpindi Board (BISE)</option>
                  <option value="Lahore Board">Punjab - Lahore Board (BISE)</option>
                  <option value="Federal / Overseas">FBISE Overseas Examination Center</option>
                  <option value="Other Board">Other Intermediate & Secondary Board</option>
                </select>
              </div>

              {/* Study Group / Stream */}
              <div>
                <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                  Study Group
                </label>
                <select
                  value={formData.studyGroup}
                  onChange={(e) => setFormData({ ...formData, studyGroup: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-[#E0E7EF] bg-[#F8FAFC] focus:bg-white text-xs font-semibold text-[#172235] focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
                >
                  <option value="Pre-Medical">Science (Pre-Medical)</option>
                  <option value="Pre-Engineering">Science (Pre-Engineering)</option>
                  <option value="ICS (Computer Science)">ICS (Computer Science)</option>
                  <option value="General Science">General Science</option>
                  <option value="Humanities / Arts">Humanities / Arts</option>
                </select>
              </div>
            </div>

            {/* Row 4: Preferred Learning Method */}
            <div>
              <label className="block text-xs font-bold text-[#172235] uppercase mb-2">
                Preferred Learning Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Self-Study Resources', label: 'Self-Study Resources', desc: 'Download notes, solve MCQs & guess papers' },
                  { id: 'Online Classes & Lectures', label: 'Online Lectures', desc: 'YouTube conceptual video lessons' },
                  { id: 'Comprehensive Test Series', label: 'Test Series', desc: 'Periodic chapter-wise test practice' },
                ].map((method) => (
                  <button
                    type="button"
                    key={method.id}
                    onClick={() => setFormData({ ...formData, preferredMethod: method.id })}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      formData.preferredMethod === method.id
                        ? 'border-[#123B70] bg-[#F1F6FC] text-[#0B2348] font-bold shadow-2xs'
                        : 'border-[#E0E7EF] bg-white hover:border-[#D3E0EE] text-[#172235]'
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight">{method.label}</div>
                    <div className="text-[10px] text-[#637083] mt-0.5">{method.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Areas of Interest Checkboxes */}
            <div>
              <label className="block text-xs font-bold text-[#172235] uppercase mb-2">
                Areas of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                {['Notes', 'Lectures', 'MCQs', 'Test Series', 'Exam Updates'].map((interest) => {
                  const isChecked = formData.interests.includes(interest);
                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#123B70] bg-[#123B70] text-white font-bold'
                          : 'border-[#E0E7EF] bg-[#F8FAFC] text-[#637083] hover:bg-white'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Message */}
            <div>
              <label className="block text-xs font-bold text-[#172235] uppercase mb-1">
                Additional Questions / Message <span className="text-xs text-[#637083] font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us which subjects or topics you find most challenging or what resources you would like added..."
                className="w-full p-3 rounded-xl border border-[#E0E7EF] text-xs text-[#172235] bg-[#F8FAFC] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#123B70]"
              ></textarea>
            </div>

            {/* Consent & Privacy Notice Checkbox */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E0E7EF] space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[#123B70] focus:ring-[#123B70] border-[#D3E0EE]"
                />
                <span className="text-xs text-[#637083] leading-relaxed">
                  I agree to receive educational resources, test series updates, and academic notifications from Akbar Study Smart Academy. I acknowledge that study materials and guess papers are for revision purposes and do not guarantee examination outcomes.
                </span>
              </label>
              {errors.consent && <p className="text-[11px] text-rose-600 pl-7">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#F2B632] hover:bg-[#E89B19] text-[#0B2348] font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Registration...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#0B2348]" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
