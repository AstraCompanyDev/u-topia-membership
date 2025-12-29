import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Calendar,
  Newspaper,
  ExternalLink,
  Wallet,
  Building2,
  ArrowUpRight,
  Image,
  Copy,
  DollarSign,
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import utopiaLifestyle from "@/assets/utopia-lifestyle.avif";
import cardPortfolio from "@/assets/card-portfolio.jpg";
import cardShares from "@/assets/card-shares.jpg";
import cardNetwork from "@/assets/card-network.jpg";
import cardValuation from "@/assets/card-valuation.jpg";
import heroPeople from "@/assets/hero-people.jpg";
import avatarVictoria from "@/assets/avatar-victoria.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import avatarElena from "@/assets/avatar-elena.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarAisha from "@/assets/avatar-aisha.jpg";
import avatarRobert from "@/assets/avatar-robert.jpg";

const connections = [
  { id: 1, name: "Victoria Sterling", role: "Founding Member", avatar: avatarVictoria, status: "online" },
  { id: 2, name: "Marcus Chen", role: "Early Investor", avatar: avatarMarcus, status: "online" },
  { id: 3, name: "Elena Vasquez", role: "Board Advisor", avatar: avatarElena, status: "offline" },
  { id: 4, name: "James Whitmore", role: "Strategic Partner", avatar: avatarJames, status: "online" },
  { id: 5, name: "Aisha Patel", role: "Founding Member", avatar: avatarAisha, status: "offline" },
  { id: 6, name: "Robert Nakamura", role: "Early Investor", avatar: avatarRobert, status: "online" },
];

const newsUpdates = [
  { 
    id: 1, 
    title: "Q4 2024 Shareholder Report Released", 
    excerpt: "Review our latest quarterly performance metrics and strategic initiatives for the upcoming year.",
    date: "Dec 8, 2024",
    type: "report"
  },
  { 
    id: 2, 
    title: "U-topia Secures Series B Funding", 
    excerpt: "We're thrilled to announce $50M in Series B funding to accelerate our mission of banking for the future.",
    date: "Dec 5, 2024",
    type: "announcement"
  },
  { 
    id: 3, 
    title: "New Digital Asset Features Coming Q1 2025", 
    excerpt: "Exciting new cryptocurrency integration and DeFi features are on the roadmap for early next year.",
    date: "Dec 2, 2024",
    type: "product"
  },
  { 
    id: 4, 
    title: "Annual Shareholder Meeting - Save the Date", 
    excerpt: "Mark your calendars for our virtual annual meeting on January 15th, 2025.",
    date: "Nov 28, 2024",
    type: "event"
  },
];

const upcomingEvents = [
  { title: "Shareholder Q&A Session", date: "Dec 12, 3:00 PM", type: "meeting" },
  { title: "Product Roadmap Preview", date: "Dec 18, 10:00 AM", type: "webinar" },
  { title: "Annual Meeting", date: "Jan 15, 2:00 PM", type: "event" },
];

