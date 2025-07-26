import Header from "../components/Header"
import Galeria from "../components/Galeria"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function GaleriaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Galeria />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
