import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Chatbot from './components/Chatbot';
import { Home } from './pages/Home';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import VayucareForgePage from './pages/VayucareForgePage';
import ScrollToHash from './components/ScrollToHash';

import { ThemeProvider } from './ThemeContext';

// Re-triggering build for Vercel
function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToHash />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/vayucare-forge" element={<VayucareForgePage />} />
          </Routes>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
