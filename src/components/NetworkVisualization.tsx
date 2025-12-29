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
        {/* Concentric Circles Visualization */}
        <div className="relative flex items-center justify-center py-8">
          <div className="relative w-64 h-64">
            {/* L5 - Outermost ring */}
            <div className="absolute inset-0 rounded-full border border-muted-foreground/20" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2">
              <span className="bg-muted text-muted-foreground text-xs font-medium px-2 py-0.5 rounded-full">L5</span>
            </div>
            
            {/* L4 */}
            <div className="absolute inset-6 rounded-full border border-muted-foreground/30" />
            <div className="absolute top-5 right-4">
              <span className="bg-muted text-muted-foreground text-xs font-medium px-2 py-0.5 rounded-full">L4</span>
            </div>
            
            {/* L3 - Active */}
            <div className="absolute inset-12 rounded-full border-2 border-amber-500" />
            <div className="absolute top-10 right-2">
              <span className="bg-amber-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">L3</span>
            </div>
            
            {/* L2 */}
            <div className="absolute inset-[4.5rem] rounded-full border border-muted-foreground/40" />
            <div className="absolute top-16 left-1/2 -translate-x-1/2 translate-y-2">
              <span className="bg-muted text-muted-foreground text-xs font-medium px-2 py-0.5 rounded-full">L2</span>
            </div>
            
            {/* L1 - Inner ring with golden highlight */}
            <div className="absolute inset-[6rem] rounded-full border-2 border-amber-400" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 translate-y-4">
              <span className="bg-amber-400 text-white text-xs font-medium px-2 py-0.5 rounded-full">L1</span>
            </div>
            
            {/* YOU - Center */}
            <div className="absolute inset-[7.5rem] rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <span className="text-white font-bold text-sm">YOU</span>
            </div>
            
            {/* User count labels */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
              <span className="bg-card/80 backdrop-blur-sm border border-border text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                12 users
              </span>
              <span className="bg-card/80 backdrop-blur-sm border border-border text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                28 users
              </span>
              <span className="bg-card/80 backdrop-blur-sm border border-border text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                45 users
              </span>
            </div>
          </div>
        </div>
        
        {/* Level Stats */}
        <div className="grid grid-cols-5 gap-2 mt-4">
          {networkLevels.map((level) => (
            <div
              key={level.level}
              className={`text-center p-3 rounded-lg border transition-colors ${
                level.isActive
                  ? "bg-primary/5 border-primary/20"
                  : "bg-muted/50 border-border"
              }`}
            >
              <span className={`text-xs font-medium ${level.isActive ? "text-primary" : "text-muted-foreground"}`}>
                {level.level}
              </span>
              <p className={`text-xl font-bold mt-1 ${level.isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {level.count}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
