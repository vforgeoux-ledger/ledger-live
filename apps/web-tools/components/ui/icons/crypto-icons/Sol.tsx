import * as React from "react";
import type { SVGProps } from "react";
const SvgSol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#181818" rx={28} />
    <path
      fill="url(#SOL_svg__a)"
      d="m41.194 34.923-4.403 4.75a1.02 1.02 0 0 1-.745.327H15.178a.51.51 0 0 1-.469-.309.52.52 0 0 1 .094-.556l4.397-4.75a1.02 1.02 0 0 1 .745-.327h20.868a.51.51 0 0 1 .477.305.52.52 0 0 1-.096.56m-4.403-9.568a1.03 1.03 0 0 0-.745-.327H15.178a.51.51 0 0 0-.469.309.52.52 0 0 0 .094.556l4.397 4.752a1.03 1.03 0 0 0 .745.328h20.868a.51.51 0 0 0 .467-.31.52.52 0 0 0-.094-.555zm-21.613-3.412h20.868a1.01 1.01 0 0 0 .745-.328l4.403-4.75a.51.51 0 0 0 .06-.626.51.51 0 0 0-.44-.239H19.944a1.01 1.01 0 0 0-.745.328l-4.397 4.75a.516.516 0 0 0 .375.865"
    />
    <defs>
      <linearGradient
        id="SOL_svg__a"
        x1={16.917}
        x2={38.953}
        y1={40.573}
        y2={15.886}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.08} stopColor="#9945FF" />
        <stop offset={0.3} stopColor="#8752F3" />
        <stop offset={0.5} stopColor="#5497D5" />
        <stop offset={0.6} stopColor="#43B4CA" />
        <stop offset={0.72} stopColor="#28E0B9" />
        <stop offset={0.97} stopColor="#19FB9B" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSol;
