import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Dark Mode Context was used outside of Dark Mode Provider");
  return context;
}

export default useDarkMode;
