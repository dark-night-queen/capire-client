import React, { PropsWithChildren } from "react";
import { Box } from "@/lib/components/box";

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box className="p-5 md:p-25 lg:p-40">{children}</Box>;
};

export default layout;
