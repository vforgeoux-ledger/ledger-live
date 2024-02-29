import * as React from "react";
import type { SVGProps } from "react";
const SvgAkash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <path
      fill="url(#AKASH_svg__a)"
      d="m34.066 33.334 5.942 10.665H28.004L22 33.334z"
    />
    <path fill="#FF414C" d="M40.005 44 46 33.335 34 12H22z" />
    <path fill="#FF414C" d="M16 22.662h12L16.005 43.997 10 33.332z" />
    <defs>
      <linearGradient
        id="AKASH_svg__a"
        x1={32.866}
        x2={37.387}
        y1={40.708}
        y2={35.41}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF414C" />
        <stop offset={1} stopColor="#FF414C" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAkash;