export default function Dashboard() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleViewAllConnections = () => {
    navigate("/members");
  };

  const handleOpenMessages = () => {
    navigate("/messages");
  };

  const handleReadMore = (newsId: number) => {
    toast({
      title: "Opening Article",
      description: "Full article view coming soon.",
    });
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl h-56">
        <img 
          src={heroPeople} 
          alt="U-topia community" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative h-full flex items-center px-8">
          <div className="max-w-2xl">
            <Badge className="mb-3 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Private Shareholder Portal
            </Badge>
            <h1 className="text-3xl font-bold mb-2 text-white">Welcome to U-topia Shareholder Portal</h1>
            <p className="text-lg text-white/90 mb-4">
              Building the bank of the future, together. Access exclusive updates, connect with fellow shareholders, and shape our journey.
            </p>
            <div className="flex gap-3">
              <Button className="bg-white text-black hover:bg-white/90" onClick={handleOpenMessages}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Join Discussion
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                <ExternalLink className="h-4 w-4 mr-2" />
                Investor Portal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Portfolio Value Card */}
        <div className="relative overflow-hidden rounded-xl h-40 group">
          <img 
            src={cardPortfolio} 
            alt="Portfolio background" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">Portfolio Value</span>
              <Wallet className="h-5 w-5 text-white/70" />
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$124,500</div>
              <p className="text-sm text-white/80 flex items-center mt-1">
                <ArrowUpRight className="h-4 w-4 text-emerald-400 mr-1" />
                <span className="text-emerald-400 font-medium">+12.5%</span>
                <span className="ml-1">since inception</span>
              </p>
            </div>
          </div>
        </div>

        {/* Share Holdings Card */}
        <div className="relative overflow-hidden rounded-xl h-40 group">
          <img 
            src={cardShares} 
            alt="Shares background" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">Share Holdings</span>
              <Building2 className="h-5 w-5 text-white/70" />
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2,500</div>
              <p className="text-sm text-white/80 mt-1">Class A Shares</p>
            </div>
          </div>
        </div>

        {/* Network Card */}
        <div className="relative overflow-hidden rounded-xl h-40 group">
          <img 
            src={cardNetwork} 
            alt="Network background" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">Network</span>
              <Users className="h-5 w-5 text-white/70" />
            </div>
            <div>
              <div className="text-3xl font-bold text-white">847</div>
              <p className="text-sm text-white/80 mt-1">Fellow Shareholders</p>
            </div>
          </div>
        </div>

        {/* Company Valuation Card */}
        <div className="relative overflow-hidden rounded-xl h-40 group">
          <img 
            src={cardValuation} 
            alt="Valuation background" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="relative h-full p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90">Company Valuation</span>
              <TrendingUp className="h-5 w-5 text-white/70" />
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$180M</div>
              <p className="text-sm text-white/80 flex items-center mt-1">
                <ArrowUpRight className="h-4 w-4 text-emerald-400 mr-1" />
                <span className="text-emerald-400 font-medium">+45%</span>
                <span className="ml-1">YoY</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest News & Updates - Takes 2 columns */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5" />
                  Latest News & Updates
                </CardTitle>
                <CardDescription>Stay informed about U-topia's progress</CardDescription>
              </div>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Featured Video */}
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/L39ezmt-UOc"
                  title="U-topia Featured Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Featured</Badge>
                <h4 className="font-semibold text-lg">Welcome to U-topia</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Discover how we're building the bank of the future for our shareholders.
                </p>
            </div>

            {/* Image Post Update */}
            <div className="rounded-xl overflow-hidden border border-border bg-card group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={utopiaLifestyle}
                  alt="U-topia App Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    <Image className="h-3 w-3 mr-1" />
                    Photo Update
                  </Badge>
                  <span className="text-xs text-muted-foreground">Dec 9, 2024</span>
                </div>
                <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">U-topia App Now Live</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Experience seamless banking with our newly launched mobile app. Traditional and non-custodial accounts, all in one place.
                </p>
              </div>
            </div>
            </div>

            {newsUpdates.map((news) => (
              <div 
                key={news.id} 
                className="p-4 rounded-lg border bg-card hover:bg-muted/30 transition-colors cursor-pointer group"
                onClick={() => handleReadMore(news.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">
                        {news.type === 'report' && 'Report'}
                        {news.type === 'announcement' && 'Announcement'}
                        {news.type === 'product' && 'Product'}
                        {news.type === 'event' && 'Event'}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{news.date}</span>
                    </div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{news.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{news.excerpt}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Your Referral Code */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Copy className="h-4 w-4" />
                Your Referral Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-muted rounded-lg px-4 py-3 font-mono text-lg font-semibold tracking-wider">
                  UTOPIA-2847X
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    navigator.clipboard.writeText("UTOPIA-2847X");
                    toast({
                      title: "Copied!",
                      description: "Referral code copied to clipboard.",
                    });
                  }}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Share this code to earn commissions on referrals
              </p>
            </CardContent>
          </Card>

          {/* Available to Withdraw */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Available to Withdraw
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">$1,250.00</div>
              <p className="text-sm text-muted-foreground mt-1">From referral commissions</p>
              <Button className="w-full mt-4" onClick={() => {
                toast({
                  title: "Withdrawal Requested",
                  description: "Your withdrawal request has been submitted.",
                });
              }}>
                <Wallet className="h-4 w-4 mr-2" />
                Withdraw Funds
              </Button>
            </CardContent>
          </Card>

          {/* Your Connections */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Your Connections</CardTitle>
                <Button variant="ghost" size="sm" onClick={handleViewAllConnections}>
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {connections.slice(0, 5).map((connection) => (
                  <div key={connection.id} className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={connection.avatar || undefined} />
                        <AvatarFallback className="bg-gradient-primary text-white text-xs">
                          {connection.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span 
                        className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card ${
                          connection.status === 'online' ? 'bg-green-500' : 'bg-muted-foreground'
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{connection.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{connection.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => {
                toast({
                  title: "Calendar Coming Soon",
                  description: "Full event calendar will be available soon!",
                });
              }}>
                <Calendar className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
