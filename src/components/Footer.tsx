import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">FAL</span>
              </div>
              <span className="font-bold text-lg">Full AI Lab</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Precision in Every Decision
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@fullailab.com" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-semibold mb-4">Solution</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produit" className="hover:text-accent transition-colors">Technologie</Link></li>
              <li><Link to="/solution-b2b" className="hover:text-accent transition-colors">B2B API</Link></li>
              <li><Link to="/esg" className="hover:text-accent transition-colors">ESG & Impact</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition-colors">Dashboard Demo</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/equipe" className="hover:text-accent transition-colors">Équipe</Link></li>
              <li><Link to="/roadmap" className="hover:text-accent transition-colors">Roadmap</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Conformité</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">RGPD</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">MiFID II</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sécurité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Full AI Lab. Tous droits réservés.</p>
          <p className="mt-2">Performance • Transparence • Impact</p>
        </div>
      </div>
    </footer>
  );
};
