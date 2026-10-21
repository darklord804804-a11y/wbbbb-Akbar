import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Sparkles } from 'lucide-react';

interface NewsletterProps {
  onOpenDisclaimer?: () => void;
}

export const NewsletterSubscription: React.FC<NewsletterProps> = ({ onOpenDisclaimer }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please provide an email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    // Save locally
    try {
      const subscribers = JSON.parse(localStorage.getItem('akbar_subscribers') || '[]');
      if (!subscribers.includes(email.trim())) {
        subscribers.push(email.trim());
        localStorage.setItem('akbar_subscribers', JSON.stringify(subscribers));
      }
    } catch (e) {
      console.warn('Subscriber save:', e);
    }

    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-br from-[#0B2348] via-[#123B70] to-[#071730] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#123B70]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F2B632] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Stay Informed</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Never Miss an Important Update
          </h2>
          <p className="text-xs sm:text-sm text-[#D3E0EE] max-w-xl mx-auto leading-relaxed">
            Get study resources, important notifications, examination updates, and learning announcements delivered directly to your inbox.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-900/40 border border-emerald-500/50 rounded-2xl max-w-md mx-auto text-center space-y-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="font-bold text-sm text-emerald-200">Subscription Registered!</h4>
            <p className="text-xs text-emerald-300">
              Thank you for subscribing. You will receive Federal Board alerts and high-priority study materials.
            </p>
            <button
              onClick={() => {
                setEmail('');
                setSubmitted(false);
              }}
              className="text-[11px] text-white underline mt-2 hover:text-emerald-200"
            >
              Add another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#637083]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student email..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-[#172235] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#F2B632] placeholder:text-[#637083]"
                />
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-[#F2B632] hover:bg-[#E89B19] text-[#0B2348] font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {error && <p className="text-xs text-rose-300 text-left pl-2">{error}</p>}

            <p className="text-[11px] text-[#A6C0DE] leading-relaxed text-center">
              We respect your privacy. No spam. You can unsubscribe at any time.{' '}
              <button
                type="button"
                onClick={onOpenDisclaimer}
                className="underline hover:text-white"
              >
                Read Disclaimer & Privacy
              </button>
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
