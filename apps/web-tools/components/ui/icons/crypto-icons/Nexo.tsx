import * as React from "react";
import type { SVGProps } from "react";
const SvgNexo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <path
      fill="#60BEFF"
      d="M12 18.998v17.639c0 .108.028.215.082.31a.64.64 0 0 0 .228.231L20 41.5V23.483z"
    />
    <path
      fill="#1A4199"
      d="m35.994 14.5 7.696 4.322a.617.617 0 0 1 .31.523v17.638l-8.007-4.491z"
    />
    <path
      fill="#3CA9E5"
      d="m20 41.488 7.993-4.498L20 32.492zM20.304 14.677l15.69 8.82v8.995L12 19l7.69-4.322a.59.59 0 0 1 .614 0"
    />
    <path
      fill="#2853C3"
      d="m35.995 14.5-8 4.498 8 4.498zM43.994 36.99l-7.69 4.321a.66.66 0 0 1-.647 0l-15.683-8.82v-9.008z"
    />
  </svg>
);
export default SvgNexo;
