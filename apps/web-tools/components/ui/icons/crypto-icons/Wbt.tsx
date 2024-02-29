import * as React from "react";
import type { SVGProps } from "react";
const SvgWbt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <g clipPath="url(#WBT_svg__a)">
      <rect width={56} height={56} fill="#211E1B" rx={28} />
      <path
        fill="url(#WBT_svg__b)"
        fillRule="evenodd"
        d="M53.444-10.49a3.696 3.696 0 0 1 2.07 4.798L39.5 34.628a3.696 3.696 0 0 1-6.349.91l-4.082-5.233-5.504 13.022a3.696 3.696 0 0 1-6.662.306L9.286 29.409a3.696 3.696 0 0 1 6.516-3.49l3.965 7.405 4.94-11.69a3.696 3.696 0 0 1 6.319-.835l3.984 5.106L48.645-8.42a3.696 3.696 0 0 1 4.8-2.07"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="WBT_svg__b"
        x1={10.08}
        x2={47.824}
        y1={26.992}
        y2={26.992}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9C46D" />
        <stop offset={1} stopColor="#F6B93D" />
      </linearGradient>
      <clipPath id="WBT_svg__a">
        <rect width={56} height={56} fill="#fff" rx={28} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWbt;
