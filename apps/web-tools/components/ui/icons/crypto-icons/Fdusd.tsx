import * as React from "react";
import type { SVGProps } from "react";
const SvgFdusd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#080808" rx={28} />
    <path fill="#fff" d="M42 12.5v7.145H31.647v4.38H42v7.144H24.353V12.5z" />
    <path fill="#00E98D" d="M31.647 43.5v-7.952H14V43.5z" />
  </svg>
);
export default SvgFdusd;
