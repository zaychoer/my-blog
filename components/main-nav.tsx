"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="lg:hidden">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex gap-6 md:gap-10">
        {items?.length ? (
          <nav className="hidden gap-6 lg:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        </button>
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
    </div>
  )
}
