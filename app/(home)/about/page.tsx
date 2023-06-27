import * as React from "react"

import { MobileNav } from "@/components/mobile-nav"
import About from "@/components/pages/about"

export const metadata = {
  title: "About",
  description: "About Page",
}

export default function AboutPage() {
  return (
    <>
      <MobileNav />
      <div className="col-span-3 mx-auto flex w-full flex-col lg:h-screen lg:overflow-auto">
        <About />
      </div>
    </>
  )
}
