"use client"

import { motion, type Variants } from "framer-motion"
import type { PropsWithChildren } from "react"

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SectionReveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={variants}
    >
      {children}
    </motion.section>
  )
}
