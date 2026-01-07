"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ImageIcon } from "lucide-react"

const galleryItems = [
  {
    type: "image",
    src: "/ghazal-concert-performance-on-stage-with-warm-ligh.jpg",
    title: "Ghazal Night at Mumbai",
    category: "ghazal",
  },
  {
    type: "image",
    src: "/classical-music-festival-stage-performance-with-tr.jpg",
    title: "Classical Music Festival",
    category: "classical",
  },
  {
    type: "image",
    src: "/sufi-qawwali-evening-performance-with-spiritual-at.jpg",
    title: "Sufi Qawwali Evening",
    category: "sufi",
  },
  {
    type: "image",
    src: "/elegant-wedding-singer-performance-at-private-even.jpg",
    title: "Private Wedding Performance",
    category: "private",
  },
  {
    type: "image",
    src: "/bollywood-melodies-concert-with-colorful-stage-lig.jpg",
    title: "Bollywood Melodies Concert",
    category: "bollywood",
  },
  {
    type: "image",
    src: "/classical-raga-performance-with-traditional-indian.jpg",
    title: "Raga Performance",
    category: "classical",
  },
  {
    type: "image",
    src: "/intimate-ghazal-music-session-with-acoustic-setup.jpg",
    title: "Intimate Ghazal Session",
    category: "ghazal",
  },
  {
    type: "image",
    src: "/sufi-music-gathering-with-devotional-atmosphere.jpg",
    title: "Sufi Music Gathering",
    category: "sufi",
  },
  {
    type: "image",
    src: "/corporate-event-live-music-performance.jpg",
    title: "Corporate Event Performance",
    category: "private",
  },
]

const categories = [
  { id: "all", label: "All" },
  { id: "ghazal", label: "Ghazals" },
  { id: "classical", label: "Classical" },
  { id: "sufi", label: "Sufi" },
  { id: "bollywood", label: "Bollywood" },
  { id: "private", label: "Private Events" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 jaali-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-accent/20">
              <ImageIcon size={16} className="text-accent" />
              <span className="text-sm text-muted tracking-wider uppercase">Visual Journey</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground text-balance">
              Gallery & <span className="text-accent">Performances</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto text-pretty">
              Glimpses from concerts, festivals, and memorable musical moments
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-surface border-y border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm tracking-wide uppercase transition-all ${
                  activeCategory === category.id
                    ? "bg-accent text-background"
                    : "bg-surface-elevated text-muted hover:text-foreground hover:border-accent/50 border border-border"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all cursor-pointer"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-serif font-bold text-foreground mb-1">{item.title}</h3>
                    <div className="text-sm text-accent uppercase tracking-wide">
                      {categories.find((c) => c.id === item.category)?.label}
                    </div>
                  </div>
                </div>
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-background ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Featured <span className="text-accent">Performances</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">Watch highlights from recent concerts and events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Classical Raga Performance",
                description: "Full raga elaboration at National Music Festival 2023",
                thumbnail: "/classical-raga-performance-on-stage.jpg",
              },
              {
                title: "Ghazal Medley",
                description: "Collection of timeless ghazals from Mumbai concert",
                thumbnail: "/ghazal-singer-performing-with-microphone.jpg",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all cursor-pointer"
              >
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">{video.title}</h3>
                    <p className="text-sm text-muted">{video.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-background ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
