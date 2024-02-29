import * as React from "react";
import type { SVGProps } from "react";
const SvgWoo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#000" rx={28} />
    <g fill="#fff" clipPath="url(#WOO_svg__a)">
      <path d="M11.118 16.47h5.747l4.517 14.892 3.08-7.686a2.64 2.64 0 0 1 2.446-1.663h2.19a2.64 2.64 0 0 1 2.445 1.662l3.08 7.687 1.693-5.582h5.747l-3.597 11.864a2.64 2.64 0 0 1-2.524 1.88h-2.018a2.64 2.64 0 0 1-2.445-1.662L28 29.183l-3.479 8.68a2.64 2.64 0 0 1-2.445 1.661h-2.018a2.64 2.64 0 0 1-2.524-1.88zM39.135 16.47l-1.683 5.543H43.2l1.682-5.542z" />
    </g>
    <defs>
      <clipPath id="WOO_svg__a">
        <path fill="#fff" d="M11.118 16.47h33.765v23.06H11.118z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWoo;
