"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import Logo from "@/components/logo"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const MenuItem = ({ item }: any) => {
  const segment = useSelectedLayoutSegment()
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-[12px] flex cursor-pointer list-none items-center"
    >
      <Link
        href={item.disabled ? "#" : item.href}
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-foreground/80 sm:text-sm",
          item.href.startsWith(`/${segment}`)
            ? "text-foreground"
            : "text-foreground/60",
          item.disabled && "cursor-not-allowed opacity-80"
        )}
      >
        {item.title}
      </Link>
    </motion.li>
  )
}
