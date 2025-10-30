import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface TaskNavProps {
  activeTask: string;
  onTaskChange: (task: string) => void;
}

const tasks = [
  { id: "overview", label: "Overview" },
  { id: "task1", label: "Task 1: Buttons" },
  { id: "task2", label: "Task 2: Colors" },
  { id: "task3", label: "Task 3: Landing" },
  { id: "task4", label: "Task 4: Icons" },
  { id: "task5", label: "Task 5: Form" },
  { id: "task6", label: "Task 6: Nav Bar" },
  { id: "task7", label: "Task 7: Mood Board" },
];

export const TaskNav = ({ activeTask, onTaskChange }: TaskNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary" />
            <span className="text-xl font-bold">Cognifyz UI/UX Tasks</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {tasks.map((task) => (
              <Button
                key={task.id}
                variant={activeTask === task.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onTaskChange(task.id)}
                className={activeTask === task.id ? "shadow-soft" : ""}
              >
                {task.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-2">
            {tasks.map((task) => (
              <Button
                key={task.id}
                variant={activeTask === task.id ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  onTaskChange(task.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                {task.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
