import React, { useState, useEffect } from "react";
import { TaskList } from "../components/dashboard/TaskList";
import { JournalEntries } from "../components/dashboard/JournalEntries";
import { BGMSelector } from "../components/dashboard/BGMSelector";
import { DailyReward } from "../components/dashboard/DailyReward";
import {
  getTasks,
  getJournalEntries,
  updateTask,
} from "../utils/dashboardData";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
    setJournalEntries(getJournalEntries());
  }, []);

  const handleTaskUpdate = (taskId, updates) => {
    const updatedTask = updateTask(taskId, updates);
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-8">ダッシュボード</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TaskList tasks={tasks} onTaskUpdate={handleTaskUpdate} />
        <div className="space-y-8">
          <JournalEntries entries={journalEntries} />
          <BGMSelector />
          <DailyReward tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
