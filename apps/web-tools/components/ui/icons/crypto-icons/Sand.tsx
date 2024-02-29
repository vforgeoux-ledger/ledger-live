import * as React from "react";
import type { SVGProps } from "react";
const SvgSand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#SAND_svg__a)" rx={28} />
    <path
      fill="#fff"
      d="m18.592 13.216-3.024 3.024v11.984l3.024 3.024h11.984v6.048H24.64v-3.024h-9.072v6.048l3.024 3.024h18.032l3.024-3.024V28.224L36.624 25.2H24.64v-6.048h6.048v3.024h9.072v-6.048l-3.024-3.024H18.592z"
    />
    <defs>
      <linearGradient
        id="SAND_svg__a"
        x1={12.006}
        x2={46.894}
        y1={9.951}
        y2={49.319}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00ADEF" />
        <stop offset={1} stopColor="#0084FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSand;
