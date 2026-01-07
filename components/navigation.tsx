"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Music2 } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Biography" },
  { href: "/genres", label: "Music" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border bg-background/80">
      <div className="px-4 sm:px-10 py-4 flex items-center justify-between max-w-[1280px] mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 text-white group">
          <div className="w-8 h-8 text-accent flex items-center justify-center">
            <Music2 className="w-7 h-7" />
          </div>
          <h2 className="text-white text-xl font-serif font-bold tracking-wide group-hover:text-accent transition-colors">
            Surrender Rawal
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-accent" : "text-gray-300 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-maroon-700 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(139,10,26,0.3)] hover:shadow-[0_0_20px_rgba(139,10,26,0.5)]"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-accent" : "text-gray-300 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-6 py-2.5 bg-primary hover:bg-maroon-700 text-white text-center font-semibold rounded-lg transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
