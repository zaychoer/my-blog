"use client"

import * as React from "react"
import Image from "next/image"

import { Section } from "@/hooks/use-in-view"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    <>
      <div className="flex flex-col space-y-3 px-1 pt-12 lg:space-y-5 lg:px-20 lg:pt-28">
        <Section>
          <Badge className="block w-[65px] rounded-md text-center text-xs font-bold uppercase lg:w-[80px] lg:text-sm">
            About
          </Badge>
        </Section>
        <Section>
          <h1 className="text-xl font-extrabold tracking-tight lg:text-3xl">
            About Me
          </h1>
        </Section>
        <Section>
          <AspectRatio ratio={16 / 6} className="mt-4 bg-muted lg:mt-6">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </Section>
        <Section>
          <div className="lg:space-y-1">
            <h2 className="text-lg font-extrabold tracking-tight lg:text-2xl">
              Zayyana Choir
            </h2>
            <p className="text-sm text-muted-foreground lg:text-base">
              Software Engineer
            </p>
          </div>
        </Section>
        <Section>
          <Separator className="my-4" />
        </Section>
        <Section>
          <p className="text-sm text-muted-foreground lg:text-base">
            I am a skilled software engineer with experience in various web
            technologies, including Ruby on Rails, Node.js, and Golang. I have
            worked on multiple projects such as e-commerce websites, inventory
            management, and accounting systems. I am always eager to learn and
            adapt to new technologies to develop innovative and efficient
            solutions.
          </p>
        </Section>
        <Section>
          <Separator className="my-4" />
        </Section>
        <Section>
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm md:grid-cols-2 md:gap-x-8 lg:text-base">
            <div className="flex items-center">
              <p className="font-medium leading-none">Birthday</p>
              <p className="ml-auto font-medium text-muted-foreground">
                25.12.1989
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Age</p>
              <p className="ml-auto font-medium text-muted-foreground">33</p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Address</p>
              <p className="ml-auto font-medium text-muted-foreground">
                Jl. Lembang 1 No.21
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Phone</p>
              <p className="ml-auto font-medium text-muted-foreground">
                +62 857 1583 4707
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Email</p>
              <p className="ml-auto font-medium text-muted-foreground">
                zaycho25@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Nationality</p>
              <p className="ml-auto font-medium text-muted-foreground">
                Indonesia
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Study</p>
              <p className="ml-auto font-medium text-muted-foreground">
                MA. Al-Zaytun
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Degree</p>
              <p className="ml-auto font-medium text-muted-foreground">
                Junior High School Diploma
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Hobby</p>
              <p className="ml-auto font-medium text-muted-foreground">
                Playing Football
              </p>
            </div>
            <div className="flex items-center">
              <p className="font-medium leading-none">Fulltime/Freelance</p>
              <p className="ml-auto font-medium text-muted-foreground">
                Available
              </p>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}
