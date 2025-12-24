import { useState } from 'react';
import { Heart } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import donationImage from '../assets/donation.jpeg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import communityDevImg from '../assets/donate/community development.png';
import educationImg from '../assets/donate/education.png';
import sustainableImg from '../assets/donate/sustainable.png';
import transparentImg from '../assets/donate/transperant.png';
import upiImg from '../assets/donate/upi.jpg';
import gpayImg from '../assets/donate/gpay.jpg';
import phonepeImg from '../assets/donate/phonepay.jpg';
import paytmImg from '../assets/donate/paytm.jpg';
import visaImg from '../assets/donate/visa.png';

function DonateHero() {
  return (
    <section className="w-full m-0 p-0 relative mt-[120px] h-[50vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={donationImage}
          alt="Donate to Vaani Foundation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCustomAmount, setShowCustomAmount] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    amount: '',
    customAmount: '',
    purpose: '',
    pan: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Handle donation amount selection
  const handleAmountSelection = (amount) => {
    setShowCustomAmount(false);
    setDonationAmount(amount);
    setIsSuccess(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    const value = e.target.value ? parseInt(e.target.value) : '';
    setDonationAmount(value);
    if (value) {
      setIsSuccess(true);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'amount') {
      setShowCustomAmount(value === 'custom');
      if (value !== 'custom') {
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
          customAmount: ''
        }));
        return;
      }
    }
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Determine the amount to use (custom or selected)
      const donationAmount = formData.amount === 'custom' 
        ? formData.customAmount 
        : formData.amount;
      
      if (!donationAmount) {
        setError('Please enter a donation amount');
        return;
      }

      // Initialize EmailJS with your Public Key
      emailjs.init('WsDEH-G7687FGtBdq');
      
      // Send the email
      await emailjs.send(
        'service_w6jawbe',
        'template_1670uzr',
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.mobile,
          amount: `₹${donationAmount}`,
          purpose: formData.purpose,
          pan: formData.pan || 'Not provided',
          address: formData.address || 'Not provided',
          to_email: 'vaanifoundation2025@gmail.com'
        }
      );
      
      // On success
      setContactSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        amount: '',
        customAmount: '',
        purpose: '',
        pan: '',
        address: ''
      });
      setShowCustomAmount(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => setContactSuccess(false), 5000);
    } catch (err) {
      console.error('Form submission failed:', err);
      setError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <DonateHero />

      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main content section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          YOUR SUPPORT CAN MAKE A DIFFERENCE
        </p>

        <div className="pb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-blue-600 uppercase">
            WHY YOUR <span className="text-blue-600">DONATION</span> MATTERS
          </h2>

          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:overflow-hidden md:px-0 md:mx-0">
          {/* Community Development */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 shrink-0 w-[280px] md:w-auto md:shrink">
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 md:mb-4">
              <img src={communityDevImg} alt="Community Development" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-3 text-gray-800">Community Development</h3>
            <p className="text-sm md:text-base text-gray-600 text-center mt-auto">
              Your contribution helps us implement sustainable development projects that uplift entire communities and create lasting change.
            </p>
          </div>

          {/* Education Support */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 shrink-0 w-[280px] md:w-auto md:shrink">
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 md:mb-4">
              <img src={educationImg} alt="Education Support" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-3 text-gray-800">Education Support</h3>
            <p className="text-sm md:text-base text-gray-600 text-center mt-auto">
              Your donations provide educational resources, scholarships, and learning opportunities for underprivileged children and youth.
            </p>
          </div>

          {/* Sustainable Initiatives */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 shrink-0 w-[280px] md:w-auto md:shrink">
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 md:mb-4">
              <img src={sustainableImg} alt="Sustainable Initiatives" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-3 text-gray-800">Sustainable Initiatives</h3>
            <p className="text-sm md:text-base text-gray-600 text-center mt-auto">
              We invest in sustainable solutions that create long-term impact, ensuring your donation keeps giving for years to come.
            </p>
          </div>

          {/* Transparent Utilization */}
          <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 shrink-0 w-[280px] md:w-auto md:shrink">
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 md:mb-4">
              <img src={transparentImg} alt="Transparent Utilization" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2 md:mb-3 text-gray-800">Transparent Utilization</h3>
            <p className="text-sm md:text-base text-gray-600 text-center mt-auto">
              We maintain complete transparency in how funds are utilized, with regular reports on the impact of your donation.
            </p>
          </div>
        </div>
        </div>

        {/* Donation Amount Section */}
        <div className="bg-gray-50 py-6 px-4 sm:px-8 rounded-xl mt-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
              Choose Your Donation Amount
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[1000, 2000, 5000, 10000].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`py-3 px-6 rounded-lg border-2 text-center transition-colors text-sm sm:text-base w-32 ${
                    donationAmount === amount 
                      ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium' 
                      : 'border-gray-300 hover:border-blue-300'
                  }`}
                  onClick={() => handleAmountSelection(amount)}
                >
                  ₹{amount.toLocaleString('en-IN')}
                </button>
              ))}
              
              <button
                type="button"
                className={`py-3 px-6 rounded-lg border-2 text-center transition-colors text-sm sm:text-base w-32 ${
                  showCustomAmount
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                    : 'border-gray-300 hover:border-blue-300'
                }`}
                onClick={() => {
                  setShowCustomAmount(true);
                  setDonationAmount('');
                }}
              >
                Custom
              </button>
            </div>

            {showCustomAmount && (
              <div className="mb-8 transition-all duration-300">
                <div className="relative max-w-xs mx-auto">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    className="w-full pl-8 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amount"
                    value={donationAmount === '' ? '' : donationAmount}
                    onChange={handleCustomAmountChange}
                    autoFocus
                  />
                </div>
              </div>
            )}

            {isSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                Thank you for your generous donation of ₹{donationAmount.toLocaleString('en-IN')}!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="bg-white -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-sky-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-black">Dionation Form</h1>
              </div>
              
              {contactSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                  <FaCheckCircle className="mr-2" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number *"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  />
                </div>
                
                <div>
                  <select
                    name="amount"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  >
                    <option value="">Donation Amount *</option>
                    <option value="500">₹500</option>
                    <option value="1000">₹1,000</option>
                    <option value="2000">₹2,000</option>
                    <option value="5000">₹5,000</option>
                    <option value="custom">Custom Amount</option>
                  </select>
                </div>
                
                {formData.amount === 'custom' && (
                  <div>
                    <input
                      type="number"
                      name="customAmount"
                      placeholder="Enter custom amount *"
                      required
                      value={formData.customAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                    />
                  </div>
                )}
                
                <div>
                  <select
                    name="purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  >
                    <option value="">Purpose of Donation *</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Women Empowerment">Women Empowerment</option>
                    <option value="Rural Development">Rural Development</option>
                    <option value="Environment">Environment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="pan"
                    placeholder="PAN Number (Optional)"
                    value={formData.pan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address (Optional)"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg shadow-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </div>
                  ) : 'Proceed to Donate Securely'}
                </button>
                
                <div className="mt-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
                    {/* Top Security Row */}
                    <div className="flex flex-col items-center justify-center gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-green-600 font-semibold text-lg">
                          <span className="text-2xl">🔒</span> <span>100% Secure Gateway</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500">
                          <FaCheckCircle className="text-green-500 text-xl" />
                          <FaCheckCircle className="text-green-500 text-xl" />
                          <FaCheckCircle className="text-green-500 text-xl" />
                        </div>
                      </div>
                      <div className="w-3/4 h-0.5 bg-gray-200"></div>
                    </div>

                    {/* Payment Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
                      <img src={upiImg} alt="UPI" className="h-9 w-auto" />
                      <img src={gpayImg} alt="GPay" className="h-10 w-auto" />
                      <img src={phonepeImg} alt="PhonePe" className="h-10 w-auto" />
                      <img src={paytmImg} alt="Paytm" className="h-9 w-auto" />
                      <img src={visaImg} alt="Visa" className="h-9 w-auto" />
                    </div>

                    {/* Bottom Options */}
                    <div className="flex justify-center gap-12 text-lg font-medium text-gray-800 mt-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🏦</span> <span>Net Banking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💳</span> <span>Bank Transfer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Safe, Secure & Trusted NGO */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-black">Safe, Secure & Trusted NGO</h1>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Registered & compliant NGO</h3>
                        <p className="text-gray-600 mt-1">Fully registered and compliant with all regulatory requirements.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Transparent fund utilization</h3>
                        <p className="text-gray-600 mt-1">Complete transparency in how every rupee is utilized.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Proper documentation & reporting</h3>
                        <p className="text-gray-600 mt-1">Maintaining thorough records and regular impact reports.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Secure donation process</h3>
                        <p className="text-gray-600 mt-1">Your donations are processed through secure payment gateways.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Need Help?</h3>
                  <p className="text-gray-700 mb-4">For any donation-related queries, feel free to reach out to us.</p>
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              
              {/* Donation Quote */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <blockquote className="italic text-gray-700 text-center">
                  <p className="text-lg">"No one has ever become poor by giving."</p>
                  <footer className="mt-2 text-blue-600 font-medium">— Anne Frank</footer>
                </blockquote>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}