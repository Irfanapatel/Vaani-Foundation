import heroImage from '../assets/youth/herosection.jpeg';
import { useEffect, useState } from 'react';
import { Timeline } from '../components/ui/timeline';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import FoodImg1 from '../assets/youth/food1.jpeg';
import FoodImg2 from '../assets/youth/food2.jpeg';
import FoodImg3 from '../assets/youth/food3.jpeg';
import FoodImg4 from '../assets/youth/food4.jpeg';
import CricketImg1 from '../assets/youth/cricket1.png';
import CricketImg2 from '../assets/youth/cricket2.png';
import CricketImg3 from '../assets/youth/cricket3.png';
import CricketImg4 from '../assets/youth/cricket4.png';

function YouthHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
        <img
          src={heroImage}
          alt="Empowering Youth"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}

const Youth = () => {
  const initiatives = [
    {
      id: 1,
      title: "Community Well-Being Initiatives",
      overview: "Supporting activities that bring people together, promote physical well-being, and strengthen community engagement.",
      points: [
        "Organised youth-centric sports activities to encourage teamwork, confidence, and healthy lifestyles.",
        "Created opportunities for rural youth to participate in constructive recreational programs."
      ],
      icon: "🤝",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Humanitarian Relief & Support",
      overview: "Ensuring essential support reaches vulnerable families during challenging times.",
      points: [
        "Distributed nutritious food packets to families affected during the COVID period.",
        "Extended timely assistance to help communities manage uncertainty and maintain well-being."
      ],
      icon: "🫂",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "Community Development Outreach",
      overview: "Small yet meaningful initiatives aimed at improving quality of life within underserved areas.",
      points: [
        "Supported villages with need-based activities that uplift daily living conditions.",
        "Encouraged participation and collaboration to build stronger, more resilient communities."
      ],
      icon: "🌱",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <YouthHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          LET US BUILD A STRONGER, MORE CARING COMMUNITY, TOGETHER
          </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600">
          Join Our Mission to Support Communities Through Meaningful Engagement and Compassionate Initiatives
          </h2>
          <p className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
            At Vaani Foundation, we believe that collective well-being grows when communities come together to support one another. Through focused outreach programs, humanitarian activities, and inclusive engagement efforts, we work to uplift individuals and families during times of need.
          </p>
          <p className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
            Our initiatives aim to bring people closer, foster unity, and ensure that vulnerable groups receive essential assistance during difficult circumstances. Whether it is organizing local events that promote sports and youth development, or distributing food and necessities during crises, our goal is to strengthen community bonds and inspire a spirit of cooperation and resilience.
          </p>
      </section>

      {/* Cards Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.id}
              className={`${initiative.bgColor} rounded-xl p-8 border-l-4 ${initiative.borderColor} hover:shadow-lg transition-all duration-300 h-full`}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{initiative.title}</h3>
              
              <div className="mb-2">
                <p className="text-gray-600 mb-4 italic">{initiative.overview}</p>
                
                <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                <div className="space-y-3">
                  {initiative.points.map((point, index) => (
                    <div key={index} className="text-gray-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Timeline Section */}
                  <section className="w-full bg-white">
                    <Timeline
                      title="Community Well-Being & Social Impact Initiatives"
                      data={[
                        {
                          title: "Community Food Relief Support",
                          content: (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[FoodImg1, FoodImg2, FoodImg3, FoodImg4].map((img, idx) => (
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
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Supporting Families Through Food Relief</h4>
                                <div className="space-y-3 text-gray-700 leading-relaxed">
                                  <p>
                                   Vaani Foundation distributed essential food kits to families affected during the COVID-19 crisis, ensuring timely support for households facing income loss and food insecurity.
                                   </p>
                                  <p>
                                   With the help of volunteers, local partners, and community supporters, food packets containing nutritious essentials were delivered to vulnerable families, daily-wage earners, elderly individuals, and those with limited access to supplies during lockdowns.
                                   </p>
                                  <p>
                                 The initiative aimed to reduce hunger, provide immediate relief, and support families in maintaining basic nutrition during a period of severe hardship. By reaching remote and underserved areas, the foundation helped communities sustain themselves until normal livelihoods could gradually resume.
                                 </p>
                                  <p>
                                   Through these efforts, we contributed to improving food security, supporting health and well-being, and bringing much-needed stability to families during an unprecedented global crisis.
                                   </p>
                                </div>
                              </div>
                            </div>
                          ),
                        },
                        {
                          title: "Promoting Youth Engagement Through Sports",
                          content: (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[CricketImg1, CricketImg2, CricketImg3, CricketImg4].map((img, idx) => (
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
                                <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Empowering Youth Through Cricket Engagement</h4>
                                <div className="space-y-3 text-gray-700 leading-relaxed">
                                  <p>
                                   Vaani Foundation organized a cricket initiative aimed at encouraging physical fitness, teamwork, and positive community engagement among young individuals. This activity provided a platform for youth to participate in structured sports, helping them enhance discipline, build confidence, and develop leadership qualities through active participation.
                                   </p>
                                  <p>
                                   The program brought together students, local players, and community volunteers, fostering a healthy competitive spirit and strengthening social bonds. By promoting sports at the grassroots level, the initiative supported youth well-being, encouraged constructive use of time, and inspired them to stay active and motivated in their personal and academic lives.
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
};

export default Youth;