import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export function JournalEntries({ entries }: { entries: any[] }) {
  return (
    <Card className="bg-white border-green-200">
      <CardHeader>
        <CardTitle className="text-green-800">ジャーナル</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="p-4 bg-green-100 rounded-lg">
              <p className="text-sm text-green-600 mb-2">{entry.date}</p>
              <p className="text-green-800">{entry.content}</p>
            </div>
          ))}
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> 新しいエントリーを追加
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
