import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Target,
  TrendingUp,
  Award,
  Clock,
  MapPin,
} from "lucide-react";

const members = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechStart AI",
    avatar: "SC",
    status: "online",
    goals: 8,
    completed: 6,
    streak: 12,
    location: "San Francisco, CA",
    joinDate: "Jan 2024",
    bio: "Building AI-powered productivity tools. Previously at Google and Meta.",
    expertise: ["AI/ML", "Product Strategy", "Team Building"],
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Co-founder",
    company: "GreenTech Solutions",
    avatar: "MR",
    status: "online",
    goals: 5,
    completed: 3,
    streak: 8,
    location: "Austin, TX",
    joinDate: "Feb 2024",
    bio: "Sustainable technology entrepreneur focused on clean energy solutions.",
    expertise: ["Clean Energy", "Hardware", "Fundraising"],
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Solo Founder",
    company: "DevTools Pro",
    avatar: "AJ",
    status: "away",
    goals: 12,
    completed: 10,
    streak: 25,
    location: "New York, NY",
    joinDate: "Dec 2023",
    bio: "Building developer tools that make coding more efficient and enjoyable.",
    expertise: ["Developer Tools", "SaaS", "Growth Hacking"],
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Founder",
    company: "EduTech Innovations",
    avatar: "ED",
    status: "offline",
    goals: 7,
    completed: 4,
    streak: 5,
    location: "London, UK",
    joinDate: "Mar 2024",
    bio: "Revolutionizing online education with immersive learning experiences.",
    expertise: ["EdTech", "UX Design", "Content Strategy"],
  },
  {
    id: 5,
    name: "David Kim",
    role: "CTO & Co-founder",
    company: "HealthTrack",
    avatar: "DK",
    status: "online",
    goals: 9,
    completed: 7,
    streak: 15,
    location: "Seattle, WA",
    joinDate: "Jan 2024",
    bio: "Digital health platform connecting patients with personalized care.",
    expertise: ["HealthTech", "Mobile Development", "Data Science"],
  },
];

export default function Members() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Team Members</h1>
        <p className="text-muted-foreground">Connect and collaborate with fellow entrepreneurs</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Role</Button>
            <Button variant="outline">Sort by Activity</Button>
          </div>
        </CardContent>
      </Card>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="hover:shadow-elevated transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                    member.status === 'online' ? 'bg-green-500' : 
                    member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold truncate">{member.name}</h3>
                    <Badge variant={member.status === 'online' ? 'default' : 'secondary'} className="flex-shrink-0">
                      {member.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-primary font-medium">{member.company}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Group Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Group Statistics</CardTitle>
          <CardDescription>Overview of team engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{members.length}</div>
              <p className="text-sm text-muted-foreground">Total Members</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">
                {members.filter(m => m.status === 'online').length}
              </div>
              <p className="text-sm text-muted-foreground">Online Now</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}