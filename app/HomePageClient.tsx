"use client"

import Link from "next/link"
import Image from "next/image"
import { Music2, Tv, Trophy, Clock, ArrowRight, PlayCircle, Calendar, Play } from "lucide-react"

export default function HomePageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[750px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-DanM-pjlXcGwTxbtBV-gmKVBX1t-EbHRgH2SjZDrYqK6VaLe7SaRtzaxz5Qs9mnWp5Oe90OdE5LJLnCR47jwdocPZxtYPA5V9X8FGoyFPP2rl2xd9ffB5lCwOEuaQ77Yl5kkYmkxjkWua2xYdXwUOZxh1XXLazAfZVa3xgkQWRDTLLF3PcZvhwymo25DLkSwnGlbiJAevfSxHHrqOKBWmwYxovhVIrkLU-QMxrF3CO-ZmAx01I5AWZxKqiElB9QF4gWRihMvIrhS"
            alt="Surrender Rawal performing live on a dimly lit stage with warm lighting"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center gap-8 max-w-4xl">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 border border-accent/30 rounded-full bg-black/30 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-widest mb-4">
              Royal Indian Classical
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight drop-shadow-lg">
              Surrender{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white">
                Rawal
              </span>
            </h1>
            <h2 className="text-gray-200 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
              Vocalist | Ghazal | Classical | Bollywood | Sufi
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link
              href="/gallery"
              className="group flex min-w-[160px] items-center justify-center gap-2 rounded-full h-12 px-8 bg-gradient-to-r from-primary to-maroon-700 text-white text-base font-bold tracking-wide transition-all hover:scale-105 shadow-[0_4px_20px_rgba(139,10,26,0.4)]"
            >
              <PlayCircle className="w-5 h-5 group-hover:animate-pulse" />
              <span>Listen Now</span>
            </Link>
            <Link
              href="/contact"
              className="group flex min-w-[160px] items-center justify-center gap-2 rounded-full h-12 px-8 bg-transparent border border-accent text-accent hover:bg-accent hover:text-background text-base font-bold tracking-wide transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Performance</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="bg-surface/60 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-border">
            <div className="flex flex-col items-center gap-2 p-2 group">
              <Music2 className="text-accent w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold text-white font-serif">500+</p>
              <p className="text-muted text-sm font-medium uppercase tracking-wider">Concerts</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 group">
              <Tv className="text-accent w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold text-white font-serif">50+</p>
              <p className="text-muted text-sm font-medium uppercase tracking-wider">TV Shows</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 group">
              <Trophy className="text-accent w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold text-white font-serif">12</p>
              <p className="text-muted text-sm font-medium uppercase tracking-wider">Awards</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 group">
              <Clock className="text-accent w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold text-white font-serif">20+</p>
              <p className="text-muted text-sm font-medium uppercase tracking-wider">Years Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Composition Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-2">Discography</h2>
              <h3 className="text-white text-3xl md:text-4xl font-serif font-bold">Featured Compositions</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Feature */}
            <div className="lg:col-span-7 bg-surface border border-border rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBufjLtYwrhx9LmMJ-GM-EzsYT8lE1nguw2M4HjCCLX4wUvD5g0VzjRZBxBRc8wx347laRnIb6Z3KLm2nvWNl7LqVSDw7wVRKp9iqNGbycoY0HvD8ZkqUjseQ8kD12i8t4BC9qtQN-J6wsKdRm-CNhZV-j_cDNOdGUnfePU6m_3NMfodVE2BdDSFSjodr1VOCaQzHbcRbYc4RkGG4AUQwFZkWWxe-ISYa7EP8WxQFf-tjsKwvPlAVCW9MDzu8DB9E8xyqpe8g9Khn_"
                  alt="Close up of a microphone with blurred stage lights in the background"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <button className="absolute bottom-6 left-6 w-14 h-14 rounded-full bg-accent text-background flex items-center justify-center hover:bg-gold-400 transition-colors shadow-lg hover:scale-110 duration-300">
                  <Play className="w-6 h-6 fill-current" />
                </button>
                <div className="absolute bottom-6 left-24 right-6">
                  <h4 className="text-white text-2xl font-serif font-bold truncate">Raag Malhar - Live Session</h4>
                  <p className="text-gray-300 text-sm">Classical Fusion • 12:04</p>
                </div>
              </div>

              {/* Audio Wave Visualizer */}
              <div className="p-6 bg-surface-elevated">
                <div className="flex items-center gap-3 text-xs text-muted font-mono mb-2">
                  <span>02:14</span>
                  <div className="flex-1 h-8 flex items-end gap-[2px] opacity-70">
                    {[40, 70, 100, 60, 30, 50, 80, 90, 40, 20, 40, 70, 100, 60, 30, 50, 80, 90, 40, 20].map(
                      (height, i) => (
                        <div
                          key={i}
                          className={`w-1 bg-accent transition-all ${
                            height === 100 ? "opacity-100" : height > 60 ? "opacity-60" : "opacity-40"
                          } ${i === 2 || i === 12 ? "animate-pulse" : ""}`}
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                  <span>12:04</span>
                </div>
              </div>
            </div>

            {/* List Features */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                {
                  title: "Shaam-e-Ghazal",
                  genre: "Ghazal",
                  year: "2023",
                  duration: "05:32",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBSRW1F8RgEA4mO1LoTXZ2cZMdFkltG8K0Z3clGKWuDvaRPZKxRvFrkXjVg9NQLlWbyvPXcRORrAi0ihItuRea9TIMQBGI_rG0wxXtutKEb-g52dCT8xqlxIYfiVTQpcaOoOcpDruJAzjIYw1qOOyeb1CznUMngOoRG1p1E-eZ0C-qmxD7ebDXy73ZLKhNziCXPWP-N20ExgElmfRQbdGJiSuUlIu4i7bzt2PCbimXFr0BDyC4v5rBzKiQicLVRBL0RH2l1784TSU-V",
                  audioUrl: "/audio/shaam-e-ghazal.mp3",
                },
                {
                  title: "Sufi Soul Journey",
                  genre: "Sufi",
                  year: "2022",
                  duration: "08:15",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJMfx3O1uRJNsKPPjigg7-FQOv915ZQ7DThgvqb1dmi-IvhLykN0YfPyA86-maXx9vrbH6XJOBrUoDG1Ecw61EDw_f6rM0DgEjjJWFKkJpZd_TEmyNdnSUav7alJh3SslROgdRdKG_AkMUkh3QFYwoGGycZMcqkDNFrigH013evLRq2W1_P-zMdFlw7V7DKTt2GOA29x33CaxtoQ1vcZB0ClfwRwk50D0mLn39WFLGLdxy1txNpP7HCMXyOV0SnE-l_1gYAhOcKl3L",
                  audioUrl: "/audio/sufi-soul-journey.mp3",
                },
                {
                  title: "Midnight Raga",
                  genre: "Classical",
                  year: "2021",
                  duration: "15:00",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAInmyksHO8_q0cieEkn_nwxKaELhjQv4nGWXsvd-Gkl4LJgJSKmi4vaDEb2j4XCEZGn2-moity_8A-Wg1GaDpDXf37ENovOqE_w9HimKqgtkkqixl3S56eRXRFC9USHyAAOFU-U8KoQcz7hM9laXrxgyApKO80qy1hTN236xCls5n3RMvRaRIpB3IonKlYz9p89YjxAkSPW8D6y_WmabXrAV72THvLm8PLLjdbT3Yk4dfvFoCxH5mgFVhhGcPl9b5pjMVUQFHVh4YH",
                  audioUrl: "/audio/midnight-raga.mp3",
                },
                {
                  title: "Bollywood Classics Reimagined",
                  genre: "Bollywood",
                  year: "2024",
                  duration: "04:45",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYexm1voL8wM02BpGi19NQm0aTnBWfF_EjqFFlseX5IORKGApmSd7zf3cGBnw7LX3dUWU0LoZ6NMGVHECFlXMwQRwyNWDQBh8zwmkl3OAMQyBhfJLhHr41r6XYJ4rtF_qblL5EhEr2ru_cA_wdOC7wqYAtqiXSHg3mUkY9JdS54b01EtJZvOkfGmayd7KbZygpWCICvez2Z4Sm9Wz5XdAas2mQEWWQ4Kmwo0USW5U5bI6PwSsAezySq3VFqNWOBj2eMWJet9Vp5J03",
                  audioUrl: "/audio/bollywood-classics.mp3",
                },
              ].map((track, index) => (
                <button
                  key={index}
                  onClick={() => {
                    console.log("[v0] Playing track:", track.title)
                    alert(`Playing: ${track.title}`)
                  }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-foreground/5 transition-colors group cursor-pointer border border-transparent hover:border-accent/20 text-left w-full"
                >
                  <div className="w-16 h-16 rounded-md shrink-0 relative overflow-hidden">
                    <Image src={track.image || "/placeholder.svg"} alt={track.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-5 h-5 text-white fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-white font-medium truncate">{track.title}</h5>
                    <p className="text-muted text-sm">
                      {track.genre} • {track.year}
                    </p>
                  </div>
                  <div className="text-muted text-sm font-mono group-hover:text-accent">{track.duration}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 opacity-30">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="mx-4 text-accent text-2xl rotate-45">❖</div>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      {/* Gallery/Events Section */}
      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3">Live Moments</h2>
            <h3 className="text-white text-3xl md:text-4xl font-serif font-bold">Gallery & Events</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "International Tour 2023",
                location: "Dubai Opera House",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlMb1ShGI1RIsV7w0KJ8_gHzHDElV_6s-37vKN5OmrmmtQ9WwIkpY9TtEF1yegLpmAqVHH_EM5L_BlHM2Z3MgmtLgOTgOakaBYh_ceB6N5lTZ8cPKmgipWR5CKHh74AHlUlbUxsWLX93HO93eZUgTFE1aWYmHFF8jVenHea45pfY8WnuKse9N4MLKnEba1puMTz0wgYl0UI7ErhtEL0FFQg39jMJyeumo6PaUqvTD2cPz1yhWfF1rzXYcX9nB1gceoc2Xg-1kcGoHQ",
                alt: "Concert crowd silhouette with stage lights",
              },
              {
                title: "Jashn-e-Rekhta",
                location: "Mumbai",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1skcWzmQL9is3Lp4wkJkbLT-On4H4StMRqhHCyMXlbdNZJFS6n1ofF1nq8pbVkvAB1yyyLgS7Jkrs6nvd5vi3c9GgFgTQ2HlG1cuXbRhJpRxv2Y2Fbhaf8dC2UkAl_XLVPIXjJotl5Bfl_xA5rl1vrvSiJ7Nrj-dwzq6TsbSRlS4dRQAHVCqh_HmzbnbqKbtQdubcbQTUEF6XT2aYmnGNWYfgCSsf-_WJ2TdyMTLSBQL-OZ6c49vsn_WNBG1hINNVD8qnGRmdUrvq",
                alt: "Artist sitting on stage singing into microphone",
                offset: "md:-mt-8",
              },
              {
                title: "Classical Evening",
                location: "NCPA, Delhi",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHgG9AeWxKcK5rFkVX_0y0w2UBWKcNtPGT3QcBIQE5MQ9c0gXOxVHZ4g2jDxiQJHHKpLHpNQHHGcpQx5jGcHpcB5cGBKHDQQ",
                alt: "Close up of hands playing musical instrument",
              },
            ].map((event, index) => (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer ${event.offset || ""}`}
              >
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-accent text-xs font-bold uppercase mb-1">{event.location}</p>
                  <h4 className="text-white text-xl font-bold font-serif">{event.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-md hover:bg-gold-400 transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3">Testimonials</h2>
            <h3 className="text-white text-3xl md:text-4xl font-serif font-bold">What Audiences Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Surrender's voice transcends time. His rendition of classical ragas left the entire auditorium spellbound.",
                author: "Priya Sharma",
                role: "Music Critic, Times of India",
              },
              {
                quote:
                  "We hired Surrender for our corporate event, and his performance was the highlight of the evening. Pure magic!",
                author: "Rajesh Mehta",
                role: "Event Manager",
              },
              {
                quote:
                  "His Sufi performance at our wedding was soul-stirring. Guests are still talking about it months later!",
                author: "Anjali & Vikram",
                role: "Wedding Couple",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-surface p-8 rounded-lg border border-border">
                <div className="text-4xl text-accent mb-4 font-serif">"</div>
                <p className="text-muted mb-6 leading-relaxed italic">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">Let's create magic together</h2>
          <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
            Available for concerts, private events, weddings, and corporate shows. Bringing the royal essence of music
            to your stage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-maroon-700 text-white text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/40"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
