import * as React from "react";
import type { SVGProps } from "react";
const SvgKas = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#6FC7BA" rx={28} />
    <path
      fill="#1A1A1A"
      d="m31.543 43.39 6 .888 2.386-16.135L37.543 12l-6 .889 1.71 11.609-12.556-9.668L17 19.653l11.016 8.49L17 36.625l3.697 4.83 12.557-9.675z"
    />
  </svg>
);
export default SvgKas;
