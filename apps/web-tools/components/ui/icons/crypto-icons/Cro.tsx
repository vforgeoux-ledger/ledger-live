import * as React from "react";
import type { SVGProps } from "react";
const SvgCro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#002D74" rx={28} />
    <g fill="#fff" clipPath="url(#CRO_svg__a)">
      <path d="m28.005 11.667-13.616 8.17v16.332l13.616 8.164 13.606-8.164V19.836zm9.575 22.082-9.575 5.744-9.58-5.744V22.251l9.58-5.744 9.575 5.744z" />
      <path d="M34.355 31.816 28 35.627l-6.36-3.81v-7.628L28 20.373l6.355 3.816-2.645 1.588L28 23.548l-3.71 2.229v4.446L28 32.452l3.71-2.229z" />
    </g>
    <defs>
      <clipPath id="CRO_svg__a">
        <path fill="#fff" d="M11.667 11.667h32.667v32.667H11.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCro;
