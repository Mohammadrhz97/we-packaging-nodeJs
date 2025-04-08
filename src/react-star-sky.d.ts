declare module "react-star-sky" {
  import { FC } from "react";

  interface StarSkyProps {
    isPageBackground: boolean;
    frameRate: number;
  }

  const StarSky: FC<StarSkyProps>;
  export default StarSky;
}
