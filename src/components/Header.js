import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location]);

  const navItems = ['Home', 'About', 'Programs', 'Gallery', 'Donate', 'Contact'];
  const aboutSubItems = ['History', 'Members'];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const renderNavItems = (isMobile = false) => {
    return navItems.map((item) => (
      <li key={item} className={`${isMobile ? "mb-2" : "relative"} w-full`}>
        {item === 'About' ? (
          <div>
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className={`flex items-center justify-between w-full px-3 py-2 ${
                isMobile ? 'text-left' : 'rounded-full'
              } hover:bg-blue-950 transition-colors duration-300`}
            >
              {item}
              {isAboutDropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {isAboutDropdownOpen && (
              <ul className={`${isMobile ? "ml-4 mt-2" : "absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-[60]"}`}>
                {aboutSubItems.map((subItem) => (
                  <li key={subItem}>
                    <button
                      onClick={() => handleNavigation(`/about/${subItem.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-950 transition-colors duration-300"
                    >
                      {subItem}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <button
            onClick={() => handleNavigation(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
            className={`block w-full text-left px-3 py-2 ${
              isMobile ? '' : 'rounded-full'
            } hover:bg-blue-950 transition-colors duration-300`}
          >
            {item}
          </button>
        )}
      </li>
    ));
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md relative z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="text-xl md:text-2xl font-bold hover:text-blue-200 transition-colors duration-300">
            MGPMF
          </Link>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-4">
            {renderNavItems(isMenuOpen)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;