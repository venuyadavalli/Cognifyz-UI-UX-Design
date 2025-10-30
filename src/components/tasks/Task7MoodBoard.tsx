import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Task7MoodBoard = () => {
  const moodImages = [
    {
      title: "Adventure",
      description: "Mountains, exploration, discovery",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Relaxation",
      description: "Beaches, serenity, calm waters",
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      title: "Cultural",
      description: "Architecture, history, heritage",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Urban",
      description: "Cities, nightlife, modern",
      gradient: "from-slate-700 to-gray-900",
    },
  ];

  const colorSwatches = [
    { name: "Ocean Blue", color: "bg-[#0BA3D1]", hex: "#0BA3D1" },
    { name: "Sunset Orange", color: "bg-[#F57E59]", hex: "#F57E59" },
    { name: "Sky Purple", color: "bg-[#8B3FD9]", hex: "#8B3FD9" },
    { name: "Forest Green", color: "bg-[#10B981]", hex: "#10B981" },
    { name: "Sand Beige", color: "bg-[#F5E6D3]", hex: "#F5E6D3" },
  ];

  const fontPairings = [
    { type: "Headings", font: "font-bold text-3xl", example: "Explore the World" },
    { type: "Subheadings", font: "font-semibold text-xl", example: "Your Next Adventure Awaits" },
    { type: "Body", font: "text-base", example: "Discover amazing destinations and create unforgettable memories." },
    { type: "Captions", font: "text-sm text-muted-foreground", example: "Photo by traveler • 2 hours ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2 gradient-hero bg-clip-text text-transparent">
          ✈️ Task 7: Mood Board - Travel App
        </h2>
        <p className="text-muted-foreground">
          A curated mood board capturing the visual essence of adventure and exploration
        </p>
      </div>

      {/* Theme & Keywords */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Theme & Mood</CardTitle>
          <CardDescription>The emotional and visual direction for the travel app</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Chosen Mood: Adventure & Exploration</h3>
              <p className="text-muted-foreground">
                A sense of wanderlust, discovery, and excitement. The design should inspire users to explore new destinations
                and create memorable experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {["Wanderlust", "Discovery", "Adventure", "Freedom", "Exploration", "Authentic", "Vibrant", "Dynamic"].map(
                  (keyword) => (
                    <span
                      key={keyword}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {keyword}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visual Inspiration */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Visual Inspiration</CardTitle>
          <CardDescription>Image concepts and visual themes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moodImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-strong transition-smooth">
                <div className={`h-40 bg-gradient-to-br ${image.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="font-semibold text-white text-sm">{image.title}</h4>
                    <p className="text-xs text-white/80">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>Vibrant colors evoking travel and adventure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {colorSwatches.map((swatch) => (
              <div key={swatch.name} className="space-y-2">
                <div className={`h-24 rounded-lg ${swatch.color} shadow-soft`} />
                <div>
                  <p className="font-medium text-sm">{swatch.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{swatch.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Font Pairings</CardTitle>
          <CardDescription>Typography hierarchy for the travel app</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {fontPairings.map((pairing, index) => (
              <div key={index} className="space-y-2 pb-6 border-b border-border last:border-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">{pairing.type}</span>
                  <span className="text-xs text-muted-foreground">System Font Stack</span>
                </div>
                <p className={pairing.font}>{pairing.example}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* UI Element Snippets */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>UI Element Concepts</CardTitle>
          <CardDescription>Design elements reflecting the mood board</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Destination Card */}
            <div>
              <h4 className="font-semibold mb-3">Destination Card</h4>
              <Card className="overflow-hidden shadow-soft hover:shadow-strong transition-smooth cursor-pointer max-w-sm">
                <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-600 relative">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-sm font-semibold">
                    ⭐ 4.8
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-xl font-bold mb-1">Santorini, Greece</h3>
                    <p className="text-sm text-white/90">Beautiful island paradise</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">$899</p>
                    </div>
                    <button className="px-4 py-2 rounded-lg gradient-primary text-white font-medium hover:shadow-glow transition-smooth">
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience Badge */}
            <div>
              <h4 className="font-semibold mb-3">Experience Badges</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full gradient-primary text-white text-sm font-medium shadow-soft">
                  🏔️ Adventure
                </span>
                <span className="px-4 py-2 rounded-full gradient-secondary text-white text-sm font-medium shadow-soft">
                  🏖️ Beach
                </span>
                <span className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium shadow-soft">
                  🏛️ Culture
                </span>
                <span className="px-4 py-2 rounded-full bg-[hsl(var(--success))] text-white text-sm font-medium shadow-soft">
                  🌿 Nature
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Rationale */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>🎨 Design Rationale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Color Psychology</h4>
              <p className="text-muted-foreground">
                Blues and teals evoke feelings of trust, tranquility, and the ocean. Warm oranges and corals add energy
                and excitement. Purple accents provide a touch of luxury and premium experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Typography Choices</h4>
              <p className="text-muted-foreground">
                Bold, confident headings create impact and grab attention. Clean, readable body text ensures excellent
                user experience across all devices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Visual Style</h4>
              <p className="text-muted-foreground">
                Modern gradients and soft shadows create depth and visual interest. Rounded corners and smooth
                transitions contribute to a friendly, approachable interface.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
