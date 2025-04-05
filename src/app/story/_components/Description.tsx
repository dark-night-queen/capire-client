import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";

interface DescriptionProps {
  description: string;
  maxCharacters?: number;
}

/**
 * BookDescription Component
 *
 * Displays a book description with expandable/collapsible functionality
 *
 * @param description - The full text description of the book
 * @param maxCharacters - Optional maximum number of characters to show in collapsed state
 */
export const Description: React.FC<DescriptionProps> = ({
  description,
  maxCharacters = 100,
}) => {
  return (
    <Card className="w-full border-dashed">
      <CardHeader className="gap-5">
        <CardTitle>Synopsis</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
