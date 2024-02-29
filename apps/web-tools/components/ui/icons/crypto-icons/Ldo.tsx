import * as React from "react";
import type { SVGProps } from "react";
const SvgLdo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#LDO_svg__a)" rx={28} />
    <mask
      id="LDO_svg__b"
      width={32}
      height={25}
      x={12}
      y={25}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="M27.978 32.973 15.5 25.85l-.336.515c-3.83 5.891-2.98 13.597 2.06 18.547 5.937 5.824 15.569 5.824 21.505 0 5.04-4.95 5.89-12.656 2.06-18.547l-.336-.515z"
      />
    </mask>
    <g mask="url(#LDO_svg__b)">
      <path
        fill="url(#LDO_svg__c)"
        d="M27.978 49.728c8.4 0 15.21-6.81 15.21-15.21s-6.81-15.21-15.21-15.21-15.21 6.81-15.21 15.21 6.81 15.21 15.21 15.21"
      />
    </g>
    <path
      fill="url(#LDO_svg__d)"
      d="m27.978 17.069-10.752 6.137 10.752 6.138 10.752-6.138z"
    />
    <path
      fill="url(#LDO_svg__e)"
      d="m28 18.66-12.5 7.19 12.478 7.123 12.454-7.123z"
    />
    <path
      fill="url(#LDO_svg__f)"
      d="M27.978 6.72 17.226 23.206l10.752 6.138z"
    />
    <path
      fill="url(#LDO_svg__g)"
      d="m27.978 29.344 10.752-6.138L27.978 6.72z"
    />
    <defs>
      <radialGradient
        id="LDO_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-90.466 37.268 9.623)scale(20.3117 24.2103)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C5C6AB" />
        <stop offset={1} stopColor="#7985AB" />
      </radialGradient>
      <radialGradient
        id="LDO_svg__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(27.978 23.206)scale(.5376)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#06F" stopOpacity={0} />
        <stop offset={1} stopColor="#00C2FF" stopOpacity={0.4} />
      </radialGradient>
      <radialGradient
        id="LDO_svg__e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(.62738 0 0 .62738 27.966 25.816)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AEE6F9" stopOpacity={0.859} />
        <stop offset={1} stopColor="#C8D6DC" />
      </radialGradient>
      <linearGradient
        id="LDO_svg__a"
        x1={28}
        x2={28}
        y1={0}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F89791" />
        <stop offset={1} stopColor="#F7C882" />
      </linearGradient>
      <linearGradient
        id="LDO_svg__f"
        x1={22.602}
        x2={22.602}
        y1={5.6}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#77D4FF" />
        <stop offset={1} stopColor="#93D6F2" stopOpacity={0.898} />
      </linearGradient>
      <linearGradient
        id="LDO_svg__g"
        x1={33.354}
        x2={33.354}
        y1={5.6}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#506AAC" />
        <stop offset={1} stopColor="#96CFEF" stopOpacity={0.82} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLdo;
