"use client";

import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { Button } from "@/lib/components/ui/button";

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
  const [expanded, setExpanded] = useState<boolean>(false);

  // Check if description needs to be truncated
  const needsTruncation = description.length > maxCharacters;

  // Get the appropriate display text based on expanded state
  const displayText =
    expanded || !needsTruncation
      ? description
      : `${description.substring(0, maxCharacters).trim()}...`;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="gap-5 p-0">
        <CardTitle>Synopsis</CardTitle>
        <CardDescription>
          {displayText}

          {needsTruncation && (
            <Button
              variant="ghost"
              onClick={toggleExpanded}
              className="ms-2 mt-2 text-accent-foreground p-0 h-auto"
            >
              {expanded ? "Show less" : "Read more"}
            </Button>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
