import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Search,
  Calendar,
  MapPin,
  Users,
  Bookmark,
  Bell,
  User,
  LogOut,
  TrendingUp,
  Heart,
} from "lucide-react";

// Mock event data
const MOCK_EVENTS = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    date: "2025-11-05",
    time: "10:00 AM",
    mode: "Offline",
    location: "Tech Lab, Building A",
    tags: ["AI", "Technology", "Workshop"],
    capacity: 50,
    registered: 32,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    organizer: "Tech Club",
  },
  {
    id: 2,
    title: "Campus Music Fest 2025",
    date: "2025-11-08",
    time: "6:00 PM",
    mode: "Offline",
    location: "Main Auditorium",
    tags: ["Music", "Entertainment"],
    capacity: 200,
    registered: 156,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
    organizer: "Cultural Committee",
  },
  {
    id: 3,
    title: "Design Thinking Bootcamp",
    date: "2025-11-10",
    time: "2:00 PM",
    mode: "Online",
    location: "Zoom",
    tags: ["Design", "UX", "Workshop"],
    capacity: 100,
    registered: 67,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
    organizer: "Design Society",
  },
  {
    id: 4,
    title: "Entrepreneurship Summit",
    date: "2025-11-12",
    time: "9:00 AM",
    mode: "Offline",
    location: "Conference Hall",
    tags: ["Business", "Entrepreneurship"],
    capacity: 80,
    registered: 45,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400",
    organizer: "E-Cell",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = MOCK_EVENTS.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
              <span className="text-xl font-bold gradient-text hidden sm:inline">
                Campus Unite
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-4">
            <Card className="p-4">
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  For You
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Bookmark className="h-4 w-4" />
                  Saved Events
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  My RSVPs
                </Button>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
                  <p className="font-medium">AI Assistant</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Based on your interests, 5 new events match your profile this week!"
                </p>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View Recommendations
                </Button>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Discover Events</h1>
                <p className="text-muted-foreground">
                  AI-curated events based on your interests
                </p>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search events, tags, or organizers..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  All Events
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  This Week
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Online
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Offline
                </Badge>
              </div>
            </div>

            {/* AI Recommendation Banner */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-primary-foreground animate-glow-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Recommended for You</h3>
                  <p className="text-sm text-muted-foreground">
                    These events match your interests in Technology, Design, and Music
                  </p>
                </div>
              </div>
            </Card>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden card-hover cursor-pointer"
                  onClick={() => navigate(`/event/${event.id}`)}
                >
                  <div className="relative h-48 bg-muted">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-8 w-8 bg-background/80 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <Badge className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm">
                      {event.mode}
                    </Badge>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{event.organizer}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full btn-accent">
                      RSVP Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
