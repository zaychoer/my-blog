import { navConfig } from "@/config/nav"
import { MainNav } from "@/components/main-nav"

interface ProfileLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-background/70 backdrop-blur-md lg:hidden">
        <div className="flex h-20 flex-row-reverse items-center justify-between py-6">
          <MainNav items={navConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
