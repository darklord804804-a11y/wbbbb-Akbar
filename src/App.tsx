import React, { useState, useEffect } from 'react';
import { Header, ActivePage } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickAccessDashboard } from './components/QuickAccessDashboard';
import { AboutAcademy } from './components/AboutAcademy';
import { ResultsAndTestimonials } from './components/ResultsAndTestimonials';
import { ClassesSection } from './components/ClassesSection';
import { TestSeriesInteractive } from './components/TestSeriesInteractive';
import { ResourceLibrary } from './components/ResourceLibrary';
import { LectureSection } from './components/LectureSection';
import { GuessPapersSection } from './components/GuessPapersSection';
import { PastPapersSection } from './components/PastPapersSection';
import { UniversityPortalSection } from './components/UniversityPortalSection';
import { UpdatesSection } from './components/UpdatesSection';
import { RegistrationForm } from './components/RegistrationForm';
import { SocialConnectSection } from './components/SocialConnectSection';
import { NewsletterSubscription } from './components/NewsletterSubscription';
import { Footer } from './components/Footer';
import { DisclaimerModal } from './components/DisclaimerModal';
import { HostingerGuideModal } from './components/HostingerGuideModal';
import { classesData } from './data/classesData';
import { ClassDetailModal } from './components/ClassDetailModal';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { FeesPaymentSection } from './components/FeesPaymentSection';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isHostingerGuideOpen, setIsHostingerGuideOpen] = useState(false);
  const [focusedClassModal, setFocusedClassModal] = useState<any | null>(null);

  // Handle direct navigation to specific class pages
  useEffect(() => {
    if (activePage === 'class-9') {
      const cls = classesData.find(c => c.id === 'class-9');
      if (cls) setFocusedClassModal(cls);
    } else if (activePage === 'class-10') {
      const cls = classesData.find(c => c.id === 'class-10');
      if (cls) setFocusedClassModal(cls);
    } else if (activePage === 'class-11') {
      const cls = classesData.find(c => c.id === 'class-11');
      if (cls) setFocusedClassModal(cls);
    } else if (activePage === 'class-12') {
      const cls = classesData.find(c => c.id === 'class-12');
      if (cls) setFocusedClassModal(cls);
    }
  }, [activePage]);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#172235]">
      {/* Global Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)}
      />

      {/* Main Content Area Based on Active Route */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection onNavigate={handleNavigate} />

            {/* 2. Quick Access Dashboard (8 Icon Cards) */}
            <QuickAccessDashboard onNavigate={handleNavigate} />

            {/* 3. About the Academy Section */}
            <AboutAcademy 
              onNavigate={handleNavigate} 
              onOpenDisclaimer={() => setIsDisclaimerOpen(true)} 
            />

            {/* 4. Our Results & Student Testimonials */}
            <ResultsAndTestimonials onNavigate={handleNavigate} />

            {/* 5. Classes 9-12 Exploration */}
            <ClassesSection onNavigate={handleNavigate} />

            {/* 5. Interactive Test Series & MCQs */}
            <TestSeriesInteractive onNavigate={handleNavigate} />

            {/* 6. Notes & Study Resources Library */}
            <ResourceLibrary onNavigate={handleNavigate} />

            {/* 7. Video Lectures Section */}
            <LectureSection />

            {/* 8. Guess Papers & High Priority Questions */}
            <GuessPapersSection onNavigate={handleNavigate} />

            {/* 9. Past Papers & Paper Patterns */}
            <PastPapersSection onNavigate={handleNavigate} />

            {/* 10. University Admissions & Student Portal */}
            <UniversityPortalSection onNavigate={handleNavigate} />

            {/* 11. Official Educational Updates Feed */}
            <UpdatesSection onNavigate={handleNavigate} />

            {/* 12. Academy Registration Form */}
            <RegistrationForm 
              onNavigate={handleNavigate} 
              onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)} 
            />

            {/* 13. Connect With Academy & Social Links */}
            <SocialConnectSection />

            {/* 14. Newsletter & Updates Subscription */}
            <NewsletterSubscription onOpenDisclaimer={() => setIsDisclaimerOpen(true)} />
          </>
        )}

        {/* Dedicated Route: About */}
        {activePage === 'about' && (
          <div className="animate-in fade-in duration-200">
            <AboutAcademy 
              onNavigate={handleNavigate} 
              onOpenDisclaimer={() => setIsDisclaimerOpen(true)} 
            />
            <ResultsAndTestimonials onNavigate={handleNavigate} />
            <SocialConnectSection />
          </div>
        )}

        {/* Dedicated Route: Results & Testimonials */}
        {activePage === 'results' && (
          <div className="animate-in fade-in duration-200">
            <ResultsAndTestimonials onNavigate={handleNavigate} />
            <SocialConnectSection />
          </div>
        )}

        {/* Dedicated Route: Classes */}
        {(activePage === 'classes' || activePage === 'class-9' || activePage === 'class-10' || activePage === 'class-11' || activePage === 'class-12') && (
          <div className="animate-in fade-in duration-200">
            <ClassesSection 
              onNavigate={handleNavigate} 
              selectedClassId={activePage.startsWith('class-') ? activePage : undefined}
            />
            <ResourceLibrary 
              onNavigate={handleNavigate} 
              defaultClassFilter={activePage.startsWith('class-') ? activePage : 'all'}
            />
          </div>
        )}

        {/* Dedicated Route: Resources / Notes / MCQs */}
        {(activePage === 'resources' || activePage === 'notes' || activePage === 'mcqs') && (
          <div className="animate-in fade-in duration-200">
            <ResourceLibrary onNavigate={handleNavigate} />
            <LectureSection />
          </div>
        )}

        {/* Dedicated Route: Guess Papers */}
        {activePage === 'guess-papers' && (
          <div className="animate-in fade-in duration-200">
            <GuessPapersSection onNavigate={handleNavigate} />
            <TestSeriesInteractive onNavigate={handleNavigate} />
          </div>
        )}

        {/* Dedicated Route: Past Papers */}
        {activePage === 'past-papers' && (
          <div className="animate-in fade-in duration-200">
            <PastPapersSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* Dedicated Route: University Portal / Entry Tests / Merit Lists */}
        {(activePage === 'university-portal' || activePage === 'entry-tests' || activePage === 'merit-lists') && (
          <div className="animate-in fade-in duration-200">
            <UniversityPortalSection 
              onNavigate={handleNavigate} 
              defaultTab={
                activePage === 'entry-tests' 
                  ? 'entry-tests' 
                  : activePage === 'merit-lists' 
                  ? 'merit-lists' 
                  : 'admissions'
              }
            />
          </div>
        )}

        {/* Dedicated Route: Test Series */}
        {activePage === 'test-series' && (
          <div className="animate-in fade-in duration-200">
            <TestSeriesInteractive onNavigate={handleNavigate} />
          </div>
        )}

        {/* Dedicated Route: Updates */}
        {activePage === 'updates' && (
          <div className="animate-in fade-in duration-200">
            <UpdatesSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* Dedicated Route: Registration */}
        {activePage === 'register' && (
          <div className="animate-in fade-in duration-200">
            <RegistrationForm 
              onNavigate={handleNavigate} 
              onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)} 
            />
          </div>
        )}

        {/* Dedicated Route: Contact */}
        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-200">
            <SocialConnectSection />
            <RegistrationForm onNavigate={handleNavigate} />
          </div>
        )}
      </main>

      {/* Manual Fees Payment System (Bottom of website, just above footer) */}
      <FeesPaymentSection />

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        onOpenHostingerGuide={() => setIsHostingerGuideOpen(true)}
      />

      {/* Class Deep Dive Modal if opened directly via URL state */}
      {focusedClassModal && (
        <ClassDetailModal
          classLevel={focusedClassModal}
          onClose={() => setFocusedClassModal(null)}
          onNavigate={handleNavigate}
        />
      )}

      {/* Institutional Legal Disclaimer Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Hostinger Web Deployment Guide Modal */}
      <HostingerGuideModal
        isOpen={isHostingerGuideOpen}
        onClose={() => setIsHostingerGuideOpen(false)}
      />

      {/* Floating Animated Helpline & WhatsApp Popup Widget */}
      <FloatingContactWidget />
    </div>
  );
}
