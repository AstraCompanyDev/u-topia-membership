import { Check, Crown, Gem, Medal, Shield, Star, Zap, ArrowRight, Users, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import heroPeople from "@/assets/hero-people.jpg";

const tiers = [
  {
    level: 1,
    name: "Bronze",
    price: 100,
    icon: Medal,
    gradient: "from-amber-600 to-amber-800",
    bgGradient: "from-amber-500/20 to-amber-600/10",
    iconBg: "bg-amber-500/20",
    textColor: "text-amber-600",
    borderColor: "border-amber-500/30",
    commission: "8%",
    description: "Start your journey",
  },
  {
    level: 2,
    name: "Silver",
    price: 250,
    icon: Shield,
    gradient: "from-slate-400 to-slate-600",
    bgGradient: "from-slate-400/20 to-slate-500/10",
    iconBg: "bg-slate-400/20",
    textColor: "text-slate-500",
    borderColor: "border-slate-400/30",
    commission: "5%",
    description: "Expand your network",
  },
  {
    level: 3,
    name: "Gold",
    price: 500,
    icon: Star,
    gradient: "from-yellow-400 to-yellow-600",
    bgGradient: "from-yellow-400/20 to-yellow-500/10",
    iconBg: "bg-yellow-400/20",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-400/30",
    commission: "3%",
    description: "Unlock premium features",
    popular: true,
  },
  {
    level: 4,
    name: "Platinum",
    price: 1000,
    icon: Crown,
    gradient: "from-purple-400 to-purple-600",
    bgGradient: "from-purple-400/20 to-purple-500/10",
    iconBg: "bg-purple-400/20",
    textColor: "text-purple-500",
    borderColor: "border-purple-400/30",
    commission: "2%",
    description: "Elite status access",
  },
  {
    level: 5,
    name: "Diamond",
    price: 2500,
    icon: Gem,
    gradient: "from-cyan-400 to-blue-500",
    bgGradient: "from-cyan-400/20 to-blue-500/10",
    iconBg: "bg-cyan-400/20",
    textColor: "text-cyan-500",
    borderColor: "border-cyan-400/30",
    commission: "1%",
    description: "Maximum privileges",
  },
];

const commissionLevels = [
  { level: 1, name: "Bronze", rate: "8%", requirement: "L1+", color: "text-amber-600", bg: "bg-amber-500/10" },
  { level: 2, name: "Silver", rate: "5%", requirement: "L2+", color: "text-slate-500", bg: "bg-slate-400/10" },
  { level: 3, name: "Gold", rate: "3%", requirement: "L3+", color: "text-yellow-600", bg: "bg-yellow-400/10" },
  { level: 4, name: "Platinum", rate: "2%", requirement: "L4+", color: "text-purple-500", bg: "bg-purple-400/10" },
  { level: 5, name: "Diamond", rate: "1%", requirement: "L5", color: "text-cyan-500", bg: "bg-cyan-400/10" },
];

export default function Upgrade() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl h-56">
        <img 
          src={heroPeople} 
          alt="U-topia community" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative h-full flex items-center px-8 md:px-12">
          <div className="max-w-xl">
            <Badge className="mb-3 bg-white/20 text-white border-white/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Membership Tiers
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Upgrade Your Membership
            </h1>
            <p className="text-white/80">
              Choose your tier and unlock exclusive benefits. Earn stacked commissions from your entire network.
            </p>
          </div>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {tiers.map((tier) => (
          <Card
            key={tier.level}
            className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${tier.borderColor} border-2 bg-gradient-to-b ${tier.bgGradient}`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
            )}
            {tier.level === 5 && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                BEST VALUE
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                <tier.icon className="h-7 w-7 text-white" />
              </div>
              <Badge variant="outline" className="w-fit mx-auto mb-2 text-xs">
                Level {tier.level}
              </Badge>
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <CardDescription className="text-xs">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4 pb-6">
              <div>
                <span className="text-3xl font-bold">${tier.price.toLocaleString()}</span>
                <span className="text-muted-foreground text-sm ml-1">one-time</span>
              </div>
              
              <div className={`${tier.iconBg} rounded-xl p-3`}>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TrendingUp className={`h-4 w-4 ${tier.textColor}`} />
                  <span className="text-xs text-muted-foreground">Commission</span>
                </div>
                <p className={`text-2xl font-bold ${tier.textColor}`}>{tier.commission}</p>
              </div>

              <Button className={`w-full bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white shadow-lg`}>
                Select {tier.name}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Commission Structure */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Commission Structure</CardTitle>
              <CardDescription>How commissions stack up your upline</CardDescription>
            </div>
          </div>
        </div>
        <CardContent className="p-6 space-y-6">
          {/* Rates Visual */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {commissionLevels.map((level) => (
              <div
                key={level.level}
                className={`${level.bg} rounded-xl p-4 text-center border border-border/50`}
              >
                <Badge variant="outline" className="mb-2 text-xs">
                  L{level.level}
                </Badge>
                <p className={`text-lg font-bold ${level.color}`}>{level.name}</p>
                <p className="text-3xl font-bold mt-2">{level.rate}</p>
              </div>
            ))}
          </div>

          <Separator />

          {/* How it works */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              How Stacked Commissions Work
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium mb-1">Instant Payouts</p>
                <p className="text-sm text-muted-foreground">
                  Commissions are paid instantly when any member in your downline purchases a tier.
                </p>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium mb-1">Stacked Upline</p>
                <p className="text-sm text-muted-foreground">
                  Commissions flow up through multiple levels to all qualifying upline members.
                </p>
              </div>

              <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium mb-1">Tier Requirements</p>
                <p className="text-sm text-muted-foreground">
                  Hold equal or higher tier to earn that level's commission rate.
                </p>
              </div>
            </div>

            {/* Example */}
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Example: Gold ($500) Purchase
              </h4>
              <div className="grid gap-2">
                <div className="flex justify-between items-center p-3 bg-background/60 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Direct Referrer (Gold holder)</span>
                  </div>
                  <span className="font-bold text-yellow-600">3% = $15</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/60 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-slate-500" />
                    <span className="text-sm">2nd Upline (Silver+ holder)</span>
                  </div>
                  <span className="font-bold text-slate-500">5% = $25</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/60 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-amber-600" />
                    <span className="text-sm">3rd Upline (Bronze+ holder)</span>
                  </div>
                  <span className="font-bold text-amber-600">8% = $40</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <span className="font-medium">Total Commissions Paid</span>
                  <span className="font-bold text-primary text-lg">$80 (16%)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
