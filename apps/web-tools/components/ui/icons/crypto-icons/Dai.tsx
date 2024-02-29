import * as React from "react";
import type { SVGProps } from "react";
const SvgDai = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#F5AC37" rx={28} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.651 17.111h9.388c5.71 0 10.038 3.032 11.648 7.442h2.924v2.666h-2.308q.066.632.067 1.287v.066q0 .736-.086 1.447h2.327v2.665h-2.98c-1.652 4.35-5.946 7.351-11.59 7.351h-9.39v-7.351H14.39v-2.665h3.262v-2.8H14.39v-2.665h3.262zm2.624 15.573v4.96h6.762c4.175 0 7.276-1.987 8.718-4.96zm16.284-2.665H20.275v-2.8h16.29q.09.66.09 1.353v.064q0 .707-.096 1.381zM27.04 19.497c4.192 0 7.303 2.04 8.737 5.054H20.275v-5.053h6.762z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDai;
