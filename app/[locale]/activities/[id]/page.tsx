import Navbar from "@/components/navbar"
import ActivityDetail from "@/components/activity-detail"

export default function ActivityDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ActivityDetail id={params.id} />
      </div>
    </main>
  )
}
