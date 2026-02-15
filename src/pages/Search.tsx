import { Search, Info, DollarSign, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Information",
    description: "Learn about U-topia's ecosystem, governance, and community resources.",
    icon: Info,
    gradient: "from-accent to-accent/70",
  },
  {
    title: "Earnings",
    description: "Track your rewards, commissions, and network earnings in one place.",
    icon: DollarSign,
    gradient: "from-primary to-primary/70",
  },
  {
    title: "Explore",
    description: "Discover new features, partnerships, and opportunities across the platform.",
    icon: Compass,
    gradient: "from-ring to-ring/70",
  },
];

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center pt-16 px-4">
      {/* Search */}
      <div className="w-full max-w-2xl mb-12">
        <h1 className="text-3xl font-bold text-center mb-6 text-foreground">
          What are you looking for?
        </h1>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-shadow"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-border"
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5`}>
                <card.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2">{card.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
