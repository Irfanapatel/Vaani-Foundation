import React from 'react';

// Icons (you'll need to add these to your assets/icons directory)
import { FaHandshake, FaChartLine, FaLeaf } from 'react-icons/fa';

// Import partner logos (update these paths to match your actual logo files)
import basfLogo from '../../assets/company/BASF.jpg';
import dblLogo from '../../assets/company/DBL.jpg';
import adaniLogo from '../../assets/company/adani fou..jpg';
import expandedPolymerLogo from '../../assets/company/expanded polymer.jpg';
import glenmarkLogo from '../../assets/company/glenmark.jpg';
import ongcLogo from '../../assets/company/ongc.jpg';
import petronetLogo from '../../assets/company/petronet.jpg';
import schotLogo from '../../assets/company/schot.jpg';
import sunPharmaLogo from '../../assets/company/sun pharma.jpg';
import viswaatLogo from '../../assets/company/viswaat.jpg';

const OurPartners = () => {
  const corporatePartners = [
    { id: 1, name: 'BASF', logo: basfLogo },
    { id: 2, name: 'DBL', logo: dblLogo },
    { id: 3, name: 'Adani', logo: adaniLogo },
    { id: 4, name: 'Expanded Polymer', logo: expandedPolymerLogo },
    { id: 5, name: 'Glenmark', logo: glenmarkLogo },
    { id: 6, name: 'ONGC', logo: ongcLogo },
    { id: 7, name: 'Petronet', logo: petronetLogo },
    { id: 8, name: 'Schot', logo: schotLogo },
    { id: 9, name: 'Sun Pharma', logo: sunPharmaLogo },
    { id: 10, name: 'Viswaat', logo: viswaatLogo },
  ];

  const partnershipBenefits = [
    "CSR Project Implementation",
    "Monitoring & Reporting",
    "Sustainable Development Focus"
  ];

  const governmentCollaboration = [
    "Rural Development Programs",
    "Healthcare Initiatives",
    "Education & Skill Development",
    "Environmental Conservation"
  ];

  return (
    <section className="w-full py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Partners</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Corporate Partners */}
          <div className="bg-white rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Corporate Partners</h3>
              <p className="text-gray-600">
               Vaani Foundation works closely with corporate partners to design and implement impactful CSR initiatives alined with national priorities and community
              </p>
              <p className="text-gray-600">
               Our partnership are built on transparency, accountability and measurable outcomes.                
              </p>
            </div>
            <div className="relative w-full overflow-hidden mb-6 py-4">
              <div className="flex gap-8 w-max animate-marquee hover:animation-pause">
                {/* First set of logos */}
                {corporatePartners.map((partner, index) => (
                  <div key={`first-${partner.id}`} className="w-28 h-28 p-3 bg-white border border-gray-100 rounded-lg shadow-sm flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                {/* Second set of logos (duplicate for seamless loop) */}
                {corporatePartners.map((partner, index) => (
                  <div key={`second-${partner.id}`} className="w-28 h-28 p-3 bg-white border border-gray-100 rounded-lg shadow-sm flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <style jsx global>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                }
                .hover\:animation-pause:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Partner With Us
            </button>
          </div>

          {/* Government & Public Institution Collaboration */}
          <div className="bg-white rounded-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Government & Public Institution Collaboration</h3>
              <p className="text-gray-600">
               Vaani Foundation actively collabborates with govenment departments and public institutions to ensure alignment with national priorities and community needs.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {governmentCollaboration.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Collaborate With Us
            </button>
          </div>
        </div>

        {/* How We Partner Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">How We Partner</h3>
          <p className="text-blue-800 max-w-3xl mx-auto mb-12">
            Our partnership approach is built on transparency, impact measurement, and shared values.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="w-12 h-12 text-green-600 mx-auto mb-4" />,
                title: "CSR Project Implementation",
                description: "End-to-end management of CSR projects with measurable impact and regular reporting."
              },
              {
                icon: <FaChartLine className="w-12 h-12 text-green-600 mx-auto mb-4" />,
                title: "Monitoring & Reporting",
                description: "Comprehensive tracking and transparent reporting of project outcomes and impact."
              },
              {
                icon: <FaLeaf className="w-12 h-12 text-green-600 mx-auto mb-4" />,
                title: "Sustainable Development Focus",
                description: "Initiatives aligned with UN Sustainable Development Goals for lasting change."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-md transition-shadow h-full flex flex-col border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-700 flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
