import * as React from "react";
import type { SVGProps } from "react";
const SvgRune = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#000" rx={28} />
    <g clipPath="url(#RUNE_svg__a)">
      <path
        fill="url(#RUNE_svg__b)"
        d="m14 44 22.418-9.407-7.097-7.171zm8.235-23.738 7.097 7.16L42 12z"
      />
    </g>
    <defs>
      <linearGradient
        id="RUNE_svg__b"
        x1={14.001}
        x2={41.996}
        y1={28}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0CF" />
        <stop offset={1} stopColor="#3F9" />
      </linearGradient>
      <clipPath id="RUNE_svg__a">
        <path fill="#fff" d="M14 12h28v32H14z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRune;
