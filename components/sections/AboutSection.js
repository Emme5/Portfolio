"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl border shadow-lg p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            I’m <span className="font-semibold text-blue-600">Mongkol</span>, a developer passionate about 
            building reliable AI-powered workflows, modern web apps, and scalable systems.  
            I love making complex things simple and accessible for everyone.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
