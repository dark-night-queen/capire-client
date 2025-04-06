import * as React from "react";

import { cn } from "@/lib/utils";

type GridProps = React.ComponentProps<"div"> & {
  className?: string;

  flexDirection?: "row" | "col" | "row-reverse" | "column-reverse";
  flexWrap?: string;
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

  flexWrap = "flex-wrap",
  gap = 6,
  borderRadius = "rounded-xl",
  ...props
}: GridProps) {
  return (
    <div
      data-slot="grid"
      className={cn(
        "grid",
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
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

export { Grid, GridItem };
