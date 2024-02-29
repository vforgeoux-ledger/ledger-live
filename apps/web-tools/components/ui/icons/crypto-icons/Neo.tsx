import * as React from "react";
import type { SVGProps } from "react";
const SvgNeo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <path
      fill="#00E599"
      d="M13 17.285V39.36l14.41 5.14V22.246L43 16.533 28.851 11.5z"
    />
    <path fill="#00AF92" d="M28.59 22.882v12.072L43 40.094V17.581z" />
  </svg>
);
export default SvgNeo;
