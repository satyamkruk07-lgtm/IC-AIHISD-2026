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
import SessionChair from './components/SessionChair';
import TrackSession from './components/TrackSession';
import Fees from './components/Fees';
import Partners from './components/Partners';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [updateNotice, setUpdateNotice] = useState<string | null>(null);
  const [isTechnicalCommittee, setIsTechnicalCommittee] = useState(false);
  const [isKeynote, setIsKeynote] = useState(false);
  const [isSessionChair, setIsSessionChair] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLinkClick = (name: string) => {
    if (name === 'CONFERENCE COMMITTEE') {
      setIsTechnicalCommittee(true);
      setIsKeynote(false);
      setIsSessionChair(false);
      setUpdateNotice(null);
    } else if (name === 'KEYNOTES & PLENARY') {
      setIsTechnicalCommittee(false);
      setIsKeynote(true);
      setIsSessionChair(false);
      setUpdateNotice(null);
      setTimeout(() => {
        const element = document.getElementById('keynotes');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (name === 'SESSION CHAIR') {
      setIsTechnicalCommittee(false);
      setIsKeynote(false);
      setIsSessionChair(true);
      setUpdateNotice(null);
      setTimeout(() => {
        const element = document.getElementById('session-chair');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (name === 'ORGANIZING COMMITTEE') {
      setIsTechnicalCommittee(false);
      setIsKeynote(false);
      setIsSessionChair(false);
      setUpdateNotice(null);
      setTimeout(() => {
        const element = document.getElementById('committee');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (name === '') {
      setIsTechnicalCommittee(false);
      setIsKeynote(false);
      setIsSessionChair(false);
      setUpdateNotice(null);
    } else if (name) {
      setIsTechnicalCommittee(false);
      setIsKeynote(false);
      setIsSessionChair(false);
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
      ) : isKeynote ? (
        <KeynoteSpeakers />
      ) : isSessionChair ? (
        <SessionChair />
      ) : (
        <>
          {!updateNotice && (
            <>
              <About />
              <TrackSession />
              <Timeline />
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
