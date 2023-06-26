import * as React from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function AnimatedTitle() {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const text = "Zayyana Choir" // This would normally be passed into this component as a prop!

  const ctrls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
    if (!isInView) {
      ctrls.start("hidden")
    }
  }, [ctrls, isInView])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        repeat: Infinity,
      },
    },
  }

  return (
    <h1 aria-label={text} role="heading" className="text-3xl font-extrabold">
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="mr-[0.25em] inline-block whitespace-nowrap"
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className="mr-[-0.05em] inline-block"
                >
                  {character}
                </motion.span>
              )
            })}
          </motion.span>
        )
      })}
    </h1>
  )
}
