import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import heroImage from '../assets/woman-empowerment/herosection.jpeg';
import { Timeline } from '../components/ui/timeline';
import TrainingImg1 from '../assets/woman-empowerment/training1.jpeg';
import TrainingImg2 from '../assets/woman-empowerment/training 2.jpeg';
import TrainingImg3 from '../assets/woman-empowerment/training3.jpeg';
import TrainingImg4 from  '../assets/woman-empowerment/training4.jpeg';
import TrainingImg5 from '../assets/woman-empowerment/training5.jpeg';
import TrainingImg6 from '../assets/woman-empowerment/training6.jpeg';
import RakhiImg1 from '../assets/woman-empowerment/rakhi1.jpeg';
import RakhiImg2 from '../assets/woman-empowerment/rakhi2.jpeg';
import RakhiImg3 from '../assets/woman-empowerment/rakhi3.jpeg';
import RakhiImg4 from '../assets/woman-empowerment/rakhi4.jpeg';
import KitImg1 from '../assets/woman-empowerment/kit1.jpeg';
import KitImg2 from '../assets/woman-empowerment/kit2.jpeg';
import KitImg3 from '../assets/woman-empowerment/kit3.jpeg';
import KitImg4 from '../assets/woman-empowerment/kit4.jpeg';

function WomanEmpowermentHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
        <img
          src={heroImage}
          alt="Empowered women"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}

