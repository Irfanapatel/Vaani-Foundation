import heroImage from '../assets/health/herosection.jpg';
import { Timeline } from '../components/ui/timeline';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import healthCamp1 from '../assets/health/health-camp1.png';
import healthCamp2 from '../assets/health/health-camp2.png';
import healthCamp3 from '../assets/health/health-camp3.png';
import healthCamp4 from '../assets/health/health-camp4.png'
import nutrition1 from '../assets/health/nuitrition1.jpeg';
import nutrition2 from '../assets/health/nuitrition2.jpeg';
import nutrition3 from '../assets/health/nuitrition3.jpeg';
import nutrition4 from '../assets/health/nuitrition4.jpeg';

function HealthHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <img
          src={heroImage}
          alt="Healthcare services banner"
          className="absolute inset-0 h-full w-full object-contain object-center bg-white"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>
    </section>
  );
}

export default function HealthServices() {
  return (
    <div className="bg-white min-h-screen">
      <HealthHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main health services content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          LET US BUILD A HEALTHIER COMMUNITY, TOGETHER
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600">
          Join Our Mission to Strengthen Community Health, Nutrition, and Wellness Across Rural and Underserved Areas
        </h2>
          <p className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
           Vaani Foundation is dedicated to advancing community health by supporting Primary Health Centres (PHCs), Anganwadis, and rural households through need-based interventions. We work to ensure that individuals from all age groups—children, women, and elderly citizens—receive access to essential health services, nutritional support, and preventive care.
           </p>

             {/* Green Box Section */}
          <div className="bg-sky-100 rounded-lg p-6 sm:p-8 md:p-10 my-8 sm:my-10 md:my-12 max-w-5xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-sky-600 mb-3 sm:mb-4">
              Our Thematic Goal
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
              No person should face illness or loss due to lack of basic care.
              Essential services must be accessible, equitable, and reliable for all.
            </p>
          </div>
      </section>

      {/* Project Timeline Section */}
      <section className="w-full bg-white">
        <Timeline
        title='Our Holistic Approach to Community Health'
          data={[
            {
              title: "Essential Medical Support & Care Initiative",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[healthCamp1, healthCamp2, healthCamp3,healthCamp4].map((img, idx) => (
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
                        Provided hospital beds and essential medical equipment to support patients in Primary Health Centres (PHCs) and rural health facilities.
                        </p>
                      <p>
                        Improved access to basic healthcare for individuals from underserved and low-income communities.
                        </p>
                      <p>
                        Enhanced patient comfort, safety, and dignity by ensuring availability of proper resting and treatment arrangements.
                        </p>
                      <p>
                       Supported health centres that face shortages in medical infrastructure, strengthening their ability to serve the community.
                       </p>
                       <p>
                        Promoted equitable healthcare access so that no individual is deprived of necessary care due to lack of resources.
                       </p>
                       <p>
                        Reinforced community trust in local health services by providing timely support and essential care tools.
                       </p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Digital Transformation for Primary Health Centres",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[nutrition1, nutrition2, nutrition3, nutrition4].map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                        <img
                          src={img}
                          alt={`Nutrition program ${idx + 1}`}
                          className="w-full h-auto max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Digitalizing Healthcare</h4>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      <p>
                       Developed a dedicated digital software system for Primary Health Centres (PHCs) to replace traditional paper-based record keeping.
                       </p>
                      <p>
                        Streamlined the daily workflow for doctors, nurses, and lab technicians by enabling fast and efficient data entry and updates.This has improved coordination among medical staff and strengthened overall service delivery.
                      </p>
                      <p>
                        Reduced patient waiting times by digitizing registration, consultation flow, and lab reporting processes. With faster movement of cases, PHCs can now serve more patients each day with greater efficiency.
                      </p>
                      <p>
                        Improved the reliability and effectiveness of PHCs by minimizing manual workload and operational delays. The digital system ensures smoother, more organized patient handling and quicker diagnosis.
                      </p>
                      <p>
                      Enhanced transparency, accountability, and monitoring of health services with real-time digital records. This upgrade contributes to consistent, high-quality healthcare for the entire community.
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
  );
}