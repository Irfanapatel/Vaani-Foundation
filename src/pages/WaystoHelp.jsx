import heroImage from '../assets/Overview.jpg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

function WaysToHelpHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <img
          src={heroImage}
          alt="Ways to Help"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Ways You Can Help
          </h1>
        </div>
      </div>
    </section>
  );
}

const WaysToHelp = () => {
  return (
    <div className="bg-white min-h-screen">
      <WaysToHelpHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Make a Difference Today</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            There are many ways you can support our mission and help create positive change in our community.
          </p>
        </div>
        
        {/* Ways to Help Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Donate Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl text-blue-600">₹</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Donate</h3>
              <p className="text-gray-600 mb-4">Your financial support helps us continue our programs and reach more people in need.</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Donate Now
              </button>
            </div>
          </div>
          
          {/* Volunteer Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl text-green-600">👐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Volunteer</h3>
              <p className="text-gray-600 mb-4">Share your time and skills to make a direct impact in your community.</p>
              <a href="/get-involved/Volunteer" className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                Volunteer Now
              </a>
            </div>
          </div>
          
          {/* Fundraise Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl text-purple-600">🎗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fundraise</h3>
              <p className="text-gray-600 mb-4">Start your own fundraiser and encourage others to support our cause.</p>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Start Fundraising
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaysToHelp;