import * as React from "react";
import type { SVGProps } from "react";
const SvgAvax = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#E84142" rx={28} />
    <path
      fill="#fff"
      d="M34.639 29.393c.652-1.138 1.704-1.138 2.356 0l4.06 7.206c.652 1.139.118 2.068-1.185 2.068h-8.18c-1.29 0-1.823-.929-1.186-2.068zm-7.854-13.872c.652-1.139 1.69-1.139 2.341 0l.904 1.648 2.134 3.79a3.98 3.98 0 0 1 0 3.43l-7.157 12.54a3.76 3.76 0 0 1-2.934 1.738H16.13c-1.304 0-1.837-.914-1.185-2.068z"
    />
  </svg>
);
export default SvgAvax;
