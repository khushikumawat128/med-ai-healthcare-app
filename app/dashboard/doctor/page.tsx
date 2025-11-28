"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { DoctorStatsCards } from "@/components/doctor/stats-cards"
import { PatientList } from "@/components/doctor/patient-list"
import { AppointmentsCalendar } from "@/components/doctor/appointments-calendar"
import { CaseModal } from "@/components/doctor/case-modal"

export default function DoctorDashboard() {
  const { user, role } = useAuth()
  const router = useRouter()
  const [isCaseModalOpen, setIsCaseModalOpen] = useState(false)

  useEffect(() => {
    if (!user || role !== "doctor") {
      router.push("/")
    }
  }, [user, role, router])

  if (!user) return null

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Dr. {user.name}</h1>
            <p className="text-muted-foreground">Manage your patients and consultations</p>
          </div>

          {/* Stats */}
          <div className="mb-8">
            <DoctorStatsCards />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PatientList />
            </div>
            <div>
              <AppointmentsCalendar />
            </div>
          </div>

          {/* Case Modal */}
          <CaseModal isOpen={isCaseModalOpen} onClose={() => setIsCaseModalOpen(false)} />
        </div>
      </main>
    </>
  )
}
