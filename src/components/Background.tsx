// "use client";

// import dynamic from "next/dynamic";
// import { FC, useEffect } from "react";

// const StarSky = dynamic(() => import("react-star-sky"), {
//   ssr: false,
//   loading: () => <div className="fixed inset-0 bg-black -z-10" />,
// });

// const Background: FC = () => {
//   useEffect(() => {
//     // Get the StarSky canvas element
//     const canvas = document.querySelector("canvas"); // Assuming it renders as a canvas element

//     // Ensure passive listeners are set for touch and scroll events
//     if (canvas) {
//       // Adding passive event listeners to improve performance
//       canvas.addEventListener("touchstart", () => {}, { passive: true });
//       canvas.addEventListener("touchmove", () => {}, { passive: true });
//       canvas.addEventListener("wheel", () => {}, { passive: true });
//       canvas.addEventListener("scroll", () => {}, { passive: true });
//     }

//     return () => {
//       // Cleanup listeners on component unmount
//       if (canvas) {
//         canvas.removeEventListener("touchstart", () => {});
//         canvas.removeEventListener("touchmove", () => {});
//         canvas.removeEventListener("wheel", () => {});
//         canvas.removeEventListener("scroll", () => {});
//       }
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 -z-10 opacity-75">
//       <StarSky isPageBackground={true} frameRate={120} />
//     </div>
//   );
// };

// export default Background;
