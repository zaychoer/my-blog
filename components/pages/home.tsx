"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site"
import { Section } from "@/hooks/use-in-view"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <div className="mx-auto w-full grow flex-col justify-center space-y-8 pt-16 sm:w-5/6 lg:col-span-3 lg:w-4/6 lg:p-8 lg:pt-[45px] xl:w-3/6">
      <Section>
        <div className="flex flex-col space-y-5 text-center">
          <Avatar>
            <AvatarImage src="https://github.com/zaychoer.png" alt="@shadcn" />
            <AvatarFallback>ZC</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {"Zayyana Choir".toUpperCase()}
          </h1>
          <p className="text-muted-foreground">
            Hi, I am a software engineer with experience in various web
            technologies, including Ruby on Rails, Node.js, NextJs, and Golang.
          </p>
        </div>
      </Section>
      <Section>
        <div className="flex justify-center space-x-5">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
              <Icons.github className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
              <Icons.linkedin className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
              <Icons.twitter className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
              <Icons.facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </motion.div>
          </Link>
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
              <Icons.instagram className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </Section>
    </div>
  )
}
