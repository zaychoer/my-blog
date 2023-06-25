import { SideNav } from "@/components/side-nav"

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-4 lg:px-0">
          <SideNav />
          {children}
        </div>
      </main>
    </div>
  )
}
