import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Plus, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Filter,
  SortAsc
} from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Launch MVP Product",
    description: "Complete development and launch the minimum viable product to beta users",
    category: "Product",
    priority: "high",
    progress: 75,
    deadline: "2024-12-15",
    status: "on-track",
    assignee: "You",
    collaborators: ["Sarah Chen", "Mike Rodriguez"],
    milestones: [
      { title: "Design mockups", completed: true },
      { title: "Backend API", completed: true },
      { title: "Frontend development", completed: true },
      { title: "Testing & QA", completed: false },
      { title: "Beta launch", completed: false },
    ]
  },
  {
    id: 2,
    title: "Reach $10k Monthly Recurring Revenue",
    description: "Achieve sustainable revenue through customer acquisition and retention",
    category: "Revenue",
    priority: "high",
    progress: 45,
    deadline: "2024-01-30",
    status: "behind",
    assignee: "You",
    collaborators: ["Emma Davis"],
    milestones: [
      { title: "Pricing strategy", completed: true },
      { title: "Sales funnel", completed: true },
      { title: "Marketing campaigns", completed: false },
      { title: "Customer onboarding", completed: false },
      { title: "Revenue tracking", completed: false },
    ]
  },
  {
    id: 3,
    title: "Build Development Team",
    description: "Hire 2 senior developers and 1 designer to scale product development",
    category: "Team",
    priority: "medium",
    progress: 25,
    deadline: "2024-02-15",
    status: "on-track",
    assignee: "You",
    collaborators: ["Alex Johnson"],
    milestones: [
      { title: "Job descriptions", completed: true },
      { title: "Candidate sourcing", completed: false },
      { title: "Interview process", completed: false },
      { title: "Onboarding plan", completed: false },
    ]
  },
];

const categories = ["All", "Product", "Revenue", "Team", "Marketing", "Operations"];
const statuses = ["all", "on-track", "behind", "completed"];

export default function Goals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Goals & Milestones</h1>
          <p className="text-muted-foreground">Track progress toward your entrepreneurial objectives</p>
        </div>
        <Button className="bg-gradient-accent">
          <Plus className="h-4 w-4 mr-2" />
          Create Goal
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Target className="h-4 w-4 mr-2 text-primary" />
              Active Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{goals.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-accent">+2</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
              Avg. Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length)}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+8%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">This quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-amber-500" />
              Due Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">Next 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)} Status
                  </option>
                ))}
              </select>
            </div>
            <Button variant="outline" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort by Deadline
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Goals List */}
      <div className="space-y-4">
        {goals.map((goal) => (
          <Card key={goal.id} className="hover:shadow-soft transition-all duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold">{goal.title}</h3>
                    <Badge variant={goal.priority === 'high' ? 'destructive' : goal.priority === 'medium' ? 'default' : 'secondary'}>
                      {goal.priority} priority
                    </Badge>
                    <Badge variant={goal.status === 'on-track' ? 'default' : goal.status === 'behind' ? 'destructive' : 'secondary'}>
                      {goal.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{goal.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Due {new Date(goal.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{goal.collaborators.length + 1} collaborator(s)</span>
                    </div>
                    <Badge variant="outline">{goal.category}</Badge>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="text-2xl font-bold text-primary">{goal.progress}%</div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>

              {/* Milestones */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Milestones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {goal.milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-2 p-2 rounded-lg ${
                        milestone.completed ? 'bg-green-50 text-green-700' : 'bg-muted/30'
                      }`}
                    >
                      {milestone.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                      )}
                      <span className={`text-xs ${milestone.completed ? 'line-through' : ''}`}>
                        {milestone.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaborators */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Collaborators:</span>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-medium border-2 border-white">
                      JS
                    </div>
                    {goal.collaborators.slice(0, 3).map((collaborator, index) => (
                      <div key={index} className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center text-white text-xs font-medium border-2 border-white">
                        {collaborator.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                    {goal.collaborators.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-white">
                        +{goal.collaborators.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-1" />
                    Update
                  </Button>
                  <Button size="sm">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Mark Complete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}