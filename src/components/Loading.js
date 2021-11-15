import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => (
  <div className="spinner">
    <BeatLoader size={15} />
  </div>
);

export default Loading;
