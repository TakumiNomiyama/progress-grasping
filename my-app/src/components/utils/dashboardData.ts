// サンプルデータ - 実際のアプリケーションではAPIやデータベースから取得します
let tasks = [
  {
    id: 1,
    title: "プロジェクト提案書を完成させる",
    completed: false,
    progress: 30,
  },
  { id: 2, title: "チームの進捗を確認する", completed: true, progress: 100 },
  {
    id: 3,
    title: "クライアントミーティングの準備",
    completed: false,
    progress: 60,
  },
  { id: 4, title: "ドキュメントを更新する", completed: false, progress: 0 },
];

let journalEntries = [
  {
    id: 1,
    date: "2023-05-15",
    content:
      "今日は新しいプロジェクトが始まりました。チームの雰囲気も良く、とても楽しみです。",
  },
  {
    id: 2,
    date: "2023-05-14",
    content:
      "難しい問題に直面しましたが、同僚のサポートのおかげで解決できました。チームワークの大切さを実感しました。",
  },
];

// dashboardData.ts
export const getTasks = (): Task[] => {
  return [
    { id: 1, title: "Task 1", completed: false, progress: 20 },
    { id: 2, title: "Task 2", completed: true, progress: 100 },
    // 他のタスク
  ];
};

export function getJournalEntries() {
  return journalEntries;
}

export function updateTask(taskId: number, updates: any) {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
    return tasks[taskIndex];
  }
  return null;
}

export function addTask(newTask: any) {
  const task = {
    id: tasks.length + 1,
    ...newTask,
    completed: false,
    progress: 0,
  };
  tasks.push(task);
  return task;
}

export function addJournalEntry(newEntry: any) {
  const entry = {
    id: journalEntries.length + 1,
    date: new Date().toISOString().split("T")[0],
    ...newEntry,
  };
  journalEntries.push(entry);
  return entry;
}

// src/types/task.ts
// dashboardData.ts
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  progress: number;

  // 必要に応じて他のフィールドを追加
}
