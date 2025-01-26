"use client";

import { useEffect } from "react";

export default function ScrollBehavior() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return null;
}
