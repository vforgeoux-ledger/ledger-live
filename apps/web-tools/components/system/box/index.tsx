import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";

export type BoxProps = {
  className?: ClassNameValue;
  full?: boolean;
} & PropsWithChildren;

const Box = ({ children, className, full }: BoxProps) => (
  <div className={cn(!full && "mx-auto max-w-4xl px-5", className)}>{children}</div>
);

export default Box;
