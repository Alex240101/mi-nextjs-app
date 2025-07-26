"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, Download, Heart } from "lucide-react"
import Image from "next/image"

export default function Galeria() {
  const [filtroActivo, setFiltroActivo] = useState("todos")

  const categorias = [
    { id: "todos", nombre: "Todos los Productos" },
    { id: "tejas", nombre: "Tejas Artesanales" },
    { id: "pastelones", nombre: "Pastelones" },
    { id: "pisos", nombre: "Pisos de Arcilla" },
    { id: "enchapes", nombre: "Enchapes Decorativos" },
  ]

  const proyectos = [
    {
      id: 1,
      titulo: "Casa Colonial Cusco",
      categoria: "tejas",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Restauración completa con tejas artesanales premium",
      ubicacion: "Cusco, Perú",
    },
    {
      id: 2,
      titulo: "Patio Rústico Lima",
      categoria: "pastelones",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Patio exterior con pastelones antideslizantes",
      ubicacion: "Lima, Perú",
    },
    {
      id: 3,
      titulo: "Restaurante Gourmet",
      categoria: "pisos",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Pisos artesanales para ambiente acogedor",
      ubicacion: "Arequipa, Perú",
    },
    {
      id: 4,
      titulo: "Hotel Boutique",
      categoria: "enchapes",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Enchapes decorativos en recepción principal",
      ubicacion: "Trujillo, Perú",
    },
    {
      id: 5,
      titulo: "Residencia Moderna",
      categoria: "tejas",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Combinación perfecta: modernidad y tradición",
      ubicacion: "Piura, Perú",
    },
    {
      id: 6,
      titulo: "Centro Comercial",
      categoria: "pisos",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Pisos de alto tránsito con diseño único",
      ubicacion: "Chiclayo, Perú",
    },
    {
      id: 7,
      titulo: "Spa de Lujo",
      categoria: "enchapes",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Enchapes relajantes para ambiente zen",
      ubicacion: "Ica, Perú",
    },
    {
      id: 8,
      titulo: "Hacienda Tradicional",
      categoria: "pastelones",
      imagen: "/placeholder.svg?height=400&width=600",
      descripcion: "Pastelones para corredores y patios amplios",
      ubicacion: "Cajamarca, Perú",
    },
  ]

  const proyectosFiltrados =
    filtroActivo === "todos" ? proyectos : proyectos.filter((proyecto) => proyecto.categoria === filtroActivo)

  return (
    <section id="galeria" className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 mb-6 px-4 py-2">
            Galería de Proyectos
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Trabajos Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explora una selección de nuestros proyectos más emblemáticos. Cada obra refleja nuestro compromiso con la
            excelencia y la belleza artesanal que caracteriza nuestros productos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categorias.map((categoria) => (
            <Button
              key={categoria.id}
              variant={filtroActivo === categoria.id ? "default" : "outline"}
              className={`${
                filtroActivo === categoria.id
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white"
                  : "border-amber-600 text-amber-600 hover:bg-amber-50"
              } transition-all duration-300`}
              onClick={() => setFiltroActivo(categoria.id)}
            >
              {categoria.nombre}
            </Button>
          ))}
        </div>

        {/* Galería Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <Card
              key={proyecto.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.titulo}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{proyecto.titulo}</h3>
                    <p className="text-sm opacity-90 mb-2">{proyecto.descripcion}</p>
                    <p className="text-xs opacity-75">{proyecto.ubicacion}</p>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Categoría Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 capitalize">
                    {proyecto.categoria}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">¿Te inspiraste con algún proyecto?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Nuestro equipo está listo para hacer realidad tu visión. Cada proyecto es único y merece atención
              personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() =>
                  window.open(
                    "https://wa.me/51934498803?text=Hola, me inspiré en uno de sus proyectos de la galería. Me gustaría solicitar una cotización similar.",
                    "_blank",
                  )
                }
              >
                Solicitar Proyecto Similar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/51934498803?text=Hola, me gustaría agendar una visita para ver más proyectos y productos.",
                    "_blank",
                  )
                }
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
