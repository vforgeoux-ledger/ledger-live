import * as React from "react";
import type { SVGProps } from "react";
const SvgBgb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#00E0FF" rx={28} />
    <path
      fill="#000"
      d="M26.652 24.159h6.56l6.71 6.889c.436.448.438 1.177.004 1.627l-8.606 8.936h-6.756l2.042-2.052 7.5-7.7-7.404-7.7"
    />
    <path
      fill="#000"
      d="M29.348 31.842h-6.56l-6.71-6.89a1.177 1.177 0 0 1-.004-1.626l8.606-8.937h6.756l-2.042 2.052-7.5 7.7 7.404 7.7"
    />
  </svg>
);
export default SvgBgb;
