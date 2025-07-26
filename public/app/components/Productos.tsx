"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, Eye, X } from "lucide-react"
import Image from "next/image"

export default function Productos() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null)

  const productos = [
    {
      id: 1,
      nombre: "Tejas Artesanales Premium",
      descripcion:
        "Tejas de arcilla cocida a alta temperatura, resistentes a condiciones climáticas extremas. Perfectas para techos coloniales y modernos.",
      descripcionCompleta:
        "Nuestras tejas artesanales premium son elaboradas con arcilla de la más alta calidad, cocidas en hornos tradicionales a temperaturas superiores a 1000°C. Cada teja pasa por un riguroso proceso de selección y control de calidad. Son ideales para proyectos residenciales y comerciales que buscan combinar tradición y durabilidad excepcional.",
      imagen: "/placeholder.svg?height=400&width=500",
      caracteristicas: ["Resistente al granizo", "Aislamiento térmico", "Diseño tradicional", "Garantía 15 años"],
      especificaciones: [
        "Dimensiones: 40cm x 25cm x 2cm",
        "Peso: 2.5 kg por unidad",
        "Absorción de agua: < 12%",
        "Resistencia a flexión: > 1000 N",
        "Colores disponibles: Terracota, Rojizo, Natural",
      ],
      rating: 4.9,
      reviews: 156,
      badge: "Más Vendido",
    },
    {
      id: 2,
      nombre: "Pastelones Rústicos",
      descripcion:
        "Baldosas de arcilla con acabado rústico, ideales para patios, jardines y espacios exteriores. Antideslizantes y duraderos.",
      descripcionCompleta:
        "Los pastelones rústicos combinan funcionalidad y belleza natural. Fabricados con técnicas ancestrales, cada pieza tiene características únicas que aportan personalidad a tus espacios. Su superficie texturizada garantiza seguridad antideslizante, mientras que su composición los hace resistentes a las heladas y cambios climáticos extremos.",
      imagen: "/placeholder.svg?height=400&width=500",
      caracteristicas: ["Antideslizante", "Resistente a heladas", "Fácil instalación", "Mantenimiento mínimo"],
      especificaciones: [
        "Dimensiones: 30cm x 30cm x 3cm",
        "Peso: 3.2 kg por unidad",
        "Coeficiente antideslizante: R11",
        "Resistencia a heladas: Clase 3",
        "Acabados: Rústico natural, Envejecido",
      ],
      rating: 4.8,
      reviews: 89,
      badge: "Premium",
    },
    {
      id: 3,
      nombre: "Pisos de Arcilla Artesanal",
      descripcion:
        "Pisos únicos con texturas naturales, perfectos para crear ambientes cálidos y acogedores en interiores y exteriores.",
      descripcionCompleta:
        "Nuestros pisos de arcilla artesanal son la elección perfecta para quienes buscan crear espacios únicos y llenos de carácter. Cada baldosa es moldeada y cocida individualmente, lo que garantiza que no existan dos piezas exactamente iguales. Su capacidad de regulación térmica natural los convierte en una opción eco-friendly y confortable.",
      imagen: "/placeholder.svg?height=400&width=500",
      caracteristicas: ["Textura única", "Colores naturales", "Regulación térmica", "Eco-friendly"],
      especificaciones: [
        "Dimensiones: 25cm x 25cm x 2.5cm",
        "Peso: 2.8 kg por unidad",
        "Conductividad térmica: 0.8 W/mK",
        "Porosidad: 15-18%",
        "Tonalidades: Ocre, Siena, Terracota",
      ],
      rating: 4.9,
      reviews: 124,
      badge: "Exclusivo",
    },
    {
      id: 4,
      nombre: "Enchapes Decorativos",
      descripcion:
        "Revestimientos artesanales para paredes con diseños únicos inspirados en la cultura peruana. Transforman cualquier espacio.",
      descripcionCompleta:
        "Los enchapes decorativos son verdaderas obras de arte funcional. Inspirados en motivos precolombinos y diseños contemporáneos, cada pieza es esculpida a mano por maestros artesanos. Son perfectos para crear muros de acento, chimeneas, o cualquier superficie que requiera un toque distintivo y elegante.",
      imagen: "/placeholder.svg?height=400&width=500",
      caracteristicas: ["Diseños únicos", "Fácil limpieza", "Resistente a humedad", "Arte funcional"],
      especificaciones: [
        "Dimensiones: 20cm x 10cm x 1.5cm",
        "Peso: 0.8 kg por unidad",
        "Absorción de agua: < 8%",
        "Resistencia química: Clase A",
        "Diseños: Geométricos, Florales, Abstractos",
      ],
      rating: 5.0,
      reviews: 67,
      badge: "Nuevo",
    },
  ]

  const abrirDetalles = (producto: any) => {
    setProductoSeleccionado(producto)
  }

  const cerrarDetalles = () => {
    setProductoSeleccionado(null)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 mb-6 px-4 py-2">
            Nuestros Productos Premium
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Artesanías de{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Primera Calidad
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Descubre nuestra colección exclusiva de productos artesanales, cada uno elaborado con técnicas ancestrales
            peruanas y los más altos estándares de calidad. Perfectos para proyectos residenciales y comerciales que
            buscan distinción y autenticidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {productos.map((producto) => (
            <Card
              key={producto.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0">
                    {producto.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-gray-700">{producto.rating}</span>
                  </div>
                </div>

                {/* Overlay with Quick Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                    onClick={() => abrirDetalles(producto)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                    onClick={() =>
                      window.open(
                        `https://wa.me/51934498803?text=Hola, me interesa el producto: ${producto.nombre}. Me gustaría recibir más información y cotización.`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Cotizar
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {producto.nombre}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(producto.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({producto.reviews} reseñas)</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed">{producto.descripcion}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {producto.caracteristicas.map((caracteristica, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span>{caracteristica}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                      onClick={() =>
                        window.open(
                          `https://wa.me/51934498803?text=Hola, quiero solicitar una cotización para: ${producto.nombre}`,
                          "_blank",
                        )
                      }
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Cotizar Ahora
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                      onClick={() => abrirDetalles(producto)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de Detalles */}
        {productoSeleccionado && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Button variant="ghost" size="sm" className="absolute top-4 right-4 z-10" onClick={cerrarDetalles}>
                  <X className="h-6 w-6" />
                </Button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <Image
                      src={productoSeleccionado.imagen || "/placeholder.svg"}
                      alt={productoSeleccionado.nombre}
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 mb-4">
                        {productoSeleccionado.badge}
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{productoSeleccionado.nombre}</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(productoSeleccionado.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-500">({productoSeleccionado.reviews} reseñas)</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h4>
                      <p className="text-gray-600 leading-relaxed">{productoSeleccionado.descripcionCompleta}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Características</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {productoSeleccionado.caracteristicas.map((caracteristica: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                            <span>{caracteristica}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Especificaciones Técnicas</h4>
                      <ul className="space-y-2">
                        {productoSeleccionado.especificaciones.map((spec: string, index: number) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                        onClick={() => {
                          window.open(
                            `https://wa.me/51934498803?text=Hola, me interesa el producto: ${productoSeleccionado.nombre}. Me gustaría recibir más información y cotización.`,
                            "_blank",
                          )
                          cerrarDetalles()
                        }}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Solicitar Cotización
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas un producto personalizado?</h3>
          <p className="text-xl mb-8 opacity-90">
            Creamos piezas únicas según tus especificaciones. Consulta por proyectos especiales y diseños exclusivos.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={() =>
              window.open(
                "https://wa.me/51934498803?text=Hola, me interesa solicitar un producto personalizado. ¿Podrían ayudarme?",
                "_blank",
              )
            }
          >
            Solicitar Producto Personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}
