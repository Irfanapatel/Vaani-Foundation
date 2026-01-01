import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, ChevronDown, BookOpen, HeartPulse, Leaf, Users, Briefcase } from 'lucide-react';
import logo from '../../assets/vaani foundation.png';

const Footer = () => {
  return (
    <footer className="vf-footer">
      <div className="vf-footer-container">
        {/* Logo and About */}
        <div className="vf-footer-col logo-section">
          <div className="footer-logo">
            <img src={logo} alt="Vaani Foundation Logo" className="footer-logo-img" />
            <div className="logo-text">
              <h2>Vaani Foundation</h2>
              <p>Hope in Action</p>
            </div>
          </div>
          <p className="about-text">
            Vaani Foundation is a non-profit organization committed to empowering
            underprivileged communities through education, health, environment,
            women empowerment, and livelihood initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div className="vf-footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li className="relative group">
              <div className="flex items-center">
                <Link to="/about">About Us</Link>
                <ChevronDown size={16} className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute left-0 mt-1 w-48 bg-blue-900/95 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/about/overview" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Overview</Link>
                <Link to="/about/mission-vision" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Mission & Vision</Link>
                <Link to="/about/our-team" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Our Team</Link>
              </div>
            </li>
            <li className="relative group">
              <div className="flex items-center">
                <Link to="/what-we-do">What We Do</Link>
                <ChevronDown size={16} className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute left-0 mt-1 w-56 bg-blue-900/95 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/what-we-do/education" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Education & Learning</Link>
                <Link to="/what-we-do/healthservices" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Community Health Services</Link>
                <Link to="/what-we-do/womanempowerment" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Women Empowerment & Livelihoods</Link>
                <Link to="/what-we-do/environment" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Environmental Sustainability</Link>
                <Link to="/what-we-do/youth" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Social Welfare & Community Support</Link>
              </div>
            </li>
            <li className="relative group">
              <div className="flex items-center">
                <Link to="/get-involved">Get Involved</Link>
                <ChevronDown size={16} className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute left-0 mt-1 w-56 bg-blue-900/95 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/get-involved/volunteer" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Volunteer</Link>
                <Link to="/get-involved/waystohelp" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Ways to Help</Link>
                <Link to="/get-involved/contactus" className="block px-4 py-2 text-sm text-white hover:bg-blue-800/80 rounded">Contact Us</Link>
              </div>
            </li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/donate">Donate Now</Link></li>
          </ul>
        </div> 

        {/* Focus Areas */}
        <div className="vf-footer-col">
          <h4>Our Focus Areas</h4>
          <ul>
            <li className="flex items-center">
              <BookOpen size={16} className="mr-2" />
              <Link to="/what-we-do/education">Education</Link>
            </li>
            <li className="flex items-center">
              <HeartPulse size={16} className="mr-2" />
              <Link to="/what-we-do/healthservices">Healthcare</Link>
            </li>
            <li className="flex items-center">
              <Leaf size={16} className="mr-2" />
              <Link to="/what-we-do/environment">Environment</Link>
            </li>
            <li className="flex items-center">
              <Users size={16} className="mr-2" />
              <Link to="/what-we-do/womanempowerment">Women Empowerment</Link>
            </li>
            <li className="flex items-center">
              <Briefcase size={16} className="mr-2" />
              <Link to="/what-we-do/youth">Livelihood</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="vf-footer-col">
          <h4>Contact Us</h4>
          <p><strong>Registered Office:</strong><br />
            201, Second Floor, Datt Krupa Complex,<br />
            Opp. Tulsi Residency, Malhar Road,<br />
            Bharuch, Gujarat – 392001
          </p>
          <p className="mt-2">
            <Mail className="inline mr-1" size={16} /> info@vaanifoundation.org <br />
            <Phone className="inline mr-1" size={16} /> +91 88666 85088
          </p>

          {/* Social Icons */}
          <div className="vf-social">
            <a href="https://www.facebook.com/vaanifoundation" target="_blank" rel="noopener noreferrer" className="inline-block mr-2 hover:scale-110 transition-transform">
              <Facebook size={28} />
            </a>
            <a href="https://www.instagram.com/vaanifoundation" target="_blank" rel="noopener noreferrer" className="inline-block mr-2 hover:scale-110 transition-transform">
              <Instagram size={28} />
            </a>
            <a href="https://www.linkedin.com/company/vaanifoundation" target="_blank" rel="noopener noreferrer" className="inline-block mr-2 hover:scale-110 transition-transform">
              <Linkedin size={28} />
            </a>
            <a href="https://twitter.com/vaanifoundation" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="vf-footer-bottom">
        © {new Date().getFullYear()} Vaani Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
