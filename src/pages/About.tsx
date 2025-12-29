import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

const keyBenefits = [
  { icon: Globe, title: "TradFi + DeFi", description: "Best of both worlds" },
  { icon: Zap, title: "Instant", description: "Real-time settlements" },
  { icon: Shield, title: "Secure", description: "Advanced protection" },
  { icon: Users, title: "Community", description: "User-first approach" },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero */}
      <header className="text-center pt-4">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          A U-topia Built for <span className="text-primary">YOU</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Reimagining money so you can spend, save, earn, and invest your way. 
          The best of Web2 & Web3 — putting you first.
        </p>
      </header>

      {/* Key Stats */}
      <div className="grid grid-cols-4 gap-4 text-center">
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

      {/* Benefits */}
      <section>
        <h2 className="text-lg font-semibold mb-6">Why U-topia?</h2>
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

      {/* CTA */}
      <section className="text-center py-8 px-6 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent border border-border/50">
        <h3 className="text-xl font-semibold mb-2">Ready to Join?</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Experience financial freedom in your pocket.
        </p>
        <div className="flex justify-center gap-3">
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
  );
}
