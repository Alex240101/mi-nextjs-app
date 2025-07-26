import Header from "../components/Header"
import Nosotros from "../components/Nosotros"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Nosotros />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
