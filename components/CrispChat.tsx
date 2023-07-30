"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1b85dcfc-2ca4-4e10-b7b9-cb1bfb5eda3f");
  }, []);

  return null;
};
