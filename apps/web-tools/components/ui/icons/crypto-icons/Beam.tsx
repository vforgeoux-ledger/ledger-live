import * as React from "react";
import type { SVGProps } from "react";
const SvgBeam = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <g clipPath="url(#BEAM_svg__a)">
      <path fill="url(#BEAM_svg__b)" d="M0 0h56v14.341H0z" />
      <path fill="url(#BEAM_svg__c)" d="M0 14.341h56v14H0z" />
      <path fill="url(#BEAM_svg__d)" d="M0 28.341h56v14H0z" />
      <path fill="url(#BEAM_svg__e)" d="M0 42.342h56v13.659H0z" />
    </g>
    <defs>
      <linearGradient
        id="BEAM_svg__b"
        x1={28}
        x2={28}
        y1={0}
        y2={14.341}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.476} stopColor="#BBD9FD" />
        <stop offset={1} stopColor="#30AEE3" />
      </linearGradient>
      <linearGradient
        id="BEAM_svg__c"
        x1={28}
        x2={28}
        y1={14.341}
        y2={28.341}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.545} stopColor="#F66F75" />
        <stop offset={1} stopColor="#F51213" />
      </linearGradient>
      <linearGradient
        id="BEAM_svg__d"
        x1={28}
        x2={28}
        y1={28.341}
        y2={42.342}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.493} stopColor="#ECE765" />
        <stop offset={1} stopColor="#FD8F1B" />
      </linearGradient>
      <linearGradient
        id="BEAM_svg__e"
        x1={28}
        x2={28}
        y1={42.342}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.484} stopColor="#B9FDC4" />
        <stop offset={1} stopColor="#3ECF13" />
      </linearGradient>
      <clipPath id="BEAM_svg__a">
        <rect width={56} height={56} fill="#fff" rx={28} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBeam;
