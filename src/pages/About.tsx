import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  CreditCard,
  Gift,
  Coins,
  Shield,
  Zap,
  Globe,
  Users,
  ExternalLink,
} from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import team1 from "@/assets/team-1.avif";
import team2 from "@/assets/team-2.avif";
import team3 from "@/assets/team-3.avif";
import team4 from "@/assets/team-4.avif";
import team5 from "@/assets/team-5.avif";
import team6 from "@/assets/team-6.avif";
import team7 from "@/assets/team-7.avif";
import lifestyleUbank from "@/assets/lifestyle-ubank.jpg";
import lifestyleUpay from "@/assets/lifestyle-upay.jpg";
import lifestyleUearn from "@/assets/lifestyle-uearn.jpg";
import lifestyleUcoin from "@/assets/lifestyle-ucoin.jpg";

const teamMembers = [
  { name: "Emmanuel Quezada", role: "Founder & Chief Executive Officer", image: team1 },
  { name: "Owen Man Cheong Ma", role: "Co-Founder & Chief Revenue Officer", image: team2 },
  { name: "Maissa Ballout", role: "Chief Financial Officer", image: team3 },
  { name: "Ian Stirling", role: "Chief Strategy Officer", image: team4 },
  { name: "Danosch Zahedi", role: "Advisor", image: team5 },
  { name: "Hitesh Mishra", role: "Advisor", image: team6 },
  { name: "Alexia Chen", role: "Advisor", image: team7 },
];

const ecosystemFeatures = [
  {
    icon: Building2,
    title: "uBank",
    tagline: "Global Payments",
    description: "Borderless payments without high FX fees. Your crypto and fiat together.",
  },
  {
    icon: CreditCard,
    title: "uPay",
    tagline: "70% Savings",
    description: "Use digital assets at 140M+ merchants worldwide with uPay card.",
  },
  {
    icon: Gift,
    title: "uEarn",
    tagline: "Tokenized Rewards",
    description: "Transform loyalty rewards into liquid, transferable digital assets.",
  },
  {
    icon: Coins,
    title: "uCoin",
    tagline: "Native Utility",
    description: "Powers fees, gasless operations, and settlements across the ecosystem.",
  },
];

const lifestyleCards = [
  { title: "uBank", icon: Building2, image: lifestyleUbank },
  { title: "uPay", icon: CreditCard, image: lifestyleUpay },
  { title: "uEarn", icon: Gift, image: lifestyleUearn },
  { title: "uCoin", icon: Coins, image: lifestyleUcoin },
];

const keyBenefits = [
  { icon: Globe, title: "TradFi + DeFi", description: "Best of both worlds" },
  { icon: Zap, title: "Instant", description: "Real-time settlements" },
  { icon: Shield, title: "Secure", description: "Advanced protection" },
  { icon: Users, title: "Community", description: "User-first approach" },
];

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl h-72 md:h-80">
        <img 
          src={heroAbout} 
          alt="U-topia community"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative h-full flex items-center px-8 md:px-12">
          <div className="max-w-xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Financial Freedom
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              A U-topia Built for <span className="text-primary">YOU</span>
            </h1>
            <p className="text-white/90 text-lg">
              Reimagining money so you can spend, save, earn, and invest your way. 
              The best of Web2 & Web3 — putting you first.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 px-4">
        {/* Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: "70%", label: "Fee Savings" },
            { value: "140M+", label: "Merchants" },
            { value: "7K+", label: "Assets" },
            { value: "Instant", label: "Settlements" },
          ].map((stat, i) => (
            <div key={i} className="py-4">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Video */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Why We Built U-topia</h2>
          <div className="aspect-video rounded-xl overflow-hidden border bg-muted">
            <iframe
              src="https://www.youtube.com/embed/wtK6RZoI_mQ"
              title="Why We Built U-topia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        <Separator />

        {/* Ecosystem */}
        <section>
          <h2 className="text-lg font-semibold mb-6">The Ecosystem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ecosystemFeatures.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-xs text-primary">{feature.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Lifestyle Carousel - Why U-topia */}
        <section>
          <h2 className="text-lg font-semibold mb-6">Why U-topia?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lifestyleCards.map((card, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl aspect-[3/4] group cursor-pointer"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white">
                    <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <card.icon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold">{card.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Benefits Grid */}
        <section>
          <h2 className="text-lg font-semibold mb-6">Key Benefits</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-muted/30">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Team */}
        <section>
          <h2 className="text-lg font-semibold mb-6">Leadership Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-3 overflow-hidden rounded-xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-sm">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 px-6 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-border/50">
          <h3 className="text-xl font-semibold mb-2">Ready to Join?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Experience financial freedom in your pocket.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => window.open("https://u-topia.com", "_blank")}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit U-topia
            </Button>
            <Button variant="outline" onClick={() => window.open("https://u-dex.com/stake/", "_blank")}>
              <Coins className="h-4 w-4 mr-2" />
              Start Earning
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
