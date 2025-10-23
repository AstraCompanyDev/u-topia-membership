import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Camera, LogOut, CreditCard, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: Implement logout functionality when backend is connected
    console.log("Logging out...");
    navigate("/");
  };

  const handleCancelSubscription = () => {
    // TODO: Implement subscription cancellation when backend is connected
    console.log("Canceling subscription...");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details and profile picture</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" alt="Profile picture" />
              <AvatarFallback className="bg-gradient-primary text-white text-2xl font-bold">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" className="relative">
                <Camera className="h-4 w-4 mr-2" />
                Change Photo
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    // TODO: Implement file upload when backend is connected
                    console.log("File selected:", e.target.files?.[0]);
                  }}
                />
              </Button>
              <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max 2MB</p>
            </div>
          </div>

          <Separator />

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              <User className="h-4 w-4 inline mr-2" />
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Smith"
              defaultValue="John Smith"
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Quick Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself and your entrepreneurial journey..."
              rows={4}
              defaultValue="Serial entrepreneur focused on SaaS products. Currently building my 3rd startup."
            />
            <p className="text-xs text-muted-foreground">Brief description for your profile. Max 200 characters.</p>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account details and security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              <Mail className="h-4 w-4 inline mr-2" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              defaultValue="john@example.com"
            />
            <p className="text-xs text-muted-foreground">This is the email associated with your account</p>
          </div>

          <Button variant="outline">Update Email</Button>
        </CardContent>
      </Card>

      {/* Subscription */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>Manage your subscription and billing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Pro Plan</p>
                <p className="text-sm text-muted-foreground">$29/month</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleCancelSubscription}>
              Cancel Subscription
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Your subscription will remain active until the end of your current billing period.
          </p>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Actions that affect your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            className="w-full sm:w-auto"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
