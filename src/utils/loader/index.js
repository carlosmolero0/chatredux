import React from "react";
//lootie
import Lottie from "react-lottie";
import loaderData from "./lootieLoader.json";

const Loader = ({ height = 50, width = 50 }) => {
  //react lootie default option (for more info go to lootie files doc...)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={height} width={width} />
    </>
  );
};

export default Loader;
