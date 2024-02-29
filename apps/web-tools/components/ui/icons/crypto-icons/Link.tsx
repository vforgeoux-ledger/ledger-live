import * as React from "react";
import type { SVGProps } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#2A5ADA" rx={28} />
    <path
      fill="#fff"
      d="m28 14.389-2.449 1.436-6.67 3.934-2.45 1.436v13.61l2.448 1.437 6.734 3.933 2.448 1.436 2.449-1.436 6.61-3.933 2.45-1.436V21.195l-2.45-1.436-6.671-3.934zm-6.672 17.545v-7.868L28 20.133l6.672 3.933v7.868L28 35.867z"
    />
  </svg>
);
export default SvgLink;
