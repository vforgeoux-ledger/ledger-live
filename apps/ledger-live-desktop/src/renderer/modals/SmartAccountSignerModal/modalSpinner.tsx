import React from "react";
import LoaderSvg from "./loaderSvg";

import "./index.css";

interface ModalSpinnerProps {
  isReady: boolean;
}

const ModalSpinner = ({ isReady }: ModalSpinnerProps) => {
  return (
    <div className="center">
      <div className="blur">
        <div className={isReady ? "done-animation" : "information-animation"}>
          <LoaderSvg />
        </div>
      </div>
    </div>
  );
};
export default ModalSpinner;
