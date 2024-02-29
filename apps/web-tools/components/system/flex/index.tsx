import Box, { BoxProps } from "@/components/system/box";
import { cn } from "@/utils/cn";

type Props = BoxProps;

const Flex = ({ children, className, ...props }: Props) => (
  <Box className={cn("flex items-center justify-center", className)} {...props}>
    {children}
  </Box>
);

export default Flex;
