import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/produit', label: 'Produit' },
    { path: '/solution-b2b', label: 'Solution B2B' },
    { path: '/esg', label: 'ESG & Impact' },
    { path: '/equipe', label: 'Équipe' },
    { path: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-accent-foreground font-bold text-sm">FAL</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-accent">Full AI Lab</span>
              <p className="text-xs text-primary-foreground/70">Precision in Every Decision</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-accent/20 text-accent'
                    : 'text-primary-foreground/80 hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow font-semibold">
              <Link to="/contact">Demander une démo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-primary-foreground hover:bg-accent/20"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-accent/20 text-accent'
                    : 'text-primary-foreground/80 hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow mt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Demander une démo
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
