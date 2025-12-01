import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from "./components/Layout/Navbar"
import { Hero } from "./components/sections/Hero"
import PinkBox from "./components/sections/PinkBox"
import CometCard from "./components/ui/comet-card"
import Projectsection from "./components/sections/Projectsection"
import OverviewPage from "./pages/OverviewPage";
import MissionVision from "./pages/MissionVision";
import OurTeam from "./pages/OurTeam";

// Wrapper component to handle routing
const AppRoutes = ({ activeField, setActiveField, fields, fieldBgColors }) => {
  const location = useLocation();
  
  // If the path is one of the about pages, only show that page
  if (location.pathname.startsWith('/about/')) {
    return (
      <Routes>
        <Route path="/about/overview" element={<OverviewPage />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/about/our-team" element={<OurTeam />} />
      </Routes>
    );
  }
  
  // Otherwise, show the home page
  return (
    <>
      <Hero />
      <PinkBox />
      <div className="pt-8 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">OUR FIELDS OF WORK</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4">
            {fields.map((field) => (
              <div 
                key={field} 
                onClick={() => setActiveField(field)}
                className="cursor-pointer"
              >
                <CometCard 
                  className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all w-full max-w-[200px] mx-auto ${
                    activeField === field ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="w-full">
                    <div className="w-full h-56 bg-gray-100 overflow-hidden">
                      <img 
                        src={`/src/assets/field/${field.toUpperCase()}.jpg`} 
                        alt={field}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/300x400/F3F4F6/6B7280?text=${field}`;
                        }}
                      />
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="text-base font-semibold text-center text-gray-800">{field}</h3>
                    </div>
                  </div>
                </CometCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Projectsection activeField={activeField} bgColor={fieldBgColors[activeField] || 'bg-gray-50'} />
    </>
  );
};

function App() {
  const [activeField, setActiveField] = useState('EDUCATION');
  const fields = ['EDUCATION', 'HEALTH', 'ENVIRONMENT', 'HER POWER', 'LIVELIHOOD'];
  
  const fieldBgColors = {
    'EDUCATION': 'bg-blue-50',
    'HEALTH': 'bg-green-50',
    'ENVIRONMENT': 'bg-emerald-50',
    'HER POWER': 'bg-pink-50',
    'LIVELIHOOD': 'bg-amber-50'
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <header>
          <Navbar />
        </header>
        <main className="grow">
          <AppRoutes 
            activeField={activeField}
            setActiveField={setActiveField}
            fields={fields}
            fieldBgColors={fieldBgColors}
          />
        </main>
        <footer className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Vaani Foundation. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App