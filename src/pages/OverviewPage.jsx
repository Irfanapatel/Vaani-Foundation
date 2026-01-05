import React, { useEffect } from 'react';
import { Navbar } from "../components/Layout/Navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import FlipCard from "@/components/ui/FlipCard";
import "../styles/flip-card.css";
import overviewImage from "../assets/Overview.jpg";
import educationImage from "../assets/journey/Education.png";
import healthImage from "../assets/journey/health.jpg";
import environmentImage from "../assets/journey/environment.png";
import cricketImage from "../assets/journey/cricket.png";
import solarImage from "../assets/journey/solar.png";
import trainingImage from "../assets/journey/training.jpg";
import { Globe, Handshake, Users, Lightbulb, SearchCheck, Leaf } from "lucide-react";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";

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
        <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] mt-[120px]">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={overviewImage}
              alt="Overview of Vaani Foundation"
              className="absolute inset-0 w-full h-full object-cover object-left"
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
        
        {/* Breadcrumbs below hero section */}
        <Breadcrumbs />

        {/* Story Section */}
        <div className="w-full bg-white pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-2 sm:pb-4 md:pb-6 lg:pb-8">
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
        <div className="pt-8 pb-8 sm:pt-4 sm:pb-4 md:pt-6 md:pb-6 lg:pt-8 lg:pb-4 bg-white w-full">
          <div className="w-full">
            <div className="text-center w-full px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-3 sm:mb-4 md:mb-6 lg:mb-8 uppercase">OUR THEORY OF CHANGE</h2>
              <p className="text-lg text-gray-600 max-w-7xl mx-auto leading-relaxed pb-4 sm:pb-6 md:pb-8 lg:pb-10">
                The work we do at Vaani Foundation is guided by a clear approach to community-led development. Each principle reflects our commitment to creating meaningful, scalable, and sustainable change at the ground level.
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-sm p-8 rounded-2xl shadow-inner max-w-[1650px] mx-auto">
                <div className="absolute inset-0 bg-grid-blue-200/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))] rounded-2xl"></div>
                <div className="relative z-10">
                  <InfiniteMovingCards
                    colors={[
                      'from-blue-50 to-blue-100',
                      'from-sky-100 to-blue-200',
                      'from-cyan-50 to-teal-100',
                      'from-indigo-50 to-indigo-200',
                      'from-violet-50 to-purple-200',
                      'from-slate-50 to-slate-200'
                    ]}
                    items={(() => {
                      const items = [
                        {
                          heading: "Deliver Transformative Impact at Scale",
                          quote: "We design practical and community-focused models that can be expanded across multiple villages. Through research, local insights and efficient execution, we ensure every initiative creates long-term measurable impact.",
                          icon: <Globe className="w-16 h-16 text-blue-600" />
                        },
                        {
                          heading: "Build Meaningful & Strategic Partnerships",
                          quote: "We collaborate with CSR partners, government bodies and local institutions to strengthen outreach and amplify results. These partnerships help combine resources, expertise, and trust for collective progress.",
                          icon: <Handshake className="w-16 h-16 text-blue-600" />
                        },
                        {
                          heading: "Strengthen Community Voices & Participation",
                          quote: "We involve women, youth, farmers, and vulnerable groups in planning and decision-making. By promoting participation and awareness, we ensure every solution reflects real community needs.",
                          icon: <Users className="w-16 h-16 text-blue-600" />
                        },
                        {
                          heading: "Innovate for Sustainable Futures",
                          quote: "We adopt practical and future-ready solutions — from digital tools to sustainable livelihood models. Our focus is on innovations that are simple, affordable, and capable of building long-term resilience.",
                          icon: <Lightbulb className="w-16 h-16 text-blue-600" />
                        },
                        {
                          heading: "Ensure Accountability & Transparent Governance",
                          quote: "We maintain strong monitoring, reporting, and impact tracking processes. This transparent approach builds trust and ensures clarity at every stage of project implementation.",
                          icon: <SearchCheck className="w-16 h-16 text-blue-600" />
                        },
                        {
                          heading: "Promote Sustainability Through Capacity Building",
                          quote: "We train local volunteers, strengthen groups, and support emerging leaders in rural communities. This enables villages to sustain progress independently and continue driving their own development.",
                          icon: <Leaf className="w-16 h-16 text-blue-600" />
                        }
                      ];
                      console.log('Carousel Items:', items);
                      return items;
                    })()}
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
        <OurJourney />
      </main>
    </div>
  );
};

