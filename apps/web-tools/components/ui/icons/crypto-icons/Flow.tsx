import * as React from "react";
import type { SVGProps } from "react";
const SvgFlow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#00EF8B" rx={28} />
    <path
      fill="#fff"
      d="M40.264 23.632h-7.896v7.896h7.896zM24.472 34.496a2.99 2.99 0 0 1-2.968 2.968 2.99 2.99 0 0 1-2.968-2.968 2.99 2.99 0 0 1 2.968-2.968h2.968v-7.896h-2.968c-5.992 0-10.864 4.872-10.864 10.864S15.512 45.36 21.504 45.36s10.864-4.872 10.864-10.864v-2.968h-7.896z"
    />
    <path
      fill="#fff"
      d="M35.336 19.656h8.904V11.76h-8.904c-5.992 0-10.864 4.872-10.864 10.864v1.008h7.896v-1.008a2.99 2.99 0 0 1 2.968-2.968"
    />
  </svg>
);
export default SvgFlow;
