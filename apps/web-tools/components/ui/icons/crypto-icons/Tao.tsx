import * as React from "react";
import type { SVGProps } from "react";
const SvgTao = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <path
      fill="#000"
      d="M30.846 37.017V25.045a5.5 5.5 0 0 0-1.584-3.838 5.32 5.32 0 0 0-3.781-1.59V38.75c-.008.68.12 1.356.378 1.984a5 5 0 0 0 1.117 1.67c.48.475 1.05.844 1.676 1.086a4.85 4.85 0 0 0 1.96.324 5.47 5.47 0 0 0 3.65-1.076c-3.097-.333-3.415-2.232-3.415-5.72z"
    />
    <path
      fill="#000"
      d="M19.5 14.609c-1.3.008-2.544.54-3.46 1.479a5.06 5.06 0 0 0-1.431 3.53h21.89a4.88 4.88 0 0 0 3.462-1.478 5.06 5.06 0 0 0 1.43-3.531z"
    />
  </svg>
);
export default SvgTao;
