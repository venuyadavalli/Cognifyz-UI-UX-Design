import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Bell, User } from "lucide-react";
import { useState } from "react";

export const Task6NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-accent">
          🧭 Task 6: Navigation Bar Design
        </h2>
        <p className="text-muted-foreground">
          Responsive navigation bar for seamless user navigation across devices
        </p>
      </div>

      {/* Desktop Navigation Example */}
      <Card className="shadow-strong">
        <CardHeader>
          <CardTitle>Desktop Navigation</CardTitle>
          <CardDescription>Full-width navigation with horizontal menu items (1440px)</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <nav className="border-b border-border">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg gradient-primary" />
                  <span className="text-xl font-bold">BrandName</span>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => setActiveLink(link.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-smooth ${
                        activeLink === link.id
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      } ${activeLink === link.id ? "relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full" : ""}`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Search className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bell className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                  <Button variant="default">Sign In</Button>
                </div>
              </div>
            </div>
          </nav>
        </CardContent>
      </Card>

      {/* Mobile Navigation Example */}
      <Card className="shadow-strong">
        <CardHeader>
          <CardTitle>Mobile Navigation</CardTitle>
          <CardDescription>Hamburger menu for mobile devices (375px)</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-w-sm mx-auto">
            <nav className="border border-border rounded-lg overflow-hidden">
              {/* Mobile Header */}
              <div className="flex items-center justify-between h-14 px-4 bg-background border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary" />
                  <span className="text-lg font-bold">BrandName</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>

              {/* Mobile Menu */}
              {mobileMenuOpen && (
                <div className="bg-card border-b border-border">
                  <div className="px-4 py-2 space-y-1">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => {
                          setActiveLink(link.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-smooth ${
                          activeLink === link.id
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                  <div className="px-4 py-4 border-t border-border space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Bell className="w-4 h-4 mr-2" />
                      Notifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="default" className="w-full" size="sm">
                      Sign In
                    </Button>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Styles */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Alternative Navigation Styles</CardTitle>
          <CardDescription>Different design variations for diverse use cases</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Transparent Header */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Transparent / Overlay Navigation</h3>
            <nav className="rounded-lg overflow-hidden relative">
              <div
                className="absolute inset-0 gradient-hero opacity-90 blur-sm"
                style={{ height: "64px" }}
              />
              <div className="relative backdrop-blur-md">
                <div className="flex items-center justify-between h-16 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm" />
                    <span className="text-xl font-bold text-white">BrandName</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                      <span key={item} className="text-sm font-medium text-white/90 hover:text-white transition-smooth cursor-pointer">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </nav>
          </div>

          {/* Minimal Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Minimal Navigation</h3>
            <nav className="border-b border-border">
              <div className="flex items-center justify-between h-14 px-6">
                <span className="text-sm font-bold tracking-wider uppercase">Brand</span>
                <div className="flex items-center gap-6">
                  {["Work", "About", "Contact"].map((item) => (
                    <span key={item} className="text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer">
                      {item}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Menu</span>
              </div>
            </nav>
          </div>
        </CardContent>
      </Card>

      {/* Design Specifications */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>📐 Navigation Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Desktop Layout</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Max width: 1440px</li>
                <li>• Height: 64px (4rem)</li>
                <li>• Horizontal menu with active indicators</li>
                <li>• Sticky/fixed positioning option</li>
                <li>• Smooth scroll to sections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Mobile Layout</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hamburger menu icon (24x24px min)</li>
                <li>• Full-screen or slide-out menu</li>
                <li>• Touch-friendly tap targets (44x44px)</li>
                <li>• Close button clearly visible</li>
                <li>• Smooth slide animations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Active State Indicators</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Underline for active page</li>
                <li>• Background color change</li>
                <li>• Text color highlight</li>
                <li>• Smooth transitions (0.3s)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Accessibility</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Keyboard navigation support</li>
                <li>• Focus indicators on links</li>
                <li>• Skip to content link</li>
                <li>• ARIA labels for menu button</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
