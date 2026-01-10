import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Hero } from "./components/sections/Hero"
import PinkBox from "./components/sections/PinkBox"
import CometCard from "./components/ui/comet-card"
import Projectsection from "./components/sections/Projectsection"
import ImpactAtGlance from "./components/sections/ImpactAtGlance"
import OurPartners from "./components/sections/OurPartners"
import OverviewPage from "./pages/OverviewPage";
import MissionVision from "./pages/MissionVision";
import OurTeam from "./pages/OurTeam";
import Education from "./pages/Education";
import HealthServices from './pages/HealthServices';
import WomanEmpowerment from './pages/WomanEmpowerment';
import Environment from './pages/Environment';
import Youth from './pages/Youth';
import Contactus from './pages/Contactus';
import Volunteer from './pages/Volunteer';
import WaysToHelp from './pages/WaystoHelp';
import Donate from './pages/Donate';
import Certificats from './pages/Certificats';

// Import Footer CSS
import './components/Layout/Footer.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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

  if (location.pathname.startsWith('/what-we-do/')) {
    return (
      <Routes>
        <Route path="/what-we-do/education" element={<Education />} />
        <Route path="/what-we-do/healthservices" element={<HealthServices />} />
        <Route path="/what-we-do/womanempowerment" element={<WomanEmpowerment />} />
        <Route path="/what-we-do/environment" element={<Environment />} />
        <Route path="/what-we-do/youth" element={<Youth />} />
      </Routes>
    );
  }

  if (location.pathname === '/certificates') {
    return <Certificats />;
  }

  if (location.pathname === '/contact') {
    return <Contactus />;
  }

  if (location.pathname === '/donate') {
    return <Donate />;
  }

  if (location.pathname.startsWith('/get-involved/')) {
  return (
    <Routes>
      <Route path="/get-involved/Volunteer" element={<Volunteer />} />
      <Route path="/get-involved/contactus" element={<Contactus />} />
      <Route path="/get-involved/waystohelp" element={<WaysToHelp />} />
    </Routes>
  )
}
  
  // Otherwise, show the home page
  return (
    <>
      <Hero />
      <PinkBox />
      <div className="pt-8 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">OUR FIELDS OF WORK</h2>
          {/* Mobile & Tablet: Horizontal scrollable container */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-2 sm:-mx-4 px-2 sm:px-4">
            <div className="flex gap-3 sm:gap-4 w-max min-w-full">
              {fields.map((field) => (
                <div 
                  key={field} 
                  onClick={() => setActiveField(field)}
                  className="flex-shrink-0 w-36 sm:w-44"
                >
                  <CometCard 
                    className={`overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all w-full mx-auto ${
                      activeField === field ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <div className="w-full">
                      <div className="w-full h-40 sm:h-48 bg-gray-100 overflow-hidden">
                        <img 
                          src={`/src/assets/field/${field.toUpperCase()}.jpg`} 
                          alt={field}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/300x400/F3F4F6/6B7280?text=${field}`;
                          }}
                        />
                      </div>
                      <div className="p-2 sm:p-3 bg-white">
                        <h3 className="text-sm sm:text-base font-semibold text-center text-gray-800 truncate">{field}</h3>
                      </div>
                    </div>
                  </CometCard>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 px-4">
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
      <ImpactAtGlance />
      <OurPartners />
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
      <div className="min-h-screen flex flex-col bg-white w-full overflow-x-hidden">
        <ScrollToTop />
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-grow w-full">
          <div className="w-full max-w-full">
            <AppRoutes 
              activeField={activeField}
              setActiveField={setActiveField}
              fields={fields}
              fieldBgColors={fieldBgColors}
            />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App