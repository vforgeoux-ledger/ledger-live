import * as React from "react";
import type { SVGProps } from "react";
const SvgAave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#AAVE_svg__a)" rx={28} />
    <path
      fill="#fff"
      d="m40.76 39.187-9.6-23.027c-.541-1.19-1.346-1.771-2.407-1.771h-.849c-1.061 0-1.866.58-2.407 1.771l-4.178 10.032h-3.161a1.725 1.725 0 0 0-1.72 1.706v.022a1.73 1.73 0 0 0 1.72 1.706h1.697l-3.988 9.56c-.073.211-.117.429-.117.654 0 .537.168.958.468 1.285s.732.486 1.274.486c.358-.007.702-.116.987-.327.308-.21.52-.515.688-.863l4.39-10.802h3.045a1.725 1.725 0 0 0 1.72-1.706v-.044a1.73 1.73 0 0 0-1.72-1.706h-1.625l3.351-8.282 9.132 22.532c.169.349.38.654.688.864.285.21.637.32.988.327q.812.002 1.273-.486c.307-.327.468-.748.468-1.285a1.5 1.5 0 0 0-.117-.646"
    />
    <defs>
      <linearGradient
        id="AAVE_svg__a"
        x1={48.876}
        x2={7.212}
        y1={10.434}
        y2={45.49}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B6509E" />
        <stop offset={1} stopColor="#2EBAC6" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgAave;
