import React from 'react';

// Import all partner logos
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

const partners = [
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

const PartnersInChange = () => {
  // Duplicate the partners array to create a seamless loop
  const doublePartners = [...partners, ...partners];

  return (
    <section className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Partners in Change
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Together with our esteemed partners, we're making a difference in communities worldwide.
          </p>
        </div>

        {/* Desktop Marquee */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {doublePartners.map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="inline-flex items-center justify-center mx-8 h-24 w-40">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center h-24 p-2">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  );
};

export default PartnersInChange;
