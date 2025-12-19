import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../../assets/vaani foundation.png'
import { href } from 'react-router-dom'

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
    { name: 'Certificates', href: '#' }
  ]

  return (
    <div className="fixed w-full z-50">
      {/* Top blue banner */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-end text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+910000000000" className="no-underline text-white/90 hover:text-white">+91 00000 00000</a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:info@vaanifoundation.org" className="no-underline text-white/90 hover:text-white">info@vaanifoundation.org</a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3 no-underline">
              <img src={logo} alt="Vaani Foundation" className="h-14 md:h-16 w-auto" />
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">Vaani Foundation</span>
            </a>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex items-center justify-center">
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
                    className="no-underline text-gray-800 hover:text-blue-700 text-sm md:text-base font-semibold transition-colors whitespace-nowrap flex items-center gap-1 py-2 px-1"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />}
                  </a>
                  
                    {item.dropdown && hoveredDropdown === item.name && (
                    <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

          {/* Right actions */}
          <div className="hidden md:flex items-center justify-end gap-4">
            <a
              href="/donate"
              className="no-underline inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-end md:hidden">
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[5rem] left-0 right-0 bg-white border-b border-gray-200 shadow-sm py-4 px-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 no-underline text-gray-800 hover:text-blue-700 text-base font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-end pt-2">
              <a
                href="/donate"
                className="no-underline inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
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