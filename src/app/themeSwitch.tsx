"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
interface ThemeSwitchProps {
    className: string

}
const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    function toUpperCase(str: string): string {
      return str?.charAt(0).toUpperCase() + str?.slice(1);
    }
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  
    return (
      <button value={theme} className="fixed right-5 bottom-5 bg-mantle font-sans text-md p-2 rounded h-30 text-text outline-none flex items-center" onClick={(e) => {
        if (e.currentTarget.value.includes("ocha")) {
            setTheme('macchiato')
        } else if (e.currentTarget.value.includes("acchiato")) {
            setTheme('frappe')
        } else if (e.currentTarget.value.includes("rappe")) {
            setTheme('latte')
        } else if (e.currentTarget.value.includes("atte")) {
            setTheme('mocha')
        }
        window.location.reload()
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
        {"Catppuccin " + toUpperCase(theme || "")}
      </button>
    )
  }
  
  export default ThemeSwitch