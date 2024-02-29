import * as React from "react";
import type { SVGProps } from "react";
const SvgEgld = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#000" rx={28} />
    <path
      fill="#23F7DD"
      d="m29.744 28 14.59-7.656-2.437-4.594-13.371 5.346c-.305.139-.747.139-1.052 0L14.103 15.75l-2.436 4.594L26.256 28l-14.59 7.656 2.437 4.594 13.371-5.346c.305-.139.747-.139 1.052 0l13.371 5.346 2.436-4.594z"
    />
  </svg>
);
export default SvgEgld;