const OurJourney = () => {
  const journeyData = [
    {
      title: "Bright Minds Initiative",
      description: "We support children with learning kits, books and essential school resources to keep their education journey active and strong.",
      bigNumber: "3,000+",
      bigNumberDescription: "Children have received educational support through Vaani Foundation.",
      image: educationImage,
      alt: "Vaani Foundation's education initiative in 2021",
      panelColor: "#f7cfd8",
      panelTextColor: "#3b0d16",
      buttonColor: "#8c1c32"
    },
    {
      title: "Smart Rural Health",
      description: "We support rural healthcare by supplying medical equipment and modern digital record tools to PHCs.",
      bigNumber: "3+",
      bigNumberDescription: "PHCs Digitized, Making healthcare quicker, smoother and more reliable for villages.",
      image: healthImage,
      alt: "Vaani Foundation's expansion in 2022",
      panelColor: "#fce3c9",
      panelTextColor: "#4b1d05",
      buttonColor: "#c05621"
    },
    {
      title: "Environment & Plantation",
      description: "We promote environmental care through plantation drives and eco-awareness activities.",
      bigNumber: "1,00,000+",
      bigNumberDescription: "Creating greener and cleaner rural landscapes.",
      image: environmentImage,
      alt: "Vaani Foundation's environmental initiatives in 2023",
      panelColor: "#e2f5e7",
      panelTextColor: "#0f3d1f",
      buttonColor: "#047857"
    },
    {
      title: "Solar & Energy Project",
      description: "We enable safe, sustainable, and cost-free lighting in rural communities through solar installations",
      bigNumber: "150+",
      bigNumberDescription: "solar street lights installed across villages, improving night-time safety and visibility.",
      image: solarImage,
      alt: "Vaani Foundation's solar power initiatives",
      panelColor: "#fff3c7",
      panelTextColor: "#4a3500",
      buttonColor: "#d97706"
    },
    {
      title: "She Leads, She Grows",
      description: "We empower rural women through specialized Krishi Sakhi and Pashu Sakhi training, helping them become skilled community resource persons in agriculture and livestock care.",
      bigNumber: "1,000+",
      bigNumberDescription: "Women trained in agriculture and livestock care.",
      image: trainingImage,
      alt: "Vaani Foundation's skills training programs",
      panelColor: "#dee8ff",
      panelTextColor: "#0a1c4a",
      buttonColor: "#1d4ed8"
    },
    {
      title: "Cricket for Confidence",
      description: "We promote sports participation among rural youth by providing cricket kits and organizing local tournaments.",
      bigNumber: "300+",
      bigNumberDescription: "young players involved in cricket activities that inspire teamwork and discipline.",
      image: cricketImage,
      alt: "Vaani Foundation's sports development programs",
      panelColor: "#ffe0ec",
      panelTextColor: "#4a102b",
      buttonColor: "#be185d"
    }
  ];

  return (
    <section className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-2 sm:pb-4 md:pb-6 lg:pb-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center uppercase">
          OUR JOURNEY IN THE LAST THREE YEARS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 max-w-[1600px] mx-auto px-6">
          {journeyData.map((item, index) => (
            <div key={index} className="w-full flex justify-center">
              <FlipCard
                title={item.title}
                description={item.description}
                bigNumber={item.bigNumber}
                bigNumberDescription={item.bigNumberDescription}
                imageSrc={item.image}
                altText={item.alt}
                panelColor={item.panelColor}
                panelTextColor={item.panelTextColor}
                buttonColor={item.buttonColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewPage;