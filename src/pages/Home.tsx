import { TrendingUp, Shield, Zap, Users, Leaf, ChevronDown, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const edges = [
    {
      icon: TrendingUp,
      title: 'PRÉCISION',
      items: [
        'Lecture des micro-structures et régimes de marché',
        'Meilleures entrées/sorties grâce à l\'analyse fine',
        'Latence décision/exécution < 50ms'
      ]
    },
    {
      icon: Zap,
      title: 'ADAPTATION',
      items: [
        'Apprentissage continu en temps réel',
        'Détection automatique des régimes : tendance, range, stress, low-vol',
        'Recalibrage permanent du moteur'
      ]
    },
    {
      icon: Shield,
      title: 'STABILITÉ',
      items: [
        'Contrôle strict du risque (drawdown, volatilité, exposition)',
        'Combinaison de vues complémentaires',
        'Boucle de feedback continue'
      ]
    }
  ];

  const metrics = [
    { label: 'Sharpe Ratio', value: '3.0' },
    { label: 'Win Rate', value: '70%' },
    { label: 'Max Drawdown', value: '< 3.5%' },
    { label: 'Rendement annualisé', value: '+28%' },
    { label: 'Latence', value: '< 50ms' }
  ];

  const roadmap = [
    { year: '2025', milestone: 'MVP finalisé, backtests multi-régimes' },
    { year: '2026', milestone: 'Pilotes institutionnels, preuve de performance' },
    { year: '2027-2028', milestone: 'Lancement du fonds, Série A, scale' }
  ];

  const team = [
    {
      name: 'Théo Lecoeur',
      role: 'Fondateur, Quant & Tech Lead',
      description: 'Architecture IA, stratégie quantitative'
    },
    {
      name: 'Sarah Lecoeur',
      role: 'Cofondatrice, Ops & People',
      description: 'Organisation, partenariats institutionnels'
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce qui différencie Full AI Lab des fonds quantitatifs traditionnels ?',
      answer: 'Notre moteur combine IA discriminative et décisionnelle avec apprentissage adaptatif en temps réel. Contrairement aux modèles statiques, nous détectons automatiquement les régimes de marché et recalibrons en continu pour capter les non-linéarités.'
    },
    {
      question: 'Comment l\'adaptive learning maintient-il la performance ?',
      answer: 'Le système apprend continuellement des nouvelles données de marché, détecte les changements de régime (tendance, range, stress) et ajuste automatiquement ses paramètres. Cette boucle de feedback permanent évite la dégradation des performances.'
    },
    {
      question: 'Quel est le profil d\'investisseurs ciblé ?',
      answer: 'Nous ciblons les fonds 50-500M AUM, prop firms et family offices en Europe, avec extension Amérique du Nord. Focus sur des partenaires institutionnels recherchant performance pure et approche quantitative innovante.'
    },
    {
      question: 'Quand le fonds sera-t-il accessible ?',
      answer: 'MVP finalisé en 2025 avec pilotes institutionnels en 2026. Lancement commercial du fonds prévu 2027-2028 après validation de la performance en conditions réelles.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-background pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Fonds quantitatif autonome<br />nouvelle génération
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Les marchés évoluent plus vite que l'humain.<br />
            Full AI Lab anticipe plutôt que réagit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('approche')}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Découvrir notre approche
            </Button>
            <Button 
              onClick={() => scrollToSection('performance')}
              size="lg" 
              variant="ghost"
              className="text-lg"
            >
              Voir les performances
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection('approche')}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* Vision - L'edge quantitatif */}
      <section id="approche" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">L'edge quantitatif</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {edges.map((edge, index) => {
              const Icon = edge.icon;
              return (
                <Card key={index} className="hover-lift border-2">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-accent mb-4" />
                    <CardTitle className="text-2xl">{edge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {edge.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">Une hypercar financière</h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Notre moteur propriétaire combine IA discriminative et décisionnelle pour capter les non-linéarités du marché. 
            Adaptive learning en continu. Détection automatique des régimes. 
            Extraction de signaux fins au-delà des indicateurs classiques.
          </p>
        </div>
      </section>

      {/* Performances */}
      <section id="performance" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Performances simulées</h2>
          
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b last:border-b-0">
                    <span className="text-lg text-muted-foreground">{metric.label}</span>
                    <span className="text-2xl font-bold text-accent">{metric.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Résultats de backtests multi-régimes sur données historiques
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Roadmap</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {roadmap.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-3xl text-accent mb-2">{item.year}</CardTitle>
                  <CardDescription className="text-base">{item.milestone}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Positionnement */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xl text-center text-muted-foreground leading-relaxed">
            Fonds propriétaire orienté performance pure. Cible : fonds 50–500M AUM, prop firms, family offices. 
            Focus Europe avec extension Amérique du Nord.
          </p>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Équipe</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{member.name}</CardTitle>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                  <CardDescription className="text-base">{member.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Questions fréquentes</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Prêt à découvrir le futur du trading quantitatif ?
          </h2>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            onClick={() => window.location.href = 'mailto:contact@fullailab.com'}
          >
            Nous contacter
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl mb-2">Full AI Lab</p>
              <p className="text-sm text-muted-foreground">Fonds quantitatif autonome</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <a 
                href="mailto:contact@fullailab.com" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contact@fullailab.com</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Full AI Lab. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
