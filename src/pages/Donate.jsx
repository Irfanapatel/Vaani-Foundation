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
        <div className="bg-gray-50 py-10 px-4 sm:px-8 rounded-xl mt-0">
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
      <div className="bg-white py-12 sm:py-16 lg:py-20">
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
            
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-blue-700">CONTACT INFORMATION</h1>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                    FOR MORE INFORMATION
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Registered Office</h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <FaMapMarkerAlt className="mt-1 mr-3 shrink-0 text-blue-600" />
                          <span>Vaani Foundation<br />201, Second Floor, Datt krupa Complex, <br/> Opp. Tulsi Residency Malhar Road, <br/>Nr. Shravan Chokdi Bharuch<br />Gujarat-392001</span>
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Details</h3>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          For donation-related queries, please write to: <a href="mailto:info@vaanifoundation.org" className="text-blue-600 hover:underline">info@vaanifoundation.org</a><br />
                          or call: <a href="tel:+918866685088" className="text-blue-600 hover:underline">+91 8866685088</a> 
                        </p>
                        <p className="text-gray-600">
                          For all other queries: <a href="mailto:info@vaanifoundation.org" className="text-blue-600 hover:underline">info@vaanifoundation.org</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1AYHDGKc6V/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/vaanifoundation?igsh=ZWYxZjM2cmZzc3V3" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}