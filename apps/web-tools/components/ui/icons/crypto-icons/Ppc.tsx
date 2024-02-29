import * as React from "react";
import type { SVGProps } from "react";
const SvgPpc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#3CB054" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.111 14.389c18.289.676 25.341 11.654 21.8 21.45-1.002 2.726-2.068 4.219-4.31 5.772.091-.393.185-.786.258-1.19 1.324-7.642-1.188-16.838-13.478-21.918 9.778 5.819 13.724 16.174 9.164 22.859-7.763 1.22-13.434-5.409-13.434-13.046z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPpc;
