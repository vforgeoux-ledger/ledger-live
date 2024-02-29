import * as React from "react";
import type { SVGProps } from "react";
const SvgSweth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#SWETH_svg__a)" rx={28} />
    <path
      fill="#fff"
      d="m43.572 31.604-.04.048-.062.061-11.778 11.75a5.257 5.257 0 0 1-7.425 0l-3.25-3.243a.583.583 0 0 1 0-.83.64.64 0 0 1 .244-.15c3.489-1.074 6.317-2.318 8.493-3.726 5.182-3.352 9.792-4.658 13.818-3.91m-2.468-9.676c4.345 1.367 3.842 4.57 3.896 5.828-4.76-2.496-10.486-1.585-17.184 2.747-4.99 3.223-9.166 4.556-12.539 3.991-3.366-.564-4.127-4.685-4.277-5.773q5.551 2.805 14.885-3.223c5.8-3.747 10.867-4.937 15.219-3.57m-9.412-9.39 3.054 3.052a.583.583 0 0 1 0 .83.6.6 0 0 1-.3.163c-4.42.89-7.962 2.197-10.614 3.91-4.543 2.93-8.412 4.298-11.615 4.087l12.05-12.043a5.257 5.257 0 0 1 7.425 0"
    />
    <defs>
      <linearGradient
        id="SWETH_svg__a"
        x1={28.165}
        x2={27.616}
        y1={-0.002}
        y2={94.439}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3068EF" />
        <stop offset={1} stopColor="#1322AC" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSweth;
