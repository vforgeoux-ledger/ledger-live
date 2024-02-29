import * as React from "react";
import type { SVGProps } from "react";
const SvgFlr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#E62058" rx={28} />
    <path
      fill="#fff"
      d="M34.639 24.579H21.213c-3.709 0-6.676 2.9-6.824 6.62 0 .074.074.148.148.148h13.426c3.709 0 6.676-2.9 6.824-6.62 0-.074-.074-.148-.148-.148M41.389 14.389H21.213c-3.709 0-6.676 2.9-6.824 6.62 0 .074.074.223.148.223h20.25c3.709 0 6.676-2.901 6.824-6.62q0-.223-.222-.223M17.8 41.611a3.417 3.417 0 0 0 3.413-3.421 3.417 3.417 0 0 0-3.412-3.422 3.417 3.417 0 0 0-3.412 3.422A3.417 3.417 0 0 0 17.8 41.61"
    />
  </svg>
);
export default SvgFlr;
