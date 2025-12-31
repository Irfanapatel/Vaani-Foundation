import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="vf-footer">
      <div className="vf-footer-container">
        {/* About */}
        <div className="vf-footer-col">
          <h4>Vaani Foundation</h4>
          <p>
            Vaani Foundation is a non-profit organization committed to empowering
            underprivileged communities through education, health, environment,
            women empowerment, and livelihood initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div className="vf-footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/donate">Donate Now</Link></li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div className="vf-footer-col">
          <h4>Our Focus Areas</h4>
          <ul>
            <li>Education</li>
            <li>Healthcare</li>
            <li>Environment</li>
            <li>Women Empowerment</li>
            <li>Livelihood</li>
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
