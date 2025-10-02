import { Cpu, Zap, Shield, LineChart, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import aiVisual from '@/assets/ai-visual.jpg';

export default function Product() {
  const techFeatures = [
    'Inférence causale avancée',
    'Temps de réponse API < 200ms',
    'Backtests validés sur 10 ans',
    'ML causal et contrefactuels',
    'Architecture scalable',
    'Sécurité de niveau bancaire'
  ];

  const useCases = [
    {
      title: 'Allocation Automatisée des Actifs',
      description: 'Optimisation du portefeuille en temps réel selon profil de risque et objectifs ESG',
      icon: LineChart
    },
    {
      title: 'Gestion Intégrée des Risques',
      description: 'Analyse prédictive et alertes automatiques sur volatilité et corrélations',
      icon: Shield
    },
    {
      title: 'Reporting Transparent',
      description: 'Tableaux de bord conformes MiFID II avec explications des décisions IA',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/50">
              Technologie Propriétaire
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Une Plateforme d'IA<br />
              <span className="bg-gradient-to-r from-accent to-esg bg-clip-text text-transparent">
                Conçue pour la Finance
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Infrastructure complète combinant interface B2C intuitive, API B2B performante et modules ESG robustes
            </p>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <img 
              src={aiVisual} 
              alt="Architecture Full AI Lab" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Architecture Technique
            </h2>
            <p className="text-xl text-muted-foreground">
              Une stack technologique de pointe pour des performances exceptionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6 flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-esg shrink-0" />
                  <span className="font-medium">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Components Tabs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="b2c" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="b2c">Interface B2C</TabsTrigger>
                <TabsTrigger value="b2b">API B2B</TabsTrigger>
                <TabsTrigger value="esg">Modules ESG</TabsTrigger>
              </TabsList>

              <TabsContent value="b2c" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Interface Utilisateur Intuitive</CardTitle>
                    <CardDescription>
                      Dashboard moderne et accessible pour investisseurs individuels et gestionnaires de fonds
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center">
                          <Zap className="h-4 w-4 mr-2 text-accent" />
                          Fonctionnalités Clés
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Visualisation portefeuille en temps réel</li>
                          <li>• Recommandations personnalisées</li>
                          <li>• Simulateur de scénarios</li>
                          <li>• Reporting automatisé</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-esg" />
                          Avantages
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Expérience utilisateur optimale</li>
                          <li>• Prise en main immédiate</li>
                          <li>• Mobile responsive</li>
                          <li>• Explications IA claires</li>
                        </ul>
                      </div>
                    </div>
                    <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                      <Link to="/dashboard">
                        Découvrir le dashboard <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="b2b" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">API B2B Performante</CardTitle>
                    <CardDescription>
                      Intégration transparente dans vos systèmes existants avec documentation complète
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center">
                          <Cpu className="h-4 w-4 mr-2 text-accent" />
                          Caractéristiques Techniques
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• REST API avec authentification OAuth2</li>
                          <li>• Latence moyenne &lt; 200ms</li>
                          <li>• Webhooks pour notifications temps réel</li>
                          <li>• SDK disponibles (Python, JS, Java)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center">
                          <Lock className="h-4 w-4 mr-2 text-esg" />
                          Sécurité & Conformité
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Chiffrement end-to-end</li>
                          <li>• Conformité RGPD & MiFID II</li>
                          <li>• Audit trails complets</li>
                          <li>• SLA 99.9% uptime</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-mono">
                        POST /api/v1/portfolio/optimize<br />
                        GET /api/v1/recommendations<br />
                        GET /api/v1/esg/score
                      </p>
                    </div>
                    <Button asChild className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                      <Link to="/solution-b2b">
                        Explorer l'API <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="esg" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Modules ESG Propriétaires</CardTitle>
                    <CardDescription>
                      Scoring anti-greenwashing avec traçabilité et auditabilité complète
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-esg" />
                          Méthodologie
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Agrégation multi-sources (MSCI, Sustainalytics)</li>
                          <li>• Analyse sectorielle contextuelle</li>
                          <li>• Détection controverses en temps réel</li>
                          <li>• Scoring pondéré par matérialité</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-accent" />
                          Conformité
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• AMF 2024 compliant</li>
                          <li>• Alignement SFDR & Taxonomie UE</li>
                          <li>• Audit trail complet</li>
                          <li>• Reporting automatisé</li>
                        </ul>
                      </div>
                    </div>
                    <Button asChild className="w-full sm:w-auto bg-esg hover:bg-esg/90">
                      <Link to="/esg">
                        Découvrir notre approche ESG <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cas d'Usage
            </h2>
            <p className="text-xl text-muted-foreground">
              Applications concrètes pour transformer votre gestion d'actifs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-esg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle>{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Badges */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-8">Garanties Techniques</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-base bg-primary-foreground/10 border-primary-foreground/20">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Explicabilité Totale
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base bg-primary-foreground/10 border-primary-foreground/20">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Transparence Algorithmes
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base bg-primary-foreground/10 border-primary-foreground/20">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Contrôle Utilisateur
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base bg-primary-foreground/10 border-primary-foreground/20">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Conformité MiFID II
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Prêt à Intégrer Full AI Lab ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Planifiez une démonstration technique avec notre équipe
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
            <Link to="/contact">
              Demander une démo technique <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
