import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [mobileSubDropdownOpen, setMobileSubDropdownOpen] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Departments', 
      path: '/departments',
      dropdown: [
        { 
          name: 'Youth Ministries', 
          path: '/departments/youth',
          subDropdown: [
            { name: 'Adventurer Club', path: '/departments/youth/adventurer' },
            { name: 'Pathfinder Club', path: '/departments/youth/pathfinder' },
            { name: 'Young Adult', path: '/departments/youth/young-adult' },
            { name: 'Ambassador', path: '/departments/youth/ambassador' },
            { name: 'Senior Youth Leadership', path: '/departments/youth/senior-youth' },
          ]
        },
        { 
          name: "Women's Ministry", 
          path: '/departments/women',
          subDropdown: [
            { name: "Women's Ministry", path: '/departments/women' },
            { name: 'Young Ladies', path: '/departments/women/young-ladies' },
          ]
        },
        { name: "Men's Ministry", path: '/departments/men' },
        { name: "Children's Ministry", path: '/departments/children' },
        { name: 'Music Department', path: '/departments/music' },
      ]
    },
    { name: 'Events', path: '/events' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-church-blue text-church-text-light shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Church Name */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logos/Church logo white.png" 
              alt="Chiraa SDA Church Logo" 
              className="h-10 w-10 rounded-full"
            />
            <div className="text-church-text-light">
              <h1 className="text-lg font-bold font-title">Chiraa District</h1>
              <p className="text-xs opacity-90 font-body">Seventh-day Adventist Church</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === link.name ? null : link.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium font-button transition-colors duration-200 flex items-center ${
                        isActive(link.path) || location.pathname.startsWith('/departments')
                          ? 'bg-church-gold text-church-text-dark'
                          : 'text-church-text-light hover:bg-church-blue-light hover:text-church-gold'
                      }`}
                    >
                      {link.name}
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          dropdownOpen === link.name ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {dropdownOpen === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-church-beige-light rounded-md shadow-lg border border-church-beige-dark z-50">
                        <div className="py-1">
                          {link.dropdown.map((subLink) => (
                            <div key={subLink.path} className="relative">
                              {subLink.subDropdown ? (
                                <div className="relative">
                                  <button
                                    onClick={() => setSubDropdownOpen(subDropdownOpen === subLink.name ? null : subLink.name)}
                                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-body text-church-text-dark hover:bg-church-beige hover:text-church-blue transition-colors duration-200"
                                  >
                                    <span>{subLink.name}</span>
                                    <svg 
                                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                                        subDropdownOpen === subLink.name ? 'rotate-90' : ''
                                      }`} 
                                      fill="none" 
                                      viewBox="0 0 24 24" 
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                  
                                  {/* Sub-dropdown Menu */}
                                  {subDropdownOpen === subLink.name && (
                                    <div className="absolute top-0 left-full ml-1 w-52 bg-church-beige-light rounded-md shadow-lg border border-church-beige-dark z-60">
                                      <div className="py-1">
                                        {subLink.subDropdown.map((nestedLink) => (
                                          <Link
                                            key={nestedLink.path}
                                            to={nestedLink.path}
                                            className="block px-4 py-2 text-sm font-body text-church-text-dark hover:bg-church-beige hover:text-church-blue transition-colors duration-200"
                                          >
                                            {nestedLink.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  to={subLink.path}
                                  className="block px-4 py-2 text-sm font-body text-church-text-dark hover:bg-church-beige hover:text-church-blue transition-colors duration-200"
                                >
                                  {subLink.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium font-button transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'bg-church-gold text-church-text-dark'
                        : 'text-church-text-light hover:bg-church-blue-light hover:text-church-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-church-text-light hover:text-church-gold focus:outline-none focus:text-church-gold"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-church-blue-dark rounded-lg mt-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium font-button transition-colors duration-200 ${
                          isActive(link.path) || (link.dropdown && location.pathname.startsWith('/departments'))
                            ? 'bg-church-gold text-church-text-dark'
                            : 'text-church-text-light hover:bg-church-blue-light hover:text-church-gold'
                        }`}
                      >
                        <span>{link.name}</span>
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileDropdownOpen === link.name ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Dropdown Items */}
                      {mobileDropdownOpen === link.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.dropdown.map((subLink) => (
                            <div key={subLink.path}>
                              {subLink.subDropdown ? (
                                <div>
                                  <button
                                    onClick={() => setMobileSubDropdownOpen(mobileSubDropdownOpen === subLink.name ? null : subLink.name)}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-body text-church-text-light opacity-80 hover:opacity-100 hover:text-church-gold transition-colors duration-200"
                                  >
                                    <span>• {subLink.name}</span>
                                    <svg 
                                      className={`h-3 w-3 transition-transform duration-200 ${
                                        mobileSubDropdownOpen === subLink.name ? 'rotate-180' : ''
                                      }`} 
                                      fill="none" 
                                      viewBox="0 0 24 24" 
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </button>
                                  
                                  {mobileSubDropdownOpen === subLink.name && (
                                    <div className="ml-4 space-y-1">
                                      {subLink.subDropdown.map((nestedLink) => (
                                        <Link
                                          key={nestedLink.path}
                                          to={nestedLink.path}
                                          onClick={() => {
                                            setIsMenuOpen(false);
                                            setMobileDropdownOpen(null);
                                            setMobileSubDropdownOpen(null);
                                          }}
                                          className="block px-3 py-2 text-xs font-body text-church-text-light opacity-70 hover:opacity-100 hover:text-church-gold transition-colors duration-200"
                                        >
                                          ◦ {nestedLink.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  to={subLink.path}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setMobileDropdownOpen(null);
                                  }}
                                  className="block px-3 py-2 text-sm font-body text-church-text-light opacity-80 hover:opacity-100 hover:text-church-gold transition-colors duration-200"
                                >
                                  • {subLink.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium font-button transition-colors duration-200 ${
                        isActive(link.path)
                          ? 'bg-church-gold text-church-text-dark'
                          : 'text-church-text-light hover:bg-church-blue-light hover:text-church-gold'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;