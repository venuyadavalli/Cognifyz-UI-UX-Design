import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, CloudLightning } from "lucide-react";

export const Task4Icons = () => {
  const weatherIcons = [
    { Icon: Sun, name: "Sunny", description: "Clear sky, bright sunshine", color: "text-[#F59E0B]" },
    { Icon: Cloud, name: "Cloudy", description: "Overcast conditions", color: "text-[#6B7280]" },
    { Icon: CloudRain, name: "Rainy", description: "Precipitation expected", color: "text-[#3B82F6]" },
    { Icon: CloudSnow, name: "Snowy", description: "Snow conditions", color: "text-[#60A5FA]" },
    { Icon: Wind, name: "Windy", description: "Strong wind gusts", color: "text-[#8B5CF6]" },
    { Icon: CloudLightning, name: "Stormy", description: "Thunderstorms", color: "text-[#EF4444]" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-primary">
          ☁️ Task 4: Icon Design
        </h2>
        <p className="text-muted-foreground">
          Simple, intuitive weather icons that are recognizable and easy to understand
        </p>
      </div>

      {/* Icon Showcase */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Weather Icon Set</CardTitle>
          <CardDescription>Consistent, recognizable icons for weather conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {weatherIcons.map(({ Icon, name, description, color }) => (
              <Card key={name} className="shadow-soft hover:shadow-medium transition-smooth text-center">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-muted">
                      <Icon className={`w-12 h-12 ${color}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{name}</h3>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Icon Sizes */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Icon Sizes & Variants</CardTitle>
          <CardDescription>Multiple sizes for different use cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Size Variations</h3>
              <div className="flex flex-wrap items-end gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Sun className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-xs text-muted-foreground">16px</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sun className="w-6 h-6 text-[#F59E0B]" />
                  <span className="text-xs text-muted-foreground">24px</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sun className="w-8 h-8 text-[#F59E0B]" />
                  <span className="text-xs text-muted-foreground">32px</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sun className="w-12 h-12 text-[#F59E0B]" />
                  <span className="text-xs text-muted-foreground">48px</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Sun className="w-16 h-16 text-[#F59E0B]" />
                  <span className="text-xs text-muted-foreground">64px</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Stroke Weight Variations</h3>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Cloud className="w-12 h-12 text-primary" strokeWidth={1} />
                  <span className="text-xs text-muted-foreground">Thin (1px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Cloud className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground">Regular (1.5px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Cloud className="w-12 h-12 text-primary" strokeWidth={2} />
                  <span className="text-xs text-muted-foreground">Medium (2px)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Cloud className="w-12 h-12 text-primary" strokeWidth={2.5} />
                  <span className="text-xs text-muted-foreground">Bold (2.5px)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Icon Usage in Context</CardTitle>
          <CardDescription>How icons appear in real weather app interfaces</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Weather Card Example */}
            <Card className="shadow-soft gradient-primary text-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-white/80">Today</p>
                    <h3 className="text-3xl font-bold">24°C</h3>
                  </div>
                  <Sun className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
                <p className="text-white/90">Sunny with clear skies</p>
              </CardContent>
            </Card>

            {/* Forecast List Example */}
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">5-Day Forecast</h3>
                <div className="space-y-3">
                  {[
                    { day: "Mon", Icon: Sun, temp: "24°" },
                    { day: "Tue", Icon: CloudRain, temp: "19°" },
                    { day: "Wed", Icon: Cloud, temp: "21°" },
                    { day: "Thu", Icon: CloudSnow, temp: "15°" },
                    { day: "Fri", Icon: Wind, temp: "18°" },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between">
                      <span className="text-sm font-medium w-12">{item.day}</span>
                      <item.Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      <span className="text-sm font-semibold w-12 text-right">{item.temp}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Design Specifications */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>🎨 Design Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Style Guidelines</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Style: Line/Stroke icons</li>
                <li>• Default stroke width: 1.5px</li>
                <li>• Corner radius: Rounded</li>
                <li>• Export formats: SVG, PNG</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Visual Consistency</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Consistent stroke weight</li>
                <li>• Uniform sizing grid</li>
                <li>• Clear visual metaphors</li>
                <li>• Recognizable at all sizes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
