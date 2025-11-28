"use client"

import { useState } from "react"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"

export default function HomePage() {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex flex-col items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="w-full max-w-md relative z-10">
        {!showSignup ? (
          <>
            <LoginForm />
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button onClick={() => setShowSignup(true)} className="text-primary hover:underline font-semibold">
                  Create one
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <SignupForm />
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <button onClick={() => setShowSignup(false)} className="text-primary hover:underline font-semibold">
                  Sign in
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
