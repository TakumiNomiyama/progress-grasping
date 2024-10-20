import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Music } from "lucide-react";

export function BGMSelector() {
  return (
    <Card className="bg-white border-green-200">
      <CardHeader>
        <CardTitle className="text-green-800">BGM選択</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Music className="h-6 w-6 text-green-600" />
          <select
            className="flex-1 p-2 rounded border border-green-300 text-green-800"
            aria-label="BGMを選択"
          >
            <option>自然音 - 森の中</option>
            <option>ローファイ - 作業用BGM</option>
            <option>クラシック - モーツァルト</option>
            <option>アンビエント - 集中力アップ</option>
          </select>
          <Button className="bg-green-600 hover:bg-green-700">再生</Button>
        </div>
      </CardContent>
    </Card>
  );
}
