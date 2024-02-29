import * as React from "react";
import type { SVGProps } from "react";
const SvgMana = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="url(#MANA_svg__a)" rx={28} />
    <path
      fill="url(#MANA_svg__b)"
      fillRule="evenodd"
      d="M19.838 18.2v21h17.5z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M2.338 39.2h17.5v-21z"
      clipRule="evenodd"
    />
    <path
      fill="url(#MANA_svg__c)"
      fillRule="evenodd"
      d="M37.562 29.4v15.4H50.4z"
      clipRule="evenodd"
    />
    <path
      fill="#FFBC5B"
      fillRule="evenodd"
      d="M37.562 39.2H2.338A28 28 0 0 0 5.6 44.8h31.976v-5.6z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M24.738 44.8h12.824V29.4z"
      clipRule="evenodd"
    />
    <path
      fill="#FFC95B"
      d="M37.562 25.2a7 7 0 1 0 0-14 7 7 0 0 0 0 14M19.838 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    />
    <path
      fill="#FF2D55"
      d="M27.926 56a27.88 27.88 0 0 1-16.729-5.6h33.606A27.88 27.88 0 0 1 28.074 56z"
    />
    <path
      fill="#FC9965"
      d="M11.197 50.4a28.2 28.2 0 0 1-5.599-5.6h44.804a28.2 28.2 0 0 1-5.6 5.6z"
    />
    <defs>
      <linearGradient
        id="MANA_svg__a"
        x1={47.799}
        x2={8.201}
        y1={8.201}
        y2={47.799}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF2D55" />
        <stop offset={1} stopColor="#FFBC5B" />
      </linearGradient>
      <linearGradient
        id="MANA_svg__b"
        x1={28.588}
        x2={28.588}
        y1={18.2}
        y2={39.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A524B3" />
        <stop offset={1} stopColor="#FF2D55" />
      </linearGradient>
      <linearGradient
        id="MANA_svg__c"
        x1={43.982}
        x2={43.982}
        y1={29.4}
        y2={44.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A524B3" />
        <stop offset={1} stopColor="#FF2D55" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMana;
