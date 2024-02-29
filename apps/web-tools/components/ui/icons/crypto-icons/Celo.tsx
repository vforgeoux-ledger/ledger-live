import * as React from "react";
import type { SVGProps } from "react";
const SvgCelo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#FCFF52" rx={28} />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M42.972 13.028H13.028v29.944h29.944V32.52h-4.97c-1.713 3.814-5.569 6.47-9.981 6.47-6.083 0-11.01-4.97-11.01-11.01s4.927-10.967 11.01-10.967c4.498 0 8.354 2.742 10.067 6.64h4.884z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCelo;
