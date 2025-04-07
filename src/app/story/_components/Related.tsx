import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

export const Related = () => {
  return (
    <Card className="border-dashed border-3">
      <CardHeader className="gap-5">
        <CardTitle>Similar Titles</CardTitle>
        <CardDescription>...</CardDescription>
      </CardHeader>
    </Card>
  );
};
