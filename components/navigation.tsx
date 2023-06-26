import * as React from "react"
import dynamic from "next/dynamic"

import { navConfig } from "@/config/nav"
import { currentDayName } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { MenuItem } from "@/components/menu-item"
import { ModeToggle } from "@/components/mode-toggle"

const Logo = dynamic(() => import("@/components/logo"), {
  ssr: false,
})

const items = navConfig.mainNav

type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export const Navigation = () => (
  <nav className="fixed inset-y-0 left-0 z-20 w-[350px] -translate-x-full px-[15px] pt-[60px] backdrop-blur-lg will-change-transform">
    <ul className="flex flex-col gap-[10px] px-[26px] pt-[50px]">
      <li className="mb-[20px] ml-[-7px] block origin-[-20px_50%] cursor-pointer list-none will-change-[transform,opacity,filter]">
        <Logo />
      </li>
      {items.map((item: NavItem, index: number) => (
        <MenuItem item={item} key={index} />
      ))}
      <li className="block origin-[-20px_50%] list-none will-change-[transform,opacity,filter]">
        <Separator className="my-2 mt-6" />
      </li>
      <li className="flex origin-[-20px_50%] list-none items-center will-change-[transform,opacity,filter]">
        <p className="grow text-left text-sm font-medium text-muted-foreground">
          zaycho{` © ${new Date().getFullYear()}`} <br />
          Have a good {currentDayName()}
        </p>
        <ModeToggle />
      </li>
    </ul>
  </nav>
)
