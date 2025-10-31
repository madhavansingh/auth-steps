import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Sparkles, User, GraduationCap, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const INTERESTS = [
  "Technology", "AI/ML", "Design", "Music", "Art", "Sports",
  "Business", "Entrepreneurship", "Photography", "Dance",
  "Literature", "Science", "Coding", "Gaming", "Social"
];

const SKILLS = [
  "Web Development", "App Development", "UI/UX Design", "Data Science",
  "Machine Learning", "Graphic Design", "Video Editing", "Public Speaking",
  "Content Writing", "Marketing", "Leadership", "Event Management"
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleComplete = () => {
    toast({
      title: "Profile completed!",
      description: "Your AI assistant is now learning your preferences.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6 animate-scale-in">
        {/* Progress Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="h-7 w-7 text-primary-foreground animate-glow-pulse" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Complete Your Profile</h1>
          <p className="text-muted-foreground">
            Help our AI understand your preferences
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-20 rounded-full transition-all ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <Card className="p-8">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Basic Information</h2>
                  <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Mobile Number</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>College Name</Label>
                <Input placeholder="Enter your college name" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Branch</Label>
                  <Input placeholder="e.g., Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label>Year of Study</Label>
                  <Input placeholder="e.g., 2nd Year" />
                </div>
              </div>

              <Button onClick={() => setStep(2)} className="w-full btn-accent">
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Interests */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Your Interests</h2>
                  <p className="text-sm text-muted-foreground">
                    Select all that apply (choose at least 3)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <Badge
                    key={interest}
                    variant={selectedInterests.includes(interest) ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
                    onClick={() => toggleInterest(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="flex-1 btn-accent"
                  disabled={selectedInterests.length < 3}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Skills */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Your Skills</h2>
                  <p className="text-sm text-muted-foreground">
                    Select your skills (choose at least 2)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <Badge
                    key={skill}
                    variant={selectedSkills.includes(skill) ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 transition-all hover:scale-105"
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-secondary/50 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium">AI is learning your preferences</p>
                    <p className="text-xs text-muted-foreground">
                      Based on your selections, we'll recommend events in{" "}
                      {selectedInterests.slice(0, 2).join(", ")} and more!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleComplete}
                  className="flex-1 btn-accent"
                  disabled={selectedSkills.length < 2}
                >
                  Complete Profile
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
