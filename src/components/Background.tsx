"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

const StarSky = dynamic(() => import("react-star-sky"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black -z-10" />,
});

const Background: FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <StarSky isPageBackground={true} frameRate={120} />
    </div>
  );
};

export default Background;
