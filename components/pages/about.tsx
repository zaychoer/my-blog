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
            src="https://d1n6fa18ox4kyq.cloudfront.net/my-blog/about-me.png"
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
          Proven ability to design, develop, and deploy robust, scalable web
          applications using Ruby on Rails and modern JavaScript technologies.
          Extensive experience designing, building, and maintaining robust web
          applications across diverse industries. Adept at tackling complex
          technical challenges, collaborating effectively in teams, and
          consistently delivering high-quality solutions on time. Always eager
          to learn and adapt to new technologies to develop innovative and
          efficient solutions.
        </p>
      </Section>
      <Section>
        <Button asChild>
          <Link
            href="https://d1n6fa18ox4kyq.cloudfront.net/my-blog/zaycho-resume-new.pdf"
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
                Software Engineer @
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Link
                  href="#"
                  target="_blank"
                  className="cursor-pointer text-base font-bold tracking-tight hover:underline lg:text-lg"
                >
                  PT. Prima Raya Solusindo,
                </Link>
              </motion.div>
              <p className="text-base font-semibold text-muted-foreground lg:text-lg">
                placement @
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <Link
                  href="https://ioh.co.id"
                  target="_blank"
                  className="cursor-pointer text-base font-bold tracking-tight hover:underline lg:text-lg"
                >
                  PT. Indosat TBK
                </Link>
              </motion.div>
            </section>
            <p className="text-xs text-muted-foreground lg:text-sm ">
              August 2023 - Present
            </p>
            <ul className="mt-2 list-none space-y-1 pl-1 lg:space-y-2">
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Payment Aggregator API: Develop of a RESTful API for a payment
                  aggregator, enabling seamless integration with various payment
                  gateways.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  API Documentation: Designed and maintained comprehensive API
                  documentation using Swagger (OpenAPI), facilitating easy
                  adoption and use of the API
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Dashboard Management: Developed an intuitive dashboard using
                  Active Admin, empowering users to manage their payment
                  integrations and monitor transactions.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Requirements Gathering & API Design: Collaborated closely with
                  stakeholders to gather requirements and create detailed API
                  specifications, ensuring alignment with business objectives.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Third-Party Integration: Successfully integrated with multiple
                  third-party payment gateways, adhering to their specific API
                  requirements and security standards.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Cloud Infrastructure: Leveraged Google Cloud Platform&apos;s
                  (GCP) suite of services, including Kubernetes, Cloud SQL
                  (PostgreSQL), Google Storage, Cloud Build, Compute Engine,
                  Cloud Scheduler, and Cloud Function, to build a scalable and
                  reliable infrastructure.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Performance Optimization: Migrated from Sidekiq to Solid
                  queue, effectively replacing Redis with PostgreSQL to reduce
                  infrastructure costs.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Monitoring & Reliability: Integrated Sentry and New Relic for
                  real-time monitoring and error tracking, ensuring application
                  stability and performance.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Deployment & Environments: Managed both sandbox and production
                  environments, streamlining the deployment process and
                  minimizing downtime.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Customer Engagement: Conducted demos for customers, showcasing
                  the platform&apos;s features and benefits, and gathering
                  feedback for further improvements.
                </p>
              </li>
            </ul>
          </Section>
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
                  Develop of a RESTful API monitoring dashboard using Nest JS,
                  crafting robust APIs and efficient data processing services in
                  Node.js and Go to handle high-volume FTP data streams.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Actively participated in daily stand-ups, offered technical
                  insights, and collaborated closely with the team to resolve
                  challenges and ensure timely ticket completion.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Instituted code review processes, ensuring codebase integrity
                  and smooth integration into the master branch before staging
                  and production deployments.
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
                  Transformed a web-based POS application by revamping the UI
                  using Tailwind CSS, delivering a modern and user-friendly
                  interface.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Streamlined application development by building robust RESTful
                  APIs for seamless integration with the mobile app.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Proactively identified and resolved bugs, ensuring the
                  application&apos;s stability and optimal performance.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Successfully deployed the application, making it available to
                  end-users.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Platform for Inventory Management: Develop of a Ruby on Rails
                  inventory management system, including feature development,
                  bug fixes, and upgrades. Maintained close communication with
                  the client&apos;s project manager to ensure alignment with
                  project goals.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  E-commerce Web for Sacrificial Animals: Developed and
                  maintained a Ruby on Rails e-commerce platform, implementing
                  new features, resolving issues, and managing deployments.
                </p>
              </li>
              <li className="flex items-start space-x-1 lg:space-x-2">
                <span className="w-4">
                  <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                </span>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Web-Based Accounting Management System: Developed and
                  supported a Ruby on Rails accounting system, collaborating
                  with stakeholders to translate business needs into technical
                  solutions.
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
                  Platform for Medical Recording Management : Develop a Ruby on
                  Rails application for medical records management, ensuring
                  data accuracy based on user requirements.
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
                      Google Cloud Platform (Kubernetes, Google Storage, Cloud
                      Build, Compute Engine, Cloud Scheduler, Cloud Function)
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
                  <li className="flex items-start space-x-1 lg:space-x-2">
                    <span className="w-4">
                      <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                    </span>
                    <p className="text-sm text-muted-foreground lg:text-base">
                      Vercel
                    </p>
                  </li>
                  <li className="flex items-start space-x-1 lg:space-x-2">
                    <span className="w-4">
                      <Icons.check2 className="h-4 w-4 stroke-red-600 dark:stroke-white" />
                    </span>
                    <p className="text-sm text-muted-foreground lg:text-base">
                      Fly.io
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
