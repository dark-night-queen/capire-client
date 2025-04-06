import React, { PropsWithChildren } from "react";
import { Box } from "@/lib/components/box";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default layout;
