import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  Share2, 
  FileText 
} from 'lucide-react';
import { StudyResource } from '../data/resourcesData';

interface StudyResourceModalProps {
  resource: StudyResource | null;
  onClose: () => void;
}

export const StudyResourceModal: React.FC<StudyResourceModalProps> = ({ resource, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!resource) return null;

  const handleCopyNotes = () => {
    const textContent = `
AKBAR STUDY SMART ACADEMY
Resource: ${resource.title}
Class: ${resource.classLabel} | Subject: ${resource.subject}
Chapter: ${resource.chapter}

OVERVIEW:
${resource.fullContent.overview}

KEY DEFINITIONS:
${resource.fullContent.keyDefinitions.map((d) => `• ${d.term}: ${d.definition}`).join('\n')}

${resource.fullContent.importantFormulas ? `IMPORTANT FORMULAS:\n${resource.fullContent.importantFormulas.map((f) => `• ${f.name}: ${f.formula} (${f.explanation})`).join('\n')}` : ''}

CONCEPTUAL BOARD QUESTIONS:
${resource.fullContent.conceptualQuestions.map((q) => `Q: ${q.q}\nA: ${q.a} [${q.boardFrequency}]`).join('\n\n')}

STUDY TIPS:
${resource.fullContent.studyTips.map((t) => `• ${t}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    const markdownContent = `# ${resource.title}\n\n**Academy:** Akbar Study Smart Academy  \n**Class:** ${resource.classLabel} | **Subject:** ${resource.subject}  \n**Chapter:** ${resource.chapter}  \n\n## Overview\n${resource.fullContent.overview}\n\n## Key Definitions\n${resource.fullContent.keyDefinitions.map(d => `- **${d.term}:** ${d.definition}`).join('\n')}\n\n${resource.fullContent.importantFormulas ? `## Key Formulas\n${resource.fullContent.importantFormulas.map(f => `- **${f.name}:** \`${f.formula}\` - ${f.explanation}`).join('\n')}\n\n` : ''}## Conceptual Board Questions\n${resource.fullContent.conceptualQuestions.map(q => `### Q: ${q.q}\n**Answer:** ${q.a}  \n*Frequency:* ${q.boardFrequency}\n`).join('\n')}\n\n## Study Advice\n${resource.fullContent.studyTips.map(t => `- ${t}`).join('\n')}\n`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${resource.id}-akbar-academy-notes.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-popup-backdrop">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E0E7EF] overflow-hidden flex flex-col max-h-[92vh] animate-popup-content">
        
        {/* Top Header */}
        <div className="bg-[#0B2348] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#123B70]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#E88724] text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                {resource.type}
              </span>
              <span className="text-xs text-[#A6C0DE] font-semibold">
                {resource.classLabel} • {resource.subject}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
              {resource.title}
            </h3>
            <p className="text-xs text-[#D3E0EE] mt-1">{resource.chapter}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0 ml-4"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Action Controls Bar */}
        <div className="bg-[#F1F6FC] px-6 py-2.5 border-b border-[#E0E7EF] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-[#637083]">
            Format: <strong className="text-[#0B2348]">{resource.format}</strong> • Updated: {resource.lastUpdated}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyNotes}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#D3E0EE] font-semibold text-[#123B70] hover:bg-[#123B70] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadFile}
              className="px-3 py-1.5 rounded-lg bg-white border border-[#D3E0EE] font-semibold text-[#123B70] hover:bg-[#123B70] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Notes (.md)</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#123B70] text-white font-semibold hover:bg-[#0B2348] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Notes</span>
            </button>
          </div>
        </div>

        {/* Modal Content Reader Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#172235]">
          
          {/* Chapter Overview */}
          <div className="space-y-2">
            <h4 className="text-base font-bold text-[#0B2348] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#123B70]" />
              <span>Chapter Overview & SLO Objectives</span>
            </h4>
            <p className="text-sm text-[#637083] leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-[#E0E7EF]">
              {resource.fullContent.overview}
            </p>
          </div>

          {/* Key Definitions */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#0B2348] flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#E88724]" />
              <span>Core Concepts & Definitions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resource.fullContent.keyDefinitions.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-[#E0E7EF] bg-white shadow-2xs space-y-1">
                  <div className="font-bold text-xs text-[#123B70]">{item.term}</div>
                  <div className="text-xs text-[#637083] leading-relaxed">{item.definition}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulas if present */}
          {resource.fullContent.importantFormulas && resource.fullContent.importantFormulas.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-[#0B2348] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#21865B]" />
                <span>Essential Equations & Formulas</span>
              </h4>
              <div className="space-y-2">
                {resource.fullContent.importantFormulas.map((f, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FFF8E8] border border-[#F2B632]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-[#0B2348]">{f.name}</div>
                      <div className="text-xs text-[#8A5E04]">{f.explanation}</div>
                    </div>
                    <code className="text-xs font-mono font-bold bg-white px-3 py-1 rounded border border-[#F2B632]/50 text-[#0B2348] shrink-0">
                      {f.formula}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conceptual Board Questions */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#0B2348] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#2F80C3]" />
              <span>Federal Board High-Priority SLO Questions & Model Answers</span>
            </h4>
            <div className="space-y-3">
              {resource.fullContent.conceptualQuestions.map((q, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-[#E0E7EF] bg-white space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="font-bold text-xs sm:text-sm text-[#0B2348]">
                      Q{idx + 1}: {q.q}
                    </h5>
                    <span className="text-[10px] font-semibold text-[#123B70] bg-[#F1F6FC] px-2 py-0.5 rounded shrink-0">
                      {q.boardFrequency}
                    </span>
                  </div>
                  <div className="text-xs text-[#637083] leading-relaxed pl-3 border-l-2 border-[#123B70]/30">
                    <strong className="text-[#172235]">Model Answer: </strong>
                    {q.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Advice */}
          <div className="p-4 rounded-xl bg-[#F1F6FC] border border-[#D3E0EE] space-y-2">
            <div className="font-bold text-xs text-[#123B70] flex items-center gap-1.5">
              <span>Examiner’s Advice & Study Strategy</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-xs text-[#637083]">
              {resource.fullContent.studyTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex items-center justify-between">
          <span className="text-xs text-[#637083]">
            Akbar Study Smart Academy • Verified Educational Resource
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
};
