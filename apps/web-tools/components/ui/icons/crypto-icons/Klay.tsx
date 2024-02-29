import * as React from "react";
import type { SVGProps } from "react";
const SvgKlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <mask
      id="KLAY_svg__a"
      width={56}
      height={56}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#F98E0E"
        d="M45.951 6.526C41.151 2.428 35.302.152 29.003 0L14.755 37.789zm3.6 3.49-17.998 18.06L49.55 45.984C53.75 40.976 56 34.602 56 28.076c0-6.678-2.25-12.9-6.45-18.06M21.954 4.25.057 26.255c-.45 7.133 1.8 13.962 6.299 19.577zm6.15 27.317L10.104 49.474C15.205 53.724 21.504 56 28.103 56s12.899-2.276 17.998-6.526z"
      />
    </mask>
    <g mask="url(#KLAY_svg__a)">
      <g filter="url(#KLAY_svg__b)">
        <ellipse
          cx={4.601}
          cy={33.135}
          fill="#840000"
          rx={39.326}
          ry={32.222}
          transform="rotate(28.016 4.601 33.135)"
        />
      </g>
      <g filter="url(#KLAY_svg__c)">
        <ellipse
          cx={41.663}
          cy={27.701}
          fill="#D20167"
          rx={32.766}
          ry={21.889}
          transform="rotate(28.016 41.663 27.701)"
        />
      </g>
      <g filter="url(#KLAY_svg__d)">
        <ellipse cx={31.575} cy={11.319} fill="#FF8B00" rx={28} ry={18.468} />
      </g>
    </g>
    <defs>
      <filter
        id="KLAY_svg__b"
        width={118.659}
        height={110.737}
        x={-54.729}
        y={-22.234}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_7_10397"
          stdDeviation={10.723}
        />
      </filter>
      <filter
        id="KLAY_svg__c"
        width={104.309}
        height={92.304}
        x={-10.491}
        y={-18.451}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_7_10397"
          stdDeviation={10.723}
        />
      </filter>
      <filter
        id="KLAY_svg__d"
        width={98.894}
        height={79.83}
        x={-17.872}
        y={-28.596}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_7_10397"
          stdDeviation={10.723}
        />
      </filter>
    </defs>
  </svg>
);
export default SvgKlay;
