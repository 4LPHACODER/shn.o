import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { OjtJourney } from './pages/OjtJourney';

export function App() {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-ink-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ojt-journey" element={<OjtJourney />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>);

}