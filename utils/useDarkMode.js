import { useCallback, useEffect, useState } from "react";

function getStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
}

const useDarkMode = (initialState = getStorageValue("darkMode", false)) => {
  const [darkMode, setDarkMode] = useState(initialState);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", true);
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", false);
    }
  }, [darkMode]);
  const toggle = useCallback(() => setDarkMode((state) => !state), []);
  return [darkMode, toggle];
};

export default useDarkMode;
