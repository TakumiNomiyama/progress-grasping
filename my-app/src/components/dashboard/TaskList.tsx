import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress"; // Import the missing Progress component from the correct file path
import { Plus } from "lucide-react";

import { Task } from "../../types/task"; // Import the missing Task type

export function TaskList({
  tasks,
  onTaskUpdate,
}: {
  tasks: Task[];
  onTaskUpdate: (id: string, updates: Partial<Task>) => void;
}) {
  return (
    <Card className="bg-white border-green-200">
      <CardHeader>
        <CardTitle className="text-green-800">タスク一覧</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    onTaskUpdate(task.id.toString(), {
                      completed: !task.completed,
                    })
                  }
                  className="mr-2 accent-green-600"
                  aria-label={`${task.title}を${
                    task.completed ? "未完了" : "完了"
                  }としてマーク`}
                />
                <span
                  className={`${
                    task.completed
                      ? "line-through text-green-500"
                      : "text-green-800"
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <Progress
                value={task.progress}
                className="w-24"
                aria-label={`${task.title}の進捗: ${task.progress}%`}
              />
            </li>
          ))}
        </ul>
        <Button className="mt-4 bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> 新しいタスクを追加
        </Button>
      </CardContent>
    </Card>
  );
}
