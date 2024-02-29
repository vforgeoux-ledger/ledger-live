import * as React from "react";
import type { SVGProps } from "react";
const SvgDydx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#DYDX_svg__a)" rx={28} />
    <path fill="#fff" d="M35.24 12.708 13.447 43.293h6.648l21.87-30.585z" />
    <path
      fill="url(#DYDX_svg__b)"
      d="m20.834 12.708 6.427 9.013-3.398 4.875-9.827-13.888z"
    />
    <path
      fill="url(#DYDX_svg__c)"
      d="m35.831 43.293-7.092-9.973 3.324-4.803 10.49 14.775z"
    />
    <defs>
      <linearGradient
        id="DYDX_svg__a"
        x1={36.998}
        x2={23.404}
        y1={-9.702}
        y2={47.259}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2C2C3D" />
        <stop offset={1} stopColor="#1A1A27" />
      </linearGradient>
      <linearGradient
        id="DYDX_svg__b"
        x1={18.458}
        x2={27.471}
        y1={14.995}
        y2={25.781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.549} />
      </linearGradient>
      <linearGradient
        id="DYDX_svg__c"
        x1={37.483}
        x2={26.327}
        y1={40.727}
        y2={25.507}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6966FF" />
        <stop offset={1} stopColor="#6966FF" stopOpacity={0.361} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDydx;
