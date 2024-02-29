import * as React from "react";
import type { SVGProps } from "react";
const SvgBcfx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#26244B" rx={28} />
    <path
      fill="#fff"
      d="m36.134 31.49-8.142 7.768-4.532-4.323 8.143-7.767-3.622-3.454-11.803 11.258L27.949 46.2l11.803-11.259z"
    />
    <path
      fill="#fff"
      d="M43.4 24.47 28.022 9.8 12.6 24.511l.05 6.876 15.306-14.601 15.418 14.708z"
    />
  </svg>
);
export default SvgBcfx;
