import Header from "../components/Header"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Contacto />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
