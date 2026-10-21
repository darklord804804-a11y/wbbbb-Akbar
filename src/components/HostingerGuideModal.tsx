import React, { useState } from 'react';
import { X, Server, CheckCircle2, Copy, Check, Terminal, FolderCheck, Globe, Shield } from 'lucide-react';

interface HostingerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerGuideModal: React.FC<HostingerGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: 'Step 1: Generate Production Build',
      desc: 'In your terminal or AI Studio workspace, compile the complete project for web hosting:',
      code: 'npm run build',
      note: 'This generates a production-optimized `dist/` directory with minified JavaScript, CSS, SVGs, and pre-configured `.htaccess` file.',
    },
    {
      title: 'Step 2: Access Hostinger hPanel',
      desc: 'Log in to your Hostinger account -> Go to Websites -> Manage -> Open File Manager (or connect via FTP / FileZilla).',
      code: 'public_html/',
      note: 'Navigate to the root public folder of your domain: `public_html/`.',
    },
    {
      title: 'Step 3: Upload the Build Files',
      desc: 'Compress the contents of the `dist` folder into a ZIP file (or upload directly). Extract all files directly into `public_html/` so that `index.html` is at `public_html/index.html`.',
      code: 'public_html/\n  ├── index.html\n  ├── .htaccess\n  ├── assets/\n  └── favicon.svg',
      note: 'Ensure the `.htaccess` file is copied to handle React client-side routing on Hostinger LiteSpeed/Apache servers.',
    },
    {
      title: 'Step 4: Enable Free SSL & HTTPS',
      desc: 'In Hostinger hPanel, navigate to Security -> SSL and ensure the Let’s Encrypt SSL certificate is activated with "Force HTTPS" enabled.',
      code: 'https://yourdomain.com',
      note: 'Ensures student registration forms and social links run securely across all browsers.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-popup-backdrop">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E0E7EF] overflow-hidden flex flex-col max-h-[90vh] animate-popup-content">
        
        {/* Header */}
        <div className="bg-[#0B2348] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#123B70]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F2B632] text-[#0B2348] flex items-center justify-center font-black">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Hostinger Deployment Instructions</h3>
              <p className="text-xs text-[#A6C0DE]">Production Web Server Setup for Akbar Study Smart Academy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="p-4 rounded-xl bg-[#F1F6FC] border border-[#D3E0EE] text-xs text-[#123B70]">
            <strong>Ready for Hostinger Hosting: </strong>
            This website is engineered as a modern, high-speed single page application (SPA) with full client-side routing, Apache <code>.htaccess</code> URL rewriting, and zero runtime node server dependencies required for shared hosting.
          </div>

          <div className="space-y-4">
            {steps.map((st, i) => (
              <div key={i} className="p-4 rounded-2xl border border-[#E0E7EF] bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#0B2348]">{st.title}</h4>
                  <span className="text-[10px] bg-[#F1F6FC] text-[#123B70] px-2 py-0.5 rounded font-bold">Step {i + 1}</span>
                </div>
                <p className="text-xs text-[#637083] leading-relaxed">{st.desc}</p>
                
                {st.code && (
                  <div className="relative">
                    <pre className="p-3 rounded-xl bg-[#0B2348] text-[#F2B632] font-mono text-xs overflow-x-auto">
                      {st.code}
                    </pre>
                    <button
                      onClick={() => copyCode(st.code, i)}
                      className="absolute right-2.5 top-2.5 p-1.5 rounded bg-white/10 hover:bg-white/20 text-white text-[10px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedIndex === i ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedIndex === i ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}

                <div className="text-[11px] text-[#637083] italic">
                  💡 {st.note}
                </div>
              </div>
            ))}
          </div>

          {/* PHP Backend Snippet for Registration */}
          <div className="p-4 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/50 text-xs text-[#8A5E04] space-y-2">
            <h5 className="font-bold text-[#0B2348]">Optional Hostinger PHP Form Handler (`api/register.php`):</h5>
            <p>
              To receive registrations via email or MySQL on Hostinger, create a simple <code>api/register.php</code> script that reads JSON POST data and invokes PHP's <code>mail()</code> or stores into Hostinger MySQL.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
