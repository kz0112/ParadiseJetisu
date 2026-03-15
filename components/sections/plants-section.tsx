"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const plants = [
  {
    id: 1,
    name: "Тюльпан Грейга",
    latinName: "Tulipa greigii",
    description: "Легендарный дикий тюльпан — предок садовых сортов. Цветёт алым пламенем на склонах гор.",
    fullDescription: "Тюльпан Грейга — жемчужина казахстанской флоры, эндемик региона. Именно отсюда тюльпаны попали в Европу и покорили мир. Цветок достигает 8 см в диаметре, имеет характерные полосатые листья.",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&q=80",
    season: "Апрель-Май",
    location: "Горные склоны",
  },
  {
    id: 2,
    name: "Тянь-шаньская ель",
    latinName: "Picea schrenkiana",
    description: "Стройное хвойное дерево, образующее уникальные горные леса Тянь-Шаня.",
    fullDescription: "Ель Шренка — эндемик Тянь-Шаня, достигающая 60 м в высоту. Образует живописные леса вокруг Кольсайских озёр. Живёт до 300-400 лет, создавая уникальный микроклимат.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
    season: "Вечнозелёное",
    location: "Горные леса",
  },
  {
    id: 3,
    name: "Полынь",
    latinName: "Artemisia",
    description: "Ароматное степное растение — символ казахской степи и народной медицины.",
    fullDescription: "Полынь — неотъемлемая часть степного пейзажа Жетысу. Серебристые листья создают особый колорит степей. Используется в народной медицине и кулинарии. Эфирные масла обладают лечебными свойствами.",
    image: "https://kccc.ru/sites/default/files/images/handbooks/weeds/745/image.jpg",
    season: "Лето-Осень",
    location: "Степи",
  },
  {
    id: 4,
    name: "Яблоня Сиверса",
    latinName: "Malus sieversii",
    description: "Дикий предок всех культурных яблонь мира, растущий в горах Жетысу.",
    fullDescription: "Яблоня Сиверса — прародительница всех яблок планеты! Генетические исследования доказали, что именно из казахстанских гор яблоня распространилась по миру. Алматы переводится как «Отец яблок».",
    image: "https://vestisemey.kz/wp-content/uploads/2021/11/435.jpg",
    season: "Цветение: май",
    location: "Горные леса",
  },
  {
    id: 5,
    name: "Эдельвейс",
    latinName: "Leontopodium alpinum",
    description: "Легендарный горный цветок — символ чистоты и недоступной красоты.",
    fullDescription: "Эдельвейс растёт на высотах 1800-3000 м в труднодоступных местах. Пушистые белые цветки защищают от ультрафиолета и холода. В народе считается символом мужества и верности.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/LeontopodiumAlpinum-3.jpg",
    season: "Июнь-Август",
    location: "Высокогорье",
  },
  {
    id: 6,
    name: "Саксаул",
    latinName: "Haloxylon",
    description: "Пустынное дерево-чемпион по выживанию в экстремальных условиях.",
    fullDescription: "Саксаул — уникальное растение пустынь, корни которого достигают 30 м в глубину. Древесина настолько плотная, что тонет в воде. Защищает почву от эрозии и служит кормом для животных.",
    image: "https://backend.tabigat.media/storage/images//ORIR8wKqFYn5gg0OPdlcPwiHbQghaugQHv0un1jF.jpg",
    season: "Вечнозелёное",
    location: "Пустыни",
  },
]

export function PlantsSection() {
  const [selectedPlant, setSelectedPlant] = useState<typeof plants[0] | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="plants" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm tracking-wider uppercase mb-4">
            Флора региона
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Растительный мир
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            От легендарных тюльпанов до горных лесов — ботаническое разнообразие Жетысу
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {plants.map((plant, index) => (
            <div
              key={plant.id}
              className={cn(
                "relative group cursor-pointer overflow-hidden rounded-2xl animate-in fade-in slide-in-from-bottom-4",
                index === 0 || index === 3 ? "row-span-2" : ""
              )}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              onClick={() => setSelectedPlant(plant)}
              onMouseEnter={() => setHoveredId(plant.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={cn(
                "relative overflow-hidden",
                index === 0 || index === 3 ? "h-[420px]" : "h-[200px]"
              )}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  hoveredId === plant.id
                    ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                )} />

                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <span className="text-white/70 text-xs uppercase tracking-wider mb-1">
                    {plant.location}
                  </span>
                  <h3 className="font-serif text-white font-bold text-lg md:text-xl">
                    {plant.name}
                  </h3>
                  <p className={cn(
                    "text-white/80 text-sm mt-2 transition-all duration-300",
                    hoveredId === plant.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}>
                    {plant.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedPlant} onOpenChange={() => setSelectedPlant(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPlant && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">
                  {selectedPlant.name}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground italic">
                  {selectedPlant.latinName}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedPlant.image}
                  alt={selectedPlant.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="flex gap-4 mb-6">
                  <div className="px-4 py-2 rounded-lg bg-primary/10">
                    <span className="text-xs text-muted-foreground">Сезон</span>
                    <p className="text-sm font-medium text-foreground">{selectedPlant.season}</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-primary/10">
                    <span className="text-xs text-muted-foreground">Место</span>
                    <p className="text-sm font-medium text-foreground">{selectedPlant.location}</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  {selectedPlant.fullDescription}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
