import Navbar from "@/components/navbar"
import ExcursionDetail from "@/components/excursion-detail"

export default function ExcursionDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ExcursionDetail id={params.id} />
      </div>
    </main>
  )
}
