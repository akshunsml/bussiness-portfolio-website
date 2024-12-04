import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Timeline from './components/history/Timeline';
import TeamGrid from './components/team/TeamGrid';
import CertificationsGrid from './components/certifications/CertificationsGrid';
import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Timeline />
      <TeamGrid />
      <CertificationsGrid />
      <ContactForm />
    </div>
  );
}

export default App;