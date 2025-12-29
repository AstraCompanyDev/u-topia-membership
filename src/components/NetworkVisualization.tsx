import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NetworkLevel {
  level: string;
  count: number;
  isActive: boolean;
  radius: number;
}

const networkLevels: NetworkLevel[] = [
  { level: "L1", count: 12, isActive: true, radius: 65 },
  { level: "L2", count: 28, isActive: true, radius: 90 },
  { level: "L3", count: 45, isActive: true, radius: 115 },
  { level: "L4", count: 0, isActive: false, radius: 140 },
  { level: "L5", count: 0, isActive: false, radius: 165 },
];

export default function NetworkVisualization() {
  const centerX = 180;
  const centerY = 180;
  const youRadius = 35;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">My Network</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* SVG Concentric Circles Visualization */}
          <div className="flex items-center justify-center">
            <svg width="360" height="360" viewBox="0 0 360 360" className="overflow-visible">
              {/* Concentric rings - render from outside in */}
              {[...networkLevels].reverse().map((level) => (
                <g key={level.level}>
                  {/* Circle ring */}
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={level.radius}
                    fill="none"
                    stroke={level.isActive ? "hsl(38, 92%, 50%)" : "hsl(var(--muted-foreground))"}
                    strokeWidth={level.isActive ? 3 : 2}
                    strokeOpacity={level.isActive ? 0.8 : 0.25}
                    className={level.isActive ? "drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" : ""}
                  />
                  {/* Level label - positioned on the right side of each ring */}
                  <g transform={`translate(${centerX + level.radius + 8}, ${centerY})`}>
                    <rect
                      x="-16"
                      y="-12"
                      width="32"
                      height="24"
                      rx="12"
                      fill={level.isActive ? "hsl(38, 92%, 50%)" : "hsl(var(--muted))"}
                      className={level.isActive ? "drop-shadow-md" : ""}
                    />
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fill={level.isActive ? "white" : "hsl(var(--muted-foreground))"}
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {level.level}
                    </text>
                  </g>
                </g>
              ))}

              {/* Center YOU circle */}
              <defs>
                <linearGradient id="youGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(45, 93%, 58%)" />
                  <stop offset="100%" stopColor="hsl(32, 95%, 44%)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx={centerX}
                cy={centerY}
                r={youRadius}
                fill="url(#youGradient)"
                filter="url(#glow)"
              />
              <text
                x={centerX}
                y={centerY + 5}
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                YOU
              </text>

              {/* User count labels - stacked below center */}
              {networkLevels.filter(l => l.isActive).map((level, index) => (
                <g key={`count-${level.level}`} transform={`translate(${centerX}, ${centerY + 55 + (index * 28)})`}>
                  <rect
                    x="-45"
                    y="-12"
                    width="90"
                    height="24"
                    rx="12"
                    fill="hsl(var(--card))"
                    stroke="hsl(38, 92%, 50%)"
                    strokeWidth="2"
                    strokeOpacity={1 - (index * 0.2)}
                  />
                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    fill="hsl(var(--foreground))"
                    fontSize="12"
                    fontWeight="600"
                  >
                    {level.count} users
                  </text>
                </g>
              ))}
            </svg>
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
