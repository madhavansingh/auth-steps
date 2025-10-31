import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Calendar,
  Users,
  TrendingUp,
  Eye,
  Edit,
  BarChart3,
  LogOut,
  Sparkles,
} from "lucide-react";

const OrganizerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Events", value: "12", icon: Calendar, color: "text-primary" },
    { label: "Total RSVPs", value: "487", icon: Users, color: "text-accent" },
    { label: "Avg. Attendance", value: "85%", icon: TrendingUp, color: "text-success" },
    { label: "Total Views", value: "2.3K", icon: Eye, color: "text-warning" },
  ];

  const myEvents = [
    {
      id: 1,
      title: "AI Workshop Series",
      status: "approved",
      date: "2025-11-05",
      rsvps: 45,
      capacity: 50,
    },
    {
      id: 2,
      title: "Campus Hackathon 2025",
      status: "pending",
      date: "2025-11-15",
      rsvps: 0,
      capacity: 100,
    },
    {
      id: 3,
      title: "Tech Talk: Future of AI",
      status: "approved",
      date: "2025-11-20",
      rsvps: 67,
      capacity: 80,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">Campus Unite</span>
                <p className="text-xs text-muted-foreground">Organizer Portal</p>
              </div>
            </div>

            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Organizer Dashboard</h1>
            <p className="text-muted-foreground">Manage your events and track engagement</p>
          </div>
          <Button className="btn-accent gap-2" onClick={() => navigate("/organizer/create")}>
            <Plus className="h-5 w-5" />
            Create Event
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* AI Insights */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-primary-foreground animate-glow-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">AI Insights</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Your AI Workshop attracted 45% more RSVPs than similar events</li>
                <li>• Best posting time: Tuesday 6-8 PM (based on engagement patterns)</li>
                <li>• Recommended tags for your next event: "Machine Learning", "Hands-on"</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Events List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">My Events</h2>

          {myEvents.map((event) => (
            <Card key={event.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <Badge
                      className={
                        event.status === "approved"
                          ? "status-badge-approved"
                          : event.status === "pending"
                          ? "status-badge-pending"
                          : "status-badge-rejected"
                      }
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>
                        {event.rsvps}/{event.capacity} RSVPs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Analytics
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
