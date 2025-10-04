import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">FAL</span>
              </div>
              <div>
                <span className="font-bold text-lg text-accent block">Full AI Lab</span>
              </div>
            </div>
            <p className="text-sm text-accent italic">
              Precision in Every Decision
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@fullailab.com" className="text-accent hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Solution</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produit" className="text-primary-foreground/80 hover:text-accent transition-colors">Technologie</Link></li>
              <li><Link to="/solution-b2b" className="text-primary-foreground/80 hover:text-accent transition-colors">B2B API</Link></li>
              <li><Link to="/esg" className="text-primary-foreground/80 hover:text-accent transition-colors">ESG & Impact</Link></li>
              <li><Link to="/dashboard" className="text-primary-foreground/80 hover:text-accent transition-colors">Dashboard Demo</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/equipe" className="text-primary-foreground/80 hover:text-accent transition-colors">Équipe</Link></li>
              <li><Link to="/roadmap" className="text-primary-foreground/80 hover:text-accent transition-colors">Roadmap</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Conformité</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">RGPD</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">MiFID II</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Sécurité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm">
          <p className="text-primary-foreground/70">&copy; {new Date().getFullYear()} Full AI Lab. Tous droits réservés.</p>
          <p className="mt-2 text-accent font-semibold">Performance • Transparence • Impact</p>
        </div>
      </div>
    </footer>
  );
};
