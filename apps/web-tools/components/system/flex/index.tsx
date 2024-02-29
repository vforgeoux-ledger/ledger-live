import Box, { BoxProps } from "../box";
import { cn } from "@/utils/cn";

type Props = BoxProps;

const Flex = ({ children, className, ...props }: Props) => (
  <Box className={cn("flex items-center", className)} {...props}>
    {children}
  </Box>
);

export default Flex;
