import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NetworkLevel {
  level: string;
  count: number;
  isActive: boolean;
}

const networkLevels: NetworkLevel[] = [
  { level: "L1", count: 12, isActive: true },
  { level: "L2", count: 28, isActive: true },
  { level: "L3", count: 45, isActive: true },
  { level: "L4", count: 0, isActive: false },
  { level: "L5", count: 0, isActive: false },
];

export default function NetworkVisualization() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">My Network</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Concentric Circles Visualization - Left Column */}
          <div className="relative flex items-center justify-center py-6">
            <div className="relative w-80 h-80">
              {/* L5 - Outermost ring */}
              <div className="absolute inset-0 rounded-full border-2 border-muted-foreground/30" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-muted text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border shadow-sm">L5</span>
              </div>
              
              {/* L4 */}
              <div className="absolute inset-8 rounded-full border-2 border-muted-foreground/40" />
              <div className="absolute top-6 right-3 translate-x-1/2">
                <span className="bg-muted text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border shadow-sm">L4</span>
              </div>
              
              {/* L3 - Active */}
              <div className="absolute inset-16 rounded-full border-[3px] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
              <div className="absolute top-[3.5rem] right-0 translate-x-1/2">
                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">L3</span>
              </div>
              
              {/* L2 */}
              <div className="absolute inset-24 rounded-full border-[3px] border-amber-400" />
              <div className="absolute top-[5.5rem] right-2 translate-x-1/2">
                <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">L2</span>
              </div>
              
              {/* L1 - Inner ring */}
              <div className="absolute inset-32 rounded-full border-[3px] border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.4)]" />
              <div className="absolute top-[7.5rem] right-4 translate-x-1/2">
                <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">L1</span>
              </div>
              
              {/* YOU - Center */}
              <div className="absolute inset-[10rem] rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/50">
                <span className="text-white font-bold text-lg">YOU</span>
              </div>
              
              {/* User count labels - positioned clearly below center */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="bg-card border-2 border-amber-400 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  12 users
                </span>
                <span className="bg-card border-2 border-amber-400/70 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  28 users
                </span>
                <span className="bg-card border-2 border-amber-500/60 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  45 users
                </span>
              </div>
            </div>
          </div>
          
          {/* Level Stats - Right Column */}
          <div className="grid grid-cols-2 gap-3">
            {networkLevels.map((level) => (
              <div
                key={level.level}
                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  level.isActive
                    ? "bg-primary/5 border-primary/20"
                    : "bg-muted/50 border-border"
                }`}
              >
                <span className={`text-sm font-medium ${level.isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {level.level}
                </span>
                <p className={`text-2xl font-bold ${level.isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {level.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
