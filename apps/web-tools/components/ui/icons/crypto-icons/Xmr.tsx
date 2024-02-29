import * as React from "react";
import type { SVGProps } from "react";
const SvgXmr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <g clipPath="url(#XMR_svg__a)">
      <path
        fill="#4D4D4D"
        d="M56 38.91V56H0V40.672c5.726-.185 14.364-.611 14.212-1.217-.17-.68.495-12.87.849-18.88l11.878 14 15.91-12.514V37.97z"
      />
      <path
        fill="#F26822"
        d="M0 40.09h11.455V22.06l16.12 12.728 11.243-9.758L42 23.121l1.697 16.121c3.303.2 8.145.439 12.303.527V0H0z"
      />
      <path
        fill="#fff"
        d="M0 36.91h10.394V14L28 31.606 45.606 14v22.91H56v5.302H39.879V27.788L28 39.667l-11.879-11.88v14.425H0z"
      />
    </g>
    <defs>
      <clipPath id="XMR_svg__a">
        <rect width={56} height={56} fill="#fff" rx={28} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXmr;
