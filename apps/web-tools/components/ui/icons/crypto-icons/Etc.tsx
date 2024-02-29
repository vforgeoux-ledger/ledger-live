import * as React from "react";
import type { SVGProps } from "react";
const SvgEtc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#0B8311" rx={28} />
    <g fill="#fff" clipPath="url(#ETC_svg__a)">
      <path
        fillOpacity={0.4}
        d="m28.04 21.097-10.126 5.33 10.082-14.76zM18.3 27.967l9.75-5.203v6.003zM17.914 29.457c3.554 1.887 7.262 3.862 10.126 5.39v9.486c-3.383-4.966-7.118-10.446-10.126-14.876"
      />
      <path
        fillOpacity={0.7}
        d="m28.04 34.848 10.043-5.391C34.446 34.859 28.04 44.333 28.04 44.333zm.01-12.084 9.624 5.165-9.623.838zm-.01-1.667-.044-9.43L38.082 26.46z"
      />
      <path fillOpacity={0.7} d="m18.3 27.967 9.752.8.005 4.376z" />
      <path d="m28.05 28.768 9.624-.834-9.618 5.21z" />
    </g>
    <defs>
      <clipPath id="ETC_svg__a">
        <path fill="#fff" d="M11.667 11.667h32.667v32.667H11.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEtc;
