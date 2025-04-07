"use client";

import React from "react";
import StarSky from "react-star-sky";

const Background: React.FC = () => {
  return (
    <>
      {/* Renders a starry sky animation as the page background */}
      <StarSky isPageBackground={true} frameRate={120} />
    </>
  );
};

export default Background;
