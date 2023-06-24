import * as React from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

import { navConfig } from "@/config/nav"
import { currentDayName } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { MenuItem } from "@/components/menu-item"
import { ModeToggle } from "@/components/mode-toggle"

const Logo = dynamic(() => import("@/components/logo"), {
  ssr: false,
})

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const variantsLi = {
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

const items = navConfig.mainNav

type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export const Navigation = () => (
  <motion.ul
    className="absolute top-[100px] w-[260px] py-[20px] pl-[28px]"
    variants={variants}
  >
    <motion.li
      variants={variantsLi}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-[12px] flex cursor-pointer list-none items-center"
    >
      <Logo />
    </motion.li>
    {items.map((item: NavItem, index: number) => (
      <MenuItem item={item} key={index} />
    ))}

    <motion.li variants={variantsLi} className="mb-[12px] flex list-none">
      <Separator className="my-2" />
    </motion.li>

    <motion.li
      variants={variantsLi}
      className="justfiy-between flex items-center"
    >
      <p className="grow text-left text-sm font-medium text-muted-foreground">
        zaycho{` © ${new Date().getFullYear()}`} <br />
        Have a good {currentDayName()}!
      </p>
      <ModeToggle />
    </motion.li>
  </motion.ul>
)
