import { useState } from 'react';
import { Heart } from 'lucide-react';
import donationImage from '../assets/donation.jpeg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import communityDevImg from '../assets/donate/community development.png';
import educationImg from '../assets/donate/education.png';
import sustainableImg from '../assets/donate/sustainable.png';
import transparentImg from '../assets/donate/transperant.png';

function DonateHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <img
          src={donationImage}
          alt="Donate to Vaani Foundation"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

      </div>
    </section>
  );
}

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setDonationAmount('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      <DonateHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />
      
      {/* Why Your Donation Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Your <span className="text-blue-600">Donation</span> Matters
            </h2>
            <div className="mt-3 h-1.5 w-24 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-12">
            {/* Community Development */}
            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
              <div className="w-36 h-36 mx-auto mb-4">
                <img src={communityDevImg} alt="Community Development" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Community Development</h3>
              <p className="text-gray-600 text-center mt-auto">
                Your contribution helps us implement sustainable development projects that uplift entire communities and create lasting change.
              </p>
            </div>
            
            {/* Education Support */}
            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
              <div className="w-36 h-36 mx-auto mb-4">
                <img src={educationImg} alt="Education Support" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Education Support</h3>
              <p className="text-gray-600 text-center mt-auto">
                Your donations provide educational resources, scholarships, and learning opportunities for underprivileged children and youth.
              </p>
            </div>
            
            {/* Sustainable Initiatives */}
            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
              <div className="w-36 h-36 mx-auto mb-4">
                <img src={sustainableImg} alt="Sustainable Initiatives" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Sustainable Initiatives</h3>
              <p className="text-gray-600 text-center mt-auto">
                We invest in sustainable solutions that create long-term impact, ensuring your donation keeps giving for years to come.
              </p>
            </div>
            
            {/* Transparent Utilization */}
            <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
              <div className="w-36 h-36 mx-auto mb-4">
                <img src={transparentImg} alt="Transparent Utilization" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">Transparent Utilization</h3>
              <p className="text-gray-600 text-center mt-auto">
                We maintain complete transparency in how funds are utilized, with regular reports on the impact of your donation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}