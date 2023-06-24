import * as React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

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
    <div
      className="top-18 absolute right-6 h-[50px] w-[50px] cursor-pointer rounded-lg border-none bg-transparent outline-none"
      onClick={toggle}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 23 23"
        className="absolute bottom-0 right-[3px]"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </div>
  )
}
