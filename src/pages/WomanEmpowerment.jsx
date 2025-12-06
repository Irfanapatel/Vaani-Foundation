import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/woman-empowerment/herosection.jpeg';
import { Timeline } from '../components/ui/timeline';

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
      
      {/* Main content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20">
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
      <section className="w-full bg-gray-50 py-8 sm:py-10 md:py-12">
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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-4 pb-8 md:pb-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Women Empowerment Initiatives
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Empowering women through skill development, financial independence, and health awareness programs
          </p>
        </div>
        <Timeline
          data={[
            {
              title: "Tailoring & Handicraft Training",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="relative overflow-hidden rounded-xl shadow-lg group h-48"
                      >
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">Tailoring Training {num}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Our tailoring and handicraft training program equips women with professional skills in garment making, embroidery, and traditional crafts. Over 200 women have graduated from this program, with many starting their own small businesses or finding employment in the textile industry.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-blue-600">500+</p>
                      <p className="text-sm text-gray-600">Women Trained</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">85%</p>
                      <p className="text-sm text-gray-600">Employment Rate</p>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: "Financial Literacy & Microfinance",
              content: (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="relative overflow-hidden rounded-xl shadow-lg group h-48"
                      >
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">Finance Workshop {num}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700">
                    Our financial literacy program teaches women essential money management skills, including savings, budgeting, and accessing microfinance options. We've helped establish over 50 self-help groups where women collectively save and support each other's entrepreneurial ventures.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-blue-600">1,200+</p>
                      <p className="text-sm text-gray-600">Women Empowered</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">₹25L+</p>
                      <p className="text-sm text-gray-600">In Micro-loans Disbursed</p>
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