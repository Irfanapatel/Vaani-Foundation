import React from 'react';

const ImpactAtGlance = () => {
  const impactStats = [
    {
      number: '20+ LAC',
      label: 'CHILDREN & THEIR FAMILIES',
      description: 'are impacted every year',
      bgColor: 'bg-blue-50'
    },
    {
      number: '2000+',
      label: 'VILLAGES & SLUMS',
      description: 'are reached out to across the country',
      bgColor: 'bg-blue-100'
    },
    {
      number: '400+',
      label: 'PROJECTS',
      description: 'focused on education, healthcare, and women empowerment',
      bgColor: 'bg-blue-50'
    },
    {
      number: '27+',
      label: 'STATES',
      description: 'are reached including the remotest areas',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section className="w-full pb-10 md:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Impact at a Glance
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className={`${stat.bgColor} p-6 text-center rounded-lg shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <h3 className="text-3xl font-bold text-blue-700 mb-2">
                {stat.number}
              </h3>
              <p className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAtGlance;
