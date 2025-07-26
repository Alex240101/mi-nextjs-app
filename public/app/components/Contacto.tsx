"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Calendar } from "lucide-react"

export default function Contacto() {
  const contactInfo = [
    {
      icono: <Phone className="h-8 w-8 text-white" />,
      titulo: "Teléfono / WhatsApp",
      descripcion: "Llámanos o escríbenos por WhatsApp",
      valor: "+51 934 498 803",
      accion: () =>
        window.open(
          "https://wa.me/51934498803?text=Hola, me interesa solicitar información sobre sus productos artesanales",
          "_blank",
        ),
      color: "from-green-500 to-green-600",
    },
    {
      icono: <Mail className="h-8 w-8 text-white" />,
      titulo: "Correo Electrónico",
      descripcion: "Envíanos tu consulta detallada",
      valor: "info@artesaniasperu.com",
      accion: () =>
        window.open("mailto:info@artesaniasperu.com?subject=Consulta sobre productos artesanales", "_blank"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icono: <MapPin className="h-8 w-8 text-white" />,
      titulo: "Ubicación del Taller",
      descripcion: "Visita nuestras instalaciones",
      valor: "Av. Los Artesanos 456, Lima, Perú",
      accion: () => window.open("https://maps.google.com/?q=Av.+Los+Artesanos+456+Lima+Peru", "_blank"),
      color: "from-red-500 to-red-600",
    },
    {
      icono: <Clock className="h-8 w-8 text-white" />,
      titulo: "Horarios de Atención",
      descripcion: "Lunes a Sábado",
      valor: "8:00 AM - 6:00 PM",
      accion: () =>
        window.open(
          "https://wa.me/51934498803?text=Hola, me gustaría agendar una cita para visitar su taller",
          "_blank",
        ),
      color: "from-amber-500 to-orange-500",
    },
  ]

  const servicios = [
    {
      titulo: "Cotización Gratuita",
      descripcion: "Evaluamos tu proyecto sin costo",
      icono: <MessageCircle className="h-6 w-6" />,
    },
    {
      titulo: "Asesoría Técnica",
      descripcion: "Te guiamos en la mejor elección",
      icono: <Send className="h-6 w-6" />,
    },
    {
      titulo: "Visita al Taller",
      descripcion: "Conoce nuestro proceso artesanal",
      icono: <Calendar className="h-6 w-6" />,
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 mb-6 px-4 py-2">
            Contáctanos
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Listo para tu{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              próximo proyecto?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestro equipo de expertos está preparado para hacer realidad tu visión. Desde la consulta inicial hasta la
            entrega final, te acompañamos en cada paso del proceso.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden cursor-pointer"
              onClick={info.accion}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {info.icono}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {info.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm">{info.descripcion}</p>
                  <p className="text-lg font-semibold text-amber-600">{info.valor}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Servicios Incluidos</h3>
            <p className="text-lg text-gray-600">Todo lo que necesitas para tu proyecto en un solo lugar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                  <div className="text-amber-600">{servicio.icono}</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{servicio.titulo}</h4>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">¡Comencemos tu Proyecto Hoy!</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            No esperes más para transformar tus espacios con la belleza y calidad de nuestras artesanías. Contáctanos
            ahora y recibe una cotización personalizada completamente gratuita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/51934498803?text=Hola, quiero solicitar una cotización gratuita para mi proyecto. ¿Podrían ayudarme?",
                  "_blank",
                )
              }
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Cotización por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={() => window.open("tel:+51934498803", "_blank")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Llamar Ahora
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-amber-100 text-sm">
              📞 Respuesta inmediata por WhatsApp • 🚚 Entregas a todo el Perú • ✅ Garantía de calidad
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
