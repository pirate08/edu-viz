import React from "react"
import Header from "@/components/Header"
import HomePage from "@/components/partials/HomePage"
import Navbar from "@/components/responsiveness/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <div>
          {/* --import header/navbar-- */}
            <div className="hidden sm:block"><Header /></div>
          {/* --import responsive navbar-- */}
            <div className="sm:hidden"><Navbar /></div>
      </div>
      {/* --Home Page */}
      <div>
        <HomePage />
      </div>
      {/* --Footer-- */}
      <div>
        <Footer />
      </div>
    </div>
  )
}
