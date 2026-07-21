import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BusinessImpact } from '@/components/sections/BusinessImpact'
import { InternalMobility } from '@/components/sections/InternalMobility'
import { TechnicalExpertise } from '@/components/sections/TechnicalExpertise'
import { SoftSkills } from '@/components/sections/SoftSkills'
import { Articles } from '@/components/sections/Articles'

const Divider = () => (
  <div className="section-max-width section-padding">
    <div className="h-px bg-[var(--border)]" />
  </div>
)

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <BusinessImpact />
      <Divider />
      <SoftSkills />
      <Divider />
      <InternalMobility />
      <Divider />
      <TechnicalExpertise />
      <Divider />
      <Articles />
      <Footer />
    </main>
  )
}
