import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Calendar,
  TrendingUp,
  LogOut,
  Sparkles,
  FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuthorityDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const stats = [
    { label: "Pending Approvals", value: "8", icon: Clock, color: "text-warning" },
    { label: "Approved Events", value: "142", icon: CheckCircle, color: "text-success" },
    { label: "Active Organizers", value: "34", icon: Users, color: "text-primary" },
    { label: "Total Engagement", value: "12.5K", icon: TrendingUp, color: "text-accent" },
  ];

  const pendingEvents = [
    {
      id: 1,
      title: "Campus Hackathon 2025",
      organizer: "Tech Club",
      category: "Technology",
      date: "2025-11-15",
      capacity: 100,
      description: "24-hour coding competition with prizes",
    },
    {
      id: 2,
      title: "Annual Cultural Fest",
      organizer: "Cultural Committee",
      category: "Entertainment",
      date: "2025-11-20",
      capacity: 500,
      description: "Multi-day cultural celebration",
    },
    {
      id: 3,
      title: "Career Fair 2025",
      organizer: "Placement Cell",
      category: "Professional",
      date: "2025-11-25",
      capacity: 300,
      description: "Meet recruiters from top companies",
    },
  ];

  const handleApprove = (eventId: number, eventTitle: string) => {
    toast({
      title: "Event Approved",
      description: `${eventTitle} has been approved and will be visible to students.`,
    });
  };

  const handleReject = (eventId: number, eventTitle: string) => {
    toast({
      title: "Event Rejected",
      description: `${eventTitle} has been rejected. Organizer will be notified.`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-success flex items-center justify-center">
                <Shield className="h-6 w-6 text-success-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">Campus Unite</span>
                <p className="text-xs text-muted-foreground">Authority Portal</p>
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Authority Dashboard</h1>
          <p className="text-muted-foreground">Review event proposals and monitor campus engagement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* AI Analytics Summary */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-primary-foreground animate-glow-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Institution Insights</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Most Popular Category</p>
                  <p className="font-medium">Technology (38%)</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Peak Engagement Time</p>
                  <p className="font-medium">Weekday Evenings</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Avg. Attendance Rate</p>
                  <p className="font-medium">82%</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pending Approvals */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Pending Event Proposals</h2>
            <Badge className="status-badge-warning">
              <Clock className="h-3 w-3 mr-1" />
              {pendingEvents.length} pending
            </Badge>
          </div>

          {pendingEvents.map((event) => (
            <Card key={event.id} className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Proposed by <span className="font-medium text-foreground">{event.organizer}</span>
                      </p>
                    </div>

                    <p className="text-muted-foreground">{event.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>Capacity: {event.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:min-w-[200px]">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="gap-2 bg-success hover:bg-success/90"
                      onClick={() => handleApprove(event.id, event.title)}
                    >
                      <CheckCircle className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="gap-2"
                      onClick={() => handleReject(event.id, event.title)}
                    >
                      <XCircle className="h-4 w-4" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;
