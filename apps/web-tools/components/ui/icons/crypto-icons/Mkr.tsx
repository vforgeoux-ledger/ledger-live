import * as React from "react";
import type { SVGProps } from "react";
const SvgMkr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#MKR_svg__a)" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12.362 22.88V37H9.5V20.598c0-1.316 1.573-2.065 2.673-1.275l13.594 9.773c.42.301.666.773.666 1.274V37H23.57v-6.061zM43.638 22.88V37H46.5V20.598c0-1.316-1.573-2.065-2.673-1.275l-13.594 9.773a1.57 1.57 0 0 0-.666 1.274V37h2.862v-6.061z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="MKR_svg__a"
        x1={28}
        x2={28}
        y1={0}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EA89C" />
        <stop offset={1} stopColor="#69CEBC" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMkr;
