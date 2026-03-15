import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { NatureSection } from "@/components/sections/nature-section"
import { AnimalsSection } from "@/components/sections/animals-section"
import { PlantsSection } from "@/components/sections/plants-section"
import { SatelliteSection } from "@/components/sections/satellite-section"
import { GestureCameraSection } from "@/components/sections/gesture-camera-section"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <NatureSection />
      <AnimalsSection />
      <PlantsSection />
      <SatelliteSection />
      <GestureCameraSection />
      <Footer />
    </main>
  )
}
