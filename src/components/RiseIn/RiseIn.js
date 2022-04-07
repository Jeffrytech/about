import React from "react";
import useOnVisible from "../../hooks/useOnVisible";

import  "./RiseIn.scss";

const RiseIn = ({ text, delay }) => {
  const options = {
    rootMargin: "0px 0px -150px 0px",
  };
  const [setRef, appearClass] = useOnVisible(options);


  return (
    <div ref = {setRef} className={`RiseIn`}>
      <h1 className={`RiseIn ${appearClass}`} style={{ animationDelay: delay }}>{text}</h1>
    </div>
  );
};

export default RiseIn;
