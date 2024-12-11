"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, X, Menu } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "$/components/ui/accordion"

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Destinations",
    href: "/destinations",
    subItems: [
      { title: "Europe", href: "/destinations/europe" },
      { title: "North America", href: "/destinations/north-america" },
      { title: "Asia", href: "/destinations/asia" },
    ],
  },
  {
    title: "Trips",
    href: "/trips",
    subItems: [
      { title: "Family Vacations", href: "/trips/family-vacations" },
      { title: "Couples Getaways", href: "/trips/couples-getaways" },
      { title: "Group Adventures", href: "/trips/group-adventures" },
    ],
  },
  {
    title: "Deals",
    href: "/deals",
    subItems: [
      { title: "Last-Minute Offers", href: "/deals/last-minute" },
      { title: "Custom Packages", href: "/deals/custom-packages" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    subItems: [
      { title: "Travel Tips", href: "/blog/travel-tips" },
      { title: "Destination Guides", href: "/blog/destination-guides" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    subItems: [
      { title: "Our Story", href: "/about/our-story" },
      { title: "Contact Us", href: "/about/contact" },
    ],
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between p-4 md:p-6 bg-transparent md:bg-inherit/30 md:backdrop-blur-sm">
      <Link href="/" className="text-2xl font-bold text-white z-50">
        Horizon Travel
      </Link>

      <button
        className="md:hidden text-white relative z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 flex-grow justify-center text-neutral-400">
        {navItems.map((item) => (
          <div key={item.title} className="relative group">
            <Link
              href={item.href}
              className="hover:bg-gray-100 hover:bg-opacity-10 hover:text-white rounded-full px-4 py-2 transition-colors flex items-center"
            >
              {item.title}
              {item.subItems && <ChevronDown className="w-4 h-4 ml-1" />}
            </Link>
            {item.subItems && (
              <div className="absolute left-0 mt-2 w-48 bg-neutral-900/40 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 rounded-lg">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="block px-4 py-4 text-sm text-gray-100 hover:bg-zinc-700/60 hover:bg-opacity-10 backdrop-blur-sm"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-neutral-900 to-black transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden overflow-y-auto bg-inherit/30 md:backdrop-blur-sm`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col pt-24 px-6">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {navItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={item.title} className="border-none">
                  {item.subItems ? (
                    <AccordionTrigger className="py-4 text-2xl font-medium text-white hover:no-underline">
                      <div className="flex items-center">
                        {item.title}
                      </div>
                    </AccordionTrigger>
                  ) : (
                    <Link
                      href={item.href}
                      className="py-4 text-2xl font-medium text-white block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.subItems && (
                    <AccordionContent>
                      <div className="pl-4 pb-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-2 text-lg text-white/70 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </nav>
  );
}
