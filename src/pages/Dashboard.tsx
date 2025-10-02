import { useState } from 'react';
import { TrendingUp, TrendingDown, Leaf, Shield, AlertCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('1M');

  // Simulated performance data
  const performanceData = [
    { date: 'Jan', portfolio: 100, benchmark: 100, prediction: 102 },
    { date: 'Fév', portfolio: 103, benchmark: 101, prediction: 105 },
    { date: 'Mar', portfolio: 107, benchmark: 103, prediction: 109 },
    { date: 'Avr', portfolio: 105, benchmark: 102, prediction: 107 },
    { date: 'Mai', portfolio: 110, benchmark: 104, prediction: 113 },
    { date: 'Juin', portfolio: 115, benchmark: 106, prediction: 118 },
  ];

  const allocationData = [
    { sector: 'Tech', value: 35, esg: 8.2 },
    { sector: 'Finance', value: 25, esg: 7.5 },
    { sector: 'Santé', value: 20, esg: 8.8 },
    { sector: 'Énergie', value: 12, esg: 6.5 },
    { sector: 'Industrie', value: 8, esg: 7.0 },
  ];

  const esgScoreData = [
    { subject: 'Environnement', score: 85, fullMark: 100 },
    { subject: 'Social', score: 78, fullMark: 100 },
    { subject: 'Gouvernance', score: 92, fullMark: 100 },
    { subject: 'Transparence', score: 88, fullMark: 100 },
    { subject: 'Impact', score: 75, fullMark: 100 },
  ];

  const metrics = [
    {
      title: 'Performance YTD',
      value: '+15.3%',
      change: '+2.4%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-esg'
    },
    {
      title: 'Volatilité',
      value: '12.5%',
      change: '-1.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-accent'
    },
    {
      title: 'Score ESG Moyen',
      value: '8.2/10',
      change: '+0.3',
      trend: 'up',
      icon: Leaf,
      color: 'text-esg'
    },
    {
      title: 'Sharpe Ratio',
      value: '1.85',
      change: '+0.15',
      trend: 'up',
      icon: Shield,
      color: 'text-primary-light'
    }
  ];

  const recommendations = [
    {
      type: 'Opportunité',
      ticker: 'MSFT',
      action: 'Augmenter',
      rationale: 'Prédiction IA: hausse probable à 3 mois (+12%). Score ESG élevé (8.5/10)',
      confidence: 87
    },
    {
      type: 'Risque',
      ticker: 'XOM',
      action: 'Réduire',
      rationale: 'Controverse ESG détectée. Volatilité en hausse (+35%). Score ESG faible (5.2/10)',
      confidence: 92
    },
    {
      type: 'Opportunité',
      ticker: 'NVDA',
      action: 'Maintenir',
      rationale: 'Performance solide mais valorisation élevée. Attendre correction pour renforcer',
      confidence: 75
    }
  ];

  const explanations = [
    {
      decision: 'Réduction exposition secteur Énergie',
      reasoning: 'Détection de corrélation négative avec critères ESG cibles (-0.65). Algorithme a identifié 3 controverses majeures dans le secteur ce trimestre.',
      date: '15 Mai 2025'
    },
    {
      decision: 'Surpondération Tech durable',
      reasoning: 'ML causal identifie opportunité structurelle: P(rendement >10% | ESG >8 & secteur Tech) = 78%. Backtests sur 10 ans valident signal.',
      date: '10 Mai 2025'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-3 bg-accent/20 text-accent-foreground border-accent/50">
                Mode Démonstration
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Dashboard Full AI Lab</h1>
              <p className="text-primary-foreground/80">Portefeuille Simulé - Données de démonstration</p>
            </div>
            <div className="hidden md:flex space-x-2">
              {['1S', '1M', '3M', '1A', 'Max'].map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className={selectedPeriod === period ? 'bg-accent hover:bg-accent/90' : 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="hover-lift">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className={`flex items-center text-sm ${metric.trend === 'up' ? 'text-esg' : 'text-accent'}`}>
                    {metric.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    <span>{metric.change} vs période précédente</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Chart */}
        <Card className="mb-8 hover-lift">
          <CardHeader>
            <CardTitle>Performance vs Benchmark & Prédictions IA</CardTitle>
            <CardDescription>
              Comparaison historique et prédictions à 3 mois (+30% précision vs modèles traditionnels)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="date" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="portfolio" stroke="hsl(var(--accent))" strokeWidth={2} name="Votre Portefeuille" />
                <Line type="monotone" dataKey="benchmark" stroke="hsl(var(--muted-foreground))" strokeWidth={2} name="Benchmark S&P 500" />
                <Line type="monotone" dataKey="prediction" stroke="hsl(var(--esg))" strokeWidth={2} strokeDasharray="5 5" name="Prédiction IA" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tabs for different views */}
        <Tabs defaultValue="allocation" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="esg">Score ESG</TabsTrigger>
            <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
          </TabsList>

          <TabsContent value="allocation" className="mt-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Allocation Sectorielle & Scores ESG</CardTitle>
                <CardDescription>Répartition optimisée par l'IA avec prise en compte ESG</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={allocationData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="sector" className="text-xs" />
                    <YAxis yAxisId="left" orientation="left" className="text-xs" />
                    <YAxis yAxisId="right" orientation="right" className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar yAxisId="left" dataKey="value" fill="hsl(var(--accent))" name="Allocation %" />
                    <Bar yAxisId="right" dataKey="esg" fill="hsl(var(--esg))" name="Score ESG" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="esg" className="mt-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Analyse ESG Multi-Dimensionnelle</CardTitle>
                <CardDescription>Scoring propriétaire anti-greenwashing avec traçabilité complète</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={esgScoreData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" className="text-xs" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Score ESG" dataKey="score" stroke="hsl(var(--esg))" fill="hsl(var(--esg))" fillOpacity={0.6} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="mt-6 p-4 bg-esg/5 rounded-lg border border-esg/20">
                  <div className="flex items-start space-x-3">
                    <Leaf className="h-5 w-5 text-esg shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Score ESG Global: 8.2/10</h4>
                      <p className="text-sm text-muted-foreground">
                        Votre portefeuille surperforme le benchmark ESG de 1.7 points. 
                        Points forts: Gouvernance (9.2) et Transparence (8.8). 
                        Axe d'amélioration: Impact social (7.5).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="mt-6">
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={rec.type === 'Opportunité' ? 'bg-esg/10 text-esg border-esg/20' : 'bg-destructive/10 text-destructive border-destructive/20'}
                        >
                          {rec.type}
                        </Badge>
                        <CardTitle className="text-lg">{rec.ticker} - {rec.action}</CardTitle>
                      </div>
                      <Badge variant="outline">Confiance: {rec.confidence}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{rec.rationale}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* AI Explainability */}
        <Card className="hover-lift border-2 border-accent/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Info className="h-6 w-6 text-accent" />
              <div>
                <CardTitle>Explications IA - Transparence Totale</CardTitle>
                <CardDescription>Comprenez chaque décision d'investissement de l'algorithme</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {explanations.map((exp, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{exp.decision}</h4>
                  <span className="text-xs text-muted-foreground">{exp.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.reasoning}</p>
              </div>
            ))}
            <div className="flex items-center justify-center pt-4">
              <Badge variant="outline" className="text-xs">
                <Shield className="h-3 w-3 mr-2" />
                Conformité MiFID II - Explicabilité 100%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Warning Banner */}
        <Card className="mt-8 bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-1">Dashboard de Démonstration</p>
                <p>
                  Les données affichées sont simulées à des fins de démonstration. 
                  Les performances passées ne préjugent pas des performances futures. 
                  Contactez-nous pour intégrer vos données réelles et tester la solution sur votre portefeuille.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
