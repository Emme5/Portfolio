"use client"

import { motion } from "framer-motion"
import { SiNextdotjs, SiNodedotjs, SiTailwindcss, SiSupabase, SiN8N } from "react-icons/si"

export default function SkillsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-800 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl border border-blue-700/50 shadow-xl p-10 bg-white/10 backdrop-blur"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
            Skills & Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white text-center">
            <div className="flex flex-col items-center gap-2">
              <SiNextdotjs className="w-12 h-12" />
              <span className="text-sm">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss className="w-12 h-12 text-cyan-400" />
              <span className="text-sm">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiNodedotjs className="w-12 h-12 text-green-500" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiSupabase className="w-12 h-12 text-emerald-400" />
              <span className="text-sm">Supabase</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiN8N className="w-12 h-12 text-orange-400" />
              <span className="text-sm">n8n</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}