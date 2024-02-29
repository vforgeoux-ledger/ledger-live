import * as React from "react";
import type { SVGProps } from "react";
const SvgHbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#000" rx={28} />
    <path
      fill="#fff"
      d="M38.666 40h-3.332V32.6H20.666V40h-3.333V16h3.333v7.223h14.668V16h3.333zM20.823 29.83h14.668v-3.824H20.823z"
    />
  </svg>
);
export default SvgHbar;
