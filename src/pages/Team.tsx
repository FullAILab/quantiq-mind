import { Linkedin, Mail, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import sarahImage from '@/assets/sarah-lecoeur.jpg';
import theoImage from '@/assets/theo-lecoeur.jpg';

export default function Team() {
  const labFeatures = [
    {
      title: 'Expertise Méthodologique',
      description: 'Inférence causale et temps de réponse <100ms',
      icon: Award
    },
    {
      title: 'Infrastructure Technique',
      description: 'ML causal, contrefactuels et backtesting rigoureux',
      icon: Briefcase
    },
    {
      title: 'Collaboration Interdisciplinaire',
      description: 'Finance, IA, statistiques et gestion de projet',
      icon: GraduationCap
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/50">
              L'Équipe
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Des Experts au Service de<br />
              <span className="bg-gradient-to-r from-accent to-esg bg-clip-text text-transparent">
                Votre Performance
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Une équipe complémentaire combinant expertise financière, IA de pointe et vision stratégique
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Fondateurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Finance + IA + Gestion de Projet : La combinaison gagnante
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Sarah Lecoeur - CEO */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={sarahImage}
                    alt="Sarah Lecoeur - CEO"
                    className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-accent/20"
                  />
                  <CardTitle className="text-2xl mb-2">Sarah Lecoeur</CardTitle>
                  <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">CEO & Co-fondatrice</Badge>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:sarah@fullailab.com">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-accent" />
                    Responsabilités
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Stratégie d'entreprise et vision produit</li>
                    <li>• Développement des partenariats stratégiques</li>
                    <li>• Relations investisseurs et levées de fonds</li>
                    <li>• Positionnement marché et go-to-market</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-esg" />
                    Expertise
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Gestion de projet complexe</li>
                    <li>• Stratégie d'innovation</li>
                    <li>• Leadership et management d'équipe</li>
                    <li>• Background en éducation et pédagogie</li>
                  </ul>
                </div>
                <CardDescription className="italic">
                  "Notre mission est de démocratiser l'accès à l'intelligence artificielle en finance, 
                  pour que chaque fonds puisse bénéficier des technologies jusqu'ici réservées aux géants du secteur."
                </CardDescription>
              </CardContent>
            </Card>

            {/* Théo Lecoeur - CTO */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={theoImage}
                    alt="Théo Lecoeur - CTO"
                    className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-accent/20"
                  />
                  <CardTitle className="text-2xl mb-2">Théo Lecoeur</CardTitle>
                  <Badge className="mb-4 bg-esg/10 text-esg border-esg/20">CTO & Co-fondateur</Badge>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:theo@fullailab.com">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-accent" />
                    Responsabilités
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Architecture technique et infrastructure</li>
                    <li>• Développement des algorithmes propriétaires</li>
                    <li>• Conception de l'API B2B et modules ESG</li>
                    <li>• Supervision R&D et innovation IA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-esg" />
                    Expertise
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Trading quantitatif et finance algorithmique</li>
                    <li>• Machine Learning et inférence causale</li>
                    <li>• Architecture cloud scalable</li>
                    <li>• Background marchés financiers</li>
                  </ul>
                </div>
                <CardDescription className="italic">
                  "La clé de notre différenciation réside dans l'explicabilité totale de nos algorithmes. 
                  Nous ne proposons pas une boîte noire, mais un partenaire technologique transparent."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complementarity Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Une Complémentarité Parfaite
              </h2>
              <p className="text-xl text-muted-foreground">
                La combinaison idéale entre vision stratégique et excellence technique
              </p>
            </div>

            <Card className="hover-lift border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Synergie Unique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2">Vision Stratégique</h4>
                    <p className="text-sm text-muted-foreground">
                      Sarah apporte la vision produit et l'expertise en développement d'écosystèmes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-esg/10 flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-8 w-8 text-esg" />
                    </div>
                    <h4 className="font-semibold mb-2">Excellence Technique</h4>
                    <p className="text-sm text-muted-foreground">
                      Théo garantit la robustesse technologique et l'innovation continue
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary-light/10 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-primary-light" />
                    </div>
                    <h4 className="font-semibold mb-2">Expertise Marché</h4>
                    <p className="text-sm text-muted-foreground">
                      Compréhension profonde des besoins des fonds intermédiaires
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Laboratoire d'Innovation</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Notre ADN R&D
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un laboratoire d'innovation au cœur de notre stratégie produit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {labFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-esg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto bg-gradient-card border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Nos Principes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Innovation continue et amélioration itérative</li>
                    <li>✓ Transparence totale sur nos méthodes</li>
                    <li>✓ Collaboration avec la communauté académique</li>
                    <li>✓ Tests rigoureux avant toute mise en production</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Nos Domaines de Recherche</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Inférence causale appliquée à la finance</li>
                    <li>✓ Optimisation d'algorithmes ML pour latence &lt;100ms</li>
                    <li>✓ Méthodologies ESG anti-greenwashing</li>
                    <li>✓ Explicabilité et interprétabilité de l'IA</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Envie de Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Nous recherchons des talents passionnés par l'IA et la finance durable
          </p>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6" asChild>
            <a href="mailto:jobs@fullailab.com">
              <Mail className="mr-2 h-5 w-5" />
              Nous contacter
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
