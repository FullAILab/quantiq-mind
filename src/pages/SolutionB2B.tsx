import { Building2, TrendingUp, Leaf, Target, Users, CheckCircle2, ArrowRight, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SolutionB2B() {
  const personas = [
    {
      title: 'PME d\'Investissement',
      description: 'Fonds intermédiaires gérant entre 50M€ et 500M€ d\'actifs',
      icon: Building2,
      needs: [
        'Automatisation de la gestion de portefeuille',
        'Diversification algorithmique avancée',
        'Accès à des algorithmes de pointe sans R&D interne',
        'Reporting transparent pour investisseurs'
      ],
      value: [
        'Réduction de 40% du temps de gestion',
        'Performance améliorée de +15-30%',
        'Coûts divisés par 10 vs solution propriétaire',
        'Conformité MiFID II garantie'
      ]
    },
    {
      title: 'Fonds Durables',
      description: 'Fonds ESG et fonds d\'impact avec exigences de transparence accrues',
      icon: Leaf,
      needs: [
        'Scoring ESG robuste et vérifiable',
        'Auditabilité complète des décisions',
        'Conformité réglementaire AMF 2024',
        'Reporting d\'impact automatisé'
      ],
      value: [
        'Méthodologie anti-greenwashing certifiée',
        'Traçabilité totale des investissements',
        'Gain de temps sur reporting: 70%',
        'Différenciation concurrentielle forte'
      ]
    }
  ];

  const onboardingSteps = [
    {
      step: '1',
      title: 'Inscription & Configuration',
      description: 'Création compte API, définition périmètre et contraintes d\'investissement',
      duration: 'Jour 1'
    },
    {
      step: '2',
      title: 'Profilage Risque & ESG',
      description: 'Questionnaire approfondi sur appétit au risque et préférences ESG',
      duration: 'Jours 2-3'
    },
    {
      step: '3',
      title: 'Recommandations Initiales',
      description: 'Génération portfolio optimisé basé sur historique et objectifs',
      duration: 'Jours 4-7'
    },
    {
      step: '4',
      title: 'Simulation & Backtesting',
      description: 'Tests sur données historiques, ajustements paramètres',
      duration: 'Semaines 2-3'
    },
    {
      step: '5',
      title: 'Déploiement Production',
      description: 'Intégration API complète, monitoring temps réel, support dédié',
      duration: 'Semaine 4'
    }
  ];

  const apiFeatures = [
    {
      title: 'REST API Complète',
      description: 'Endpoints pour optimisation portfolio, scoring ESG, recommandations',
      icon: Zap
    },
    {
      title: 'Webhooks Temps Réel',
      description: 'Notifications instantanées sur alertes, opportunités et changements marché',
      icon: Target
    },
    {
      title: 'Sécurité Enterprise',
      description: 'OAuth2, chiffrement end-to-end, conformité SOC2 & ISO27001',
      icon: Shield
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/50">
              Solution B2B
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              API B2B pour Fonds<br />
              <span className="bg-gradient-to-r from-accent to-esg bg-clip-text text-transparent">
                Intermédiaires & Durables
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Technologie quantitative accessible pour transformer votre gestion d'actifs
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              <Link to="/contact">
                Planifier une démo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Deux Personas, Une Solution
            </h2>
            <p className="text-xl text-muted-foreground">
              Adapté aux besoins spécifiques de votre type de fonds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {personas.map((persona, index) => {
              const Icon = persona.icon;
              return (
                <Card key={index} className="hover-lift border-2">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{persona.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{persona.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-accent" />
                        Besoins Spécifiques
                      </h4>
                      <ul className="space-y-2">
                        {persona.needs.map((need, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-esg shrink-0 mt-0.5" />
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-esg" />
                        Propositions de Valeur
                      </h4>
                      <ul className="space-y-2">
                        {persona.value.map((val, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" />
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Onboarding Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Parcours Client</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              De l'Inscription au Déploiement en 4 Semaines
            </h2>
            <p className="text-xl text-muted-foreground">
              Un processus d'onboarding structuré et accompagné
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {onboardingSteps.map((step, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-esg flex items-center justify-center shrink-0 text-xl font-bold text-accent-foreground">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg">{step.title}</h4>
                          <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Fonctionnalités API
            </h2>
            <p className="text-xl text-muted-foreground">
              Infrastructure technique de niveau enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="max-w-4xl mx-auto bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Exemple d'Intégration API</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-primary/5 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground">
{`// Optimisation de portefeuille
POST https://api.fullailab.com/v1/portfolio/optimize
{
  "assets": ["AAPL", "MSFT", "TSLA"],
  "risk_profile": "moderate",
  "esg_constraints": { "min_score": 7 }
}

// Scoring ESG d'un actif
GET https://api.fullailab.com/v1/esg/score?ticker=AAPL

// Recommandations personnalisées
GET https://api.fullailab.com/v1/recommendations
  ?portfolio_id=abc123
  &horizon=12m`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Tarification Transparente
            </h2>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-primary-foreground">À partir de 1 500€/mois</CardTitle>
                <CardDescription className="text-lg text-primary-foreground/80">
                  Licence API B2B - Tarification adaptée à vos AUM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center text-primary-foreground/90">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-esg" />
                    Accès complet à l'API
                  </li>
                  <li className="flex items-center text-primary-foreground/90">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-esg" />
                    Support technique dédié
                  </li>
                  <li className="flex items-center text-primary-foreground/90">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-esg" />
                    Mises à jour algorithmes incluses
                  </li>
                  <li className="flex items-center text-primary-foreground/90">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-esg" />
                    SLA 99.9% uptime
                  </li>
                </ul>
                <p className="mt-6 text-sm text-primary-foreground/70">
                  * Tarifs dégressifs selon volume d'actifs sous gestion. Contactez-nous pour un devis personnalisé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Transformer Votre Gestion d'Actifs ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez le programme pilote et bénéficiez de conditions préférentielles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              <Link to="/contact">
                Demander une démo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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
