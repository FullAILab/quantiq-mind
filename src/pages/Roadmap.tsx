import { CheckCircle2, Circle, ArrowRight, Rocket, Users, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Roadmap() {
  const roadmapPhases = [
    {
      period: '2025 - Semestre 1',
      status: 'in-progress',
      title: 'Finalisation MVP & Premiers Pilotes',
      icon: Rocket,
      milestones: [
        { text: 'Finalisation interface B2C intuitive', done: true },
        { text: 'API B2B v1.0 avec documentation complète', done: true },
        { text: 'Module ESG anti-greenwashing opérationnel', done: true },
        { text: 'Recrutement de 3 fonds pilotes', done: false },
        { text: 'Backtests validés sur 10 ans', done: true }
      ]
    },
    {
      period: '2025 - Semestre 2',
      status: 'planned',
      title: 'Validation Marché & Itérations',
      icon: Users,
      milestones: [
        { text: 'Retours utilisateurs intégrés (UX + algo)', done: false },
        { text: 'Optimisation latence API (<150ms)', done: false },
        { text: 'Ajout 10 nouveaux fonds clients', done: false },
        { text: 'Certification conformité AMF 2024', done: false },
        { text: 'Levée de fonds seed (cible: 500K€)', done: false }
      ]
    },
    {
      period: '2026',
      status: 'planned',
      title: 'Scale-up & Partenariats Stratégiques',
      icon: TrendingUp,
      milestones: [
        { text: 'Partenariats avec 25+ fonds B2B', done: false },
        { text: 'Intégrations plateformes custodians (BNP, Société Générale)', done: false },
        { text: 'API v2.0 avec ML temps réel', done: false },
        { text: 'Expansion équipe: 10 collaborateurs', done: false },
        { text: 'ARR target: 1M€', done: false }
      ]
    },
    {
      period: '2027',
      status: 'future',
      title: 'Expansion Européenne',
      icon: Globe,
      milestones: [
        { text: 'Ouverture marchés allemand et britannique', done: false },
        { text: 'Conformité SFDR & UK FCA', done: false },
        { text: 'Partenariats académiques (HEC, LSE)', done: false },
        { text: 'Version B2C grand public (robo-advisor)', done: false },
        { text: 'ARR target: 5M€', done: false }
      ]
    },
    {
      period: '2028',
      status: 'future',
      title: 'Leadership Finance Durable B2B',
      icon: TrendingUp,
      milestones: [
        { text: 'Top 3 des solutions IA pour fonds ESG en Europe', done: false },
        { text: 'Création fonds propriétaire Full AI Lab Fund', done: false },
        { text: 'Expansion Amérique du Nord', done: false },
        { text: '100+ fonds clients actifs', done: false },
        { text: 'Exit stratégique ou IPO', done: false }
      ]
    }
  ];

  const vision5Years = [
    {
      metric: '100+',
      label: 'Fonds Clients B2B',
      description: 'PME et fonds durables européens'
    },
    {
      metric: '20Md€',
      label: 'Actifs Sous Gestion',
      description: 'Via nos solutions API'
    },
    {
      metric: '50+',
      label: 'Collaborateurs',
      description: 'Équipe pluridisciplinaire'
    },
    {
      metric: 'Top 3',
      label: 'Leader Européen',
      description: 'IA pour finance durable B2B'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/50">
              Notre Vision
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Roadmap 2025-2028<br />
              <span className="bg-gradient-to-r from-accent to-esg bg-clip-text text-transparent">
                Vers le Leadership Européen
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Notre feuille de route stratégique pour démocratiser l'IA en finance durable
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = phase.status === 'in-progress';
                const isDone = phase.status === 'done';
                
                return (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index !== roadmapPhases.length - 1 && (
                      <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
                    )}

                    <Card className={`hover-lift ${isActive ? 'border-accent border-2' : ''}`}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                            isActive ? 'bg-accent animate-pulse-glow' :
                            isDone ? 'bg-esg' :
                            'bg-muted'
                          }`}>
                            <Icon className={`h-6 w-6 ${
                              isActive || isDone ? 'text-white' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={
                                isActive ? 'bg-accent/10 text-accent border-accent/20' :
                                isDone ? 'bg-esg/10 text-esg border-esg/20' :
                                'bg-muted/10 text-muted-foreground border-muted/20'
                              }>
                                {phase.period}
                              </Badge>
                              {isActive && (
                                <Badge variant="outline" className="animate-pulse">En cours</Badge>
                              )}
                            </div>
                            <CardTitle className="text-2xl">{phase.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.milestones.map((milestone, mIndex) => (
                            <div key={mIndex} className="flex items-start space-x-3">
                              {milestone.done ? (
                                <CheckCircle2 className="h-5 w-5 text-esg shrink-0 mt-0.5" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                              )}
                              <span className={`text-sm ${milestone.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {milestone.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision 5 Years */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-esg/10 text-esg border-esg/20">Vision 2028</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nos Objectifs à 5 Ans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des ambitions mesurables pour transformer la finance durable européenne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {vision5Years.map((item, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-accent mb-2">{item.metric}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">{item.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 max-w-4xl mx-auto bg-gradient-card border-2 border-esg/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Notre Mission à Long Terme</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Devenir le leader européen des solutions d'intelligence artificielle pour la finance durable, 
                en rendant accessible aux fonds intermédiaires les technologies jusqu'ici réservées aux géants du secteur.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline">Performance</Badge>
                <Badge variant="outline">Transparence</Badge>
                <Badge variant="outline">Impact</Badge>
                <Badge variant="outline">Innovation</Badge>
                <Badge variant="outline">Accessibilité</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Priorités Stratégiques
              </h2>
              <p className="text-xl text-muted-foreground">
                Les piliers de notre croissance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-lift border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle>Innovation Produit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• R&D continue sur inférence causale</li>
                    <li>• Optimisation latence &lt;100ms</li>
                    <li>• Intégration nouvelles sources ESG</li>
                    <li>• ML temps réel pour API v2.0</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-l-4 border-l-esg">
                <CardHeader>
                  <CardTitle>Excellence Opérationnelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Infrastructure scalable (100x volume)</li>
                    <li>• Support client premium</li>
                    <li>• Processus d'onboarding optimisés</li>
                    <li>• Certifications sécurité (SOC2, ISO27001)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-l-4 border-l-primary-light">
                <CardHeader>
                  <CardTitle>Partenariats Stratégiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Custodians bancaires (BNP, SocGen)</li>
                    <li>• Établissements académiques (HEC, Polytechnique)</li>
                    <li>• Associations professionnelles (AFG, FIR)</li>
                    <li>• Fintechs complémentaires</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-lift border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle>Croissance Commerciale</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Acquisition 25+ fonds d'ici fin 2026</li>
                    <li>• Expansion géographique (DE, UK)</li>
                    <li>• Marketing contenu & thought leadership</li>
                    <li>• Participation conférences sectorielles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Rejoignez Notre Aventure
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Devenez partenaire early adopter et façonnez l'avenir de la finance durable avec nous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              <Link to="/contact">
                Participer au programme pilote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/equipe">
                Rencontrer l'équipe
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
