import Link from "next/link"
import { ToggleTheme } from "../button/toggle-theme"

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                       w-[90%] max-w-4xl 
                       flex justify-between items-center 
                       px-6 py-3 
                       rounded-full 
                       bg-white/70 dark:bg-black/50 
                       backdrop-blur shadow-lg border border-gray-200 dark:border-gray-800">
      <h1 className="text-lg font-bold">Mars.dev</h1>
      <nav className="flex gap-6 items-center text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        <ToggleTheme />
      </nav>
    </header>
  )
}
