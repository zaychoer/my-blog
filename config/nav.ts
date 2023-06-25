import { NavConfig } from "types"

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
    {
      title: "Projects",
      href: "/projects",
      disabled: true,
    },
    {
      title: "About",
      href: "/about",
      disabled: false,
    },
  ],
}
