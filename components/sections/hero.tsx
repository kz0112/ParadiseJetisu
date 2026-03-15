"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Map, Globe } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm tracking-wider uppercase mb-6">
            Образовательный проект
          </span>
        </div>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          Paradise
        </h1>

        <h2
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-white/90 mt-4 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "600ms", animationFillMode: "both" }}
        >
          Жетысу — земной рай природы
        </h2>

        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "800ms", animationFillMode: "both" }}
        >
          Откройте для себя удивительную природу Жетысу — региона Казахстана с величественными горами, кристальными озёрами и уникальной флорой и фауной
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "1000ms", animationFillMode: "both" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
            onClick={() => scrollToSection("satellite")}
          >
            <Map className="mr-2 h-5 w-5" />
            Исследовать карту
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white px-8 py-6 text-lg rounded-full"
            onClick={() => scrollToSection("tour")}
          >
            <Globe className="mr-2 h-5 w-5" />
            Виртуальный тур
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("nature")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="h-10 w-10 text-white/70" />
      </button>
    </section>
  )
}
