"use client";
import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  function toUpperCase(str: string): string {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      value={theme}
      className="fixed right-5 bottom-5 bg-mantle hover:bg-crust  font-sans p-3 rounded-md justify-center h-30 text-text outline-none  flex items-center"
      onClick={(e) => {
        if (e.currentTarget.value === "mocha") {
          setTheme("macchiato");
        } else if (e.currentTarget.value === "macchiato") {
          setTheme("frappe");
        } else if (e.currentTarget.value === "frappe") {
          setTheme("latte");
        } else if (e.currentTarget.value === "latte") {
          setTheme("mocha");
        }
      }}
    >
      <Palette className="h-5 w-5 mr-2" />
      {"Catppuccin " + toUpperCase(theme || "")}
    </button>
  );
};

export default ThemeSwitch;
