"use client";

import { useState } from "react";

import Container from "@/components/ui/Container/Container";

import { businessData } from "@/data/business";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { business, navigation } = businessData;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-bold"
          >
            {business.name}
          </a>

          {/* Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      font-medium
                      text-neutral-700
                      transition-colors
                      hover:text-black
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Abrir menú"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="border-t border-neutral-200 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}