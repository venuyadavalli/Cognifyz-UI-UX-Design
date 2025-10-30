import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Shield } from "lucide-react";

export const Task3Landing = () => {
  return (
    <div className="space-y-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 gradient-hero bg-clip-text text-transparent">
          🌐 Task 3: Landing Page Design
        </h2>
        <p className="text-muted-foreground">
          A complete landing page with hero section, features, and call-to-action
        </p>
      </div>

      {/* Mock Landing Page */}
      <div className="border-2 border-border rounded-lg overflow-hidden shadow-strong">
        
        {/* Hero Section */}
        <section className="relative gradient-hero text-white py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative container mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Digital Experience
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Discover the perfect blend of design and functionality. 
              Our innovative solutions help you create stunning user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-strong hover:shadow-glow transition-bounce"
              >
                Get Started Free
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Us?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to create exceptional digital products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-medium hover:shadow-strong transition-smooth border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Intuitive Design</CardTitle>
                  <CardDescription>
                    Beautiful, user-friendly interfaces that delight your customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Modern design system</li>
                    <li>• Responsive layouts</li>
                    <li>• Accessibility-first</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-strong transition-smooth border-secondary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    Optimized performance that keeps users engaged
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sub-second load times</li>
                    <li>• Smooth animations</li>
                    <li>• Efficient code</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium hover:shadow-strong transition-smooth border-accent/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Secure & Reliable</CardTitle>
                  <CardDescription>
                    Enterprise-grade security you can trust
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Data encryption</li>
                    <li>• Regular updates</li>
                    <li>• 99.9% uptime</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of satisfied users and transform your digital presence today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="xl" variant="gradient">
                Start Your Free Trial
              </Button>
              <Button size="xl" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-card border-t border-border">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>About</li>
                  <li>Blog</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Documentation</li>
                  <li>Help Center</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p>© 2025 Your Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Design Notes */}
      <Card className="shadow-medium mt-8">
        <CardHeader>
          <CardTitle>📐 Layout Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Desktop Layout</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Max width: 1440px</li>
                <li>• Container padding: 24px</li>
                <li>• Grid: 3 columns for features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mobile Layout</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Responsive breakpoints</li>
                <li>• Stack on mobile (&lt; 768px)</li>
                <li>• Touch-friendly spacing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
