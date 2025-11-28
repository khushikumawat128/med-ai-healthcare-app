"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"

const historyTimeline = [
  {
    id: 1,
    date: "2024-11-25",
    type: "appointment",
    title: "Consultation with Dr. Smith",
    description: "Regular checkup and blood pressure monitoring",
    icon: "💬",
  },
  {
    id: 2,
    date: "2024-11-20",
    type: "symptom",
    title: "Symptom Analysis",
    description: "Chest pain and shortness of breath - Urgency: Emergency",
    icon: "🕐",
  },
  {
    id: 3,
    date: "2024-11-15",
    type: "prescription",
    title: "Prescription Issued",
    description: "Lisinopril 10mg, Metformin 500mg",
    icon: "💊",
  },
  {
    id: 4,
    date: "2024-11-10",
    type: "appointment",
    title: "Consultation with Dr. Smith",
    description: "ECG results discussion",
    icon: "💬",
  },
]

export default function HistoryPage() {
  const { user, role } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) return null

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Medical History</h1>
            <p className="text-muted-foreground">Timeline of your healthcare events</p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {/* Timeline items */}
            {historyTimeline.map((item) => (
              <div key={item.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 w-12 h-12 rounded-full bg-card border-4 border-primary/30 flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground text-lg">{item.title}</p>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${
                        item.type === "appointment"
                          ? "bg-primary/20 text-primary"
                          : item.type === "symptom"
                            ? "bg-warning/20 text-warning"
                            : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>📅</span>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
