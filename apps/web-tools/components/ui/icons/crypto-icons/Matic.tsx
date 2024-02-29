import * as React from "react";
import type { SVGProps } from "react";
const SvgMatic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="url(#MATIC_svg__a)" rx={28} />
    <path
      fill="#fff"
      d="m35.26 33.282 7.103-3.999c.377-.212.61-.606.61-1.029v-7.998c0-.423-.233-.817-.61-1.029l-7.103-3.999a1.25 1.25 0 0 0-1.218 0l-7.103 3.999c-.376.212-.609.606-.609 1.03v14.291l-4.981 2.803-4.981-2.803v-5.607l4.98-2.803 3.286 1.85v-3.762l-2.676-1.507a1.25 1.25 0 0 0-1.218 0l-7.103 3.999c-.377.212-.61.606-.61 1.029v7.998c0 .422.234.816.61 1.029l7.103 3.999c.376.21.841.21 1.218 0l7.103-4c.376-.212.609-.606.609-1.028V21.45l.089-.05 4.89-2.753 4.981 2.803v5.608l-4.98 2.803-3.282-1.846v3.762l2.672 1.503c.376.21.844.21 1.218 0z"
    />
    <defs>
      <linearGradient
        id="MATIC_svg__a"
        x1={-0.182}
        x2={56.683}
        y1={46.467}
        y2={17.233}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A726C1" />
        <stop offset={0.88} stopColor="#803BDF" />
        <stop offset={1} stopColor="#7B3FE4" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMatic;
