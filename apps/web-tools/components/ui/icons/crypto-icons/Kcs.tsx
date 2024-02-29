import * as React from "react";
import type { SVGProps } from "react";
const SvgKcs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#01BC8D" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m23.372 27.999 7.825 8.061 4.938-5.086a2.186 2.186 0 0 1 3.158 0 2.35 2.35 0 0 1 0 3.255l-6.517 6.715a2.2 2.2 0 0 1-3.158 0l-9.4-9.689v5.76c0 1.264-1.008 2.301-2.235 2.301-1.234 0-2.233-1.031-2.233-2.302V18.986c0-1.27 1-2.302 2.233-2.302s2.234 1.032 2.234 2.302v5.76l9.401-9.69a2.2 2.2 0 0 1 3.158 0l6.519 6.716a2.35 2.35 0 0 1 0 3.255 2.187 2.187 0 0 1-3.161 0l-4.937-5.088zm7.828-2.303c1.235 0 2.236 1.031 2.236 2.303s-1.001 2.303-2.236 2.303c-1.234 0-2.235-1.031-2.235-2.303s1.001-2.303 2.235-2.303"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgKcs;
