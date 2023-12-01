import { useState } from "react";
import { IUseHome } from "./Home.types";

export function useHome(): IUseHome {
  const [theme, setTheme] = useState<IUseHome["theme"]>("light");

  function toggleTheme(): void {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return { theme, toggleTheme };
}
