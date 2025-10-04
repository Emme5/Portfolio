import Image from "next/image"
import { Github, Linkedin } from "lucide-react"
import { SiTailwindcss, SiReact } from "react-icons/si"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center py-30 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black">
      <div className="relative w-[90%] max-w-6xl mx-auto rounded-2xl border bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch">
        
        {/* Left Content */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-600">Robot</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A passionate developer crafting reliable AI-powered workflows and modern web experiences.
          </p>
          <div className="flex gap-4 mb-6">
            <Button asChild>
              <a href="/projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
          </div>

          {/* Icons */}
          <div className="flex gap-6 text-gray-600 dark:text-gray-300 text-2xl">
            <a href="https://github.com" target="_blank"><Github /></a>
            <a href="https://linkedin.com" target="_blank"><Linkedin /></a>
            <SiReact className="w-7 h-7 text-sky-500" />
            <SiTailwindcss className="w-7 h-7 text-cyan-500" />
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 -mr-10 md:-mr-20">
            <Image
              src="/profile.png" // ใส่รูปคุณเองใน public/profile.png
              alt="Profile"
              fill
              className="object-cover rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}