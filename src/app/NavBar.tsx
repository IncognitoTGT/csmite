"use client";
import ThemeSwitch from "./themeSwitch";
export default function NavBar() {
  return (
    <>
      <ThemeSwitch />
      <nav className="flex flex-row justify-between items-center p-5 mx-auto overflow-y-auto bg-base"></nav>
    </>
  );
}
