import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TaskOverviewProps {
  onTaskChange: (taskId: string) => void;
}

export const TaskOverview = ({ onTaskChange }: TaskOverviewProps) => {
  const tasks = [
    {
      id: "task1",
      level: "Level 1: Beginner",
      title: "Task 1: Simple Element Design",
      description: "Design simple UI elements (buttons, cards) with clear labels and consistent color schemes",
      icon: "🟦",
      status: "Complete",
    },
    {
      id: "task2",
      level: "Level 1: Beginner",
      title: "Task 2: Basic Color Palette",
      description: "Create and apply a 2-3 color palette for a mobile app screen",
      icon: "🎨",
      status: "Complete",
    },
    {
      id: "task3",
      level: "Level 2: Intermediate",
      title: "Task 3: Landing Page Design",
      description: "Design a complete landing page with hero section, features, and call-to-action",
      icon: "🌐",
      status: "Complete",
    },
    {
      id: "task4",
      level: "Level 2: Intermediate",
      title: "Task 4: Icon Design",
      description: "Create simple, intuitive weather icons (sun, cloud, etc.)",
      icon: "☁️",
      status: "Complete",
    },
    {
      id: "task5",
      level: "Level 3: Advanced",
      title: "Task 5: Enhanced Form Design",
      description: "Redesign forms to be more visually appealing and user-friendly",
      icon: "🔐",
      status: "Complete",
    },
    {
      id: "task6",
      level: "Level 3: Advanced",
      title: "Task 6: Navigation Bar Design",
      description: "Design a responsive navigation bar with desktop and mobile layouts",
      icon: "🧭",
      status: "Complete",
    },
    {
      id: "task7",
      level: "Level 4: Expert",
      title: "Task 7: Mood Board for Travel App",
      description: "Curate a mood board with images, colors, and fonts for a travel app",
      icon: "✈️",
      status: "Complete",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl gradient-hero text-white p-12 shadow-strong">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-3xl">
          <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
            Cognifyz UI/UX Design Internship
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            UI/UX Design Task Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            A comprehensive showcase of 7 design tasks across 4 difficulty levels, demonstrating
            mastery in UI/UX design principles, color theory, typography, and user-centered design.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-medium"
              onClick={() => onTaskChange("task1")}
            >
              Explore Tasks
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Task Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-6">All Tasks</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className="shadow-medium hover:shadow-strong transition-smooth cursor-pointer group"
              onClick={() => onTaskChange(task.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-4xl">{task.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]">
                    {task.status}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{task.level}</div>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {task.title}
                </CardTitle>
                <CardDescription>{task.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  View Task →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Design System Overview */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>🎨 Design System Specifications</CardTitle>
          <CardDescription>The foundation of all tasks in this portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Color Palette</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded gradient-primary" />
                  <span className="text-sm">Primary Blue-Teal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded gradient-secondary" />
                  <span className="text-sm">Secondary Coral</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-accent" />
                  <span className="text-sm">Accent Purple</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Typography</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• System font stack for optimal performance</p>
                <p>• Clear hierarchy: H1-H6</p>
                <p>• Readable body text (16px base)</p>
                <p>• Accessible contrast ratios</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Components</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Buttons with multiple variants</p>
                <p>• Cards with hover effects</p>
                <p>• Forms with validation</p>
                <p>• Responsive navigation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Technologies */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>🛠️ Tools & Technologies Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", desc: "Component framework" },
              { name: "TypeScript", desc: "Type safety" },
              { name: "Tailwind CSS", desc: "Styling system" },
              { name: "Shadcn/ui", desc: "Component library" },
              { name: "Lucide Icons", desc: "Icon system" },
              { name: "Vite", desc: "Build tool" },
              { name: "HSL Colors", desc: "Color system" },
              { name: "WCAG AA", desc: "Accessibility" },
            ].map((tool) => (
              <Card key={tool.name} className="shadow-soft text-center">
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
