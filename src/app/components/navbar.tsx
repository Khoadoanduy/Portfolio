import React from "react";
import Link from "next/link";
import {
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "/", // Set home route
  },
  {
    name: "Contact",
    icon: UserCircleIcon,
    href: "/contact", // Set contact route
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href || ""} passHref legacyBehavior>
        <p
          className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer transition-colors duration-300 hover:bg-black hover:text-white px-3 py-2 rounded-md"
        >
          {children}
        </p>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="border-0 sticky top-0 z-50 bg-white w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-lg font-bold text-blue-gray-900">Kevin Doan</h1>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <button
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden text-gray-900 focus:outline-none"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
