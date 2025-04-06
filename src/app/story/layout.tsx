import React, { PropsWithChildren } from "react";
import { Box } from "@/lib/components/box";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box className="p-5 md:px-25 lg:px-40">{children}</Box>;
};

export default layout;
