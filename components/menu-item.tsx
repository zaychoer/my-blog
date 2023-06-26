"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"

interface MenuItemProps {
  item: {
    disabled?: boolean
    href: string
    title: string
  }
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const segment = useSelectedLayoutSegment()
  return (
    <li className="block origin-[-20px_50%] cursor-pointer list-none will-change-[transform,opacity,filter]">
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
    </li>
  )
}
