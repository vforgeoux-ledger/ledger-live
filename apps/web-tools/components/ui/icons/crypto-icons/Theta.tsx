import * as React from "react";
import type { SVGProps } from "react";
const SvgTheta = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#0C0C0C" rx={28} />
    <path
      fill="url(#THETA_svg__a)"
      d="M21.14 14.389h13.72l1.307 1.352V40.26L34.86 41.61H21.14l-1.307-1.351V15.74zm1.307 24.518h11.106V17.093H22.447zm9.71-7.037h-2.84v3.08h-2.565V31.87h-2.84v-2.653h8.245zm0-7.598v2.651H23.91v-2.651h2.84v-3.08h2.565v3.08z"
    />
    <defs>
      <linearGradient
        id="THETA_svg__a"
        x1={20.356}
        x2={42.942}
        y1={14.716}
        y2={28.84}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#29B3EB" />
        <stop offset={1} stopColor="#21EDBA" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgTheta;
