"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

const animals = [
  {
    id: 1,
    name: "Снежный барс",
    latinName: "Panthera uncia",
    description: "Символ гор Казахстана. Редкий хищник, обитающий на высотах 1500-5000 м.",
    fullDescription: "Снежный барс — один из самых загадочных и редких хищников планеты. В Казахстане обитает около 150-200 особей. Предпочитает скалистые горные районы Джунгарского Алатау и Тянь-Шаня.",
    image: "https://zoogalaktika.ru/assets/images/easy/pictures/irbis_01.jpg",
    status: "Уязвимый вид",
    habitat: "Высокогорье",
    facts: ["Прыжок до 15 м", "Вес: 25-55 кг", "Хвост: 80-100 см"],
  },
  {
    id: 2,
    name: "Архар",
    latinName: "Ovis ammon",
    description: "Крупнейший горный баран мира с впечатляющими закрученными рогами.",
    fullDescription: "Архар, или горный баран, — символ казахстанской природы. Рога самцов могут весить до 35 кг! Обитает в горных районах Жетысу, где пасётся на альпийских лугах.",
    image: "https://inaturalist-open-data.s3.amazonaws.com/photos/771559/large.jpg",
    status: "Близок к уязвимому",
    habitat: "Горные степи",
    facts: ["Рога до 190 см", "Вес до 200 кг", "Живут стадами"],
  },
  {
    id: 3,
    name: "Беркут",
    latinName: "Aquila chrysaetos",
    description: "Могучий орёл — символ казахской культуры и традиции беркутчи.",
    fullDescription: "Беркут — крупнейший орёл Евразии. В Казахстане существует многовековая традиция охоты с беркутами — беркутчи. Размах крыльев достигает 2,3 м. Охотится на зайцев, лисиц и даже волков.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Maakotka_%28Aquila_chrysaetos%29_by_Jarkko_J%C3%A4rvinen_%28crop%29.jpg",
    status: "Вызывает наименьшие опасения",
    habitat: "Горы и степи",
    facts: ["Размах крыльев: 2,3 м", "Скорость: 320 км/ч", "Зрение в 8 раз острее"],
  },
  {
    id: 4,
    name: "Корсак",
    latinName: "Vulpes corsac",
    description: "Степная лисица, приспособленная к суровым условиям полупустынь.",
    fullDescription: "Корсак — небольшая степная лисица с густым мехом. Отлично приспособлена к жизни в полупустынях Жетысу. Ведёт ночной образ жизни, питается грызунами и насекомыми.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Swiftfox_Blaine_County_%2830265776555%29.jpg",
    status: "Вызывает наименьшие опасения",
    habitat: "Степи и полупустыни",
    facts: ["Вес: 2-6 кг", "Длина: 50-60 см", "Живёт в норах"],
  },
  {
    id: 5,
    name: "Степной волк",
    latinName: "Canis lupus campestris",
    description: "Подвид серого волка, адаптированный к степным условиям Казахстана.",
    fullDescription: "Степной волк меньше и светлее лесного сородича. Обитает в степях и полупустынях Жетысу. Охотится стаями на сайгаков, архаров и домашний скот. Играет важную роль в экосистеме.",
    image: "https://img.freepik.com/free-photo/wild-wolf-nature_23-2151430236.jpg?semt=ais_hybrid&w=740&q=80",
    status: "Вызывает наименьшие опасения",
    habitat: "Степи",
    facts: ["Стая: 5-12 особей", "Скорость: 55 км/ч", "Территория: до 1000 км²"],
  },
]

export function AnimalsSection() {
  const [selectedAnimal, setSelectedAnimal] = useState<typeof animals[0] | null>(null)

  return (
    <section id="animals" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm tracking-wider uppercase mb-4">
            Фауна региона
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
            Животные Жетысу
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Уникальный животный мир — от величественных снежных барсов до степных хищников
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal, index) => (
            <Card
              key={animal.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
              onClick={() => setSelectedAnimal(animal)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge
                  className="absolute top-4 right-4 bg-white/90 text-foreground hover:bg-white"
                >
                  {animal.habitat}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-serif text-xl text-foreground font-bold mb-1">
                  {animal.name}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-3">
                  {animal.latinName}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {animal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedAnimal} onOpenChange={() => setSelectedAnimal(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedAnimal && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl flex items-center gap-3">
                  {selectedAnimal.name}
                  <Badge variant="outline">{selectedAnimal.status}</Badge>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground italic">
                  {selectedAnimal.latinName}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedAnimal.image}
                  alt={selectedAnimal.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-foreground leading-relaxed mb-6">
                  {selectedAnimal.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedAnimal.facts.map((fact, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium"
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
