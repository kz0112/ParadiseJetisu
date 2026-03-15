"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, Waves, TreePine, Satellite, Globe2, ExternalLink, Navigation, Play } from "lucide-react"

const landmarks = [
  {
    id: 1,
    name: "Джунгарский Алатау",
    description: "Горная система на границе Казахстана и Китая с вечными снегами",
    icon: Mountain,
    lat: 45.1167,
    lng: 79.5000,
    zoom: 10,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    altitude: "4622 м",
    tour3dUrl: "https://www.google.com/maps/place/%D0%94%D0%B6%D1%83%D0%BD%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%90%D0%BB%D0%B0%D1%82%D0%B0%D1%83/@45.5067025,80.7518124,3a,75y,69.23h,70.96t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICqu57-9AE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2aKVvGQqQymtS0uFSTFUcmWXn85pQhocE7clQ3GBfqTRqivGfu2uBYSu1d2j-gqoXHaxiY_IkkjvmRpyVgKxVgl837CgQgwYm7gNjTnqmeeQH1IUF7bOk_e0YTWiS1IgMsZgMyE%3Dw900-h600-k-no-pi19.03631216591046-ya250.22827712934165-ro0-fo100!7i4608!8i2304!4m14!1m7!3m6!1s0x4281b26484e7e919:0x4c076b87d836029!2z0JTQttGD0L3Qs9Cw0YDRgdC60LjQuSDQkNC70LDRgtCw0YM!8m2!3d45!4d80!16zL20vMDgyeDZy!3m5!1s0x4281b26484e7e919:0x4c076b87d836029!8m2!3d45!4d80!16zL20vMDgyeDZy?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    name: "Озеро Балхаш",
    description: "Крупнейшее озеро Казахстана — полупресное чудо природы",
    icon: Waves,
    lat: 46.5333,
    lng: 74.8833,
    zoom: 8,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    altitude: "341 м",
    tour3dUrl: "https://www.google.com/maps/place/%D0%91%D0%B0%D0%BB%D2%9B%D0%B0%D1%88/@46.8332257,74.9799792,3a,75y,213.89h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICq59CAwwE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2ZN5V_gvJidn0gy8rCyYP77nVh_Aqu8kUfLcTkeXnM_JHIjDz3qt-y9bddD0ZH1Y7genVAKW3ryPl8YrE6gao6piDOZc9pi07muzBWZicvPWUwE9VMUzrhcB7aYjzecqaB00hGJ%3Dw900-h600-k-no-pi0-ya103.88922-ro0-fo100!7i10240!8i5120!4m14!1m7!3m6!1s0x4271de668d1431c7:0xba20d4f71eaa7d91!2z0JHQsNC70pvQsNGI!8m2!3d46.2160876!4d74.3775!16zL20vMDJocDdx!3m5!1s0x4271de668d1431c7:0xba20d4f71eaa7d91!8m2!3d46.2160876!4d74.3775!16zL20vMDJocDdx?hl=ru&entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    name: "Алтын-Эмель",
    description: "Национальный парк с Поющим барханом в долине реки Или",
    icon: TreePine,
    lat: 44.1667,
    lng: 78.5833,
    zoom: 11,
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    altitude: "150 м",
    tour3dUrl: "https://www.google.com/maps/place/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BF%D0%B0%D1%80%D0%BA+%D0%90%D0%BB%D1%82%D1%8B%D0%BD-%D0%AD%D0%BC%D0%B5%D0%BB%D1%8C/@44.1269438,78.652668,3a,75y,164.5h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDEmd6wvwE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2aqHHE2ZepLeIFUro6qaFib6G_AVnLbrTF7-uHqm1zssGVYLEHqKRWLf9xythgx2fl6OGxyQecWD9M1bChOZRFSvAA0P4XONkl9EDUdqDUyk9uqma-T0pJd618O9KgsbPCdOY0AwA%3Dw900-h600-k-no-pi0-ya164.50075-ro0-fo100!7i9242!8i4341!4m14!1m7!3m6!1s0x3881b5526ab1a30d:0x4a34a43da72b74a2!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INC_0LDRgNC6INCQ0LvRgtGL0L0t0K3QvNC10LvRjA!8m2!3d44.0033008!4d78.8382644!16s%2Fm%2F03h5rcr!3m5!1s0x3881b5526ab1a30d:0x4a34a43da72b74a2!8m2!3d44.0033008!4d78.8382644!16s%2Fm%2F03h5rcr?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    name: "Кольсайские озёра",
    description: "Каскад изумрудных высокогорных озёр Северного Тянь-Шаня",
    icon: Waves,
    lat: 42.8333,
    lng: 78.3167,
    zoom: 12,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    altitude: "2850 м",
    tour3dUrl: "https://www.google.com/maps/place/%D0%9A%D0%BE%D0%BB%D1%8C%D1%81%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B5+%D0%BE%D0%B7%D1%91%D1%80%D0%B0/@42.935386,78.3259016,3a,75y,194.86h,73.29t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICUiuyLHQ!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2bnnBKnx9OU4PR57mvSd6VKcFdmzEP_kj8Lr81QKJBzz7ijCa_kowbVCPyXahi164h2-G9bLRnsvweKcA7XdnYnxUVpH_r3ss_ivrxK4DkJI9nM4AElgv-3RnzJu0ahlUPvqTeC%3Dw900-h600-k-no-pi16.710007001161713-ya194.8587669279858-ro0-fo100!7i4096!8i2048!4m10!1m2!2m1!1z0JrQvtC70YzRgdCw0LnRgdC60LjQtSDQvtC30ZHRgNCw!3m6!1s0x3886c0e5604528f3:0x4fb0bf36fe7869bb!8m2!3d42.935386!4d78.3259016!15sCiHQmtC-0LvRjNGB0LDQudGB0LrQuNC1INC-0LfRkdGA0LBaIyIh0LrQvtC70YzRgdCw0LnRgdC60LjQtSDQvtC30ZHRgNCwkgEEbGFrZeABAA!16s%2Fg%2F1pxy2mv1m?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  },
]

export function SatelliteSection() {
  const [selectedLandmark, setSelectedLandmark] = useState<typeof landmarks[0]>(landmarks[0])
  const [viewMode, setViewMode] = useState<"satellite" | "terrain">("satellite")

  const getGoogleMapsEmbedUrl = (lat: number, lng: number, zoom: number, mode: "satellite" | "terrain") => {
    // Using Google Maps embed with satellite/terrain view
    const mapType = mode === "satellite" ? "k" : "p" // k = satellite, p = terrain
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${100000 / zoom}!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2skz!4v1710000000000!5m2!1sru!2skz`
  }

  const getGoogleEarthUrl = (lat: number, lng: number) => {
    return `https://earth.google.com/web/@${lat},${lng},1000a,5000d,35y,0h,45t,0r`
  }

  return (
    <section id="satellite" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0d1f3c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
            <Satellite className="w-4 h-4" />
            <span className="text-sm font-medium">Вид из космоса</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 text-balance">
            Спутниковый обзор Жетысу
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            Исследуйте уникальные природные объекты региона со спутника Google Maps
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Map View */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border-0 bg-slate-800/50 backdrop-blur-sm relative">
              {/* Controls */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <Button
                  size="sm"
                  variant={viewMode === "satellite" ? "default" : "outline"}
                  onClick={() => setViewMode("satellite")}
                  className="gap-2 bg-slate-900/80 border-slate-700 text-black hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <Satellite className="w-4 h-4" />
                  Спутник
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === "terrain" ? "default" : "outline"}
                  onClick={() => setViewMode("terrain")}
                  className="gap-2 bg-slate-900/80 border-slate-700 text-black hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <Globe2 className="w-4 h-4" />
                  Рельеф
                </Button>
              </div>

              {/* External links */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 bg-slate-900/80 border-slate-700 text-black hover:text-white hover:bg-slate-800 transition-colors"
                  asChild
                >
                  <a
                    href={selectedLandmark.tour3dUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4" />
                    3D вид
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 bg-slate-900/80 border-slate-700 text-black hover:text-white hover:bg-slate-800 transition-colors"
                  asChild
                >
                  <a
                    href={getGoogleEarthUrl(selectedLandmark.lat, selectedLandmark.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe2 className="w-4 h-4" />
                    Google Earth
                  </a>
                </Button>
              </div>

              {/* Google Maps Embed */}
              <div className="relative w-full h-[500px] md:h-[600px]">
                <iframe
                  key={`${selectedLandmark.id}-${viewMode}`}
                  src={getGoogleMapsEmbedUrl(selectedLandmark.lat, selectedLandmark.lng, selectedLandmark.zoom, viewMode)}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Selected landmark info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent p-6 pt-16">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                      <selectedLandmark.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-serif text-2xl mb-1">{selectedLandmark.name}</h3>
                      <p className="text-slate-400">{selectedLandmark.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm">
                        <span className="text-slate-500">
                          <span className="text-white font-medium">{selectedLandmark.lat.toFixed(4)}°N</span>, {selectedLandmark.lng.toFixed(4)}°E
                        </span>
                        <span className="text-slate-500">
                          Высота: <span className="text-white font-medium">{selectedLandmark.altitude}</span>
                        </span>
                      </div>
                    </div>
                    <Button
                      className="shrink-0 gap-2"
                      asChild
                    >
                      <a
                        href={selectedLandmark.tour3dUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-4 h-4" />
                        Открыть 3D тур
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Landmarks list */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Mountain className="w-5 h-5 text-primary" />
              Природные объекты
            </h3>
            {landmarks.map((landmark) => {
              const Icon = landmark.icon
              const isSelected = selectedLandmark.id === landmark.id
              return (
                <button
                  key={landmark.id}
                  className={`w-full text-left rounded-xl overflow-hidden transition-all duration-300 ${isSelected
                    ? "ring-2 ring-primary shadow-lg shadow-primary/20"
                    : "hover:ring-1 hover:ring-slate-600"
                    }`}
                  onClick={() => setSelectedLandmark(landmark)}
                >
                  <div className={`p-4 ${isSelected ? "bg-primary/20" : "bg-slate-800/50"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-primary" : "bg-slate-700"}`}>
                        <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-slate-300"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium truncate ${isSelected ? "text-white" : "text-slate-200"}`}>
                          {landmark.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          {landmark.lat.toFixed(2)}°N, {landmark.lng.toFixed(2)}°E
                        </div>
                      </div>
                    </div>
                    {isSelected && (
                      <p className="text-sm text-slate-400 mt-3 line-clamp-2">
                        {landmark.description}
                      </p>
                    )}
                  </div>
                </button>
              )
            })}

            <div className="pt-4 border-t border-slate-700">
              <p className="text-slate-500 text-sm leading-relaxed">
                Выберите объект из списка, чтобы увидеть его спутниковый снимок. Нажмите «3D тур» для просмотра в Google Maps.
              </p>
            </div>

            {/* Quick action */}
            <Button variant="outline" className="w-full gap-2 border-slate-700 text-slate-300 hover:text-white" asChild>
              <a
                href={`https://www.google.com/maps/@44.5,77.5,400000m/data=!3m1!1e3`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Весь регион в Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
