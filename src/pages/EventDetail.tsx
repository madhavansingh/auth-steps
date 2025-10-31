import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Share2,
  Bookmark,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock event detail (in real app, fetch based on id)
  const event = {
    title: "AI & Machine Learning Workshop",
    date: "2025-11-05",
    time: "10:00 AM - 4:00 PM",
    mode: "Offline",
    location: "Tech Lab, Building A, Floor 3",
    tags: ["AI", "Technology", "Workshop"],
    capacity: 50,
    registered: 32,
    price: "Free",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    organizer: "Tech Club",
    description:
      "Join us for an intensive workshop on AI and Machine Learning fundamentals. Learn about neural networks, deep learning, and practical applications. This hands-on session will cover popular frameworks like TensorFlow and PyTorch. Perfect for students interested in AI/ML careers.",
    highlights: [
      "Hands-on coding sessions",
      "Industry expert speakers",
      "Certificates for participants",
      "Networking opportunities",
      "Free learning materials",
    ],
    requirements: ["Laptop required", "Basic Python knowledge", "Enthusiasm to learn"],
  };

  const handleRSVP = () => {
    toast({
      title: "RSVP Confirmed!",
      description: "You're registered for this event. Check your email for details.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm">
              {event.mode}
            </Badge>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
                <p className="text-lg text-muted-foreground">
                  Organized by <span className="font-medium text-foreground">{event.organizer}</span>
                </p>
              </div>

              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                <div>
                  <h3 className="font-semibold mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {event.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Right Column - RSVP Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 space-y-6 sticky top-24">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Date & Time</p>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Capacity</p>
                      <p className="text-sm text-muted-foreground">
                        {event.registered}/{event.capacity} registered
                      </p>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${(event.registered / event.capacity) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Price</p>
                      <p className="text-sm text-muted-foreground">{event.price}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full btn-hero" onClick={handleRSVP}>
                    RSVP Now
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="gap-2">
                      <Bookmark className="h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-center text-muted-foreground">
                    Registration confirmation will be sent to your email
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
