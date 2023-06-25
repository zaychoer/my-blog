import * as React from "react"

import { MobileNav } from "@/components/mobile-nav"
import Home from "@/components/pages/home"

export const metadata = {
  title: "Home",
  description: "Home Page",
}

export default function IndexPage() {
  return (
    <>
      <MobileNav />
      <Home />
    </>
  )
}
