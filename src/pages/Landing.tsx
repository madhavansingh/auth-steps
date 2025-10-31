import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles, Calendar, Users, TrendingUp, Zap, Shield, Search } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">Campus Unite</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
            <Button className="btn-accent" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              AI-Powered Event Discovery
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Your Campus Events,{" "}
            <span className="gradient-text">Personalized</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover events tailored to your interests, manage seamlessly, and never miss what
            matters. Built for students, organizers, and administrators.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button className="btn-hero" onClick={() => navigate("/auth")}>
              Start Discovering Events
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl">
              Learn More
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>5,000+ Events</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>98% Match Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Built for Everyone</h2>
            <p className="text-xl text-muted-foreground">
              Three powerful dashboards, one seamless platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Features */}
            <Card className="p-8 space-y-4 card-hover bg-card border-border/50">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">For Students</h3>
              <p className="text-muted-foreground">
                AI-powered recommendations based on your interests, skills, and campus activities.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized "For You" feed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Smart notifications & reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>RSVP & calendar integration</span>
                </li>
              </ul>
            </Card>

            {/* Organizer Features */}
            <Card className="p-8 space-y-4 card-hover bg-card border-primary/30 shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">For Organizers</h3>
              <p className="text-muted-foreground">
                Create, manage, and promote events with powerful analytics and insights.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Easy event creation workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Real-time RSVP tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>AI-driven engagement insights</span>
                </li>
              </ul>
            </Card>

            {/* Authority Features */}
            <Card className="p-8 space-y-4 card-hover bg-card border-border/50">
              <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-2xl font-semibold">For Authorities</h3>
              <p className="text-muted-foreground">
                Approve events, verify organizers, and monitor campus-wide engagement.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Streamlined approval workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Institution-wide analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Organizer verification system</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto p-12 text-center space-y-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20">
          <h2 className="text-4xl font-bold">Ready to Transform Your Campus Experience?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of students discovering events they love
          </p>
          <Button className="btn-hero" onClick={() => navigate("/auth")}>
            Get Started for Free
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">Campus Unite</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Campus Unite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
