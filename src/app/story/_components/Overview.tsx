"use client";

import React from "react";
import Image from "next/image";
import ImageComponent from "@/assets/README.png";
import { Box, Grid } from "@/lib/components";
import { Badge, Button } from "@/lib/components/ui";
import { Card, CardContent, CardTitle } from "@/lib/components/ui/card";

import { StarIcon } from "@heroicons/react/24/solid";

interface OverviewProps {
  title: string;
  author: string;
  status: string;
  tags: string[];
  genre: string;
  rating: number;
  ratingCount: number;
  imageUrl?: string;
}

/**
 * BookOverview Component
 *
 * Displays an overview of a book, including its title, author, status, tags, genre, rating, and a button to read now.
 *
 * @param title - The title of the book
 * @param author - The author of the book
 * @param status - The current status of the book (e.g., "Completed", "Ongoing")
 * @param tags - An array of tags associated with the book
 * @param genre - The genre of the book
 * @param rating - The rating of the book
 * @param ratingCount - The number of people who rated the book
 * @param imageUrl - Optional URL for the book's cover image
 */
export const Overview: React.FC<OverviewProps> = ({
  title,
  author,
  status,
  tags,
  genre,
  rating,
  ratingCount,
  imageUrl = ImageComponent,
}) => {
  const handleReadNow = () => {
    // Handle the "Read Now" button click
    console.log("Read Now clicked");
    // Add your logic here, e.g., navigate to the story page or open a modal
  };

  return (
    <Card className="opacity-90 shadow-2xl">
      <CardContent className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-10 rounded-xl">
        <Box className="flex flex-col items-center">
          <Image
            src={imageUrl}
            alt="Image"
            className="rounded-md"
            width={200}
            height={200}
          />
        </Box>

        <Grid className="items-center" gap={1}>
          <Badge className="text-xs font-semibold capitalize self-top rounded-xl h-7">
            {status}
          </Badge>
          <CardTitle className="text-xl">{title}</CardTitle>

          <p className="text-sm text-gray-700 dark:text-gray-300">{author}</p>

          <Box className="gap-2 items-center py-2 md:pb-8 md:pt-4 md:flex hidden">
            <StarIcon className="size-4" />
            <p className="text-xs text-gray-700 dark:text-gray-300">
              {rating} <span className="font-mono">({ratingCount})</span>
            </p>
            <span>•</span>
            <span className="grow text-xs font-bold text-gray-700 dark:text-gray-300">
              {genre}
            </span>
          </Box>

          <Box className="pb-2 pt-4 md:py-0 self-end">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="me-2 text-xs font-semibold capitalize"
              >
                {tag}
              </Badge>
            ))}
          </Box>

          <Button
            variant="destructive"
            className="w-full self-end"
            onClick={handleReadNow}
          >
            Read Now
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};
