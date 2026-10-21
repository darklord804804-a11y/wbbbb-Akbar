import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Clock, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  Filter 
} from 'lucide-react';
import { practiceTestsData, PracticeTest, MCQQuestion } from '../data/testsData';
import { ActivePage } from './Header';

interface TestSeriesProps {
  onNavigate?: (page: ActivePage) => void;
}

export const TestSeriesInteractive: React.FC<TestSeriesProps> = ({ onNavigate }) => {
  // Test Selector State
  const [selectedTestId, setSelectedTestId] = useState<string>(practiceTestsData[0].id);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState<boolean>(false);
  
  // Active Test In-Progress State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(15 * 60);
  const [filterClass, setFilterClass] = useState<string>('all');

  const activeTest = practiceTestsData.find((t) => t.id === selectedTestId) || practiceTestsData[0];
  const currentQuestion: MCQQuestion = activeTest.questions[currentQuestionIndex];

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isTestActive && !isTestSubmitted && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer!);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTestActive, isTestSubmitted, secondsRemaining]);

  const handleStartTest = (test: PracticeTest) => {
    setSelectedTestId(test.id);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setSecondsRemaining(test.durationMinutes * 60);
    setIsTestActive(true);
    setIsTestSubmitted(false);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isTestSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const toggleFlagQuestion = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmitTest = () => {
    setIsTestSubmitted(true);
  };

  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setSecondsRemaining(activeTest.durationMinutes * 60);
    setIsTestSubmitted(false);
    setIsTestActive(true);
  };

  const handleExitTest = () => {
    setIsTestActive(false);
    setIsTestSubmitted(false);
    setUserAnswers({});
    setFlaggedQuestions({});
  };

  // Format Timer mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Score Calculation
  const totalQuestions = activeTest.questions.length;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  activeTest.questions.forEach((q) => {
    const selected = userAnswers[q.id];
    if (selected === undefined) {
      unansweredCount++;
    } else if (selected === q.correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  const getPerformanceGrade = (pct: number) => {
    if (pct >= 85) return { grade: 'A+ (Outstanding)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', advice: 'Excellent conceptual foundation! You are well prepared for board high scores.' };
    if (pct >= 70) return { grade: 'A (Very Good)', color: 'text-blue-700 bg-blue-50 border-blue-200', advice: 'Strong grasp! Review the few missed questions and derivations to achieve an A+.' };
    if (pct >= 55) return { grade: 'B (Good)', color: 'text-amber-700 bg-amber-50 border-amber-200', advice: 'Good effort. Revisit chapter notes and numerical formulas to sharpen your speed.' };
    return { grade: 'C (Needs Revision)', color: 'text-rose-700 bg-rose-50 border-rose-200', advice: 'Recommended to review chapter study notes and watch topic lecture videos before retaking.' };
  };

  const gradeInfo = getPerformanceGrade(scorePercentage);

  // Filtered test list
  const filteredTests = practiceTestsData.filter((t) => {
    if (filterClass === 'all') return true;
    return t.classId === filterClass;
  });

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E0E7EF]" id="test-series">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If no test is actively open, show the test catalog */}
        {!isTestActive && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider mb-3">
                <CheckSquare className="w-4 h-4 text-[#E88724]" />
                Self-Assessment Testing Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2348] tracking-tight">
                Practice. Test Yourself. Improve.
              </h2>
              <p className="text-base text-[#637083] mt-2">
                Simulate real Federal Board FBISE Section A multiple-choice examinations with timed conditions, immediate scoring, and thorough explanations.
              </p>
            </div>

            {/* Class Filter Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { id: 'all', label: 'All Tests' },
                { id: 'class-9', label: 'Class 9' },
                { id: 'class-10', label: 'Class 10' },
                { id: 'class-11', label: 'Class 11 (1st Year)' },
                { id: 'entry-test', label: 'Entry Test (NET / MDCAT)' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilterClass(btn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filterClass === btn.id
                      ? 'bg-[#123B70] text-white shadow-sm'
                      : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF] hover:text-[#172235]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Test Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-2xl border border-[#E0E7EF] hover:border-[#123B70]/40 shadow-xs hover:shadow-lg transition-all p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#F1F6FC] text-[#123B70] border border-[#D3E0EE]">
                        {test.classNumeric === 'Entry Test' ? 'Entry Test' : `Class ${test.classNumeric}`}
                      </span>
                      <span className="text-[11px] font-semibold text-[#E88724] bg-amber-50 px-2 py-0.5 rounded">
                        {test.difficulty}
                      </span>
                    </div>

                    <h3 className="font-bold text-base text-[#0B2348] leading-snug mb-1">
                      {test.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2166A5] mb-2">{test.subject}</p>
                    <p className="text-xs text-[#637083] line-clamp-2 mb-4">{test.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#E0E7EF] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#637083]">
                      <span className="flex items-center gap-1">
                        <CheckSquare className="w-3.5 h-3.5 text-[#123B70]" />
                        {test.questions.length} Questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#E88724]" />
                        {test.durationMinutes} Minutes
                      </span>
                    </div>

                    <button
                      onClick={() => handleStartTest(test)}
                      className="w-full py-2.5 rounded-xl bg-[#123B70] hover:bg-[#0B2348] text-white font-bold text-xs shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Start Test</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTIVE TEST EXPERIENCE */}
        {isTestActive && !isTestSubmitted && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[#E0E7EF] overflow-hidden">
            
            {/* Test Header Bar */}
            <div className="bg-[#0B2348] text-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#A6C0DE] mb-1">
                  <span className="bg-[#F2B632] text-[#0B2348] font-black px-2 py-0.5 rounded text-[10px] uppercase">
                    FBISE Practice Engine
                  </span>
                  <span>{activeTest.subject}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{activeTest.title}</h3>
              </div>

              {/* Countdown Timer */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-sm sm:text-base font-bold">
                  <Clock className="w-4 h-4 text-[#F2B632] animate-pulse" />
                  <span>{formatTime(secondsRemaining)}</span>
                </div>
                <button
                  onClick={handleExitTest}
                  className="text-xs text-[#A6C0DE] hover:text-white underline cursor-pointer"
                >
                  Exit Test
                </button>
              </div>
            </div>

            {/* Question Progress Tracker Bar */}
            <div className="bg-[#F1F6FC] px-4 sm:px-6 py-2.5 border-b border-[#E0E7EF] flex items-center justify-between text-xs">
              <span className="font-bold text-[#123B70]">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#637083]">Answered: {Object.keys(userAnswers).length}/{totalQuestions}</span>
                <button
                  onClick={() => toggleFlagQuestion(currentQuestion.id)}
                  className={`px-2.5 py-1 rounded-md font-semibold text-xs transition-colors cursor-pointer ${
                    flaggedQuestions[currentQuestion.id]
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-white text-[#637083] border border-[#E0E7EF] hover:text-[#172235]'
                  }`}
                >
                  {flaggedQuestions[currentQuestion.id] ? '★ Flagged for Review' : '☆ Flag for Review'}
                </button>
              </div>
            </div>

            {/* Question Card Content */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Question Text */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#637083]">
                  <span>Topic: {currentQuestion.chapter}</span>
                  <span>•</span>
                  <span className="text-[#123B70]">Domain: {currentQuestion.sloDomain}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#172235] leading-relaxed">
                  <span className="text-[#123B70] mr-2">Q{currentQuestionIndex + 1}.</span>
                  {currentQuestion.question}
                </h4>
              </div>

              {/* 4 Accessible Radio Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = userAnswers[currentQuestion.id] === idx;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQuestion.id, idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 cursor-pointer ${
                        isSelected
                          ? 'border-[#123B70] bg-[#F1F6FC] shadow-xs text-[#0B2348] font-semibold'
                          : 'border-[#E0E7EF] bg-white hover:border-[#123B70]/40 text-[#172235]'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#123B70] text-white'
                            : 'bg-[#F8FAFC] text-[#637083] border border-[#E0E7EF]'
                        }`}
                      >
                        {letter}
                      </span>
                      <span className="text-sm">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Question Navigation Palette */}
              <div className="pt-4 border-t border-[#E0E7EF]">
                <div className="text-[11px] font-bold text-[#637083] uppercase tracking-wider mb-2">
                  Question Palette
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeTest.questions.map((q, idx) => {
                    const isAnswered = userAnswers[q.id] !== undefined;
                    const isFlagged = flaggedQuestions[q.id];
                    const isCurrent = idx === currentQuestionIndex;

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all cursor-pointer relative ${
                          isCurrent
                            ? 'ring-2 ring-[#123B70] ring-offset-2'
                            : ''
                        } ${
                          isAnswered
                            ? 'bg-[#123B70] text-white'
                            : 'bg-[#F1F6FC] text-[#637083] hover:bg-[#E0E7EF]'
                        }`}
                      >
                        {idx + 1}
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E88724] rounded-full border border-white"></span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Test Navigation Footer */}
            <div className="bg-[#F8FAFC] px-6 py-4 border-t border-[#E0E7EF] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-[#E0E7EF] bg-white text-xs font-bold text-[#172235] hover:bg-[#F1F6FC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  onClick={() => setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl border border-[#E0E7EF] bg-white text-xs font-bold text-[#172235] hover:bg-[#F1F6FC] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleSubmitTest}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#21865B] hover:bg-[#1b6d49] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Final Test</span>
              </button>
            </div>

          </div>
        )}

        {/* TEST RESULT & DETAILED EXPLANATION REVIEW */}
        {isTestActive && isTestSubmitted && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
            
            {/* Score Summary Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-[#E0E7EF] p-6 sm:p-8 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123B70]/10 text-[#123B70] text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 text-[#F2B632]" />
                Test Completed
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2348]">
                  {activeTest.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#637083] mt-1">
                  Federal Board Section A (Objective MCQ Assessment Scorecard)
                </p>
              </div>

              {/* Big Score Display */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
                <div className="w-32 h-32 rounded-full border-8 border-[#123B70] flex flex-col items-center justify-center shadow-inner">
                  <span className="text-3xl font-black text-[#0B2348]">{scorePercentage}%</span>
                  <span className="text-[10px] font-bold text-[#637083] uppercase">Aggregate</span>
                </div>

                <div className="text-left space-y-2">
                  <div className={`px-4 py-2 rounded-xl border font-bold text-sm inline-block ${gradeInfo.color}`}>
                    Performance: {gradeInfo.grade}
                  </div>
                  <p className="text-xs text-[#637083] max-w-sm">
                    {gradeInfo.advice}
                  </p>
                </div>
              </div>

              {/* Score Breakdown Pills */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="text-xl font-black text-emerald-800">{correctCount}</div>
                  <div className="text-[11px] font-bold text-emerald-700">Correct</div>
                </div>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-center">
                  <div className="text-xl font-black text-rose-800">{incorrectCount}</div>
                  <div className="text-[11px] font-bold text-rose-700">Incorrect</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xl font-black text-slate-800">{unansweredCount}</div>
                  <div className="text-[11px] font-bold text-slate-600">Unanswered</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#E0E7EF]">
                <button
                  onClick={handleRestartTest}
                  className="px-5 py-2.5 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake This Test</span>
                </button>
                <button
                  onClick={handleExitTest}
                  className="px-5 py-2.5 rounded-xl border border-[#E0E7EF] text-[#172235] font-bold text-xs hover:bg-[#F1F6FC] cursor-pointer"
                >
                  Choose Another Test
                </button>
              </div>
            </div>

            {/* Question-By-Question Detailed Solution Review */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-[#0B2348]">
                  Detailed Answer Key & Explanations ({totalQuestions} Questions)
                </h4>
                <span className="text-xs text-[#637083]">SLO Conceptual Explanations</span>
              </div>

              {activeTest.questions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                const isUnanswered = userChoice === undefined;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border bg-white shadow-xs space-y-4 transition-all ${
                      isCorrect
                        ? 'border-emerald-300'
                        : isUnanswered
                        ? 'border-amber-300'
                        : 'border-rose-300'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-[#637083]">
                          Question {idx + 1} • {q.chapter}
                        </span>
                        <h5 className="font-bold text-[#172235] text-base mt-1">
                          {q.question}
                        </h5>
                      </div>

                      <div className="shrink-0">
                        {isCorrect && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Correct (+1)
                          </span>
                        )}
                        {!isCorrect && !isUnanswered && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                            <XCircle className="w-3.5 h-3.5" />
                            Incorrect
                          </span>
                        )}
                        {isUnanswered && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                            <AlertCircle className="w-3.5 h-3.5" />
                            Unanswered
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Options Breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correctAnswer;
                        const isThisUserChoice = optIdx === userChoice;

                        let optClasses = 'border-[#E0E7EF] bg-[#F8FAFC] text-[#637083]';
                        if (isThisCorrect) {
                          optClasses = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isThisUserChoice && !isThisCorrect) {
                          optClasses = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-lg border flex items-center justify-between ${optClasses}`}
                          >
                            <span>
                              <strong>{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                            </span>
                            {isThisCorrect && (
                              <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-200/60 px-1.5 py-0.5 rounded">
                                Correct Answer
                              </span>
                            )}
                            {isThisUserChoice && !isThisCorrect && (
                              <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-200/60 px-1.5 py-0.5 rounded">
                                Your Choice
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    <div className="p-3.5 rounded-xl bg-[#F1F6FC] border border-[#D3E0EE] text-xs text-[#123B70] space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-[#0B2348]">
                        <HelpCircle className="w-3.5 h-3.5 text-[#E88724]" />
                        <span>Step-by-Step SLO Explanation:</span>
                      </div>
                      <p className="leading-relaxed text-[#172235]">{q.explanation}</p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
