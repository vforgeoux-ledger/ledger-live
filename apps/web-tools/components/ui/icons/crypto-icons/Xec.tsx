import * as React from "react";
import type { SVGProps } from "react";
const SvgXec = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#XEC_svg__a)" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.227 22.282c2.217-1.287 4.455-2.581 6.672-3.868a2.09 2.09 0 0 1 2.152 0l3.304 1.894a.295.295 0 0 1 0 .499l-8.069 4.663a.67.67 0 0 0-.33.586v3.912c0 .23.121.448.33.556l3.376 1.96a.6.6 0 0 0 .64 0l13.927-8.055c2.361-1.373 2.361-5.328 0-6.702l-12.516-7.244a3.35 3.35 0 0 0-3.462 0l-12.51 7.244a3.45 3.45 0 0 0-1.74 3.015c0 4.837.02 9.674 0 14.503a3.44 3.44 0 0 0 1.74 3.023l12.517 7.266a3.45 3.45 0 0 0 3.462 0l12.51-7.267a3.41 3.41 0 0 0 1.72-3.022v-6.297l-14.892 8.654a2.09 2.09 0 0 1-2.152 0l-6.65-3.875a2.12 2.12 0 0 1-1.08-1.872v-7.722a2.13 2.13 0 0 1 1.05-1.851"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="XEC_svg__a"
        x1={14.479}
        x2={34.571}
        y1={-7.65}
        y2={59.044}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#273498" />
        <stop offset={0.53} stopColor="#0074C2" />
        <stop offset={1} stopColor="#00ABE7" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgXec;
