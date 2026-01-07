import { Music, Sparkles, Heart, Film, User } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Musical Genres | Ghazals, Classical, Sufi & Bollywood | Surrender Rawal",
  description:
    "Explore Surrender Rawal's diverse musical repertoire including Ghazals, Hindustani Classical, Semi-Classical, Sufi music, and Bollywood melodies.",
  keywords:
    "ghazal singer, classical music India, sufi music performer, bollywood singer, semi-classical vocalist, Indian music genres",
}

export default function GenresPage() {
  const genres = [
    {
      title: "Ghazals",
      subtitle: "Poetry in Motion",
      icon: Heart,
      description:
        "Ghazals are the epitome of poetic expression in music. Each couplet tells a story of love, longing, and life's profound emotions. Surrender Rawal's ghazal performances are known for their authenticity, emotional depth, and perfect blend of classical training with contemporary sensibility.",
      features: [
        "Traditional Urdu and Hindi ghazals",
        "Contemporary ghazal compositions",
        "Authentic nazakat (delicacy) in rendition",
        "Perfect blend of melody and poetry",
      ],
      image: "/ghazal-music-performance-soulful.jpg",
      color: "from-maroon-600 to-maroon-800",
    },
    {
      title: "Classical Music",
      subtitle: "The Foundation of Excellence",
      icon: Music,
      description:
        "Hindustani classical music is the soul of Indian musical tradition. With rigorous training and years of practice, Surrender presents pure classical ragas with devotion and technical mastery. His performances showcase the depth of Indian classical music while making it accessible to all audiences.",
      features: [
        "Khayal and Dhrupad traditions",
        "Raga-based compositions",
        "Traditional alap, jod, jhala progression",
        "Tarana and sargam improvisations",
      ],
      image: "/indian-classical-music-raga-performance.jpg",
      color: "from-gold-600 to-gold-700",
    },
    {
      title: "Semi-Classical",
      subtitle: "Where Tradition Meets Accessibility",
      icon: Sparkles,
      description:
        "Semi-classical forms like Thumri, Dadra, and Tappa bridge the gap between pure classical music and lighter forms. These genres allow for greater emotional expression while maintaining classical integrity. Surrender's semi-classical performances are celebrated for their lyrical beauty and emotional resonance.",
      features: [
        "Thumri with bhakti and shringar rasa",
        "Folk-infused classical compositions",
        "Seasonal and devotional songs",
        "Regional semi-classical traditions",
      ],
      image: "/thumri-semi-classical-music.jpg",
      color: "from-maroon-700 to-gold-600",
    },
    {
      title: "Sufi Music",
      subtitle: "Spiritual Transcendence",
      icon: User,
      description:
        "Sufi music is a journey to the divine through melody and verse. Surrender's Sufi performances create an atmosphere of spiritual elevation, bringing audiences closer to the mystical dimensions of music. His renditions of qawwalis and Sufi kalam are deeply moving experiences.",
      features: [
        "Traditional qawwali performances",
        "Sufi kalam and poetry",
        "Mystical and devotional themes",
        "Spiritual atmosphere creation",
      ],
      image: "/sufi-qawwali-music-spiritual.jpg",
      color: "from-gold-500 to-maroon-600",
    },
    {
      title: "Bollywood Melodies",
      subtitle: "Contemporary Classics",
      icon: Film,
      description:
        "Bollywood music represents the popular face of Indian musical cinema. Surrender brings classical sophistication to contemporary film songs, offering renditions that honor both the original compositions and classical traditions. His Bollywood performances are perfect for events seeking familiar yet refined entertainment.",
      features: [
        "Classic Bollywood golden era songs",
        "Contemporary film melodies",
        "Classical interpretation of popular songs",
        "Medleys and mashups",
      ],
      image: "/bollywood-music-singer-performance.jpg",
      color: "from-maroon-800 to-gold-500",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 jaali-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-accent/20">
              <Music size={16} className="text-accent" />
              <span className="text-sm text-muted tracking-wider uppercase">Musical Repertoire</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground text-balance">
              Genres & <span className="text-accent">Specialties</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto text-pretty">
              A versatile artist mastering the full spectrum of Indian classical and contemporary music
            </p>
          </div>
        </div>
      </section>

      {/* Genres Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-border">
                  <Image
                    src={genre.image || "/placeholder.svg"}
                    alt={genre.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${genre.color} opacity-20`} />
                </div>
                <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-elevated rounded-full border border-border">
                  <genre.icon size={18} className="text-accent" />
                  <span className="text-sm text-muted tracking-wider uppercase">{genre.subtitle}</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">{genre.title}</h2>

                <p className="text-lg text-muted leading-relaxed">{genre.description}</p>

                <div className="space-y-3 pt-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">Key Features</h3>
                  <ul className="space-y-2">
                    {genre.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Options */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Performance <span className="text-accent">Packages</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">Customized musical experiences for every occasion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Classical Concert",
                duration: "90-120 minutes",
                description:
                  "Full classical performance with raga elaboration, perfect for music festivals and cultural events",
                includes: ["2-3 ragas", "Alap and bandish", "Tarana", "Q&A session"],
              },
              {
                title: "Ghazal Evening",
                duration: "60-90 minutes",
                description: "Intimate ghazal performance for weddings, private events, and cultural gatherings",
                includes: [
                  "10-12 ghazals",
                  "Mix of traditional and modern",
                  "Audience interaction",
                  "Customizable playlist",
                ],
              },
              {
                title: "Sufi Night",
                duration: "75-100 minutes",
                description: "Spiritual Sufi music experience with qawwalis and devotional compositions",
                includes: ["Qawwali performances", "Sufi kalam", "Devotional atmosphere", "Spiritual discourse"],
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="bg-surface-elevated p-8 rounded-lg border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{pkg.title}</h3>
                <div className="text-sm text-accent mb-4 uppercase tracking-wide">{pkg.duration}</div>
                <p className="text-muted mb-6 leading-relaxed">{pkg.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">Includes:</div>
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
