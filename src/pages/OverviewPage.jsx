import React, { useEffect } from 'react';
import { Navbar } from "../components/Layout/Navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Import the image from assets
import overviewImage from '../assets/Overview.jpg';

// Log the image import
console.log('Image import result:', {
  overviewImage, 
  exists: !!overviewImage,
  type: typeof overviewImage,
  stringified: JSON.stringify(overviewImage)
});

const OverviewPage = () => {
  useEffect(() => {
    // Log when component mounts
    console.log('OverviewPage mounted');
    return () => console.log('OverviewPage unmounted');
  }, []);

  const handleImageError = (e) => {
    console.error('Image error details:', {
      error: e,
      target: e.target,
      src: e.target.src,
      naturalWidth: e.target.naturalWidth,
      naturalHeight: e.target.naturalHeight,
      complete: e.target.complete
    });
    console.log('Using fallback image');
    e.target.src = 'https://via.placeholder.com/1920x500/F3F4F6/6B7280?text=Vaani+Foundation+Overview';
  };

  console.log('Rendering OverviewPage with image:', overviewImage);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header>
        <Navbar />
      </header>
      
      <main className="grow">
        <div className="relative w-full" style={{ height: '70vh', minHeight: '600px' }}>
          <div style={{ 
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}>
            <img
              src={overviewImage}
              alt="Overview of Vaani Foundation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1
              }}
              onError={handleImageError}
              onLoad={(e) => {
                console.log('Image loaded successfully:', {
                  src: e.target.src,
                  naturalWidth: e.target.naturalWidth,
                  naturalHeight: e.target.naturalHeight,
                  computedStyle: window.getComputedStyle(e.target)
                });
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10 z-10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
          </div>
        </div>

        {/* Story Section */}
        <div className="w-full bg-white py-12">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-lg text-gray-700 text-justify pr-8">
                <p>
                  Vaani Foundation is a Bharuch-based non-governmental organization (NGO) dedicated to creating meaningful and sustainable social change across rural and underprivileged communities in Gujarat. Established in 2023, the foundation works with a holistic approach that combines compassion, innovation, and community participation to drive long-term development.
                </p>
                <p>
                  Our initiatives span across education, health, environment, water conservation, women empowerment, livelihood, and rural infrastructure — all designed to empower people and strengthen communities from the ground up.
                </p>
                <p>
                  Vaani Foundation believes in partnership-driven progress. By collaborating with corporate CSR partners, government bodies, and local institutions, we design and implement projects that create measurable and lasting impact.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl h-full shadow-lg border border-white/30 ml-4">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-blue-600">2023</h3>
          <p className="mt-2 text-gray-700 font-medium">Year of Establishment</p>
        </div>
                 <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-blue-600">10+</h3>
          <p className="mt-2 text-gray-700 font-medium">Communities Reached</p>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-blue-600">20+</h3>
          <p className="mt-2 text-gray-700 font-medium">Projects Completed</p>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition">
          <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
          <p className="mt-2 text-gray-700 font-medium">Lives Impacted</p>
        </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Theory of Change */}
        <div className="py-12 md:py-16 bg-white w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Theory of Change</h2>
              <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
                The work we do at Vaani Foundation is guided by a clear approach to community-led development. Each principle reflects our commitment to creating meaningful, scalable, and sustainable change at the ground level.
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-sm p-8 rounded-2xl shadow-inner">
                <div className="absolute inset-0 bg-grid-blue-200/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))] rounded-2xl"></div>
                <div className="relative z-10">
                  <InfiniteMovingCards
                    colors={[
                      'from-blue-100 to-blue-200',
                      'from-green-100 to-green-200',
                      'from-purple-100 to-purple-200',
                      'from-amber-100 to-amber-200',
                      'from-pink-100 to-pink-200',
                      'from-teal-100 to-teal-200'
                    ]}
                    items={[
                      {
                        name: "Needs Assessment",
                        heading: "Deliver Transformative Impact at Scale",
                        quote: "We design practical and community-focused models that can be expanded across multiple villages. Through research, local insights and efficient execution, we ensure every initiative creates long-term measurable impact.",
                        title: "🔍"
                      },
                      {
                        name: "Program Design",
                        heading: "Build Meaningful & Strategic Partnerships",
                        quote: "We involve women, youth, farmers, and vulnerable groups in planning and decision-making. By promoting participation and awareness, we ensure every solution reflects real community needs.",
                        title: "🤝"
                      },
                      {
                        name: "Community Engagement",
                        heading: "Strengthen Community Voices & Participation",
                        quote: "We involve women, youth, farmers, and vulnerable groups in planning and decision-making. By promoting participation and awareness, we ensure every solution reflects real community needs.",
                        title: "🤝"
                      },
                      {
                        name: "Implementation",
                        heading: "Innovate for Sustainable Futures",
                        quote: "We adopt practical and future-ready solutions — from digital tools to sustainable livelihood models. Our focus is on innovations that are simple, affordable, and capable of building long-term resilience.",
                        title: "🚀"
                      },
                      {
                        name: "Impact Evaluation",
                        heading: "Ensure Accountability & Transparent Governance",
                        quote: "We maintain strong monitoring, reporting, and impact tracking processes. This transparent approach builds trust and ensures clarity at every stage of project implementation.",
                        title: "📊"
                      },
                      {
                        name: "Scaling & Replication",
                        heading: "Promote Sustainability Through Capacity Building",
                        quote: "We train local volunteers, strengthen groups, and support emerging leaders in rural communities. This enables villages to sustain progress independently and continue driving their own development.",
                        title: "🌱"
                      }
                    ]}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                    className="py-12"
                    cardClassName="w-[320px] h-[380px] md:w-[380px] md:h-[420px] p-8 rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    contentClassName="px-4"
                    titleClassName="text-5xl mb-4"
                    nameClassName="text-blue-600 font-semibold"
                    quoteClassName="text-gray-700 dark:text-gray-300 text-justify"
                    headingClassName="text-xl font-bold text-gray-800 mb-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;