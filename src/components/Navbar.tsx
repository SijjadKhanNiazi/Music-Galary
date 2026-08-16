"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-4 sm:top-10 z-50 mx-auto max-w-2xl px-4 sm:px-0",
        className,
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Our courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All courses</HoveredLink>
              <HoveredLink href="/courses">Low composition</HoveredLink>
              <HoveredLink href="/courses">Advance composition</HoveredLink>
              <HoveredLink href="/courses">Music production</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact us" />
          </Link>
        </Menu>
      </div>

      {/* Mobile Navigation Header */}
      <div className="flex md:hidden items-center justify-between bg-black/80 backdrop-blur-md border border-white/10 text-white rounded-full px-5 py-3 shadow-lg">
        <Link href="/" className="font-semibold text-sm">
          Music School
        </Link>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-1 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isMobileOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden mt-2 flex flex-col bg-black/90 backdrop-blur-md border border-white/10 text-white rounded-2xl p-5 space-y-4 shadow-xl">
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm font-medium hover:text-neutral-300 transition-colors"
          >
            Home
          </Link>
          <div className="flex flex-col space-y-2 pl-3 border-l border-white/10">
            <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
              Our Courses
            </span>
            <Link
              href="/courses"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm hover:text-neutral-300 transition-colors"
            >
              All Courses
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm hover:text-neutral-300 transition-colors"
            >
              Low Composition
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm hover:text-neutral-300 transition-colors"
            >
              Advance Composition
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsMobileOpen(false)}
              className="text-sm hover:text-neutral-300 transition-colors"
            >
              Music Production
            </Link>
          </div>
          <Link
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="text-sm font-medium hover:text-neutral-300 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
