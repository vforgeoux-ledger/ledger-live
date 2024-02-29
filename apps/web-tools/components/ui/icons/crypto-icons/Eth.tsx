import * as React from "react";
import type { SVGProps } from "react";
const SvgEth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#454A75" rx={28} />
    <path fill="#fff" fillOpacity={0.45} d="M28 13.333 18.667 28 28 23.989z" />
    <path
      fill="#fff"
      fillOpacity={0.7}
      d="m28 24-9.333 4.036L28 33.333zM37.333 28 28 13.333V23.99z"
    />
    <path fill="#fff" fillOpacity={0.95} d="m28 33.333 9.333-5.297L28 24z" />
    <path fill="#fff" fillOpacity={0.45} d="m18.667 30.667 9.333 12v-6.97z" />
    <path fill="#fff" fillOpacity={0.7} d="M28 35.696v6.97l9.333-12z" />
  </svg>
);
export default SvgEth;
