"use client"

import * as React from "react"
import { useRef } from "react"
import dynamic, { LoaderComponent } from "next/dynamic"
import { motion, useCycle } from "framer-motion"

import { useDimensions } from "@/lib/use-dimensions"
import { Navigation } from "@/components/navigation"

const MenuToggle = dynamic(
  () => import("@/components/menu-toggle").then((module) => module.MenuToggle),
  {
    ssr: false,
  }
)

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 265px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(22px at 265px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

export function MobileNav() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute inset-y-0 right-0 z-50 w-[300px] lg:hidden"
    >
      <motion.div
        className="absolute inset-y-0 right-0 w-[300px] bg-muted"
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  )
}
