import * as React from "react";
import type { SVGProps } from "react";
const SvgTusd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#1A5AFF" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M14 15.403h9.333A9.333 9.333 0 0 1 14 24.736zm9.333 9.333a9.333 9.333 0 0 1 9.334-9.333H42v9.333h-9.333v18.667h-9.334V24.736"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTusd;
