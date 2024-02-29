import * as React from "react";
import type { SVGProps } from "react";
const SvgEos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <rect width={56} height={56} fill="#000" rx={28} />
    <g clipPath="url(#EOS_svg__a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28 11.667a.58.58 0 0 1 .472.239l6.944 9.55q.072.099.098.22l3.361 15.45a.585.585 0 0 1-.258.62l-10.305 6.498a.6.6 0 0 1-.312.09.57.57 0 0 1-.312-.09l-10.305-6.498a.585.585 0 0 1-.258-.62l3.36-15.45a.6.6 0 0 1 .098-.22l6.945-9.55a.58.58 0 0 1 .472-.24m-.584 2.367-5.724 7.871 1.43 4.518 4.294-7.628zM28 20.123l-4.4 7.814 2.763 8.731h3.274l2.762-8.732zm5.178 9.196-2.325 7.349h6.462zm3.115 8.516h-5.809l-1.448 4.576zM28 41.843l1.268-4.009h-2.536zm-2.854-5.175-2.324-7.347-4.137 7.347zm-6.07-3.06 3.266-5.802-1.188-3.756zm.63 4.227h5.81l1.448 4.576zm17.217-4.228-3.266-5.802 1.188-3.755zm-2.616-11.702-1.429 4.517-4.294-7.628v-4.76z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="EOS_svg__a">
        <path fill="#fff" d="M11.667 11.667h32.667v32.667H11.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEos;
