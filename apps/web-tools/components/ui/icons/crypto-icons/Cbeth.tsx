import * as React from "react";
import type { SVGProps } from "react";
const SvgCbeth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <g clipPath="url(#CBETH_svg__a)">
      <rect width={56} height={56} fill="#fff" rx={28} />
      <rect
        width={53.5}
        height={53.5}
        x={1.25}
        y={1.25}
        stroke="#0052FF"
        strokeWidth={2.5}
        rx={26.75}
      />
      <path fill="#6697FF" d="m27.989 7.056 12.185 20.149-12.14-5.186z" />
      <path fill="#0052FF" d="M15.826 27.205 27.989 7.056l.045 14.963z" />
      <path fill="#6697FF" d="m27.989 34.642-12.163-7.437 12.208-5.186z" />
      <path fill="#CCDCFF" d="m40.174 27.205-12.14-5.186-.045 12.623z" />
      <path fill="#6697FF" d="m27.989 37.195 12.185-7.224L27.99 47.152z" />
      <path fill="#0052FF" d="m27.989 37.195-12.163-7.224 12.163 17.181z" />
    </g>
    <defs>
      <clipPath id="CBETH_svg__a">
        <rect width={56} height={56} fill="#fff" rx={28} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCbeth;
