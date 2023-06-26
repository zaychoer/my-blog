"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"

const Logo = () => {
  const { resolvedTheme } = useTheme()
  return (
    <Link href="/" className="mb-4 lg:-ml-2">
      {resolvedTheme === "dark" ? (
        <Icons.lightLogo className="h-6 lg:h-8" />
      ) : (
        <Icons.logo className="h-6 lg:h-8" />
      )}
    </Link>
  )
}

export default Logo
