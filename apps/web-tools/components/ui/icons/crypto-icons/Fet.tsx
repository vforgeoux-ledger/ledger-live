import * as React from "react";
import type { SVGProps } from "react";
const SvgFet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#FET_svg__a)" rx={28} />
    <path
      fill="#fff"
      d="M41.615 26.886a2.284 2.284 0 1 1-3.8 2.538 2.284 2.284 0 0 1 3.8-2.538M41.615 38.447a2.284 2.284 0 1 1-3.799 2.538 2.284 2.284 0 0 1 3.799-2.538M42 14h-5.482v5.482H42zM30.222 38.447a2.284 2.284 0 1 1-3.799 2.538 2.284 2.284 0 0 1 3.8-2.538M31.064 25.414h-5.482v5.482h5.482zM31.217 14H25.43v5.787h5.787zM20.11 14.005h-6.092v6.092h6.092zM19.482 36.518H14V42h5.482zM19.787 25.262H14v5.786h5.787z"
    />
    <defs>
      <linearGradient
        id="FET_svg__a"
        x1={0}
        x2={56}
        y1={0}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#101458" />
        <stop offset={1} stopColor="#19186A" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgFet;
