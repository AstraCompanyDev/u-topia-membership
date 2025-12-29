import { Check, Crown, Gem, Medal, Shield, Star, Zap, ArrowRight, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const tiers = [
  {
    level: 1,
    name: "Bronze",
    price: 100,
    icon: Medal,
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-600",
    commission: "8%",
    description: "Start your journey with foundational access",
  },
  {
    level: 2,
    name: "Silver",
    price: 250,
    icon: Shield,
    color: "from-slate-400 to-slate-600",
    bgColor: "bg-slate-400/10",
    borderColor: "border-slate-400/30",
    textColor: "text-slate-500",
    commission: "5%",
    description: "Expand your network and earning potential",
  },
  {
    level: 3,
    name: "Gold",
    price: 500,
    icon: Star,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    textColor: "text-yellow-600",
    commission: "3%",
    description: "Unlock premium features and higher rewards",
  },
  {
    level: 4,
    name: "Platinum",
    price: 1000,
    icon: Crown,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
    textColor: "text-purple-500",
    commission: "2%",
    description: "Elite status with exclusive benefits",
  },
  {
    level: 5,
    name: "Diamond",
    price: 2500,
    icon: Gem,
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/30",
    textColor: "text-cyan-500",
    commission: "1%",
    description: "Maximum tier with ultimate privileges",
  },
];

const commissionLevels = [
  { level: 1, name: "Bronze", rate: "8%", requirement: "L1+", color: "text-amber-600" },
  { level: 2, name: "Silver", rate: "5%", requirement: "L2+", color: "text-slate-500" },
  { level: 3, name: "Gold", rate: "3%", requirement: "L3+", color: "text-yellow-600" },
  { level: 4, name: "Platinum", rate: "2%", requirement: "L4+", color: "text-purple-500" },
  { level: 5, name: "Diamond", rate: "1%", requirement: "L5", color: "text-cyan-500" },
];

export default function Upgrade() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <Badge variant="outline" className="mb-4">
          <Zap className="h-3 w-3 mr-1" />
          Membership Packages
        </Badge>
        <h1 className="text-4xl font-bold mb-3">Upgrade Your Membership</h1>
        <p className="text-muted-foreground text-lg">
          Choose your tier and unlock exclusive benefits. Higher tiers earn stacked commissions from your entire downline.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {tiers.map((tier) => (
          <Card
            key={tier.level}
            className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${tier.borderColor} border-2`}
          >
            {tier.level === 5 && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                BEST VALUE
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-3 shadow-lg`}>
                <tier.icon className="h-8 w-8 text-white" />
              </div>
              <Badge variant="secondary" className="w-fit mx-auto mb-2">
                Level {tier.level}
              </Badge>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription className="text-sm">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <span className="text-4xl font-bold">${tier.price.toLocaleString()}</span>
                <span className="text-muted-foreground ml-1">one-time</span>
              </div>
              
              <div className={`${tier.bgColor} rounded-lg p-3`}>
                <p className="text-sm text-muted-foreground">Earns commission</p>
                <p className={`text-2xl font-bold ${tier.textColor}`}>{tier.commission}</p>
                <p className="text-xs text-muted-foreground">on downline purchases</p>
              </div>

              <Button className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white`}>
                Select {tier.name}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Commission Structure */}
      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Commission Structure</CardTitle>
              <CardDescription>How commissions stack up your upline</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Rates Table */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {commissionLevels.map((level) => (
              <div
                key={level.level}
                className="bg-muted/30 rounded-xl p-4 text-center border"
              >
                <Badge variant="outline" className="mb-2">
                  Level {level.level}
                </Badge>
                <p className={`text-xl font-bold ${level.color}`}>{level.name}</p>
                <p className="text-3xl font-bold mt-2">{level.rate}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Requires {level.requirement}
                </p>
              </div>
            ))}
          </div>

          <Separator />

          {/* How it works */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">How Stacked Commissions Work</h3>
            <div className="bg-muted/30 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Instant Payouts</p>
                  <p className="text-sm text-muted-foreground">
                    Commissions are paid instantly when any member in your downline purchases a tier.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Stacked Up the Upline</p>
                  <p className="text-sm text-muted-foreground">
                    Commissions flow up through multiple levels. For example, a Level 3 (Gold) purchase pays: 3% to direct referrer (if L3+), 5% to their upline (if L2+), and 8% to higher upline (if L1+).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Tier Requirements</p>
                  <p className="text-sm text-muted-foreground">
                    You must hold an equal or higher tier to earn that level's commission. A Bronze holder earns 8% on L1 purchases, but needs Silver to earn on L2 purchases, and so on.
                  </p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Example Scenario
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                A new member purchases <span className="font-semibold text-yellow-600">Gold ($500)</span>. Here's how commissions are distributed:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-background/50 rounded-lg">
                  <span className="text-sm">Direct Referrer (Gold holder)</span>
                  <span className="font-semibold text-yellow-600">3% = $15</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-background/50 rounded-lg">
                  <span className="text-sm">2nd Upline (Silver+ holder)</span>
                  <span className="font-semibold text-slate-500">5% = $25</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-background/50 rounded-lg">
                  <span className="text-sm">3rd Upline (Bronze+ holder)</span>
                  <span className="font-semibold text-amber-600">8% = $40</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center p-2 bg-primary/10 rounded-lg">
                  <span className="text-sm font-medium">Total Commissions Paid</span>
                  <span className="font-bold text-primary">$80 (16%)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
