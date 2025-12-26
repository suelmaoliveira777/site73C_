import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "./ui/button";


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contactos", href: "#contactos" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-md bg-black/60 border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img 
              src="/images/logo73C_sf.png" 
              alt="73 Creative-tech" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white relative group transition-colors duration-300 hover:text-[#f8c101]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f8c101] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="text-black hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
              style={{ backgroundColor: '#f8c101', cursor: 'pointer' }}
            >
              Começe sua jornada
              <Rocket className="ml-2 h-5 w-5" style={{ color: '#a855f7' }} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 backdrop-blur-md bg-black/60 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:opacity-80 transition-opacity px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="w-full text-black hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#f8c101' }}
                >
                  Começar Projeto
                  <Rocket className="ml-2 h-5 w-5" style={{ color: '#a855f7' }} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}