import * as React from "react";
import type { SVGProps } from "react";
const SvgVet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="url(#VET_svg__a)" rx={28} />
    <path
      fill="#fff"
      d="M41.611 16.43h-2.43c-.592 0-1.135.358-1.39.913l-6.392 13.869-.005-.017-1.701 3.695.005.017-1.7 3.695-8.5-18.47h2.423c.593 0 1.136.356 1.392.912l5.548 11.981 1.701-3.695-4.478-9.669c-.907-1.972-2.82-3.23-4.918-3.23h-6.777l1.695 3.7h.006l10.2 22.16h3.403z"
    />
    <defs>
      <linearGradient
        id="VET_svg__a"
        x1={-1.085}
        x2={66.005}
        y1={52.04}
        y2={-4.269}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00098C" />
        <stop offset={0.313} stopColor="#00BED7" />
        <stop offset={0.937} stopColor="#82BE00" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgVet;
