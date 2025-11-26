"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
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
  Moon,
  Sun,
  Terminal,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ForwardRefExoticComponent,
  MouseEvent,
  RefAttributes,
  useCallback,
  useState,
} from "react";

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
  const { setTheme } = useTheme();

  const handleCLick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    e.currentTarget.blur();
  }, []);

  const logo = (
    <Link
      href="/"
      className="flex shrink-0 cursor-pointer items-center gap-2 text-xl font-bold tracking-wider"
      onClick={handleCLick}
    >
      <Terminal className="" size={24} />
      <span className="uppercase">
        YungChun<span className="text-primary">.dev</span>
      </span>
    </Link>
  );

  const themeButton = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
                      className={
                        pathname === item.tab
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }
                    >
                      <Link
                        href={item.tab}
                        className="flex-row items-center gap-2"
                        onClick={handleCLick}
                      >
                        <item.icon
                          size={18}
                          className={
                            pathname === item.tab
                              ? "text-primary-foreground"
                              : ""
                          }
                        />
                        <span>{item.label}</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Theme button */}
                <NavigationMenuItem>{themeButton}</NavigationMenuItem>
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
                <SheetHeader>
                  <SheetTitle asChild>{logo}</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-2 px-2">
                  {navItems.map((item) => (
                    <Button
                      asChild
                      key={item.tab}
                      variant={pathname === item.tab ? "default" : "ghost"}
                      className="w-full justify-center gap-2 py-6 text-lg"
                    >
                      <Link
                        key={item.tab}
                        href={item.tab}
                        className="flex items-center justify-center gap-2"
                        onClick={handleCLick}
                      >
                        <item.icon size={18} />
                        <span>{item.label}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
                <SheetFooter>
                  {/* Theme button */}
                  {themeButton}
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
