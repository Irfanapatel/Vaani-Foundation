import React from 'react';

// Icons (you'll need to add these to your assets/icons directory)
// Import the new images
import icon1 from '../../assets/images/ChatGPT Image Dec 29, 2025, 11_06_34 AM.png';
import icon2 from '../../assets/images/ChatGPT Image Dec 29, 2025, 11_10_31 AM.png';
import icon3 from '../../assets/images/ChatGPT Image Dec 29, 2025, 11_12_26 AM.png';

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
    <section className="w-full pt-0 pb-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header with Ribbon */}
        <div className="partner-heading-wrapper">
          <h2 className="partner-heading">Our Partners</h2>
        </div>
        <style jsx="true">{`
          .partner-heading-wrapper {
            text-align: center;
            margin: 0 0 20px;
          }
          
          .partner-heading {
            position: relative;
            display: inline-block;
            background: linear-gradient(135deg, #1e40af, #1e3a8a);
            color: #ffffff;
            font-size: clamp(18px, 2vw, 24px);
            font-weight: 600;
            padding: 10px 32px;
            border-radius: 6px;
            margin: 0 auto;
          }
          
          /* Left ribbon tail */
          .partner-heading::before {
            content: "";
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right: 20px solid #1e3a8a;
          }
          
          /* Right ribbon tail */
          .partner-heading::after {
            content: "";
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-left: 20px solid #1e3a8a;
          }
          
          @media (max-width: 640px) {
            .partner-heading {
              padding: 8px 24px;
              font-size: 18px;
            }
            .partner-heading::before,
            .partner-heading::after {
              border-top-width: 12px;
              border-bottom-width: 12px;
            }
            .partner-heading::before {
              left: -16px;
              border-right-width: 16px;
            }
            .partner-heading::after {
              right: -16px;
              border-left-width: 16px;
            }
          }
        `}</style>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-2 sm:px-0">
          {/* Corporate Partners */}
          <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 w-full overflow-hidden">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Corporate Partners</h3>
              <p className="text-gray-600">
               Vaani Foundation works closely with corporate partners to design and implement impactful CSR initiatives alined with national priorities and community
              </p>
              <p className="text-gray-600">
               Our partnership are built on transparency, accountability and measurable outcomes.                
              </p>
            </div>
            <div className="relative w-full overflow-x-auto py-4 -mx-2 sm:-mx-4 px-2 sm:px-4">
              <div className="flex gap-8 w-max animate-marquee hover:animation-pause">
                {/* First set of logos */}
                {corporatePartners.map((partner, index) => (
                  <div key={`first-${partner.id}`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2 sm:p-3 bg-white border border-gray-100 rounded-lg shadow-sm shrink-0 flex items-center justify-center mx-1">
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
                  <div key={`second-${partner.id}`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-2 sm:p-3 bg-white border border-gray-100 rounded-lg shadow-sm shrink-0 flex items-center justify-center mx-1">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <style jsx="true" global="true">{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                }
                .hover\\:animation-pause:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>

          {/* Government & Public Institution Collaboration */}
          <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 w-full overflow-hidden">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Government & Public Institution Collaboration</h3>
              <p className="text-gray-600">
               Vaani Foundation actively collabborates with govenment departments and public institutions to ensure alignment with national priorities and community needs.
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              {governmentCollaboration.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How We Partner Section */}
        <div className="text-center mt-12 md:mt-16 px-3 sm:px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">How We Partner</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            Our partnership approach is built on transparency, impact measurement, and shared values.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: icon1,
                title: "CSR Project Implementation",
                description: "End-to-end management of CSR projects with measurable impact and regular reporting."
              },
              {
                icon: icon2,
                title: "Monitoring & Reporting",
                description: "Comprehensive tracking and transparent reporting of project outcomes and impact."
              },
              {
                icon: icon3,
                title: "Sustainable Development",
                description: "Initiatives aligned with UN Sustainable Development Goals for lasting change."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white px-5 sm:px-6 md:px-8 py-6 rounded-2xl hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center border border-gray-100">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
