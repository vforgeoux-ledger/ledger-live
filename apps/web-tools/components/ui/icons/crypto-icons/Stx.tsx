import * as React from "react";
import type { SVGProps } from "react";
const SvgStx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#5546FF" rx={28} />
    <path
      fill="#fff"
      d="m39.424 42.753-6.027-9.461h8.656v-3.575H13.667v3.575h8.656l-6.028 9.461h4.486l7.079-11.108 7.079 11.108zm2.629-16.505v-3.575h-8.481l5.957-9.356h-4.52L27.859 24.6l-7.148-11.284h-4.52l5.957 9.356h-8.48v3.61z"
    />
  </svg>
);
export default SvgStx;
