"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Calendar, Send } from "lucide-react"

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 jaali-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <span className="inline-block py-1 px-3 border border-accent/30 rounded-full bg-black/30 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-widest mb-4">
              Get in Touch
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground text-balance">
              Book a <span className="text-accent">Performance</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto text-pretty">
              Let's create unforgettable musical moments together for your special event
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                  Let's <span className="text-accent">Connect</span>
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  Whether it's a wedding, corporate event, music festival, or private gathering, I'm here to make your
                  event memorable with soulful music.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-surface/60 backdrop-blur-sm rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-maroon-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@surrenderrawal.com" className="text-muted hover:text-accent transition-colors">
                      info@surrenderrawal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-surface/60 backdrop-blur-sm rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-maroon-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted hover:text-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-surface/60 backdrop-blur-sm rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-maroon-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted">Mumbai, India</p>
                    <p className="text-sm text-muted/70 mt-1">Available for performances worldwide</p>
                  </div>
                </div>
              </div>

              {/* Calendar Booking */}
              <div className="p-8 bg-gradient-to-br from-maroon-800 to-maroon-700 rounded-lg border border-accent/20">
                <div className="flex items-start gap-4 mb-4">
                  <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">Schedule a Meeting</h3>
                    <p className="text-muted text-sm mb-4">
                      Book a consultation call to discuss your event requirements and get a personalized quote.
                    </p>
                    <a
                      href="https://cal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-md hover:bg-gold-400 transition-colors"
                    >
                      <Calendar size={18} />
                      Schedule on Cal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface/60 backdrop-blur-sm p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="festival">Music Festival</option>
                      <option value="private">Private Gathering</option>
                      <option value="concert">Concert</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground placeholder-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your event, preferred music genres, duration, and any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-background font-semibold rounded-md hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-muted">Everything you need to know about booking a performance</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of events do you perform at?",
                answer:
                  "I perform at weddings, corporate events, music festivals, private gatherings, cultural events, and concerts. Each performance is customized to suit the occasion and audience.",
              },
              {
                question: "How far in advance should I book?",
                answer:
                  "I recommend booking at least 2-3 months in advance for weddings and large events. However, I do accommodate last-minute bookings based on availability.",
              },
              {
                question: "Do you travel for performances?",
                answer:
                  "Yes, I am available for performances across India and internationally. Travel and accommodation arrangements can be discussed during booking.",
              },
              {
                question: "Can you customize the setlist for my event?",
                answer:
                  "I work closely with clients to create a personalized setlist that matches the theme, mood, and preferences for their event.",
              },
              {
                question: "What equipment do you require?",
                answer:
                  "I typically need a sound system, microphones, and proper lighting. For larger events, we can coordinate with your technical team to ensure the best setup.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-surface-elevated p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
