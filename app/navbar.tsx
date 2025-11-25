"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookOpen,
  Briefcase,
  House,
  LucideProps,
  Menu,
  Terminal,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

const navItems: {
  tab: string;
  label: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}[] = [
  {
    tab: "/",
    label: "Home",
    icon: House,
  },
  {
    tab: "/about",
    label: "About",
    icon: User,
  },
  {
    tab: "/experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    tab: "/blog",
    label: "Blog",
    icon: BookOpen,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    window.location.hash = tab;
    setMobileMenuOpen(false);
  };

  const logo = (
    <Link
      href="/"
      className="flex shrink-0 cursor-pointer items-center gap-2 text-xl font-bold tracking-wider"
    >
      <Terminal className="" size={24} />
      <span className="uppercase">
        YungChun<span className="text-primary">.dev</span>
      </span>
    </Link>
  );

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {logo}

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.tab}>
                    <NavigationMenuLink
                      asChild
                      className={pathname === item.tab ? "bg-primary" : ""}
                    >
                      <Link
                        href={item.tab}
                        className="flex-row items-center gap-2"
                        onClick={(e) => {
                          e.currentTarget.blur();
                        }}
                      >
                        <item.icon size={18} />
                        <span>{item.label}</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("/");
                    e.currentTarget.blur();
                  }}
                >
                  <SheetTitle>{logo}</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.tab}
                      variant={pathname === item.tab ? "default" : "ghost"}
                      className="w-full justify-start gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("/");
                        e.currentTarget.blur();
                      }}
                    >
                      <Link
                        key={item.tab}
                        href={item.tab}
                        className="flex w-full items-center justify-center gap-2"
                      >
                        <item.icon size={18} />
                        <span>{item.label}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
