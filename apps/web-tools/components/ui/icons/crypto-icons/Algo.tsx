import * as React from "react";
import type { SVGProps } from "react";
const SvgAlgo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <path
      fill="#000"
      d="m18.42 42.667 4.26-7.346L26.935 28l4.231-7.347.703-1.165.31 1.165 1.298 4.836L32.024 28l-4.256 7.32-4.232 7.347h5.086l4.258-7.346 2.207-3.802 1.04 3.802 1.971 7.346h4.569l-1.972-7.346L38.72 28l-.518-1.89 3.167-5.457h-4.62l-.158-.544-1.609-6-.207-.776h-4.44l-.103.154-4.154 7.166L21.821 28l-4.23 7.32-4.258 7.347z"
    />
  </svg>
);
export default SvgAlgo;
