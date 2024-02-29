import * as React from "react";
import type { SVGProps } from "react";
const SvgGt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#D35756" rx={28} />
    <path
      fill="#fff"
      d="m43.647 20.112-10.139 5.331v6.181l3.488-1.856v3.584l-9.826 5.664-7.894-4.556a3.86 3.86 0 0 1-1.932-3.346v-9.118l8.147-4.706a3.36 3.36 0 0 1 3.352 0l8.147 4.706 4.99-2.884-12.695-7.323a4.25 4.25 0 0 0-4.236 0l-12.696 7.33v14.872c0 1.387.741 2.659 1.938 3.352l12.88 7.433 12.858-7.426a3.9 3.9 0 0 0 1.952-3.386v-6.855l1.659-.884z"
    />
  </svg>
);
export default SvgGt;
