import Header from "../components/Header"
import Productos from "../components/Productos"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Productos />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
