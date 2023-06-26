"use client"

import dynamic from "next/dynamic"
import Link from "next/link"

import { navConfig } from "@/config/nav"
import { cn, currentDayName } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

const Logo = dynamic(() => import("@/components/logo"), {
  ssr: false,
})

export function SideNav() {
  return (
    <div className="mx-auto hidden h-screen w-full flex-col justify-center bg-muted p-8 lg:flex lg:pl-14 xl:pl-16">
      <div className="flex flex-col space-y-5 text-center">
        <nav className="grid gap-4 text-sm">
          <Logo />
          {navConfig?.mainNav?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center text-sm font-medium hover:underline",
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
      </div>
    </div>
  )
}
