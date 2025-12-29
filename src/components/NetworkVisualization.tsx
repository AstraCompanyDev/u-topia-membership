import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NetworkLevel {
  level: string;
  count: number;
  isActive: boolean;
  radius: number;
  color: string;
  colorLight: string;
}

const networkLevels: NetworkLevel[] = [
  { level: "L1", count: 12, isActive: true, radius: 55, color: "hsl(45, 93%, 47%)", colorLight: "rgba(234, 179, 8, 0.4)" },
  { level: "L2", count: 28, isActive: true, radius: 85, color: "hsl(25, 95%, 53%)", colorLight: "rgba(249, 115, 22, 0.4)" },
  { level: "L3", count: 45, isActive: true, radius: 115, color: "hsl(340, 82%, 52%)", colorLight: "rgba(236, 72, 153, 0.4)" },
  { level: "L4", count: 0, isActive: false, radius: 145, color: "hsl(262, 83%, 58%)", colorLight: "rgba(139, 92, 246, 0.3)" },
  { level: "L5", count: 0, isActive: false, radius: 175, color: "hsl(217, 91%, 60%)", colorLight: "rgba(59, 130, 246, 0.3)" },
];

export default function NetworkVisualization() {
  const centerX = 190;
  const centerY = 190;
  const youRadius = 30;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">My Network</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* SVG Concentric Circles Visualization */}
          <div className="flex items-center justify-center">
            <svg width="380" height="380" viewBox="0 0 380 380" className="overflow-visible">
              {/* Concentric rings - render from outside in */}
              {[...networkLevels].reverse().map((level) => (
                <g key={level.level}>
                  {/* Circle ring */}
                  <circle
                    cx={centerX}
                    cy={centerY}
                    r={level.radius}
                    fill="none"
                    stroke={level.color}
                    strokeWidth={level.isActive ? 3 : 2}
                    strokeOpacity={level.isActive ? 0.9 : 0.35}
                    style={{ filter: level.isActive ? `drop-shadow(0 0 8px ${level.colorLight})` : 'none' }}
                  />
                  {/* Level label - positioned on the right side of each ring */}
                  <g transform={`translate(${centerX + level.radius + 8}, ${centerY})`}>
                    <rect
                      x="-16"
                      y="-12"
                      width="32"
                      height="24"
                      rx="12"
                      fill={level.isActive ? level.color : "hsl(var(--muted))"}
                      style={{ filter: level.isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none' }}
                    />
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fill="white"
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
                    stroke={level.color}
                    strokeWidth="2"
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
                className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                  level.isActive
                    ? "bg-primary/5 hover:bg-primary/10"
                    : "bg-muted/50 border-border hover:bg-muted"
                }`}
                style={{ 
                  borderColor: level.isActive ? level.color : undefined, 
                  borderLeftWidth: level.isActive ? '4px' : undefined,
                  boxShadow: level.isActive ? `0 0 0 0 ${level.colorLight}` : undefined,
                }}
                onMouseEnter={(e) => {
                  if (level.isActive) {
                    e.currentTarget.style.boxShadow = `0 8px 25px -5px ${level.colorLight}`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="text-sm font-medium" style={{ color: level.isActive ? level.color : undefined }}>
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
