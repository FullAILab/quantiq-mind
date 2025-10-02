import { ArrowRight, TrendingUp, Shield, Leaf, Zap, Target, Users, Award, BarChart3, Lock, Cpu, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-bg.jpg';

export default function Home() {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Performance',
      description: 'Algorithmes propriétaires avec +30% de précision vs benchmarks traditionnels'
    },
    {
      icon: Shield,
      title: 'Transparence',
      description: 'IA explicable à 100% - comprenez chaque décision d\'investissement'
    },
    {
      icon: Leaf,
      title: 'Impact',
      description: 'Scoring ESG robuste et traçable pour une finance réellement durable'
    }
  ];

  const challenges = [
    {
      title: 'Pression ESG Croissante',
      description: 'Réglementation AMF 2024 et attentes clients pour investissements durables',
      icon: Leaf
    },
    {
      title: 'Coûts Technologiques',
      description: 'Infrastructure quantitative traditionnellement réservée aux grands fonds',
      icon: BarChart3
    },
    {
      title: 'Guerre des Talents',
      description: 'Difficulté à recruter des experts en IA et finance quantitative',
      icon: Users
    },
    {
      title: 'Conformité Réglementaire',
      description: 'MiFID II et exigences de transparence algorithmique',
      icon: Lock
    },
    {
      title: 'Concentration du Marché',
      description: 'Domination des géants tech sur les solutions d\'investissement automatisé',
      icon: Target
    }
  ];

  const solutions = [
    {
      title: 'Optimisation des Performances',
      description: 'Algorithmes d\'IA avancés pour surperformer les benchmarks',
      icon: TrendingUp
    },
    {
      title: 'Réduction des Coûts',
      description: 'API accessible dès 1 500€/mois vs infrastructure propriétaire à millions',
      icon: Zap
    },
    {
      title: 'Conformité ESG',
      description: 'Scoring propriétaire anti-greenwashing et reporting automatisé',
      icon: Leaf
    },
    {
      title: 'Expertise IA',
      description: 'Accès à notre laboratoire d\'innovation sans recruter des data scientists',
      icon: Cpu
    },
    {
      title: 'Agilité',
      description: 'Déploiement en semaines, pas en années',
      icon: Award
    }
  ];

  const stats = [
    { value: '+20%', label: 'Croissance du trading quantitatif (CAGR)', source: 'Deloitte 2024' },
    { value: '2 500 Md$', label: 'Marché robo-advisors en 2030', source: 'Statista' },
    { value: '+15%', label: 'Croissance de la finance durable', source: 'PwC' },
    { value: '+30%', label: 'Précision vs benchmarks traditionnels', source: 'Full AI Lab' }
  ];

  const advantages = [
    {
      title: 'Technologie Propriétaire',
      description: 'Algorithmes d\'IA causale développés en interne avec backtests sur 10 ans',
      icon: Cpu
    },
    {
      title: 'IA Explicable',
      description: 'Transparence totale sur chaque décision - conformité MiFID II garantie',
      icon: Shield
    },
    {
      title: 'Scoring ESG Robuste',
      description: 'Méthodologie anti-greenwashing avec traçabilité complète',
      icon: Leaf
    },
    {
      title: 'Accessibilité Unique',
      description: 'Solution B2B abordable pour fonds intermédiaires (<500M€)',
      icon: Award
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/50 animate-pulse-glow">
            Precision in Every Decision
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            L'Intelligence Artificielle qui<br />
            <span className="bg-gradient-to-r from-accent to-esg bg-clip-text text-transparent">
              Révolutionne l'Investissement
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Technologie propriétaire combinant IA et algorithmes avancés pour des décisions d'investissement automatisées, transparentes et durables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-8 py-6">
              <Link to="/contact">
                Demander une démo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Link to="/produit">
                Découvrir la solution
              </Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos Trois Piliers</h2>
            <p className="text-xl text-muted-foreground">Performance • Transparence • Impact</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="hover-lift border-2">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{pillar.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Problématiques du Marché</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Les 5 Défis des Fonds Intermédiaires
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les fonds d'investissement de taille moyenne font face à des défis uniques dans un marché en mutation rapide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-esg/10 text-esg border-esg/20">Notre Solution</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Full AI Lab : Votre Partenaire Technologique
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une solution complète pour démocratiser l'accès à la finance quantitative
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="hover-lift border-l-4 border-l-accent">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Chiffres Clés du Marché</h2>
            <p className="text-xl text-primary-foreground/80">
              Un secteur en croissance explosive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover-lift">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-accent mb-2">{stat.value}</CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-base">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/60">{stat.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Avantages Concurrentiels</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pourquoi Choisir Full AI Lab ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-esg flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{advantage.title}</CardTitle>
                        <CardDescription className="text-base">{advantage.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Révolutionner Votre Stratégie d'Investissement ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Rejoignez le programme pilote et bénéficiez d'un accompagnement personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow text-lg px-8 py-6">
              <Link to="/contact">
                Participer au programme pilote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
              <Link to="/dashboard">
                Tester le dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
