"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Mountain, Waves, TreePine, Sparkles, X } from "lucide-react"

const natureLocations = [
  {
    id: 1,
    name: "Жоңғар Алатауы",
    nameRu: "Джунгарский Алатау",
    description: "Величественный горный хребет с вечными снегами, альпийскими лугами и ледниками. Высочайшая точка — пик Семенова-Тян-Шанского (4622 м).",
    fullDescription: "Джунгарский Алатау — горная система на границе Казахстана и Китая. Здесь обитают снежные барсы, архары и множество редких птиц. Горные реки питают озёра и долины, создавая уникальные экосистемы.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    icon: Mountain,
    facts: ["Длина хребта — 450 км", "300+ ледников", "Возраст: 300 млн лет"]
  },
  {
    id: 2,
    name: "Балқаш көлі",
    nameRu: "Озеро Балхаш",
    description: "Уникальное полупресноводное озеро — одно из крупнейших в Азии. Западная часть пресная, восточная — солёная.",
    fullDescription: "Балхаш — одно из крупнейших озёр мира (16 400 км²). Уникальность в том, что западная часть пресная, а восточная — солёная. Это важнейшее место гнездования птиц и обитания рыб.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    icon: Waves,
    facts: ["Площадь: 16 400 км²", "2 типа воды", "46 видов рыб"]
  },
  {
    id: 3,
    name: "Алтын-Емел ұлттық паркі",
    nameRu: "Национальный парк Алтын-Эмель",
    description: "Крупнейший национальный парк Казахстана с поющим барханом, древними курганами и уникальной природой.",
    fullDescription: "Алтын-Эмель — жемчужина Жетысу, где находится знаменитый Поющий бархан высотой 150 м. Парк сохраняет уникальную фауну: куланов, джейранов, архаров. Здесь же — древние курганы скифов.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    icon: Sparkles,
    facts: ["Площадь: 4600 км²", "Поющий бархан", "700+ видов растений"]
  },
  {
    id: 4,
    name: "Көлсай көлдері",
    nameRu: "Кольсайские озёра",
    description: "Каскад из трёх высокогорных озёр изумрудного цвета в ущельях Северного Тянь-Шаня.",
    fullDescription: "Кольсайские озёра называют «жемчужиной Северного Тянь-Шаня». Три озера расположены на высотах от 1818 до 2850 м. Окружены тянь-шаньскими елями и альпийскими лугами.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    icon: TreePine,
    facts: ["3 каскадных озера", "Глубина до 80 м", "Тянь-шаньские ели"]
  },
]

export function NatureSection() {
  const [selectedLocation, setSelectedLocation] = useState<typeof natureLocations[0] | null>(null)

  return (
    <section id="nature" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm tracking-wider uppercase mb-4">
            Откройте для себя
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Природа Жетысу
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Уникальные природные объекты региона — от величественных гор до кристальных озёр
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {natureLocations.map((location, index) => {
            const Icon = location.icon
            return (
              <Card 
                key={location.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.nameRu}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">{location.name}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-white font-bold">
                      {location.nameRu}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {location.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {location.facts.map((fact, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedLocation && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">
                  {selectedLocation.nameRu}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedLocation.name}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={selectedLocation.image} 
                  alt={selectedLocation.nameRu}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-foreground leading-relaxed mb-6">
                  {selectedLocation.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.facts.map((fact, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
