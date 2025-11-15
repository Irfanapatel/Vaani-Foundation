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
        <div className="relative w-full" style={{ height: '80vh', minHeight: '600px' }}>
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
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Theory of Change</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-12"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we create lasting impact through strategic interventions and community empowerment
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full overflow-hidden">
                <InfiniteMovingCards
                  items={[
                    {
                      name: "Needs Assessment",
                      quote: "Identifying key challenges and opportunities within communities through comprehensive research and engagement.",
                      title: "🔍"
                    },
                    {
                      name: "Program Design",
                      quote: "Developing targeted interventions based on evidence-based practices and community input.",
                      title: "📋"
                    },
                    {
                      name: "Community Engagement",
                      quote: "Working collaboratively with local stakeholders to ensure ownership and sustainability.",
                      title: "🤝"
                    },
                    {
                      name: "Implementation",
                      quote: "Executing programs with measurable outcomes and continuous monitoring.",
                      title: "🚀"
                    },
                    {
                      name: "Impact Evaluation",
                      quote: "Assessing effectiveness and making data-driven improvements.",
                      title: "📊"
                    },
                    {
                      name: "Scaling & Replication",
                      quote: "Expanding successful models to reach more communities.",
                      title: "🌱"
                    }
                  ]}
                  direction="left"
                  speed="normal"
                  pauseOnHover={true}
                  className="py-12"
                  cardClassName="w-[320px] h-[340px] md:w-[380px] md:h-[380px]"
                  contentClassName="px-2"
                  titleClassName="text-5xl"
                  nameClassName="text-blue-600"
                  quoteClassName="text-gray-700 dark:text-gray-300"
                />
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Learn More About Our Approach
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default OverviewPage;