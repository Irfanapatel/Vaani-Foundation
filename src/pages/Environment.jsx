import heroImage from '../assets/environment/herosection.png';
import { useEffect, useState } from 'react';
import { Timeline } from '../components/ui/timeline';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import PlaneImg1 from '../assets/environment/planatation1.jpeg';
import PlaneImng2 from '../assets/environment/planatation2.jpeg';
import PlaneImg3 from '../assets/environment/planatation3.jpeg';
import PlaneImg4 from '../assets/environment/planatation4.jpeg';

function EnvironmentHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
        <img
          src={heroImage}
          alt="Environment conservation"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const step = Math.ceil(target / (duration / 16)); // 60fps
    let current = 0;
    
    const counter = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(current);
      }
    }, 16);
    
    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
      <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function Environment() {
  return (
    <div className="bg-white min-h-screen">
      <EnvironmentHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main environment content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          LET US NURTURE A GREENER, HEALTHIER PLANET, TOGETHER
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600">
         Join Our Mission to Advance Environmental Sustainability Through Large-Scale Tree Plantation and Community Participation
        </h2>
        <p className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
         Vaani Foundation is committed to strengthening environmental sustainability by promoting large-scale tree plantation, biodiversity restoration, and green awareness across rural and semi-urban regions. Our efforts aim to reduce environmental degradation, enhance green cover, and build resilient ecosystems for future generations.
         </p>

         <p className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
          Over the years, we have conducted multiple plantation programs across villages, public spaces, schools, and community lands, encouraging active participation from local residents. Through these sustained efforts, we aim to create cleaner surroundings, support ecological balance, and foster a culture of environmental responsibility among future generations.
         </p>

        {/* Green Impact Box */}
        <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 shadow-sm border border-green-100 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
            Our Environmental Impact
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded text-center">
              <div className="text-3xl font-bold text-green-600">1,00,000+</div>
              <div className="text-gray-700">Trees Planted</div>
            </div>
            
            <div className="bg-white p-4 rounded text-center">
              <div className="text-3xl font-bold text-green-600">10+</div>
              <div className="text-gray-700">Villages</div>
            </div>
            
            <div className="bg-white p-4 rounded text-center">
              <div className="text-3xl font-bold text-green-600">10,000+</div>
              <div className="text-gray-700">Lives Touched</div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            Making a difference through sustainable environmental initiatives.
          </p>
        </div>

      </section>
      {/* Project Timeline Section */}
            <section className="w-full bg-white">
              <Timeline
              title='Our Key Environmental Initiatives'
                data={[
                  {
                    title: "Enhancing Green Cover Through Community Tree Plantation",
                    content: (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[PlaneImg1, PlaneImng2, PlaneImg3, PlaneImg4].map((img, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                              <img
                                src={img}
                                alt={`Health camp ${idx + 1}`}
                                className="w-full h-auto max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Strengthening Critical Care Access</h4>
                          <div className="space-y-3 text-gray-700 leading-relaxed">
                            <p>
                             Vaani Foundation, in collaboration with various corporate partners carried out multiple large-scale tree plantation initiatives to promote environmental sustainability across rural and semi-urban regions.
                             </p>
                            <p>
                              These plantation drives aimed to restore ecological balance by planting region-appropriate saplings that support biodiversity, improve soil quality, and contribute to cleaner air.
                              </p>
                            <p>
                            Our teams worked closely with volunteers, community members, and partner organizations to identify suitable areas, prepare plantation sites, and ensure proper post-plantation care for long-term growth.
                            </p>
                            <p>
                             Through these efforts, we supported the development of sustainable green spaces that enhance environmental quality, promote climate resilience, and foster a culture of environmental responsibility.
                             </p>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </section>
    </div>
  )
}