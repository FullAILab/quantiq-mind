import { Leaf, Shield, FileCheck, TrendingUp, Target, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ESG() {
  const methodology = [
    {
      title: 'Agrégation Multi-Sources',
      description: 'Consolidation de données MSCI, Sustainalytics, Refinitiv et sources propriétaires',
      icon: Target
    },
    {
      title: 'Analyse Contextuelle',
      description: 'Pondération sectorielle et géographique pour éviter les biais',
      icon: TrendingUp
    },
    {
      title: 'Détection Controverses',
      description: 'Monitoring temps réel des scandales et risques réputationnels',
      icon: AlertTriangle
    },
    {
      title: 'Scoring Robuste',
      description: 'Méthodologie transparente et vérifiable par auditeurs externes',
      icon: Shield
    }
  ];

  const antiGreenwashing = [
    'Vérification croisée de multiples sources de données ESG',
    'Analyse des écarts entre communication corporate et données factuelles',
    'Détection automatique des "buzzwords" ESG sans substance',
    'Traçabilité complète des sources pour chaque score',
    'Alertes sur changements brutaux de notation',
    'Validation par experts sectoriels'
  ];

  const compliance = [
    {
      title: 'AMF 2024',
      description: 'Conformité totale avec les nouvelles directives françaises sur la finance durable',
      badge: 'Réglementation Française'
    },
    {
      title: 'SFDR & Taxonomie UE',
      description: 'Alignement avec les standards européens de classification durable',
      badge: 'Union Européenne'
    },
    {
      title: 'MiFID II',
      description: 'Transparence algorithmique et documentation des préférences ESG clients',
      badge: 'Directive Européenne'
    }
  ];

  const benefits = [
    {
      title: 'Différenciation Concurrentielle',
      description: 'Position unique avec scoring ESG propriétaire et transparent',
      icon: Target
    },
    {
      title: 'Confiance Investisseurs',
      description: 'Auditabilité totale renforçant la crédibilité de votre stratégie durable',
      icon: Shield
    },
    {
      title: 'Gain de Temps',
      description: 'Automatisation du reporting ESG - réduction de 70% du temps passé',
      icon: TrendingUp
    },
    {
      title: 'Conformité Garantie',
      description: 'Mises à jour réglementaires automatiques incluses',
      icon: FileCheck
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-esg/20 text-esg-foreground border-esg/50">
              ESG & Impact
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Finance Durable<br />
              <span className="bg-gradient-to-r from-esg to-accent bg-clip-text text-transparent">
                Sans Greenwashing
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Scoring ESG propriétaire avec traçabilité et auditabilité complète pour une finance réellement responsable
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-esg/20 hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <AlertTriangle className="h-10 w-10 text-esg" />
                  <CardTitle className="text-2xl">Le Problème du Greenwashing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Le marché de la finance durable est en pleine expansion (+15% CAGR), mais souffre d'un manque de standardisation 
                  et de la prolifération de stratégies "ESG de façade" sans impact réel.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-esg">Défis Actuels</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Écarts de notation entre agences ESG (jusqu'à 60%)</li>
                      <li>• Manque de transparence méthodologique</li>
                      <li>• Auto-déclarations non vérifiées</li>
                      <li>• Pression réglementaire croissante (AMF 2024)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Notre Réponse</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Agrégation multi-sources pour robustesse</li>
                      <li>• Méthodologie open-source auditée</li>
                      <li>• Vérification croisée systématique</li>
                      <li>• Conformité réglementaire garantie</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-esg/10 text-esg border-esg/20">Méthodologie</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Un Scoring ESG Propriétaire et Robuste
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notre approche en 4 piliers pour garantir l'authenticité des scores ESG
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {methodology.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-esg to-accent flex items-center justify-center">
                        <Icon className="h-6 w-6 text-esg-foreground" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{method.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anti-Greenwashing Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Garanties Anti-Greenwashing
              </h2>
              <p className="text-xl text-muted-foreground">
                Six mécanismes de contrôle pour assurer l'authenticité des scores
              </p>
            </div>

            <Card className="border-2 border-esg/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {antiGreenwashing.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-esg shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-esg/5 border-esg/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-esg" />
                  Exemple Concret
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Une entreprise pétrolière peut avoir un bon score "E" (environnemental) si elle investit massivement 
                  dans les énergies renouvelables. Mais notre système détecte automatiquement:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mr-2 text-esg shrink-0 mt-0.5" />
                    Les controverses récentes (marées noires, amendes environnementales)
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mr-2 text-esg shrink-0 mt-0.5" />
                    L'écart entre communication (50% énergies renouvelables en 2030) et réalité (5% actuellement)
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-4 w-4 mr-2 text-esg shrink-0 mt-0.5" />
                    La cohérence avec les investissements réels (capex énergies fossiles vs renouvelables)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gradient-to-br from-esg/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Conformité Réglementaire</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Alignement Total avec les Standards Internationaux
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {compliance.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <Badge className="mb-3 w-fit">{item.badge}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-center">Audit Trail Complet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                Chaque score ESG est traçable jusqu'aux sources primaires et peut être audité à tout moment
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="text-sm">Historique complet des modifications</Badge>
                <Badge variant="outline" className="text-sm">Sources documentées</Badge>
                <Badge variant="outline" className="text-sm">Méthodologie versionnée</Badge>
                <Badge variant="outline" className="text-sm">Export audit-ready</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bénéfices pour Votre Fonds
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover-lift text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-esg/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-esg" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visualization Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Visualisation des Données ESG
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tableaux de bord interactifs pour piloter votre stratégie durable
            </p>
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-esg/5 to-accent/5 rounded-lg p-12 text-center">
                  <Leaf className="h-16 w-16 text-esg mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Dashboard ESG interactif disponible dans notre interface de démonstration
                  </p>
                  <Button asChild className="mt-6 bg-esg hover:bg-esg/90">
                    <Link to="/dashboard">
                      Découvrir le dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Intégrez un Scoring ESG Certifiable
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Transformez vos contraintes réglementaires en avantage concurrentiel
          </p>
          <Button asChild size="lg" className="bg-esg hover:bg-esg/90 text-esg-foreground shadow-glow">
            <Link to="/contact">
              Demander une démo ESG <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
