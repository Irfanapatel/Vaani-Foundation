import { Heart, Handshake, Lightbulb, Users, Megaphone, Share2, MessageCircle } from 'lucide-react';
import heroImage from '../assets/Overview.jpg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

// Helper component for consistent card styling
const HelpCard = ({ title, description, icon: Icon, ctaText, ctaLink = '#' }) => {
  return (
    <div className="group relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-6">
          <div className="text-blue-500">
            <Icon className="w-12 h-12 mx-auto" />
          </div>
        </div>
        
        {/* Title and description */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Read More button */}
        <a 
          href={ctaLink}
          className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
        >
          {ctaText}
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

function WaysToHelpHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px] bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="relative w-full py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            WAYS TO HELP VAANI FOUNDATION
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-4xl mx-auto">
            Your support empowers communities, strengthens rural development, and creates sustainable change.
            Explore the different ways you can contribute to Vaani Foundation's mission and make a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}

const WaysToHelp = () => {
  const waysToHelp = [
    {
      title: 'MAKE A DONATION',
      description: 'Your financial contribution helps us implement projects in education, healthcare, rural development, environment protection, and women empowerment.',
      icon: Heart,
      ctaText: 'Donate Now',
      ctaLink: '/donate'
    },
    {
      title: 'CSR & CORPORATE PARTNERSHIPS',
      description: 'Partner with Vaani Foundation to implement impactful CSR initiatives aligned with Schedule VII activities including education, health, sanitation, renewable energy, and rural development.',
      icon: Handshake,
      ctaText: 'Partner With Us',
      ctaLink: '/partnerships'
    },
    {
      title: 'SPONSOR A PROJECT',
      description: 'Support specific projects such as solar street lights, rainwater harvesting, tree plantation drives, school infrastructure, or healthcare initiatives.',
      icon: Lightbulb,
      ctaText: 'View Projects',
      ctaLink: '/projects'
    },
    {
      title: 'VOLUNTEER',
      description: 'Become a changemaker by volunteering your time, skills, or expertise in fieldwork, awareness campaigns, training programs, or digital support.',
      icon: Users,
      ctaText: 'Join as Volunteer',
      ctaLink: '/volunteer'
    },
    {
      title: 'SUPPORT A CAMPAIGN',
      description: 'Join our campaigns focused on environmental sustainability, rural empowerment, education access, and public health awareness.',
      icon: Megaphone,
      ctaText: 'Explore Campaigns',
      ctaLink: '/campaigns'
    },
    {
      title: 'SPREAD THE WORD',
      description: 'Help us amplify our mission by sharing our work on social media, organizing local awareness programs, or connecting us with potential supporters.',
      icon: Share2,
      ctaText: 'Share Our Mission',
      ctaLink: '/share'
    }
  ];

  return (
    <div className="bg-gray-50">
      <WaysToHelpHero />
      
      <Breadcrumbs className="bg-white shadow-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            EXPLORE THE WAYS YOU CAN CREATE A LASTING IMPACT
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Every action—big or small—contributes to building stronger communities and a sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waysToHelp.map((way, index) => (
            <HelpCard
              key={index}
              title={way.title}
              description={way.description}
              icon={way.icon}
              ctaText={way.ctaText}
              ctaLink={way.ctaLink}
            />
          ))}
        </div>

        {/* Enhanced CTA Section - Extra Wide Card */}
        <div className="mt-20 relative overflow-hidden rounded-2xl p-8 md:p-12 bg-sky-50 border-2 border-sky-100 transform transition-all duration-300 hover:shadow-lg w-[calc(100%+4rem)] -mx-8 max-w-[1400px] mx-auto">
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">
              Together, We Can Create <span className="text-blue-600">Impact</span>
            </h3>
            <p className="text-lg text-sky-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your support makes our work possible. Choose how you'd like to contribute and be a part of our mission to create positive change.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a 
                href="/donate" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg flex items-center"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </a>
              <a 
                href="/volunteer" 
                className="px-8 py-3 bg-white text-blue-700 border-2 border-blue-200 rounded-lg hover:bg-blue-50 hover:scale-105 transform transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg flex items-center"
              >
                <Users className="w-4 h-4 mr-2" />
                Volunteer
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-sky-100 text-sky-800 border-2 border-sky-200 rounded-lg hover:bg-white hover:scale-105 transform transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToHelp;