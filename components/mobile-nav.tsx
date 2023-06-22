import * as React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { MainNavItem } from "types"
import { cn, currentDayName } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

const Logo = dynamic(() => import("@/components/logo"), {
  ssr: false,
})

interface MobileNavNewProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavNewProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Logo />
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Separator className="my-2 mt-6" />
          <div className="justfiy-between flex items-center">
            <p className="grow text-left text-sm font-medium text-muted-foreground">
              zaycho{` © ${new Date().getFullYear()}`} <br />
              Have a good {currentDayName()}!
            </p>
            <ModeToggle />
          </div>
        </nav>
        {children}
      </div>
    </div>
  )
}
