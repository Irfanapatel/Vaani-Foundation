import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on the home page
  if (pathnames.length === 0) return null;

  // Get the page title from the URL path
  const getPageTitle = (path) => {
    const titleMap = {
      'about': 'About Us',
      'what-we-do': 'What We Do',
      'education': 'Education & Learning',
      'healthservices': 'Community Health Services',
      'womanempowerment': 'Women Empowerment',
      'environment': 'Environmental Sustainability',
      'youth': 'Social Welfare & Community Support',
      'get-involved': 'Get Involved',
      'contactus': 'Contact Us',
      'overview': 'Overview',
      'mission-vision': 'Mission & Vision',
      'our-team': 'Our Team'
    };
    
    // Remove any query parameters or hashes
    const cleanPath = path.split('?')[0].split('#')[0];
    return titleMap[cleanPath] || cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
  };

  return (
    <div className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <nav className="w-full" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-base font-medium">
            <li>
              <Link 
                to="/" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Home"
              >
                <Home className="w-5 h-5" />
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              
              return (
                <li key={to} className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-gray-400 mx-2" />
                  {last ? (
                    <span className="text-gray-800 font-semibold">
                      {getPageTitle(value)}
                    </span>
                  ) : (
                    <Link to={to} className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                      {getPageTitle(value)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
