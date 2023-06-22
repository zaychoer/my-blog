import dynamic from "next/dynamic"
import Link from "next/link"

import { navConfig } from "@/config/nav"
import { siteConfig } from "@/config/site"
import { cn, currentDayName } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

const Logo = dynamic(() => import("@/components/logo"), {
  ssr: false,
})

export const metadata = {
  title: "Home",
  description: "Home Page",
}

export default function IndexPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-4 lg:px-0">
      <div className="mx-auto hidden h-screen w-full flex-col justify-center bg-muted p-8 lg:flex lg:pl-14 xl:pl-24">
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
      <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-5/6 lg:col-span-3 lg:w-3/6 lg:p-8">
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
        <div className="flex justify-center space-x-5">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <Icons.github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <Icons.linkedin className="h-5 w-5" />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <Icons.twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <Icons.facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex space-x-4"
          >
            <Icons.instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
