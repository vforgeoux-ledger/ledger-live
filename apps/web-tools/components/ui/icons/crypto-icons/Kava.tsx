import * as React from "react";
import type { SVGProps } from "react";
const SvgKava = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#FF564F" rx={28} />
    <path
      fill="#fff"
      d="M19.368 11.464h-5.77v33.072h5.77zM35.148 44.536 22.506 28l12.642-16.536h7.244L29.913 28l12.479 16.536z"
    />
  </svg>
);
export default SvgKava;
