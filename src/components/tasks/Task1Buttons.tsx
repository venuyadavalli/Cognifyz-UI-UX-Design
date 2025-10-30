import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Task1Buttons = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2 gradient-primary bg-clip-text text-transparent">
          🟦 Task 1: Simple Element Design
        </h2>
        <p className="text-muted-foreground">
          Design simple UI elements (buttons and cards) with clear labels and consistent color schemes
        </p>
      </div>

      {/* Button States */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Button Design - Various States</CardTitle>
          <CardDescription>Default, hover, and disabled states with different variants</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Primary Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Primary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg">Default Button</Button>
              <Button variant="default" size="lg" disabled>Disabled Button</Button>
              <Button variant="gradient" size="lg">Gradient Button</Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Secondary & Accent Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg">Secondary</Button>
              <Button variant="accent" size="lg">Accent</Button>
              <Button variant="success" size="lg">Success</Button>
            </div>
          </div>

          {/* Outline Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Outline Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg">Outline Default</Button>
              <Button variant="outline" size="lg" disabled>Outline Disabled</Button>
            </div>
          </div>

          {/* Size Variations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Size Variations</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="default" size="sm">Small</Button>
              <Button variant="default" size="default">Default</Button>
              <Button variant="default" size="lg">Large</Button>
              <Button variant="default" size="xl">Extra Large</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Design */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Card Design - Various States</CardTitle>
          <CardDescription>Interactive cards with hover effects and different styles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="shadow-soft hover:shadow-strong transition-smooth cursor-pointer">
              <CardHeader>
                <CardTitle className="text-primary">Standard Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is a standard card with hover effects and clean design
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-strong transition-smooth cursor-pointer gradient-primary text-white">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  This card features a beautiful gradient background
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-strong transition-smooth cursor-pointer border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Outlined Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This card has a prominent border for emphasis
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility & Design Specs */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>♿ Design Specifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Color Codes</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-12 rounded gradient-primary" />
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">HSL(195, 85%, 45%)</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded gradient-secondary" />
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">HSL(14, 90%, 65%)</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded bg-accent" />
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">HSL(270, 75%, 60%)</p>
              </div>
              <div className="space-y-2">
                <div className="h-12 rounded bg-[hsl(var(--success))]" />
                <p className="text-sm font-medium">Success</p>
                <p className="text-xs text-muted-foreground">HSL(142, 76%, 45%)</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Accessibility</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✅ All buttons meet WCAG AA contrast ratio requirements</li>
              <li>✅ Focus states clearly visible with ring indicators</li>
              <li>✅ Disabled states use reduced opacity for clarity</li>
              <li>✅ Interactive elements have minimum 44x44px touch targets</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
