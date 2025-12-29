import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Play,
} from "lucide-react";

const ecosystemFeatures = [
  {
    icon: Building2,
    title: "uBank",
    tagline: "Seamless Global Payments",
    description:
      "Borderless payments without high FX or cross-border fees. Decentralized & direct transactions with no banking middlemen. Your crypto and fiat together — ready to earn, move, and spend.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CreditCard,
    title: "uPay",
    tagline: "Massive Savings",
    description:
      "Up to 70% savings on transaction fees. Use your digital assets to shop, dine, or travel — powered by uPay card. Available across 140M+ merchants worldwide.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Gift,
    title: "uEarn",
    tagline: "Earn Rewards",
    description:
      "Transform loyalty and rewards into tokenised value. Your rewards as liquid value, unlike static Web2 loyalty programs. Engagement-driven yield mechanisms.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Coins,
    title: "uCoin",
    tagline: "Native Utility",
    description:
      "The native utility layer powering the U-topia ecosystem. Powers the wallet, payments, and rewards as the standard unit for fees, gasless operations, and settlement.",
    color: "from-emerald-500 to-teal-500",
  },
];

const keyBenefits = [
  {
    icon: Globe,
    title: "Financial Integration",
    description: "Seamlessly bridges TradFi and DeFi for the best of both worlds.",
  },
  {
    icon: Zap,
    title: "Unparalleled Speed",
    description: "Instant settlements without delays commonplace in traditional finance.",
  },
  {
    icon: Shield,
    title: "Modern Risk Management",
    description: "Advanced algorithms combining Web2 security with Web3 decentralization.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by the community, for the community. Your voice shapes our future.",
  },
];

const stats = [
  { value: "70%", label: "Fee Savings" },
  { value: "140M+", label: "Merchants" },
  { value: "7,000+", label: "Crypto Assets" },
  { value: "Instant", label: "Settlements" },
];

export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 md:p-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            About U-topia
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A U-topia Built for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              YOU
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-6">
            Reimagining money so you can spend, save, earn, and invest your way. The best of Web2 & Web3 — putting YOU first.
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl">
            U-topia is a hybrid financial ecosystem designed for real-world use, emphasizing financial freedom and modern risk management. We connect modern banking, digital assets, and cross-chain opportunities in one universal wallet.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Section */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Why We Built U-topia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/wtK6RZoI_mQ"
              title="Why We Built U-topia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Ecosystem Features */}
      <div>
        <h2 className="text-2xl font-bold mb-6">The Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystemFeatures.map((feature, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {feature.tagline}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Benefits */}
      <Card>
        <CardHeader>
          <CardTitle>Why Choose U-topia?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Ready to Join U-topia?</h3>
          <p className="text-muted-foreground mb-6">
            Experience financial freedom in your pocket. The future of finance is here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => window.open("https://u-topia.com", "_blank")}
              className="gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Visit U-topia.com
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://u-dex.com/stake/", "_blank")}
              className="gap-2"
            >
              <Coins className="h-4 w-4" />
              Start Earning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
