import { useState, useRef } from "react";
import { GraduationCap, Play, Clock, CheckCircle2, Lock, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
  { key: "all" as const, label: "All" },
  { key: "finance" as const, label: "Finance" },
  { key: "blockchain" as const, label: "Blockchain" },
  { key: "crypto" as const, label: "Crypto" },
];

function ModuleRow({ mod, onSelect }: { mod: Module; onSelect: (v: Video) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-semibold text-foreground">{mod.title}</h2>
        <div className="flex gap-1">
          <button onClick={() => scroll("left")} className="p-1.5 rounded-full hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scroll("right")} className="p-1.5 rounded-full hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {mod.videos.map((video) => (
          <button
            key={video.id}
            disabled={video.locked}
            onClick={() => !video.locked && onSelect(video)}
            className={`group relative flex-shrink-0 w-[220px] rounded-lg overflow-hidden transition-all duration-300
              ${video.locked ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:scale-105 hover:z-10 hover:shadow-xl hover:shadow-black/20"}
            `}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-muted overflow-hidden rounded-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play button on hover */}
              {!video.locked && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="h-11 w-11 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
              )}

              {/* Completed badge */}
              {video.completed && (
                <div className="absolute top-2 right-2">
                  <CheckCircle2 className="h-5 w-5 text-accent drop-shadow-md" />
                </div>
              )}

              {/* Lock overlay */}
              {video.locked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-muted-foreground" />
                </div>
              )}

              {/* Duration */}
              <div className="absolute bottom-8 right-2 bg-black/70 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                {video.duration}
              </div>

              {/* Title inside thumbnail */}
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-xs font-medium text-white leading-tight line-clamp-2 drop-shadow-md">
                  {video.title}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Academy() {
  const [filter, setFilter] = useState<"all" | "finance" | "blockchain" | "crypto">("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filtered = filter === "all" ? modules : modules.filter((m) => m.category === filter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Academy</h1>
            <p className="text-muted-foreground text-xs">Learn Finance, Blockchain & Crypto</p>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1.5 bg-muted/50 rounded-full p-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${filter === cat.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Module rows */}
      <div className="space-y-6">
        {filtered.map((mod) => (
          <ModuleRow key={mod.id} mod={mod} onSelect={setSelectedVideo} />
        ))}
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
