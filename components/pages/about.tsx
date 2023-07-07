"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Section } from "@/hooks/use-in-view"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export default function About() {
  return (
    <div className="flex flex-col space-y-3 px-1 pb-10 pt-2 lg:space-y-5 lg:px-20 lg:pb-10 lg:pt-28">
      {/* Badge  */}
      <Section>
        <Badge className="block w-[65px] rounded-md text-center text-xs font-bold uppercase lg:w-[80px] lg:text-sm">
          About
        </Badge>
      </Section>
      {/* Title  */}
      <Section>
        <h1 className="text-xl font-extrabold tracking-tight lg:text-3xl">
          About Me
        </h1>
      </Section>
      {/* Image  */}
      <Section>
        <AspectRatio ratio={16 / 6} className="mt-4 bg-muted lg:mt-6">
          <Image
            src="https://djvy46h6795ez.cloudfront.net/my-blog/about-me.png"
            alt="About Me"
            className="rounded-md object-cover"
            fill
            priority
          />
        </AspectRatio>
      </Section>
      {/* Name & Role  */}
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
      {/* Separator  */}
      <Section>
        <Separator className="my-4" />
      </Section>
      {/* Description */}
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
      {/* Separator */}
      <Section>
        <Separator className="my-4" />
      </Section>
      {/* Profile  */}
      <Section>
        <div className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm md:grid-cols-2 md:gap-x-8 xl:text-base">
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
      {/* Separator */}
      <Section>
        <Separator className="my-4" />
      </Section>
      {/* CV */}
      <Section>
        <Button asChild>
          <Link
            href="https://djvy46h6795ez.cloudfront.net/my-blog/zaycho-resume.pdf"
            target="_blank"
            className="text-xs lg:text-sm"
          >
            Download CV
          </Link>
        </Button>
      </Section>
      {/* Separator  */}
      <Section>
        <Separator className="my-4" />
      </Section>
      {/* Experience  */}
      <Section>
        <div className="space-y-4 lg:space-y-8">
          <h2 className="text-xl font-extrabold tracking-tight lg:text-2xl">
            Experience
          </h2>
          <Section>
            <section className="flex items-center space-x-1 lg:space-x-2">
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                Backend Engineer @
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Link
                  href="https://datasintesa.id"
                  target="_blank"
                  className="cursor-pointer text-base font-bold tracking-tight hover:underline lg:text-lg"
                >
                  Datasintesa
                </Link>
              </motion.div>
            </section>
            <p className="text-xs text-muted-foreground lg:text-sm ">
              March 2022 - March 2023
            </p>
            <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Developed and maintained the backend API for an OSS BTS system
                  using Nestjs, MongoDB, and Redis
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Implemented various features and enhancements to improve
                  system performance and functionality.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Implemented a data processing service in NodeJs and Golang to
                  handle large datasets from FTP.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Ensured efficient data handling, parsing, and transformation.
                </p>
              </li>
            </ul>
          </Section>
          <Section>
            <Separator className="my-4" />
          </Section>
          <Section>
            <section className="flex items-center space-x-1 lg:space-x-2">
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                Software Engineer @
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Link
                  href="https://wellcode.io"
                  target="_blank"
                  className="cursor-pointer text-base font-bold tracking-tight hover:underline lg:text-lg"
                >
                  Wellcode.IO
                </Link>
              </motion.div>
            </section>
            <p className="text-xs text-muted-foreground lg:text-sm ">
              October 2019 - March 2022
            </p>
            <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Developed and Maintenance Pinterusaha App using Rails 6,
                  StimulusJS, Postgres, and MongoDB.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Redesign UI Pinterusaha App using Tailwind CSS.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Built a web e-commerce application using Rails 6, StimulusJS,
                  and Postgres.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Implemented product listing, shopping cart, and checkout
                  functionalities.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Created an inventory management system using Rails 6,
                  StimulusJS, and Postgres.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Implemented features such as stock tracking, order management,
                  and reporting.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Developed an accounting system with Rails 6, StimulusJS, and
                  Postgres.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Implemented features like ledger maintenance, transaction
                  recording, and financial reporting.
                </p>
              </li>
            </ul>
          </Section>
          <Section>
            <Separator className="my-4" />
          </Section>
          <Section>
            <section className="flex items-center space-x-1 lg:space-x-2">
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                Ruby Developer @
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Link
                  href="https://dwidasa.com"
                  target="_blank"
                  className="cursor-pointer text-base font-bold tracking-tight hover:underline lg:text-lg"
                >
                  PT. Dwidasa Samsara Indonesia
                </Link>
              </motion.div>
            </section>
            <p className="text-xs text-muted-foreground lg:text-sm ">
              April 2019 - September 2019
            </p>
            <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Collaborated on the MedictTrust project, contributing to the
                  development of a medical data management system.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Implemented functionality to display data on dashboard pages.
                </p>
              </li>
            </ul>
          </Section>
        </div>
      </Section>
      {/* Separator */}
      <Section>
        <Separator className="my-4" />
      </Section>
      {/* Skill */}
      <section>
        <div className="space-y-4 lg:space-y-8">
          <Section>
            <h2 className="text-xl font-extrabold tracking-tight lg:text-2xl">
              Skills
            </h2>
          </Section>
          <div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Languages */}
            <Section>
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                Languages
              </p>
              <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    Ruby
                  </p>
                </li>
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    Javascript/TypeScript
                  </p>
                </li>
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    Go
                  </p>
                </li>
              </ul>
            </Section>
            {/* Frameworks  */}
            <Section>
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                Frameworks
              </p>
              <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    Ruby on Rails
                  </p>
                </li>
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    NestJS
                  </p>
                </li>
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    NextJS
                  </p>
                </li>
              </ul>
            </Section>
            {/* Databases  */}
            <Section>
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                Databases
              </p>
              <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    SQL (PotgresSQL & MySQL)
                  </p>
                </li>
                <li className="flex items-start space-x-1 lg:space-x-2">
                  <span className="w-4">
                    <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                  </span>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    NoSQL (MongoDB & Redis)
                  </p>
                </li>
              </ul>
            </Section>
            {/* DevOPS  */}
            <div className="lg:col-start-1 lg:col-end-4">
              <Section>
                <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                  DevOps
                </p>
                <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
                  <li className="flex items-start space-x-1 lg:space-x-2">
                    <span className="w-4">
                      <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                    </span>
                    <p className="text-sm text-muted-foreground lg:text-base">
                      Google Cloud (Compute Engine, VPC Network)
                    </p>
                  </li>
                  <li className="flex items-start space-x-1 lg:space-x-2">
                    <span className="w-4">
                      <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                    </span>
                    <p className="text-sm text-muted-foreground lg:text-base">
                      Amazon Web Service (S3, EC2, CloudFront, RDS, Lightsail,
                      Route53)
                    </p>
                  </li>
                  <li className="flex items-start space-x-1 lg:space-x-2">
                    <span className="w-4">
                      <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                    </span>
                    <p className="text-sm text-muted-foreground lg:text-base">
                      Digital Ocean (Droplet, Database, Networking, Images)
                    </p>
                  </li>
                </ul>
              </Section>
            </div>
          </div>
          <Section>
            <Separator className="my-4" />
          </Section>
        </div>
      </section>
    </div>
  )
}
