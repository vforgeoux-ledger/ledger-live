import * as React from "react";
import type { SVGProps } from "react";
const SvgFrxeth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#000" rx={28} />
    <path
      fill="#fff"
      d="M28.65 23.016v12.22l11.961-7.247zM28.65 21.638l11.85 4.928-2.834-4.614 6.025-6.026-3.595-3.606-5.163 5.163L28.65 7.246zM27.384 35.235V23.016l-11.962 4.973zM15.523 26.566l11.861-4.928V7.246l-6.283 10.237-5.163-5.163-3.596 3.606 6.015 6.015zM40.477 31.786 28.65 38.954v9.497l4.872-6.854 5.073 5.073 3.607-3.595-5.69-5.69zM27.384 38.954l-11.827-7.168 3.965 5.6-5.69 5.69 3.606 3.594 5.074-5.073 4.872 6.854z"
    />
  </svg>
);
export default SvgFrxeth;
