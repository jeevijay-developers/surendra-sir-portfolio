import Link from "next/link"
import { Music2, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a0c10] border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* CTA Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Let's create magic together</h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Available for concerts, private events, weddings, and corporate shows. Bringing the royal essence of music
            to your stage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-maroon-700 text-white text-lg font-bold transition-all shadow-lg hover:shadow-primary/40"
          >
            Get in Touch
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12 text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="w-6 h-6 text-accent flex items-center justify-center">
                <Music2 className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-lg">Surrender Rawal</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Keeping the tradition of Indian classical music alive with a modern soul.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold mb-2">Quick Links</h4>
            <Link href="/about" className="text-muted hover:text-accent text-sm transition-colors">
              Biography
            </Link>
            <Link href="/genres" className="text-muted hover:text-accent text-sm transition-colors">
              Music Genres
            </Link>
            <Link href="/gallery" className="text-muted hover:text-accent text-sm transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-muted hover:text-accent text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold mb-2">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-accent hover:text-background flex items-center justify-center text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-accent hover:text-background flex items-center justify-center text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-accent hover:text-background flex items-center justify-center text-white transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-muted/60 text-xs">
          &copy; {currentYear} Surrender Rawal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
