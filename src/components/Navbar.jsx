import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

// Enhanced Button Component with hero variant
const Button = ({ children, variant = "default", size = "default", className = "", onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95",
    hero: "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 active:scale-95 font-semibold",
    ghost: "hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100"
  };
  
  const sizes = {
    default: "h-10 px-5 py-2 text-sm",
    sm: "h-9 px-4 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-base",
    icon: "h-10 w-10"
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Courses" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#footer", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="h-10 w-10 lg:h-12 lg:w-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                 <img src={logo} alt="IELTS Excellence Institute" className="h-12 w-20 lg:h-14 lg:w-20 rounded-md transition-transform group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                IELTS Excellence
              </h1>
              <p className="text-xs lg:text-sm text-gray-600 font-medium">
                Institute
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm xl:text-base group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <Button 
              variant="hero" 
              size="sm" 
              className="hidden md:inline-flex px-6 lg:px-8"
            >
              Book Free Trial
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 py-6 space-y-2 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg font-medium active:scale-98"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <Button variant="hero" size="sm" className="w-full">
                Book Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;