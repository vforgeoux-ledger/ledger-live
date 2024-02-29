import * as React from "react";
import type { SVGProps } from "react";
const SvgBat = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#FF4724"
      fillRule="evenodd"
      d="m11.941 39.849 9.506-5.56L28 22.855V11.83c-.173 0-.346.115-.477.343l-7.762 13.545-7.762 13.544c-.13.229-.144.436-.058.587"
      clipRule="evenodd"
    />
    <path
      fill="#9E1F63"
      fillRule="evenodd"
      d="M28 11.83v11.025l6.553 11.434 9.506 5.56c.085-.15.073-.358-.058-.587l-7.762-13.544-7.762-13.545c-.132-.229-.305-.343-.477-.343"
      clipRule="evenodd"
    />
    <path
      fill="#662D91"
      fillRule="evenodd"
      d="m44.058 39.849-9.505-5.56H21.447l-9.506 5.56c.086.151.27.245.532.245h31.053c.262 0 .446-.094.532-.245"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M21.447 34.29h13.106L28 22.854z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBat;
