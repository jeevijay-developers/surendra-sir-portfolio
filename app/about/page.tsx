import { Award, Music2, Heart, TrendingUp } from "lucide-react"
import { Music, Sparkles, Film, User } from "lucide-react";
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Surrender Rawal | Journey of a Classical Vocalist",
  description:
    "Learn about Surrender Rawal's musical journey, training in classical music, and his dedication to preserving and performing Indian classical, Ghazals, and Sufi music.",
  keywords: "Surrender Rawal biography, classical vocalist India, ghazal singer journey, Indian music artist",
}

export default function AboutPage() {
  const genres = [
    {
      title: "Guinness World Record (2021)",
      subtitle: "26-Hour Singing Achievement",
      icon: Heart,
      description:
        "This Guinness World Record recognizes an extraordinary vocal achievement, highlighting exceptional stamina, discipline, and artistic excellence. Surrendra K. Rawal’s performance stands as a testament to his rigorous classical training, emotional control, and unwavering commitment to musical expression over an extended duration.",
      features: [
        "First-place Guinness World Record holder",
        "26-hour vocal performance achievement",
        "Demonstration of exceptional vocal endurance",
        "High-level artistic discipline and consistency",
      ],
      image: "/White-Kurta.png",
      color: "from-maroon-600 to-maroon-800",
    },

    {
      title: "All India Ghazal Khazana",
      subtitle: "National-Level Recognition (2022)",
      icon: Heart,
      description:
        "All India Ghazal Khazana is a prestigious national platform celebrating excellence in ghazal singing. Surrendra K. Rawal earned second place in 2022, recognized for his refined expression, emotional depth, and authentic ghazal presentation rooted in classical tradition. His performance reflected a deep understanding of poetry, melody, and nazakat.",
      features: [
        "First place winner at national level",
        "Authentic Urdu and Hindi ghazal renditions",
        "Strong emphasis on nazakat and emotional expression",
        "Classical foundation with poetic sensitivity",
      ],
      image: "/White-Kurta.png",
      color: "from-maroon-800 to-gold-500",
    },
    {
      title: "Classical Vocal Excellence",
      subtitle: "First Rank Achievement (2007)",
      icon: Music,
      description:
        "This achievement recognizes academic and artistic excellence in classical vocal music. Surrendra K. Rawal secured first rank in 2007, reflecting exceptional mastery of classical techniques, rigorous training, and a strong command over raga, tala, and traditional vocal presentation.",
      features: [
        "First rank in Classical Vocal Music (2007)",
        "Strong foundation in raga and tala",
        "Disciplined classical training and technique",
        "High standards of academic and performance excellence",
      ],
      image: "/White-Kurta.png",
      color: "from-maroon-700 to-gold-600",
    },
  ];
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
              <span className="text-sm text-muted tracking-wider uppercase">
                The Artist
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground text-balance">
              About <span className="text-accent">Surendra K. Rawal</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto text-pretty">
              A journey through melody, tradition, and the pursuit of musical
              excellence
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                The Voice of <span className="text-accent">Tradition</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Surendra Rawal refined his artistry through performances and
                  training associated with the Gwalior Gharana and Jaipur
                  Gharana, gaining deeper insight into classical vocal
                  traditions and performance discipline. These formative
                  experiences played a significant role in shaping his musical
                  sensibility, versatility, and stage presence.
                </p>
                <p>
                  Over the years, he has had the privilege of performing
                  alongside renowned artists such as Usha Mangeshkar, Anoop
                  Jalota, Pankaj Udhas, Hariharan, Rekha Bhardwaj, and Suresh
                  Wadekar, gaining valuable exposure to diverse musical styles
                  and professional performance environments.
                </p>
                <p>
                  In 2009, he further showcased his talent by reaching the
                  Theatre Round of Indian Idol, marking an important milestone
                  in his journey and establishing his credibility as a dedicated
                  and accomplished vocalist.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[5/4] relative rounded-lg overflow-hidden border border-border">
                <Image
                  src="/About_SR.png"
                  alt="Surendra Rawal"
                  width={600}
                  height={800}
                  className="object-cover object-[center_25%] w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-lg blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="py-20 bg-surface">
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
                description:
                  "Staying true to the classical traditions while embracing innovation",
              },
              {
                icon: Heart,
                title: "Emotion",
                description:
                  "Every note is infused with genuine feeling and spiritual connection",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Continuous pursuit of technical mastery and artistic growth",
              },
              {
                icon: TrendingUp,
                title: "Evolution",
                description:
                  "Making classical music accessible to contemporary audiences",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-surface-elevated p-8 rounded-lg border border-border text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-maroon-800 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Training & Lineage */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Achievements & <span className="text-accent">Lineage</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Guiness World Record Holder",
                    description:
                      "In 2021, he achieved a Guinness World Record, securing first place for a 26-hour singing performance, demonstrating exceptional vocal endurance, discipline, and artistic commitment.",
                    year: "2021",
                  },
                  {
                    title: "All India Ghazal Khazana",
                    description:
                      "Awarded First Place, recognizing excellence in ghazal performance at the national level.",
                    year: "2022",
                  },
                  {
                    title: "Topper in Classical Vocal Music",
                    description:
                      "Secured First Rank, achieving distinction as the top performer in classical vocal music.",
                    year: "2007",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-surface-elevated border-2 border-accent flex items-center justify-center">
                        <span className="text-sm font-bold text-accent">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {item.description}
                      </p>
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
      </section> */}

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 jaali-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
           
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground text-balance">
              Achievements <span className="text-accent">Awards</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto text-pretty">
              A journey through melody, tradition, and the pursuit of musical
              excellence
            </p>
          </div>
        </div>
      </section>

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
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="aspect-[3/3] relative rounded-lg overflow-hidden border border-border">
                  <Image
                    src={genre.image || "/placeholder.svg"}
                    alt={genre.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${genre.color} opacity-20`}
                  />
                </div>
                <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-elevated rounded-full border border-border">
                  <genre.icon size={18} className="text-accent" />
                  <span className="text-sm text-muted tracking-wider uppercase">
                    {genre.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground">
                  {genre.title}
                </h2>

                <p className="text-lg text-muted leading-relaxed">
                  {genre.description}
                </p>

                <div className="space-y-3 pt-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Key Features
                  </h3>
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
                <div className="text-5xl font-serif font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