export default function WomanEmpowerment() {
  return (
    <div className="bg-white min-h-screen">
      <WomanEmpowermentHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 md:pt-6 pb-4 sm:pb-6 md:pb-8">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          WOMEN EMPOWERMENT: CREATING OPPORTUNITIES FOR GROWTH
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600 uppercase">
          EMPOWERING WOMEN TO BUILD BETTER FUTURES
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
          <p className="text-center">
            At Vaani Foundation, we believe that when a woman rises, an entire community rises with her. Women are the backbone of families, villages, and societies — yet many continue to face barriers to education, financial independence, skills, and decision-making power. Our mission is to break these barriers and create opportunities that enable women to stand with confidence, dignity, and economic freedom.
          </p>
          <p className="text-center">
            Through skill-development programs, income-generation activities, awareness drives, and leadership training, we support women in building sustainable livelihoods and transforming their lives. Our initiatives are designed not only to uplift individual women but to spark long-lasting change in households and communities.
          </p>
          
          {/* Add more content sections here as needed */}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full bg-gray-50 pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Do?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Development */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Skill Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing women with hands-on training in tailoring, handicrafts, digital literacy, and micro-enterprise skills to enhance employability and build sustainable income sources.
              </p>
            </div>

            {/* Financial Literacy */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Financial Literacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Equipping women with knowledge of budgeting, savings, microfinance, and small-business management to strengthen economic independence and support entrepreneurial growth.
              </p>
            </div>

            {/* Health & Wellness */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Health & Wellness</h3>
              <p className="text-gray-600 leading-relaxed">
                Building confidence and leadership among women through awareness sessions on rights, health, governance, and VPRP training, enabling active participation in community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment Projects Timeline */}
      <section className="w-full bg-white">
        <Timeline
        title=' Our Women Empowerment Initiatives'
          data={[
             {
                          title: "Women Livelihood Development Program",
                          content: (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[TrainingImg1, TrainingImg2, TrainingImg3, TrainingImg4, TrainingImg5, TrainingImg6].map((img, idx) => (
                                  <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                                    <img
                                      src={img}
                                      alt={`Sweater distribution ${idx + 1}`}
                                      className="w-full h-48 sm:h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                ))}
                              </div>
                              <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                These livelihood training initiatives were implemented with the support of DRDA Bharuch under its rural development program.
                                </p>
                                <h4 className="text-xl md:text-1xl font-bold text-gray-900">Tailoring & Handicraft Training</h4>
                                <p className="text-gray-700 leading-relaxed">
                                This training equips women with essential skills in stitching, embroidery, and basic garment making. Many participants have used these skills to start home‑based tailoring work or secure employment in local units, helping them achieve financial independence.
                                </p>
                                <h4 className="text-xl md:text-1xl font-bold text-gray-900">CRP Agriculture & Livestock Training</h4>
                                <p className="text-gray-700 leading-relaxed">
                                Women were trained as Community Resource Persons (CRPs) to support farming and livestock practices in their communities. The sessions covered improved agriculture techniques, animal care, and field demonstrations, enabling women to guide and assist other households in their villages.
                                </p>
                                <h4 className="text-xl md:text-1xl font-bold text-gray-900">VPRP Capacity Building</h4>
                                <p className="text-gray-700 leading-relaxed">
                               Women leaders received training to prepare and present Village Poverty Reduction Plans (VPRP). The program strengthened their abilities in planning, facilitation, and community engagement, encouraging them to take active roles in local governance and development processes.
                               </p>
                                <h4 className="text-xl md:text-1xl font-bold text-gray-900">Producer Group (PG) Training</h4>
                                <p className="text-gray-700 leading-relaxed">
                                This training supported women involved in producer groups by enhancing their skills in business planning, marketing, and collective enterprise. The program helps women work together, access better markets, and increase their income through organized group activities.
                                </p>
                              </div>
                            </div>
                          ),
                        },
           {
                         title: "Rakhi Mela: Celebrating Women’s Entrepreneurship",
                         content: (
                           <div className="space-y-6">
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                               {[RakhiImg1, RakhiImg2, RakhiImg3, RakhiImg4].map((img, idx) => (
                                 <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                                   <img
                                     src={img}
                                     alt={`Rakhi Mela ${idx + 1}`}
                                     className="w-full h-auto max-h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                 </div>
                               ))}
                             </div>
                             <div className="space-y-4">
                               <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Festival Stall Support</h4>
                               <p className="text-gray-700 leading-relaxed">
                                 Organized a Rakhi Mela in collaboration with the District Rural Development Agency (DRDA) to provide women with a dedicated platform to showcase and sell their handmade rakhis.
                                 </p>
                                 <p className="text-gray-700 leading-relaxed">
                                 Supported women in setting up well-arranged stalls, ensuring they had the space, facilities, and visibility needed to attract customers.
                                 </p>
                                 <p className='text-gray-700 leading-relaxed'>
                                 Enabled women’s groups and self-help groups (SHGs) to directly engage with buyers, helping them earn independently and gain confidence in their entrepreneurial abilities.
                                 </p>
                                 <p className="text-gray-700 leading-relaxed">
                                   Contributed to strengthening livelihood opportunities for rural women by connecting their skills to real market demand and generating sustainable income during the festive season.
                                   </p>
                                 <p className="text-gray-700 leading-relaxed">
                                  Reinforced our commitment to promoting women’s economic independence and helping them build brighter, self-reliant futures.
                                  </p>
                             </div>
                           </div>
                         ),
                       },
                       {
                         title: "Seed Kit Distribution for Farmer Support",
                         content: (
                           <div className="space-y-6">
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                               {[KitImg1, KitImg2, KitImg3, KitImg4].map((img, idx) => (
                                 <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg group">
                                   <img
                                     src={img}
                                     alt={`Seed kit distribution ${idx + 1}`}
                                     className="w-full h-auto max-h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                 </div>
                               ))}
                             </div>
                             <div className="space-y-4">
                               <h4 className="text-xl md:text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Agricultural Input Support</h4>
                               <p className="text-gray-700 leading-relaxed">
                                 To strengthen rural livelihoods and support small-scale farmers, Vaani Foundation distributed Biyaran Kits to farmers in Netrang village. This initiative aimed to equip farmers with essential inputs needed for healthy crop production and improved agricultural outcomes.
                                 </p>
                                 <p className="text-gray-700 leading-relaxed">
                                 The kit included high-quality seeds suitable for local soil and climate conditions, helping farmers reduce input costs and begin the farming season with confidence.
Through this support, farmers were encouraged to adopt better cultivation practices, enhance productivity, and secure more stable income throughout the agricultural cycle.
</p>
                                 <p className='text-gray-700 leading-relaxed'>
                                 This initiative also contributed to promoting sustainable farming methods in rural communities, empowering farmers to become more resilient, self-reliant, and economically strengthened.
                                 </p>
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