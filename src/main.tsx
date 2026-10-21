import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Captured in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 text-[#172235]">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-[#E0E7EF] text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF8E8] text-[#E88724] flex items-center justify-center mx-auto text-2xl font-black">
              !
            </div>
            <h2 className="text-xl font-extrabold text-[#0B2348]">
              Akbar Study Smart Academy
            </h2>
            <p className="text-xs text-[#637083] leading-relaxed">
              A temporary interface issue occurred. Please click below to refresh the academic learning platform.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#123B70] text-white font-bold text-xs hover:bg-[#0B2348] transition-colors"
            >
              Reload Academy Platform
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
