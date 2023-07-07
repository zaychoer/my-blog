import { notFound } from "next/navigation"
import { allAuthors, allPosts } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { env } from "@/env.mjs"

import { absoluteUrl, formatDate } from "@/lib/utils"
import { Section } from "@/hooks/use-in-view"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

interface Params {
  slug?: string[]
}

async function getPostFromParams(params: Params) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }
  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  )

  return (
    <>
      <MobileNav />
      <div className="col-span-3 mx-auto flex w-full flex-col lg:h-screen lg:overflow-auto">
        <article className="flex flex-col space-y-3 px-1 pb-10 pt-2 lg:space-y-5 lg:px-20 lg:pb-10 lg:pt-28">
          <Section>
            <Badge className="block w-[125px] rounded-md text-center text-xs font-bold capitalize lg:w-[140px] lg:text-sm">
              <Link href="/blog" className="flex items-center">
                <Icons.chevronLeft className="mr-1 h-4 w-4" />
                See all posts
              </Link>
            </Badge>
          </Section>
          <Section>
            {post.date && (
              <time
                dateTime={post.date}
                className="block text-sm text-muted-foreground"
              >
                Published on {formatDate(post.date)}
              </time>
            )}
            <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
              {post.title}
            </h1>
            {authors?.length ? (
              <div className="mt-4 flex space-x-4">
                {authors.map((author) =>
                  author ? (
                    <Link
                      key={author._id}
                      href={`https://twitter.com/${author.twitter}`}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Image
                        src={author.avatar}
                        alt={author.title}
                        width={42}
                        height={42}
                        className="rounded-full bg-white"
                      />
                      <div className="flex-1 text-left leading-tight">
                        <p className="font-medium">{author.title}</p>
                        <p className="text-[12px] text-muted-foreground">
                          @{author.twitter}
                        </p>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            ) : null}
          </Section>
          <Section>
            <div className="flex justify-center">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={720}
                  height={400}
                  className="my-8 rounded-md border bg-muted transition-colors"
                  priority
                />
              )}
            </div>
            <Mdx code={post.body.code} />
            <hr className="mt-12" />
            <Badge className="mt-5 block w-[125px] rounded-md text-center text-xs font-bold capitalize lg:w-[140px] lg:text-sm">
              <Link href="/blog" className="flex items-center">
                <Icons.chevronLeft className="mr-1 h-4 w-4" />
                See all posts
              </Link>
            </Badge>
          </Section>
        </article>
      </div>
    </>
  )
}
