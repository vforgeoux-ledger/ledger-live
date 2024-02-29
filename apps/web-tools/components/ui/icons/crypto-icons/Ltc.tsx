import * as React from "react";
import type { SVGProps } from "react";
const SvgLtc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#345D9D" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m25.824 35.94 2.08-6.58 3.24-.861.677-2.178-3.192.908 3.385-10.798v-.172a.5.5 0 0 0-.178-.367.57.57 0 0 0-.402-.142h-4.305a.77.77 0 0 0-.454.133.7.7 0 0 0-.271.366L22.39 29.043l-3.192.908-.726 2.087 3.192-.908-2.853 9.12h17.024a.76.76 0 0 0 .456-.13.7.7 0 0 0 .27-.37l.967-3.13v-.172a.5.5 0 0 0-.05-.2.5.5 0 0 0-.128-.167.57.57 0 0 0-.403-.142z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLtc;
