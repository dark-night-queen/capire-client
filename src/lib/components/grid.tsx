import * as React from "react";

import { cn } from "@/lib/utils";

type GridProps = React.ComponentProps<"div"> & {
  className?: string;

  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: string;
  justifyContent?: "justify-start" | "justify-center" | "justify-end";
  alignItems?: string;
  gap?: number;
  borderRadius?: string;
};

/**
 * Grid Component
 *
 * A flexible grid layout component that can be used to arrange child elements in a grid format.
 *
 * @param className - Optional additional class names for styling
 * @param props - Additional props to be passed to the div element
 */
function Grid({
  className,

  flexDirection = "row",
  flexWrap = "flex-wrap",
  justifyContent,
  alignItems,
  gap = 6,
  borderRadius = "rounded-xl",
  ...props
}: GridProps) {
  return (
    <div
      data-slot="grid"
      className={cn(
        "grid",
        `grid-flow-${flexDirection}`,
        justifyContent,
        alignItems,
        `gap-${gap}`,
        borderRadius,
        className
      )}
      {...props}
    />
  );
}

/**
    * GridItem Component
    * 
    * Child Element of the Grid Component
    * 
    * @param className - Optional additional class names for styling
    * @param props - Additional props to be passed to the div element
 */
function GridItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="grid-item"
      className={cn("row-span-3", className)}
      {...props}
    />
  );
}

export { Grid, GridItem };
