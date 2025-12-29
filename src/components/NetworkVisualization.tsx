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
            <div className="relative w-72 h-72">
              {/* L5 - Outermost ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/20" />
              
              {/* L4 */}
              <div className="absolute inset-[1.75rem] rounded-full border-2 border-dashed border-muted-foreground/30" />
              
              {/* L3 - Active */}
              <div className="absolute inset-[3.5rem] rounded-full border-2 border-amber-500/60 bg-amber-500/5" />
              
              {/* L2 */}
              <div className="absolute inset-[5.25rem] rounded-full border-2 border-amber-400/80 bg-amber-400/10" />
              
              {/* L1 - Inner ring with golden highlight */}
              <div className="absolute inset-[7rem] rounded-full border-2 border-amber-400 bg-amber-400/15" />
              
              {/* YOU - Center */}
              <div className="absolute inset-[8.5rem] rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/40">
                <span className="text-white font-bold text-base">YOU</span>
              </div>
              
              {/* Level Labels - positioned around the circle */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-muted/80 backdrop-blur-sm text-muted-foreground text-xs font-semibold px-2.5 py-1 rounded-full border border-border">L5</span>
              </div>
              <div className="absolute top-[1.5rem] -right-2">
                <span className="bg-muted/80 backdrop-blur-sm text-muted-foreground text-xs font-semibold px-2.5 py-1 rounded-full border border-border">L4</span>
              </div>
              <div className="absolute top-[3.25rem] -right-3">
                <span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">L3</span>
              </div>
              <div className="absolute top-[5rem] -right-2">
                <span className="bg-amber-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">L2</span>
              </div>
              <div className="absolute top-[6.75rem] -right-1">
                <span className="bg-amber-400 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">L1</span>
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
