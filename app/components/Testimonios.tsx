import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: "María Elena Vásquez",
      cargo: "Arquitecta",
      empresa: "Estudio Vásquez & Asociados",
      ubicacion: "Lima, Perú",
      testimonio:
        "Trabajar con Artesanías Peruanas ha sido excepcional. La calidad de sus tejas artesanales superó nuestras expectativas. El proyecto de restauración del Hotel Machu Picchu quedó espectacular gracias a su profesionalismo y productos únicos.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      proyecto: "Hotel Machu Picchu - Cusco",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      cargo: "Constructor",
      empresa: "Constructora Andes",
      ubicacion: "Arequipa, Perú",
      testimonio:
        "Los pastelones que adquirimos tienen una durabilidad increíble. Después de 3 años en un proyecto comercial de alto tránsito, siguen como nuevos. La inversión valió completamente la pena. Recomiendo sus productos al 100%.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      proyecto: "Centro Comercial Real Plaza",
    },
    {
      id: 3,
      nombre: "Ana Lucía Torres",
      cargo: "Diseñadora de Interiores",
      empresa: "Torres Design Studio",
      ubicacion: "Trujillo, Perú",
      testimonio:
        "Los enchapes decorativos transformaron completamente el spa. Cada pieza es una obra de arte que aporta calidez y elegancia al ambiente. Mis clientes quedaron fascinados con el resultado final. Definitivamente volveré a trabajar con ellos.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      proyecto: "Spa Wellness Trujillo",
    },
    {
      id: 4,
      nombre: "Roberto Chávez",
      cargo: "Propietario",
      empresa: "Restaurante Tradición",
      ubicacion: "Cusco, Perú",
      testimonio:
        "Los pisos de arcilla le dieron a mi restaurante esa autenticidad que buscaba. Los comensales siempre elogian el ambiente cálido y acogedor. La atención al cliente fue excelente desde la cotización hasta la instalación.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      proyecto: "Restaurante Tradición Cusqueña",
    },
    {
      id: 5,
      nombre: "Patricia Morales",
      cargo: "Propietaria",
      empresa: "Residencia Familiar",
      ubicacion: "Piura, Perú",
      testimonio:
        "Renovamos toda la casa con sus productos artesanales. La combinación de tejas y pisos de arcilla creó un ambiente único que refleja nuestro amor por lo tradicional peruano. El equipo fue muy profesional y cumplió todos los plazos.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      proyecto: "Residencia Familiar Piura",
    },
    {
      id: 6,
      nombre: "Ing. Miguel Quispe",
      cargo: "Jefe de Proyecto",
      empresa: "Inmobiliaria del Sur",
      ubicacion: "Tacna, Perú",
      testimonio:
        "Para nuestro proyecto de viviendas premium necesitábamos productos que combinaran tradición y calidad. Artesanías Peruanas nos proporcionó exactamente lo que buscábamos. La respuesta del mercado ha sido extraordinaria.",
      rating: 5,
      imagen: "/placeholder.svg?height=80&width=80",
      proyecto: "Condominio Las Palmeras",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 mb-6 px-4 py-2">
            Testimonios de Clientes
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. Descubre por qué arquitectos, constructores y
            propietarios confían en nosotros para sus proyectos más importantes.
          </p>
        </div>

        {/* Testimonios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonios.map((testimonio) => (
            <Card
              key={testimonio.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-10 w-10 text-amber-600 opacity-20" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonio */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonio.testimonio}"</p>

                {/* Proyecto */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-amber-800">Proyecto: {testimonio.proyecto}</p>
                </div>

                {/* Cliente Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <Image
                    src={testimonio.imagen || "/placeholder.svg"}
                    alt={testimonio.nombre}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{testimonio.nombre}</h4>
                    <p className="text-sm text-amber-600 font-medium">{testimonio.cargo}</p>
                    <p className="text-sm text-gray-500">{testimonio.empresa}</p>
                    <p className="text-xs text-gray-400">{testimonio.ubicacion}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Números que Hablan por Nosotros</h3>
            <p className="text-xl opacity-90">La confianza de nuestros clientes se refleja en estos resultados</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">4.9/5</div>
              <div className="text-amber-100 font-medium">Calificación Promedio</div>
              <div className="flex justify-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-200 text-amber-200" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-amber-100 font-medium">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">85%</div>
              <div className="text-amber-100 font-medium">Clientes Recurrentes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">92%</div>
              <div className="text-amber-100 font-medium">Recomendaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
