import { Navbar } from "@/components/layout/navbar"
import FooterSection from "@/components/layout/section/footer-section"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="px-4">
      <Navbar/>
      {children}
      <FooterSection/>
    </div>
  )
}