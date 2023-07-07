"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { formatDate } from "@/lib/utils"
import { Section } from "@/hooks/use-in-view"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Post {
  _id: string
  image: string
  title: string
  description?: string
  date: string
  slug: string
}

type Posts = Post[]

export default function Blog({ posts }: { posts: Posts }) {
  return (
    <div className="flex flex-col space-y-3 px-1 pb-10 pt-2 lg:space-y-5 lg:px-20 lg:pb-10 lg:pt-28">
      {/* Badge  */}
      <Section>
        <Badge className="block w-[65px] rounded-md text-center text-xs font-bold uppercase lg:w-[80px] lg:text-sm">
          Blog
        </Badge>
      </Section>
      {/* Title  */}
      <Section>
        <h1 className="text-xl font-extrabold tracking-tight lg:text-3xl">
          All Posts
        </h1>
      </Section>
      {/* Separator  */}
      <Section>
        <Separator className="my-4" />
      </Section>
      <Section>
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </Section>
    </div>
  )
}
