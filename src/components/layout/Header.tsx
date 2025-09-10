import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">Ninh Binh Tourism</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`font-medium ${isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/tours" 
            className={`font-medium ${isActive('/tours') ? 'text-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}
          >
            Tours
          </Link>
          <Link 
            to="/blog" 
            className={`font-medium ${isActive('/blog') ? 'text-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`font-medium ${isActive('/about') ? 'text-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium ${isActive('/contact') ? 'text-primary' : 'text-gray-600 hover:text-primary'} transition-colors`}
          >
            Contact
          </Link>
        </nav>

        {/* Book Now button - desktop */}
        <div className="hidden md:block">
          <Link to="/booking" className="btn-primary">
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`font-medium ${isActive('/') ? 'text-primary' : 'text-gray-600'} py-2`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/tours"
              className={`font-medium ${isActive('/tours') ? 'text-primary' : 'text-gray-600'} py-2`}
              onClick={closeMenu}
            >
              Tours
            </Link>
            <Link
              to="/blog"
              className={`font-medium ${isActive('/blog') ? 'text-primary' : 'text-gray-600'} py-2`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`font-medium ${isActive('/about') ? 'text-primary' : 'text-gray-600'} py-2`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium ${isActive('/contact') ? 'text-primary' : 'text-gray-600'} py-2`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="btn-primary w-full text-center"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;