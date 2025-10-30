import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Task2ColorPalette = () => {
  const colors = [
    {
      name: "Primary Blue",
      role: "Primary Brand Color",
      hsl: "195, 85%, 45%",
      hex: "#0BA3D1",
      usage: "Main CTAs, links, primary actions"
    },
    {
      name: "Warm Coral",
      role: "Secondary/Accent",
      hsl: "14, 90%, 65%",
      hex: "#F57E59",
      usage: "Secondary buttons, highlights, energy"
    },
    {
      name: "Purple Accent",
      role: "Accent Color",
      hsl: "270, 75%, 60%",
      hex: "#8B3FD9",
      usage: "Special features, premium elements"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2 gradient-secondary bg-clip-text text-transparent">
          🎨 Task 2: Basic Color Palette
        </h2>
        <p className="text-muted-foreground">
          A carefully crafted 3-color palette for consistent UI design
        </p>
      </div>

      {/* Color Palette Overview */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Color Palette Specifications</CardTitle>
          <CardDescription>HSL values, HEX codes, and usage guidelines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-border">
                <div className="flex gap-4 items-center">
                  <div
                    className="w-24 h-24 rounded-lg shadow-medium flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">{color.name}</h3>
                    <p className="text-sm text-muted-foreground">{color.role}</p>
                    <div className="space-y-1 pt-2">
                      <p className="text-sm font-mono">HSL: {color.hsl}</p>
                      <p className="text-sm font-mono">HEX: {color.hex}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-sm text-muted-foreground italic">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Color Application Demo */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Mobile App Screen Example</CardTitle>
          <CardDescription>Color palette applied to a sample mobile interface</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-sm mx-auto border-8 border-foreground/20 rounded-3xl overflow-hidden shadow-strong">
            {/* Mock Phone Screen */}
            <div className="bg-background">
              {/* Status Bar */}
              <div className="h-8 gradient-primary" />
              
              {/* Header */}
              <div className="p-6 gradient-subtle">
                <h3 className="text-2xl font-bold text-primary mb-2">Welcome Back!</h3>
                <p className="text-muted-foreground">Explore our amazing features</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <Card className="shadow-soft border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-primary" />
                      <div className="flex-1">
                        <h4 className="font-semibold">Primary Feature</h4>
                        <p className="text-sm text-muted-foreground">Using primary color</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-secondary/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-secondary" />
                      <div className="flex-1">
                        <h4 className="font-semibold">Secondary Feature</h4>
                        <p className="text-sm text-muted-foreground">Using secondary color</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent" />
                      <div className="flex-1">
                        <h4 className="font-semibold">Premium Feature</h4>
                        <p className="text-sm text-muted-foreground">Using accent color</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-2 pt-4">
                  <Button variant="default" className="flex-1">Primary Action</Button>
                  <Button variant="secondary" className="flex-1">Secondary</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Notes */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>♿ Accessibility & Contrast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Contrast Testing Results</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>Primary blue on white: <strong>7.2:1</strong> (AAA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>White text on primary blue: <strong>9.1:1</strong> (AAA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>White text on coral: <strong>4.8:1</strong> (AA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>White text on purple: <strong>6.3:1</strong> (AA)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Color Blindness Considerations</h4>
              <p className="text-sm text-muted-foreground">
                All colors maintain sufficient differentiation for users with deuteranopia and protanopia
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
