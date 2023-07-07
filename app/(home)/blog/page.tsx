import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { MobileNav } from "@/components/mobile-nav"
import Blog from "@/components/pages/blog"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <MobileNav />
      <div className="col-span-3 mx-auto flex w-full flex-col lg:h-screen lg:overflow-auto">
        <Blog posts={posts} />
      </div>
    </>
  )
}
