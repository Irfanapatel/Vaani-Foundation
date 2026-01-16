import { useState } from 'react'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import logo from '../../assets/vaani foundation.png'
import { href } from 'react-router-dom'
import MovingBanner from '../ui/MovingBanner'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Track which dropdown (if any) is currently hovered
  const [hoveredDropdown, setHoveredDropdown] = useState(null)

  const navItems = [
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { name: 'Overview', href: '/about/overview' },
        { name: 'Mission & Vision', href: '/about/mission-vision' },
        { name: 'Our Team', href: '/about/our-team' },
      ]
    },
    { 
      name: 'What we do', 
      href: '/what-we-do',
      dropdown: [
        { name: 'Education & Learning', href: '/what-we-do/education' },
        { name: 'Community Health Services', href: '/what-we-do/healthservices'},
        { name: 'Women Empowerment & Livelihoods', href: '/what-we-do/womanempowerment'},
        { name: 'Environmental Sustainability', href: '/what-we-do/environment'},
        { name: 'Social Welfare & Community Support', href: '/what-we-do/youth'},
      ]
    },
    { name: 'Get Involved',
      href: '/get-involve',
      dropdown: [
        {name: 'Volunteer', href:'/get-involved/Volunteer'},
        {name: 'Ways to help', href: '/get-involved/waystohelp'},
        {name: 'Contact us', href: '/get-involved/contactus'},
        
      ]},
    { name: 'Certificates', href: '/certificates' }
  ]

  return (
    <div className="fixed w-full z-50">
      {/* Top blue banner with moving text */}
      <div className="bg-blue-700 text-white w-full h-10 flex items-center">
        <div className="w-full h-full relative">
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 pl-4 bg-blue-700 z-10">
            <a href="tel:+91 88666 85088" className="no-underline text-white/90 hover:text-white flex items-center gap-1.5 pr-3">
              <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="hidden sm:inline">+91 88666 85088</span>
            </a>
            <span className="mx-2 hidden sm:inline">|</span>
            <a href="mailto:info@vaanifoundation.org" className="no-underline text-white/90 hover:text-white flex items-center gap-1.5 pl-1">
              <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="hidden sm:inline">info@vaanifoundation.org</span>
            </a>
          </div>
          <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden">
            <MovingBanner text="Vaani Foundation is registered under sections 12A & 80G of the Income Tax Act, 1961 and CSR-1 registered under the Ministry of Corporate Affairs for undertaking CSR activities. <a href='/certificates' className='text-yellow-300 hover:text-yellow-200 font-medium underline'>click here</a> to visit all certificates" />
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center gap-2 no-underline">
              <img src={logo} alt="Vaani Foundation" className="h-8 lg:h-16 w-auto" />
              <span className="text-lg lg:text-3xl font-extrabold tracking-tight text-gray-900">Vaani Foundation</span>
            </a>
          </div>

          {/* Centered Navigation - hidden on mobile and iPad */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-8 flex-nowrap">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setHoveredDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setHoveredDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        setHoveredDropdown(hoveredDropdown === item.name ? null : item.name);
                      }
                    }}
                    className="no-underline text-gray-800 hover:text-blue-700 text-sm md:text-base font-semibold transition-colors whitespace-nowrap flex items-center gap-1 py-2 px-1 cursor-pointer"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className={`transition-transform duration-200 ${hoveredDropdown === item.name ? 'rotate-180' : ''}`} />}
                  </a>
                  
                    {item.dropdown && hoveredDropdown === item.name && (
                    <div className="absolute left-0 mt-0 w-56 bg-blue-100 shadow-lg rounded-md py-2 z-50 border border-blue-200">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-200 transition-colors duration-150"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right actions - hidden on mobile and iPad */}
          <div className="hidden lg:flex items-center justify-end gap-4">
            <a
              href="/donate"
              className="no-underline inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button and Donate Now - shown on both mobile and iPad */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/donate"
              className="no-underline inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Donate Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - shown on both mobile and iPad */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[5rem] left-0 right-0 bg-white border-b border-gray-200 shadow-sm py-4 px-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <a
                  href={item.href}
                  className="block py-2 no-underline text-gray-800 hover:text-blue-700 text-base font-semibold transition-colors"
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      // Toggle dropdown in mobile view
                      setHoveredDropdown(hoveredDropdown === item.name ? null : item.name);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-4 space-y-2 mt-1 bg-blue-100 rounded-md p-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-1.5 px-2 rounded text-gray-700 hover:bg-blue-200 hover:text-blue-800 text-sm font-medium transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-end pt-2">
              <a
                href="/donate"
                className="no-underline inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}