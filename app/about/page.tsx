import { Award, Music2, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Surrender Rawal | Journey of a Classical Vocalist",
  description:
    "Learn about Surrender Rawal's musical journey, training in classical music, and his dedication to preserving and performing Indian classical, Ghazals, and Sufi music.",
  keywords: "Surrender Rawal biography, classical vocalist India, ghazal singer journey, Indian music artist",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 jaali-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated/50 backdrop-blur-sm rounded-full border border-accent/20">
              <Heart size={16} className="text-accent" />
              <span className="text-sm text-muted tracking-wider uppercase">The Artist</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground text-balance">
              About <span className="text-accent">Surrender Rawal</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto text-pretty">
              A journey through melody, tradition, and the pursuit of musical excellence
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-border">
                <Image
                  src="/indian-classical-singer-portrait.jpg"
                  alt="Surrender Rawal"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-lg blur-2xl" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                The Voice of <span className="text-accent">Tradition</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Surrender Rawal is a distinguished vocalist who has dedicated his life to the preservation and
                  performance of Indian classical music. With over 15 years of experience, he has become a celebrated
                  name in the world of Ghazals, Classical, Semi-Classical, Sufi, and Bollywood music.
                </p>
                <p>
                  Born into a family of music lovers, Surrender began his training at the age of 7 under the tutelage of
                  renowned classical maestros. His rigorous training in Hindustani classical music laid the foundation
                  for his versatile musical journey.
                </p>
                <p>
                  What sets Surrender apart is his ability to bridge the gap between classical purity and contemporary
                  accessibility. His performances are known for their emotional depth, technical precision, and
                  spiritual resonance.
                </p>
                <p>
                  Today, he performs at prestigious venues across India and internationally, bringing the soul of Indian
                  music to audiences worldwide. His mission is to keep the rich heritage of Indian classical music alive
                  while making it relevant for modern listeners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Musical <span className="text-accent">Philosophy</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The principles that guide every performance and composition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Music2,
                title: "Authenticity",
                description: "Staying true to the classical traditions while embracing innovation",
              },
              {
                icon: Heart,
                title: "Emotion",
                description: "Every note is infused with genuine feeling and spiritual connection",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Continuous pursuit of technical mastery and artistic growth",
              },
              {
                icon: TrendingUp,
                title: "Evolution",
                description: "Making classical music accessible to contemporary audiences",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-surface-elevated p-8 rounded-lg border border-border text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-maroon-800 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Lineage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Training & <span className="text-accent">Lineage</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Hindustani Classical Training",
                    description:
                      "Trained under Pandit Raghunath Sharma in Hindustani classical music, specializing in Khayal and Thumri.",
                    year: "2005-2010",
                  },
                  {
                    title: "Ghazal Specialization",
                    description:
                      "Studied the art of Ghazal singing with Ustad Akhtar Ali Khan, mastering the subtleties of poetry and emotion.",
                    year: "2010-2013",
                  },
                  {
                    title: "Sufi Music",
                    description:
                      "Learned the spiritual dimensions of Sufi qawwali and kalam from renowned Sufi practitioners.",
                    year: "2013-2015",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-surface-elevated border-2 border-accent flex items-center justify-center">
                        <span className="text-sm font-bold text-accent">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Awards & <span className="text-accent">Recognition</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Best Classical Vocalist - Indian Music Awards 2020",
                  "Excellence in Ghazal Performance - Sangeet Samman 2019",
                  "Rising Star in Indian Classical Music - 2017",
                  "Best Sufi Performance - Sufi Music Festival 2018",
                  "Cultural Ambassador Award - Ministry of Culture 2021",
                  "Lifetime Achievement in Music - State Government 2023",
                ].map((award, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-surface-elevated rounded-lg border border-border hover:border-accent/50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Live Performances" },
              { value: "15+", label: "Years of Experience" },
              { value: "25+", label: "Awards & Honors" },
              { value: "100K+", label: "Happy Listeners" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl font-serif font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
