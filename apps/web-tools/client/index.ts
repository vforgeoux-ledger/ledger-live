"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type Client = ReturnType<typeof useClient>;
export const useClient = () => {
  const [mounted, setMounted] = useState(false);
  const usedTheme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => usedTheme.setTheme(usedTheme.theme === "dark" ? "light" : "dark");

  return {
    mounted,
    ...usedTheme,
    toggleTheme,
  };
};
