import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle } from 'react-icons/fa';
import heroImage from '../assets/Overview.jpg';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';

function VolunteerHero() {
  return (
    <section className="w-full flex justify-end overflow-hidden m-0 p-0 relative mt-[120px]">
      <div className="relative h-[35vh] sm:h-[40vh] md:h-[47vh] lg:h-[55vh] w-full">
        <img
          src={heroImage}
          alt="Volunteer with us"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Join Our Volunteer Community
          </h1>
        </div>
      </div>
    </section>
  );
}

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    interests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        interests: checked
          ? [...prevState.interests, value]
          : prevState.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Initialize EmailJS with your Public Key
      emailjs.init('WsDEH-G7687FGtBdq');
      
      // Send the email
      await emailjs.send(
        'service_w6jawbe', // Your EmailJS service ID
        'template_wf6fn8j', // Your template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          interests: formData.interests.join(', '),
          to_email: 'vaanifoundation2025@gmail.com'
        }
      );
      
      // On success
      setIsSuccess(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        interests: []
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setError('Failed to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white min-h-screen">
      <VolunteerHero />
      
      {/* Breadcrumbs below hero section */}
      <Breadcrumbs />

      {/* Main volunteer content section with CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-4 md:py-4">
        <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-black uppercase mb-4 text-center">
          MAKE A DIFFERENCE: VOLUNTEER WITH US
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600 uppercase">
          Join Our Mission to Create Positive Change
        </h2>

        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-center">
          <p>
            At Vaani Foundation, we believe that real change begins when individuals come together with a shared purpose. Our volunteers play a vital role in supporting community-focused initiatives across health, education, environment, social welfare, and youth engagement.
          </p>
          <p>
           By volunteering with us, you become part of a growing network of people who are passionate about serving society and addressing local needs through practical, on-ground action. Whether you are a student, working professional, or community member, your involvement helps strengthen our efforts and extend our reach.
          </p>
          <p>
            We welcome individuals who are willing to contribute their time, skills, and energy to support programs that promote well-being, sustainability, and inclusive development.
          </p>
          <div className="pt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fill up the Vaani Foundation volunteer registration form below to get started!
            </h2>
            <p className="text-gray-700 mb-2">
              Be a part of our mission to create lasting change in communities. Your time and skills can help us in our various initiatives across education, healthcare and social welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Registration Form */}
      <section id="volunteer-form" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700">VOLUNTEER REGISTRATION FORM</h1>
            <p className="mt-2 text-gray-600">
              Join our team of dedicated volunteers and make a difference in your community.
            </p>
          </div>
          
          <div className="bg-sky-50 rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                <FaCheckCircle className="mr-2" />
                Thank you for your interest in volunteering! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Address <span className="text-blue-600">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              {/* Areas of Interest */}
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest <span className="text-blue-600">*</span>
                </p>
                <div className="space-y-2">
                  {['Education', 'Healthcare', 'Environment', 'Social Welfare', 'Youth Development', 'Fundraising', 'Event Management'].map((interest) => (
                    <div key={interest} className="flex items-center">
                      <input
                        id={`interest-${interest.toLowerCase()}`}
                        name="interests"
                        type="checkbox"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 rounded-md focus:ring-opacity-50 transition duration-150 ease-in-out"
                      />
                      <label htmlFor={`interest-${interest.toLowerCase()}`} className="ml-2 block text-sm text-gray-700">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}