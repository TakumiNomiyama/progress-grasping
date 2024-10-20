import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Gift } from "lucide-react";

import { Task } from "../../types/task"; // Import the 'Task' type from the appropriate module

export function DailyReward({ tasks }: { tasks: Task[] }): JSX.Element {
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;
  const completionPercentage = (completedTasksCount / totalTasksCount) * 100;

  const getReward = () => {
    if (completionPercentage >= 80) return "お気に入りのレストランでディナー";
    if (completionPercentage >= 50) return "映画鑑賞";
    return "お気に入りのコーヒーを楽しむ";
  };

  return (
    <Card className="bg-green-100 border-green-200">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center">
          <Gift className="mr-2 h-5 w-5" />
          今日のご褒美
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-700 mb-2">
            {getReward()}
          </p>
          <p className="text-sm text-green-600">
            タスク完了率: {completionPercentage.toFixed(0)}%
          </p>
          <Progress
            value={completionPercentage}
            className="mt-2 w-full bg-green-200"
            aria-label={`タスク完了率: ${completionPercentage.toFixed(0)}%`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
