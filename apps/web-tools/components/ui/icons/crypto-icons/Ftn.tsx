import * as React from "react";
import type { SVGProps } from "react";
const SvgFtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#FF008C" rx={28} />
    <path
      fill="#fff"
      d="M22.732 46a2.64 2.64 0 0 1-1.408-.365 2.67 2.67 0 0 1-1.008-1.056 2.7 2.7 0 0 1 .181-2.812l6.702-9.299-10.968-1.08a2.93 2.93 0 0 1-1.593-.632 2.97 2.97 0 0 1-.976-1.417 3.04 3.04 0 0 1-.067-1.735 3 3 0 0 1 .893-1.484l17.09-15.422A2.58 2.58 0 0 1 33.365 10c.703.01 1.375.291 1.877.788.432.454.696 1.046.744 1.674a2.74 2.74 0 0 1-.476 1.77l-6.702 9.299 10.968 1.058c.58.056 1.132.282 1.588.649a3.057 3.057 0 0 1 .155 4.62L24.452 45.3a2.73 2.73 0 0 1-1.72.698"
    />
  </svg>
);
export default SvgFtn;
