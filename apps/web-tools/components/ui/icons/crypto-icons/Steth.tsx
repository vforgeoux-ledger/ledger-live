import * as React from "react";
import type { SVGProps } from "react";
const SvgSteth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <g fill="#00A3FF" clipPath="url(#STETH_svg__a)">
      <path d="m17.886 26.367-.251.377c-2.89 4.523-2.262 10.428 1.633 14.197 2.136 2.262 5.151 3.392 8.167 3.392z" />
      <path
        d="m27.435 31.77-9.548-5.403c9.549 18.092 9.548 17.966 9.548 17.966z"
        opacity={0.6}
      />
      <path
        d="m36.983 26.367.252.377c2.89 4.523 2.261 10.428-1.634 14.197-2.261 2.262-5.15 3.392-8.166 3.392z"
        opacity={0.6}
      />
      <path
        d="m27.435 31.77 9.548-5.403c-9.548 18.092-9.548 17.966-9.548 17.966zM27.435 19.582v9.423l8.292-4.649z"
        opacity={0.2}
      />
      <path d="m27.435 19.582-8.293 4.774 8.293 4.65z" opacity={0.6} />
      <path d="m27.435 11.667-8.293 12.69 8.293-4.775z" />
      <path d="m27.435 19.582 8.292 4.774-8.292-12.69z" opacity={0.6} />
    </g>
    <defs>
      <clipPath id="STETH_svg__a">
        <path fill="#fff" d="M11.667 11.667h32.667v32.667H11.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSteth;
