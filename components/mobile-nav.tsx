"use client"

import * as React from "react"
import { useRef } from "react"
import dynamic from "next/dynamic"
import { stagger, useAnimate, useInView } from "framer-motion"

import { Navigation } from "@/components/navigation"

const MenuToggle = dynamic(
  () => import("@/components/menu-toggle").then((module) => module.MenuToggle),
  {
    ssr: false,
  }
)

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  React.useEffect(() => {
    const menuAnimations: any[] = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ]

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ])
  }, [isOpen, animate])

  return scope
}

export function MobileNav() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const scope = useMenuAnimation(isOpen)

  return (
    <section className="lg:hidden" ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="fixed left-0 top-0 z-20 translate-x-[200px] opacity-0"
      >
        <div className="fixed left-0 top-0 z-20" ref={scope}>
          <Navigation />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
      </span>
    </section>
  )
}
