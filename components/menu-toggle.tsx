"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

import { Section } from "@/hooks/use-in-view"

const Path = (props: any) => {
  const { resolvedTheme } = useTheme()
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      stroke={resolvedTheme === "dark" ? "white" : "black"}
      {...props}
    />
  )
}

type MenuToggleProps = {
  toggle: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  return (
    <button
      className="absolute left-[26px] top-[12px] z-30 h-[50px] w-[50px] cursor-pointer rounded-[50%] border-none p-2.5"
      onClick={toggle}
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  )
}
