import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  ArrowUp
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const goals = [
  { id: 1, title: "Launch MVP", progress: 75, deadline: "Dec 15", status: "on-track" },
  { id: 2, title: "Reach $10k MRR", progress: 45, deadline: "Jan 30", status: "behind" },
  { id: 3, title: "Hire 2 developers", progress: 25, deadline: "Feb 15", status: "on-track" },
];

const recentActivity = [
  { user: "Sarah Chen", action: "completed goal", target: "Product roadmap v2", time: "2 hours ago" },
  { user: "Mike Rodriguez", action: "shared update", target: "Weekly metrics", time: "4 hours ago" },
  { user: "Alex Johnson", action: "joined channel", target: "#wins-celebrations", time: "6 hours ago" },
  { user: "Emma Davis", action: "uploaded file", target: "Market research.pdf", time: "1 day ago" },
];

const upcomingEvents = [
  { title: "Weekly Check-in", date: "Today, 3:00 PM", type: "meeting" },
  { title: "Goal Review", date: "Tomorrow, 10:00 AM", type: "review" },
  { title: "Guest Speaker: YC Partner", date: "Friday, 2:00 PM", type: "event" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          <div className="relative h-full flex items-center px-8">
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-lg opacity-90">Let's crush those goals together 🚀</p>
              <Button className="mt-4 bg-white text-primary hover:bg-white/90">
                <Plus className="h-4 w-4 mr-2" />
                Set New Goal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent font-medium">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73%</div>
            <p className="text-xs text-muted-foreground">
              <ArrowUp className="inline h-3 w-3 text-accent" />
              <span className="text-accent font-medium">+5%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 online now</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages Today</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-accent font-medium">+12</span> from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Current Goals</CardTitle>
            <CardDescription>Your active accountability targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {goals.map((goal) => (
              <div key={goal.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      goal.status === 'on-track' ? 'bg-green-500' : 
                      goal.status === 'behind' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                    <h4 className="font-medium">{goal.title}</h4>
                  </div>
                  <Badge variant={goal.status === 'on-track' ? 'default' : 'secondary'}>
                    Due {goal.deadline}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add New Goal
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>What's happening in your group</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-muted-foreground">{activity.action}</span>{' '}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Don't miss these important dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                  <div className="flex-shrink-0">
                    {event.type === 'meeting' && <Calendar className="h-4 w-4 text-primary" />}
                    {event.type === 'review' && <CheckCircle className="h-4 w-4 text-accent" />}
                    {event.type === 'event' && <Clock className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <Calendar className="h-4 w-4 mr-2" />
              View Full Calendar
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button className="h-auto p-4 flex flex-col items-center space-y-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm">Send Update</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Target className="h-5 w-5" />
                <span className="text-sm">Track Goal</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">Invite Member</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">Get Help</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}