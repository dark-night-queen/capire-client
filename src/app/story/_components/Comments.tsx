import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui";

export const Comments = () => {
  return (
    <Card className="w-full border-dashed border-3">
      <CardHeader className="gap-5">
        <CardTitle>Comments</CardTitle>
        <CardDescription>...</CardDescription>
      </CardHeader>
    </Card>
  );
};
