import * as React from "react";
import type { SVGProps } from "react";
const SvgUsdt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#00A478" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M30.81 29.023v-.003c-.168.012-1.036.064-2.971.064a64 64 0 0 1-3.016-.064v.005c-5.95-.262-10.39-1.298-10.39-2.537s4.44-2.274 10.39-2.54v4.045a45 45 0 0 0 3.042.094c1.847 0 2.772-.077 2.945-.092V23.95c5.937.264 10.367 1.3 10.367 2.537 0 1.24-4.43 2.272-10.367 2.535m0-5.493v-3.62h8.284v-5.52H16.54v5.52h8.284v3.619c-6.733.309-11.796 1.643-11.796 3.24s5.063 2.93 11.796 3.241v11.601h5.987V30.007c6.722-.31 11.773-1.642 11.773-3.238s-5.05-2.928-11.773-3.239"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUsdt;
