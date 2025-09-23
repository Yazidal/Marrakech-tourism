import Navbar from "@/components/navbar"
import ActivitiesCatalog from "@/components/activities-catalog"

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ActivitiesCatalog />
      </div>
    </main>
  )
}
