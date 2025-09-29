import Navbar from "@/components/navbar"
import ExcursionsCatalog from "@/components/excursions-catalog"

export default function ExcursionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ExcursionsCatalog />
      </div>
    </main>
  )
}
