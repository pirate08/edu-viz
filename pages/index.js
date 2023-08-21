import Header from "@/components/Header"
import HomePage from "@/components/partials/HomePage"
import Navbar from "@/components/responsiveness/Navbar"
import React from "react"

export default function Home() {
  return (
    <div>
      <div>
          {/* --import header/navbar-- */}
            <div className="hidden sm:block"><Header /></div>
          {/* --import responsive navbar-- */}
            <div className="sm:hidden"><Navbar /></div>
      </div>
      <HomePage />
    </div>
  )
}
