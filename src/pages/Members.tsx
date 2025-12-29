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
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      member.status === 'online' ? 'bg-green-500' : 
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold truncate">{member.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{member.role}</p>
                    <p className="text-sm text-primary font-medium truncate">{member.company}</p>
                  </div>
                </div>
                <Badge variant={member.status === 'online' ? 'default' : 'secondary'}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-muted/30 rounded-lg p-2">
                  <div className="text-lg font-bold text-primary">{member.goals}</div>
                  <div className="text-xs text-muted-foreground">Goals</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <div className="text-lg font-bold text-accent">{member.completed}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-2">
                  <div className="text-lg font-bold text-green-600">{member.streak}</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Expertise</p>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

      {/* Member Details Modal/Sidebar could be added here */}
      <Card>
        <CardHeader>
          <CardTitle>Group Statistics</CardTitle>
          <CardDescription>Overview of team performance and engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(members.reduce((acc, m) => acc + (m.completed / m.goals * 100), 0) / members.length)}%
              </div>
              <p className="text-sm text-muted-foreground">Avg. Completion</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(members.reduce((acc, m) => acc + m.streak, 0) / members.length)}
              </div>
              <p className="text-sm text-muted-foreground">Avg. Streak</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}