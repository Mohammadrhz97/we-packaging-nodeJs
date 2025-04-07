"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      offset: 200,
      easing: "ease-in-sine",
    });
  }, []);

  return null;
}
