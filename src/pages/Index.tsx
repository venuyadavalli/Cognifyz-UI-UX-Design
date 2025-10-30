import { useState } from "react";
import { TaskNav } from "@/components/TaskNav";
import { TaskOverview } from "@/components/tasks/TaskOverview";
import { Task1Buttons } from "@/components/tasks/Task1Buttons";
import { Task2ColorPalette } from "@/components/tasks/Task2ColorPalette";
import { Task3Landing } from "@/components/tasks/Task3Landing";
import { Task4Icons } from "@/components/tasks/Task4Icons";
import { Task5Form } from "@/components/tasks/Task5Form";
import { Task6NavBar } from "@/components/tasks/Task6NavBar";
import { Task7MoodBoard } from "@/components/tasks/Task7MoodBoard";

const Index = () => {
  const [activeTask, setActiveTask] = useState("overview");

  const renderTask = () => {
    switch (activeTask) {
      case "overview":
        return <TaskOverview onTaskChange={setActiveTask} />;
      case "task1":
        return <Task1Buttons />;
      case "task2":
        return <Task2ColorPalette />;
      case "task3":
        return <Task3Landing />;
      case "task4":
        return <Task4Icons />;
      case "task5":
        return <Task5Form />;
      case "task6":
        return <Task6NavBar />;
      case "task7":
        return <Task7MoodBoard />;
      default:
        return <TaskOverview onTaskChange={setActiveTask} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TaskNav activeTask={activeTask} onTaskChange={setActiveTask} />
      <main className="container mx-auto px-4 py-8">
        {renderTask()}
      </main>
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Cognifyz UI/UX Design Tasks • Created by Lovable •{" "}
            <span className="font-semibold">All 7 Tasks Complete ✅</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
