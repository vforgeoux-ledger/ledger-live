import * as React from "react";
import type { SVGProps } from "react";
const SvgMeth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <path
      fill="#FF596E"
      d="M19.482 22.752 28 18.58V7.17zM28 18.579v9.09l8.518-4.917z"
    />
    <path
      fill="#800010"
      d="M28 18.579v9.09l-8.518-4.917zM36.518 22.752 28 18.58V7.17z"
    />
    <path fill="#FF596E" d="M27.999 31.178v9.688l-8.682-14.7z" />
    <path
      fill="#800010"
      d="M28 31.178v9.688l8.682-14.7zM38.116 28.387l1.967 5.83 4.307-7.6z"
    />
    <path fill="#FF596E" d="m40.082 34.217 4.308-1.348v-6.253z" />
    <path
      fill="#800010"
      d="m44.388 32.869-6.274 11.073-4.766 2.156 6.733-11.881z"
    />
    <path
      fill="#FF596E"
      d="m11.61 32.869 6.274 11.073 4.766 2.155-6.733-11.88z"
    />
    <path
      fill="#800010"
      d="M28 46.098 17.885 28.387l-1.967 5.83 6.733 11.88z"
    />
    <path fill="#FF596E" d="m17.884 28.387-1.967 5.83-4.307-7.6z" />
    <path fill="#800010" d="m15.917 34.217-4.307-1.348v-6.253z" />
    <path fill="#FF596E" d="m28 46.098 10.115-17.711 1.967 5.83-6.733 11.88z" />
  </svg>
);
export default SvgMeth;
