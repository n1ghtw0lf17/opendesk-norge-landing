import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Users, Globe, FileText, Mail, Calendar, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">openDesk</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#funksjoner" className="text-muted-foreground hover:text-foreground transition-colors">Funksjoner</a>
            <a href="#fordeler" className="text-muted-foreground hover:text-foreground transition-colors">Fordeler</a>
            <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
            <Button variant="default" size="sm">Kom i gang</Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital security network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>
        
        <div className="container relative z-10 px-6 py-24 md:py-32">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary-foreground/20"
            >
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">Suverent alternativ til Microsoft 365 & Google Workspace</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight"
            >
              Din data, din kontroll.
              <br />
              <span className="text-accent">Ingen kompromisser.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              En komplett kontorstøtteplattform der datasuverenitet, sikkerhet og personvern står i sentrum. 
              Perfekt for virksomheter som verdsetter åpenhet, transparens og uavhengighet.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl">
                Start gratis prøveperiode
              </Button>
              <Button variant="heroOutline" size="xl">
                Se demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tre pilarer for trygg produktivitet
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              openDesk er bygget på grunnleggende prinsipper som sikrer at din virksomhet alltid har kontrollen.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Datasuverenitet",
                description: "Full kontroll over hvor dataene lagres og hvem som har tilgang. Dine data forblir dine – alltid."
              },
              {
                icon: Lock,
                title: "Sikkerhet",
                description: "Ende-til-ende kryptering og avansert beskyttelse mot trusler. Industriledende sikkerhetsstandarder."
              },
              {
                icon: Eye,
                title: "Personvern",
                description: "Ingen sporing, ingen salg av data. Fullstendig transparent håndtering av all informasjon."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funksjoner" className="py-24 bg-muted/50">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alt du trenger, samlet på ett sted
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              En komplett suite med verktøy som dekker alle behov for moderne samarbeid og produktivitet.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Dokumenter", description: "Lag, rediger og del dokumenter med sanntidssamarbeid." },
              { icon: Mail, title: "E-post", description: "Sikker e-post med avansert filtrering og kryptering." },
              { icon: Calendar, title: "Kalender", description: "Planlegg møter og del kalendere på tvers av teamet." },
              { icon: MessageSquare, title: "Chat", description: "Instant messaging med kanaler og direktemeldinger." },
              { icon: Server, title: "Skylagring", description: "Trygg lagring med automatisk synkronisering." },
              { icon: Users, title: "Teamadministrasjon", description: "Enkel håndtering av brukere og tilganger." },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border hover:border-accent/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="fordeler" className="py-24 bg-background">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hvorfor velge openDesk?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I en verden der store teknologiselskaper kontrollerer mer og mer av våre data, 
                gir openDesk deg friheten tilbake. Vi tror på åpen kildekode, transparens og 
                at virksomheter skal ha full kontroll over sin egen digitale infrastruktur.
              </p>
              
              <ul className="space-y-4">
                {[
                  "GDPR-kompatibel uten kompromisser",
                  "Ingen vendor lock-in – bytt når du vil",
                  "Åpen kildekode og full transparens",
                  "Norsk support og lokale datasentre",
                  "Skalerbar fra småbedrifter til store organisasjoner"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 md:p-12 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                    <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Norsk eierskap</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                    <Lock className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">E2E</div>
                    <div className="text-sm text-muted-foreground">Kryptering</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                    <Server className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Oppetid</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                    <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--primary))_100%)]" />
        </div>
        <div className="container relative z-10 px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Klar for å ta kontroll over dine data?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Bli med tusenvis av norske virksomheter som har valgt openDesk for sikker og uavhengig produktivitet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start gratis i 30 dager
              </Button>
              <Button variant="heroOutline" size="xl">
                Kontakt salg
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">openDesk Office Norge</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">Personvern</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Vilkår</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Kontakt</a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 openDesk Office Norge. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
