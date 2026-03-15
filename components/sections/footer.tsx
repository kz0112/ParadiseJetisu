"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mountain, Mail, MapPin, Phone, Github, Twitter, Instagram } from "lucide-react"

const footerLinks = {
  explore: [
    { label: "Природа", href: "#nature" },
    { label: "Животные", href: "#animals" },
    { label: "Растения", href: "#plants" },
    { label: "Карта", href: "#satellite" },
  ],
  resources: [

    { label: "Спутник", href: "#satellite" },
  ],
}

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.replace("#", "")
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">Paradise</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Образовательный проект о природе региона Жетысу — земного рая Казахстана
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="font-medium text-background mb-4">Исследовать</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-background mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-background mb-4">Будьте в курсе</h4>
            <p className="text-background/70 text-sm mb-4">
              Подпишитесь на новости о природе Жетысу
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-background/50 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Жетысу, Казахстан</span>
          </div>
          <p className="text-background/50 text-sm">
            2026 Paradise. Образовательный проект.
          </p>
        </div>
      </div>
    </footer>
  )
}
