import * as React from "react";
import type { SVGProps } from "react";
const SvgSc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#20EE82" rx={28} />
    <path
      fill="#fff"
      d="M28.304 52.153c13.307 0 24.093-10.787 24.093-24.093S41.611 3.967 28.304 3.967c-13.306 0-24.093 10.787-24.093 24.093s10.787 24.093 24.093 24.093"
    />
    <path
      fill="#20EE82"
      fillRule="evenodd"
      d="M28 18.83a9.145 9.145 0 1 0 0 18.29h9.145v-9.145A9.145 9.145 0 0 0 28 18.83"
      clipRule="evenodd"
    />
    <path
      fill="#20EE82"
      fillRule="evenodd"
      d="M28 0C12.536 0 0 12.536 0 28s12.536 28 28 28 28-12.536 28-28S43.464 0 28 0m15.242 43.217H28a15.244 15.244 0 0 1-14.054-21.141 15.24 15.24 0 0 1 14.17-9.342c8.404.062 15.126 7.028 15.126 15.433z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSc;
