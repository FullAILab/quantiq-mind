import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building2, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    orgType: '',
    aum: '',
    message: '',
    pilotProgram: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message envoyé !',
        description: 'Notre équipe vous répondra dans les 24h.',
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        orgType: '',
        aum: '',
        message: '',
        pilotProgram: false
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@fullailab.com',
      link: 'mailto:contact@fullailab.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 XX XX XX XX',
      link: 'tel:+33XXXXXXXXX'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Paris, France',
      link: null
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/50">
              Contactez-nous
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transformons Ensemble<br />
              <span className="bg-gradient-to-r from-accent to-esg bg-clip-text text-transparent">
                Votre Stratégie d'Investissement
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Parlons de vos besoins et découvrez comment Full AI Lab peut vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Informations de Contact</CardTitle>
                  <CardDescription>Nous sommes à votre écoute</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          {info.link ? (
                            <a href={info.link} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-esg/20 hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-esg" />
                    Programme Pilote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Rejoignez notre programme pilote et bénéficiez de:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Tarifs préférentiels early adopter</li>
                    <li>• Support dédié prioritaire</li>
                    <li>• Influence sur la roadmap produit</li>
                    <li>• Onboarding personnalisé gratuit</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Temps de Réponse</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Moins de 24h</p>
                      <p className="text-sm text-muted-foreground">En moyenne</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover-lift border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de Contact</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et notre équipe vous recontactera rapidement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          placeholder="Jean"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          placeholder="Dupont"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email professionnel *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean.dupont@fonds.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+33 6 XX XX XX XX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Organization Info */}
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organisation *</Label>
                      <Input
                        id="organization"
                        placeholder="Nom de votre fonds ou société"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="orgType">Type d'organisation *</Label>
                        <Select
                          value={formData.orgType}
                          onValueChange={(value) => handleInputChange('orgType', value)}
                          required
                        >
                          <SelectTrigger id="orgType">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pme-investment">PME d'investissement</SelectItem>
                            <SelectItem value="sustainable-fund">Fonds durable / ESG</SelectItem>
                            <SelectItem value="family-office">Family Office</SelectItem>
                            <SelectItem value="asset-manager">Asset Manager</SelectItem>
                            <SelectItem value="bank">Banque / Institution financière</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aum">Actifs sous gestion (optionnel)</Label>
                        <Select
                          value={formData.aum}
                          onValueChange={(value) => handleInputChange('aum', value)}
                        >
                          <SelectTrigger id="aum">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<50m">&lt; 50M€</SelectItem>
                            <SelectItem value="50-100m">50M€ - 100M€</SelectItem>
                            <SelectItem value="100-250m">100M€ - 250M€</SelectItem>
                            <SelectItem value="250-500m">250M€ - 500M€</SelectItem>
                            <SelectItem value=">500m">&gt; 500M€</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez vos besoins, objectifs, ou questions..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    {/* Pilot Program Checkbox */}
                    <div className="flex items-start space-x-3 p-4 bg-esg/5 rounded-lg border border-esg/20">
                      <Checkbox
                        id="pilotProgram"
                        checked={formData.pilotProgram}
                        onCheckedChange={(checked) => handleInputChange('pilotProgram', checked === true)}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="pilotProgram" className="text-sm font-medium cursor-pointer">
                          Je souhaite participer au programme pilote
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Bénéficiez de conditions préférentielles et d'un accompagnement personnalisé
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          Envoyer <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité. 
                      Vos données ne seront jamais partagées avec des tiers.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Questions Fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Quel est le délai d'intégration ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Notre processus d'onboarding complet prend environ 4 semaines, 
                    de la configuration initiale au déploiement en production.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Quels sont les prérequis techniques ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Notre API REST s'intègre avec toutes les plateformes modernes. 
                    Aucune infrastructure spécifique requise.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous un essai gratuit ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Oui, les participants au programme pilote bénéficient d'une période 
                    d'essai de 3 mois avec conditions préférentielles.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Vos algorithmes sont-ils auditables ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Absolument. Nous garantissons une traçabilité complète et une 
                    explicabilité totale conforme MiFID II.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
