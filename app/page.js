// src/app/page.js
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m Mongkol 👋
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
          I design and optimize AI-powered workflows, making complex systems reliable and accessible.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
