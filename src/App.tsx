/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Committee from './components/Committee';
import TechnicalCommittee from './components/TechnicalCommittee';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import Fees from './components/Fees';
import Partners from './components/Partners';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [updateNotice, setUpdateNotice] = useState<string | null>(null);
  const [isTechnicalCommittee, setIsTechnicalCommittee] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLinkClick = (name: string) => {
    if (name === 'TECHNICAL COMMITTEE') {
      setIsTechnicalCommittee(true);
      setUpdateNotice(null);
    } else if (name === 'KEYNOTES & PLENARY') {
      setIsTechnicalCommittee(false);
      setUpdateNotice(null);
      setTimeout(() => {
        const element = document.getElementById('keynotes');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (name === 'ORGANIZING COMMITTEE') {
      setIsTechnicalCommittee(false);
      setUpdateNotice(null);
      setTimeout(() => {
        const element = document.getElementById('committee');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (name === '') {
      setIsTechnicalCommittee(false);
      setUpdateNotice(null);
    } else if (name) {
      setIsTechnicalCommittee(false);
      setUpdateNotice(name);
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden w-full relative">
      <Navbar 
        onEmptyLinkClick={handleLinkClick} 
        onRegisterClick={() => setIsRegisterOpen(true)}
      />
      <Hero updateNotice={updateNotice} />
      
      {isTechnicalCommittee ? (
        <TechnicalCommittee />
      ) : (
        <>
          {!updateNotice && (
            <>
              <About />
              <Timeline />
              <KeynoteSpeakers />
              <Committee />
              <Fees />
              <Partners />
            </>
          )}
        </>
      )}
      
      <Footer />

      <RegistrationModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </main>
  );
}
