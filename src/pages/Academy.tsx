import { useState } from "react";
import { GraduationCap, Play, Clock, CheckCircle2, Lock, ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  thumbnail: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  category: "finance" | "blockchain" | "crypto";
  videos: Video[];
}

const modules: Module[] = [
  {
    id: "fin-101",
    title: "Finance Fundamentals",
    description: "Master the basics of personal and corporate finance.",
    category: "finance",
    videos: [
      { id: "f1", title: "Introduction to Financial Markets", duration: "12:30", completed: true, locked: false, thumbnail: "" },
      { id: "f2", title: "Understanding Assets & Liabilities", duration: "18:45", completed: true, locked: false, thumbnail: "" },
      { id: "f3", title: "Investment Strategies for Beginners", duration: "22:10", completed: false, locked: false, thumbnail: "" },
      { id: "f4", title: "Risk Management Essentials", duration: "15:20", completed: false, locked: false, thumbnail: "" },
    ],
  },
  {
    id: "fin-201",
    title: "Advanced Portfolio Management",
    description: "Learn to diversify and manage investment portfolios like a professional.",
    category: "finance",
    videos: [
      { id: "f5", title: "Modern Portfolio Theory", duration: "25:00", completed: false, locked: false, thumbnail: "" },
      { id: "f6", title: "Asset Allocation Strategies", duration: "19:30", completed: false, locked: false, thumbnail: "" },
      { id: "f7", title: "Technical vs Fundamental Analysis", duration: "28:15", completed: false, locked: true, thumbnail: "" },
    ],
  },
  {
    id: "bc-101",
    title: "Blockchain Basics",
    description: "Understand the technology powering the decentralized revolution.",
    category: "blockchain",
    videos: [
      { id: "b1", title: "What is Blockchain?", duration: "14:00", completed: true, locked: false, thumbnail: "" },
      { id: "b2", title: "Consensus Mechanisms Explained", duration: "20:30", completed: false, locked: false, thumbnail: "" },
      { id: "b3", title: "Smart Contracts & dApps", duration: "24:45", completed: false, locked: false, thumbnail: "" },
      { id: "b4", title: "Layer 1 vs Layer 2 Solutions", duration: "17:50", completed: false, locked: true, thumbnail: "" },
    ],
  },
  {
    id: "bc-201",
    title: "DeFi Deep Dive",
    description: "Explore the world of decentralized finance protocols and yield strategies.",
    category: "blockchain",
    videos: [
      { id: "b5", title: "Introduction to DeFi", duration: "16:20", completed: false, locked: false, thumbnail: "" },
      { id: "b6", title: "Liquidity Pools & AMMs", duration: "21:40", completed: false, locked: true, thumbnail: "" },
      { id: "b7", title: "Yield Farming Strategies", duration: "26:10", completed: false, locked: true, thumbnail: "" },
    ],
  },
  {
    id: "cr-101",
    title: "Cryptocurrency Essentials",
    description: "Navigate the crypto landscape with confidence and clarity.",
    category: "crypto",
    videos: [
      { id: "c1", title: "Bitcoin: Digital Gold", duration: "18:00", completed: true, locked: false, thumbnail: "" },
      { id: "c2", title: "Ethereum & the EVM Ecosystem", duration: "22:30", completed: false, locked: false, thumbnail: "" },
      { id: "c3", title: "Altcoins, Tokens & Stablecoins", duration: "19:15", completed: false, locked: false, thumbnail: "" },
      { id: "c4", title: "Crypto Wallets & Security", duration: "15:45", completed: false, locked: false, thumbnail: "" },
    ],
  },
  {
    id: "cr-201",
    title: "Crypto Trading Mastery",
    description: "Technical analysis, chart patterns, and trading psychology for crypto markets.",
    category: "crypto",
    videos: [
      { id: "c5", title: "Reading Candlestick Charts", duration: "20:00", completed: false, locked: false, thumbnail: "" },
      { id: "c6", title: "Support, Resistance & Trends", duration: "23:30", completed: false, locked: true, thumbnail: "" },
      { id: "c7", title: "Managing Emotions in Volatile Markets", duration: "16:50", completed: false, locked: true, thumbnail: "" },
    ],
  },
];

const categories = [
  { key: "all" as const, label: "All Modules" },
  { key: "finance" as const, label: "Finance" },
  { key: "blockchain" as const, label: "Blockchain" },
  { key: "crypto" as const, label: "Cryptocurrency" },
];

const categoryColors: Record<string, string> = {
  finance: "bg-accent text-accent-foreground",
  blockchain: "bg-primary/15 text-primary",
  crypto: "bg-ring/15 text-ring",
};

export default function Academy() {
  const [filter, setFilter] = useState<"all" | "finance" | "blockchain" | "crypto">("all");
  const [openModules, setOpenModules] = useState<string[]>(["fin-101"]);
  const [activeVideo, setActiveVideo] = useState<string | null>("f1");

  const filtered = filter === "all" ? modules : modules.filter((m) => m.category === filter);

  const totalVideos = modules.flatMap((m) => m.videos).length;
  const completedVideos = modules.flatMap((m) => m.videos).filter((v) => v.completed).length;
  const overallProgress = Math.round((completedVideos / totalVideos) * 100);

  const toggleModule = (id: string) => {
    setOpenModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const getModuleProgress = (mod: Module) => {
    const done = mod.videos.filter((v) => v.completed).length;
    return Math.round((done / mod.videos.length) * 100);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Academy</h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Learn Finance, Blockchain &amp; Crypto — at your own pace.
          </p>
        </div>

        <Card className="w-full sm:w-72 border-border">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="flex-1 space-y-1.5">
              <p className="text-xs text-muted-foreground font-medium">Overall Progress</p>
              <Progress value={overallProgress} className="h-2" />
            </div>
            <span className="text-lg font-bold text-foreground">{overallProgress}%</span>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={filter === cat.key ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Modules */}
      <div className="space-y-4">
        {filtered.map((mod) => {
          const isOpen = openModules.includes(mod.id);
          const progress = getModuleProgress(mod);

          return (
            <Collapsible key={mod.id} open={isOpen} onOpenChange={() => toggleModule(mod.id)}>
              <Card className="border-border overflow-hidden">
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors py-4 px-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        {isOpen ? (
                          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <CardTitle className="text-base">{mod.title}</CardTitle>
                            <Badge variant="secondary" className={categoryColors[mod.category]}>
                              {mod.category === "crypto" ? "Crypto" : mod.category === "blockchain" ? "Blockchain" : "Finance"}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{mod.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className="text-xs text-muted-foreground hidden sm:block">
                          {mod.videos.filter((v) => v.completed).length}/{mod.videos.length} lessons
                        </span>
                        <div className="w-20 hidden sm:block">
                          <Progress value={progress} className="h-1.5" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {mod.videos.map((video) => (
                        <button
                          key={video.id}
                          disabled={video.locked}
                          onClick={() => !video.locked && setActiveVideo(video.id)}
                          className={`w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors
                            ${video.locked ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/40 cursor-pointer"}
                            ${activeVideo === video.id ? "bg-primary/5 border-l-2 border-l-primary" : ""}
                          `}
                        >
                          {/* Play / Status icon */}
                          <div className="shrink-0">
                            {video.completed ? (
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                            ) : video.locked ? (
                              <Lock className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Play className="h-4 w-4 text-primary ml-0.5" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className={`text-sm ${video.completed ? "text-muted-foreground" : "text-foreground"} truncate`}>
                              {video.title}
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                            <Clock className="h-3.5 w-3.5" />
                            {video.duration}
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}
