"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"

const Logo = () => {
  const { theme, resolvedTheme, systemTheme } = useTheme()
  return (
    <Link href="/" className="-ml-1 lg:-ml-2 lg:mb-4">
      {resolvedTheme === "dark" ? (
        <Icons.lightLogo className="h-8" />
      ) : (
        <Icons.logo className="h-8" />
      )}
    </Link>
  )
}

export default Logo
