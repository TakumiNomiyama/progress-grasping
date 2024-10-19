import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";

export function TaskList({ tasks, onTaskUpdate }) {
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
                    onTaskUpdate(task.id, { completed: !task.completed })
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
