"use client"

import { useAuth } from "@/lib/auth-context"
import { Navbar } from "@/components/navbar"
import { SymptomCheckerPanel } from "@/components/patient/symptom-checker-panel"
import { HealthOverview } from "@/components/patient/health-overview"
import { AppointmentsSection } from "@/components/patient/appointments-section"
import { MedicalRecordsSection } from "@/components/patient/medical-records-section"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function PatientDashboard() {
  const { user, role } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || role !== "patient") {
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Your personal health dashboard</p>
          </div>

          {/* Health Overview */}
          <div className="mb-8">
            <HealthOverview />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Symptom Checker (spans 2 on large) */}
            <div className="lg:col-span-2 space-y-8">
              <SymptomCheckerPanel />
              <AppointmentsSection />
            </div>

            {/* Right Column - Medical Records */}
            <div>
              <MedicalRecordsSection />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
