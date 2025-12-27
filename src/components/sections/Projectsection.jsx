import React from 'react';

// Import images directly
import educationImg from '../../assets/projectsection/EDUCATION.JPG';
import healthImg from '../../assets/projectsection/HEALTH.png';
import environmentImg from '../../assets/projectsection/ENVIRONMENT.PNG';
import herPowerImg from '../../assets/projectsection/HER POWER.jpg';
import livelihoodImg from '../../assets/PROJECTSECTION/LIVELIHOOD.png';

export default function Projectsection({ activeField = 'EDUCATION', bgColor = 'bg-gray-50' }) {
  // Map of image imports
  const imageMap = {
    'EDUCATION.PNG': educationImg,
    'HEALTH.PNG': healthImg,
    'ENVIRONMENT.PNG': environmentImg,
    'HER POWER.jpg': herPowerImg,
    'LIVELIHOOD.PNG': livelihoodImg
  };

  // Data for each field
  const fieldData = {
    EDUCATION: {
      image: "EDUCATION.PNG",
      title: "Spreading Knowledge and Opportunities",
      description: "At Vaani Foundation, we believe that education is the bridge to equality and empowerment. Our initiatives aim to remove barriers for rural and underprivileged children through uniform and book distribution drives, digital learning installations in Anganwadis, and school infrastructure enhancement. By combining compassion with innovation, we create opportunities for every child to learn with dignity, confidence, and curiosity. Each effort strengthens the foundation of an educated, self-reliant generation that will lead tomorrow's change.",
      bgColor: "#E3F2FD", // Light blue
      textColor: "text-blue-900",
      buttonColor: "bg-blue-700 hover:bg-blue-800"
    },
    HEALTH: {
      image: "HEALTH.PNG",
      title: "Care for Every Family",
      description: "Health is the true wealth of a community. Through our Smart PHC program, health awareness campaigns, and medical resource support, we work to make healthcare accessible, affordable, and compassionate in rural Gujarat. Our interventions extend from equipping health centers with modern facilities to conducting community check-ups and emergency assistance. During the COVID-19 pandemic, our foundation stood with families in distress by distributing food, hygiene kits, and safety essentials, ensuring that no one was left behind.",
      bgColor: "#CAF0F8", // Very light blue
      textColor: "text-cyan-800",
      buttonColor: "bg-cyan-700 hover:bg-cyan-800"
    },
    ENVIRONMENT: {
      image: "ENVIRONMENT.PNG",
      title: "Protecting Nature for Future Generations",
      description: "Sustainability lies at the heart of everything we do. Vaani Foundation's environmental efforts focus on rainwater harvesting, solar energy promotion, and tree plantation drives that help restore the ecological balance. Our Catch the Rain and Green Future programs have revitalized groundwater levels, created green corridors, and educated communities on climate resilience. Each tree we plant, each drop we conserve, and each solar light we install is a step toward a cleaner, greener, and healthier planet.",
      bgColor: "#C7E9C0", // Light teal
      textColor: "text-green-800",
      buttonColor: "bg-green-700 hover:bg-green-800"
    },
    'HER POWER': {
      image: "HER POWER.jpg",
      title: "Strengthening Women for a Better Tomorrow",
      description: "When women rise, communities transform. Vaani Foundation champions skill development, leadership, and livelihood opportunities for women through training sessions, workshops, and support for self-help groups. We encourage women to take part in decision-making, entrepreneurship, and sustainable initiatives that bring both economic and social progress. Our programs aim not just to support women but to make them catalysts of growth — turning potential into power, and dreams into reality.",
      bgColor: "#FDF2F8", // Light pink
      textColor: "text-pink-700",
      buttonColor: "bg-pink-500 hover:bg-pink-600"
    },
    LIVELIHOOD: {
      image: "LIVELIHOOD.PNG",
      title: "Creating Jobs and Building Stability",
      description: "Our livelihood initiatives focus on sustainable rural development and income generation. Through biyarant kit distribution, biofertilizer support, and skill-based training, we help farmers and rural youth achieve financial stability. We integrate livelihood creation with environmental consciousness — promoting green technologies, solar lighting, and water conservation. By building capacity and community ownership, we ensure that progress is not temporary, but a continuous journey toward dignity and self-reliance.",
      bgColor: "#F0F4E8", // Lighter, more neutral background
      textColor: "text-green-900", // Darker green for better contrast
      buttonColor: "bg-green-700 hover:bg-green-800" // Matching green button
    }
  };

  const data = fieldData[activeField] || fieldData.EDUCATION;
  const imageSrc = imageMap[data.image] || `https://via.placeholder.com/800x600/F3F4F6/6B7280?text=${data.title}`;

  return (
    <section className="pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-14 lg:pb-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-4 sm:p-6 md:p-8" style={{ backgroundColor: data.bgColor }}>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={imageSrc}
                alt={data.title}
                className="w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/F3F4F6/6B7280?text=${data.title}`;
                  console.error(`Failed to load image: ${data.image}`);
                }}
              />
            </div>

            {/* Right Column - Content */}
            <div className="w-full lg:w-1/2">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 ${data.textColor}`}>
                {data.title}
              </h2>
              <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${data.textColor.replace('text-', 'text-opacity-80 text-')}`}>
                {data.description}
              </p>
              <button 
                className={`${data.buttonColor} text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-colors w-full sm:w-auto text-sm sm:text-base`}
              >
                KNOW MORE
              </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};