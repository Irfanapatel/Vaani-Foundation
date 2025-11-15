import React, { useState } from 'react';

function PinkBox() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="w-full bg-sky-100 py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-sky-600 mb-8">
          VAANI FOUNDATION - Hope in Action
        </h2>
        <div className="space-y-6 text-lg text-gray-700 mb-6 text-justify">
          {/* First 3 paragraphs always visible */}
          <p>
            At Vaani Foundation, we believe that compassion, community and collaboration are the roots of lasting change. Established in 2023 in Bharuch, Gujarat, Vaani Foundation is a non-governmental organization dedicated to empowering underprivileged and rural communities. Our mission is simple yet powerful — to uplift lives through education, healthcare, environmental sustainability and social welfare initiatives that create long-term measurable impact.
          </p>
          <p>
            We started with a small vision — to reach people who are often unheard and unseen. Over time, that vision grew into a movement of hope, connecting hundreds of individuals, families and villages through purposeful action. At the heart of every project we take up lies a belief: real progress happens only when communities take part in shaping their own future.
          </p>
          <p>
            Since our inception, we have been working across Gujarat to bridge gaps in education, health and livelihood opportunities. We have implemented several community-based projects that respond to local needs and ensure sustainable benefits. From installing rainwater harvesting systems that bring relief to water-scarce regions, to introducing solar and high-mast lighting systems that illuminate public spaces and improve safety — every initiative is a step toward resilience and empowerment.
          </p>
          
          {/* Additional paragraphs that can be toggled */}
          {isExpanded && (
            <>
              <p>
                When the world came to a standstill during the COVID-19 pandemic, Vaani Foundation stood firm with its communities. We distributed food kits, safety supplies, and essential aid to families in rural and semi-urban areas who were struggling to survive the crisis. Our volunteers worked tirelessly, reaching door to door to ensure that no one went hungry or unprotected during those uncertain days.
              </p>
              
              <p>
                Beyond emergencies, we continue to nurture long-term development. Our Smart PHC (Primary Health Centre) projects have helped transform rural healthcare by improving infrastructure, introducing digital tools, and ensuring that people have better access to medical support close to their homes. Similarly, we have installed RO plants and water coolers in schools and public areas to ensure that children and communities have access to clean and safe drinking water.
              </p>
              
              <p>
                Vaani Foundation also recognizes that the journey of empowerment begins with education. Through our uniform and sweater distribution drives, we have helped children from low-income families attend school with pride and comfort. We have also conducted book donation campaigns, bringing learning materials and storybooks to children in villages, nurturing curiosity and the love of learning.
              </p>
              
              <p>
                For farmers, we have extended our support through the distribution of biofertilizers and biyarant kits, promoting sustainable agricultural practices that protect the environment while improving crop yields. By helping farmers adopt eco-friendly solutions, we are contributing to both rural prosperity and ecological balance.
              </p>
              
              <p>
                Environmental conservation is another pillar of our work. Through mass tree plantation drives, we have planted thousands of trees across rural areas, schools and public lands. These efforts not only restore greenery but also raise awareness about climate change and the importance of protecting our planet for future generations.
              </p>
              
              <p>
                Our journey is built on trust, transparency and partnerships. We collaborate closely with corporate CSR partners, government bodies and local institutions, aligning every project with the needs of the community and the Sustainable Development Goals (SDGs). Every initiative we take up is designed to be community-led, measurable and sustainable, ensuring that the benefits continue long after the project's completion.
              </p>
              
              <p>
                What truly defines Vaani Foundation is the spirit of togetherness. We don't just implement projects — we build relationships, foster participation and inspire people to take charge of their own growth. Whether it's empowering a farmer to adopt sustainable farming, a woman to lead a community initiative or a child to dream beyond limitations — we believe that change begins with one inspired heart and spreads across many.
              </p>
            </>
          )}
        </div>
        <div className="mt-8">
          <button 
            onClick={toggleExpand}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PinkBox;
