import { useState } from "react";
import { GraduationCap, Play, Clock, CheckCircle2, Lock, ChevronDown, ChevronRight, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import thumbBrand from "@/assets/thumb-brand.jpg";
import thumbDefi from "@/assets/thumb-defi.jpg";
import thumbFunding from "@/assets/thumb-funding.jpg";
import thumbMeeting from "@/assets/thumb-meeting.jpg";
import thumbQa from "@/assets/thumb-qa.jpg";
import thumbReport from "@/assets/thumb-report.jpg";
import thumbRoadmap from "@/assets/thumb-roadmap.jpg";
import thumbWelcome from "@/assets/thumb-welcome.jpg";
import thumbWhitepaper from "@/assets/thumb-whitepaper.jpg";

interface Video {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
  thumbnail: string;
  videoUrl: string;
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
      { id: "f1", title: "Introduction to Financial Markets", duration: "12:30", completed: true, locked: false, thumbnail: thumbWelcome, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
      { id: "f2", title: "Understanding Assets & Liabilities", duration: "18:45", completed: true, locked: false, thumbnail: thumbReport, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
      { id: "f3", title: "Investment Strategies for Beginners", duration: "22:10", completed: false, locked: false, thumbnail: thumbFunding, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
      { id: "f4", title: "Risk Management Essentials", duration: "15:20", completed: false, locked: false, thumbnail: thumbRoadmap, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
    ],
  },
  {
    id: "fin-201",
    title: "Advanced Portfolio Management",
    description: "Learn to diversify and manage investment portfolios like a professional.",
    category: "finance",
    videos: [
      { id: "f5", title: "Modern Portfolio Theory", duration: "25:00", completed: false, locked: false, thumbnail: thumbBrand, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
      { id: "f6", title: "Asset Allocation Strategies", duration: "19:30", completed: false, locked: false, thumbnail: thumbMeeting, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
      { id: "f7", title: "Technical vs Fundamental Analysis", duration: "28:15", completed: false, locked: true, thumbnail: thumbQa, videoUrl: "https://www.youtube.com/embed/Xn7KWR9EOGQ" },
    ],
  },
  {
    id: "bc-101",
    title: "Blockchain Basics",
    description: "Understand the technology powering the decentralized revolution.",
    category: "blockchain",
    videos: [
      { id: "b1", title: "What is Blockchain?", duration: "14:00", completed: true, locked: false, thumbnail: thumbWhitepaper, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
      { id: "b2", title: "Consensus Mechanisms Explained", duration: "20:30", completed: false, locked: false, thumbnail: thumbRoadmap, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
      { id: "b3", title: "Smart Contracts & dApps", duration: "24:45", completed: false, locked: false, thumbnail: thumbDefi, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
      { id: "b4", title: "Layer 1 vs Layer 2 Solutions", duration: "17:50", completed: false, locked: true, thumbnail: thumbBrand, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
    ],
  },
  {
    id: "bc-201",
    title: "DeFi Deep Dive",
    description: "Explore the world of decentralized finance protocols and yield strategies.",
    category: "blockchain",
    videos: [
      { id: "b5", title: "Introduction to DeFi", duration: "16:20", completed: false, locked: false, thumbnail: thumbDefi, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
      { id: "b6", title: "Liquidity Pools & AMMs", duration: "21:40", completed: false, locked: true, thumbnail: thumbFunding, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
      { id: "b7", title: "Yield Farming Strategies", duration: "26:10", completed: false, locked: true, thumbnail: thumbReport, videoUrl: "https://www.youtube.com/embed/SSo_EIwHSd4" },
    ],
  },
  {
    id: "cr-101",
    title: "Cryptocurrency Essentials",
    description: "Navigate the crypto landscape with confidence and clarity.",
    category: "crypto",
    videos: [
      { id: "c1", title: "Bitcoin: Digital Gold", duration: "18:00", completed: true, locked: false, thumbnail: thumbWhitepaper, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
      { id: "c2", title: "Ethereum & the EVM Ecosystem", duration: "22:30", completed: false, locked: false, thumbnail: thumbDefi, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
      { id: "c3", title: "Altcoins, Tokens & Stablecoins", duration: "19:15", completed: false, locked: false, thumbnail: thumbMeeting, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
      { id: "c4", title: "Crypto Wallets & Security", duration: "15:45", completed: false, locked: false, thumbnail: thumbQa, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
    ],
  },
  {
    id: "cr-201",
    title: "Crypto Trading Mastery",
    description: "Technical analysis, chart patterns, and trading psychology for crypto markets.",
    category: "crypto",
    videos: [
      { id: "c5", title: "Reading Candlestick Charts", duration: "20:00", completed: false, locked: false, thumbnail: thumbRoadmap, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
      { id: "c6", title: "Support, Resistance & Trends", duration: "23:30", completed: false, locked: true, thumbnail: thumbBrand, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
      { id: "c7", title: "Managing Emotions in Volatile Markets", duration: "16:50", completed: false, locked: true, thumbnail: thumbWelcome, videoUrl: "https://www.youtube.com/embed/rYQgy8QDEBI" },
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
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filtered = filter === "all" ? modules : modules.filter((m) => m.category === filter);


  const toggleModule = (id: string) => {
    setOpenModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
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
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {mod.videos.map((video) => (
                        <button
                          key={video.id}
                          disabled={video.locked}
                          onClick={() => !video.locked && setSelectedVideo(video)}
                          className={`group relative rounded-xl overflow-hidden border border-border text-left transition-all
                            ${video.locked ? "opacity-50 cursor-not-allowed" : "hover:border-primary/40 hover:shadow-md cursor-pointer"}
                          `}
                        >
                          {/* Thumbnail */}
                          <div className="relative aspect-video bg-muted overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Play overlay */}
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                                <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                              </div>
                            </div>
                            {/* Status badge */}
                            {video.completed && (
                              <div className="absolute top-2 right-2">
                                <CheckCircle2 className="h-5 w-5 text-primary drop-shadow-md" />
                              </div>
                            )}
                            {video.locked && (
                              <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                                <Lock className="h-6 w-6 text-muted-foreground" />
                              </div>
                            )}
                            {/* Duration pill */}
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] font-medium px-1.5 py-0.5 rounded">
                              {video.duration}
                            </div>
                          </div>

                          {/* Title */}
                          <div className="p-3">
                            <p className={`text-sm font-medium leading-snug line-clamp-2 ${video.completed ? "text-muted-foreground" : "text-foreground"}`}>
                              {video.title}
                            </p>
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

      {/* Video Player Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-3xl p-0 gap-0 overflow-hidden">
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="text-base pr-6">{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            {selectedVideo && (
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="p-4 flex items-center justify-between border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {selectedVideo?.duration}
            </div>
            {selectedVideo?.completed && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
              </Badge>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
