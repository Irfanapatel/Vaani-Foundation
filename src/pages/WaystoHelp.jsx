import { Heart, Handshake, Lightbulb, Users, Megaphone, Share2, MessageCircle } from 'lucide-react';
import heroImage from '../assets/Overview.jpg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

// Helper component for consistent card styling with enhanced design
const HelpCard = ({ title, description, icon: Icon, ctaText, ctaLink = '#' }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 h-full flex flex-col">
      {/* Gradient accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 w-full"></div>
      
      <div className="p-8 flex-1 flex flex-col">
        {/* Icon with gradient background */}
        <div className="mb-6 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        
        {/* Title and description */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">
          {description}
        </p>
        
        {/* Animated CTA button */}
        <div className="mt-auto pt-4">
          <a 
            href={ctaLink}
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 text-sm font-medium group-hover:shadow-lg group-hover:shadow-blue-100"
          >
            {ctaText}
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
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
      ctaLink: '/get-involved/Volunteer'
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
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center">
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
                href="/get-involved/Volunteer" 
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