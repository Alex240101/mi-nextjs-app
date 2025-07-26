"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Zap } from "lucide-react"
import Image from "next/image"

export default function Nosotros() {
  const valores = [
    {
      icono: <Heart className="h-8 w-8 text-red-600" />,
      titulo: "Pasión",
      descripcion: "Amor genuino por el arte de trabajar la arcilla y crear piezas únicas",
    },
    {
      icono: <Target className="h-8 w-8 text-amber-600" />,
      titulo: "Excelencia",
      descripcion: "Compromiso inquebrantable con la calidad en cada detalle",
    },
    {
      icono: <Users className="h-8 w-8 text-blue-600" />,
      titulo: "Tradición",
      descripcion: "Preservamos y transmitimos técnicas ancestrales peruanas",
    },
    {
      icono: <Zap className="h-8 w-8 text-green-600" />,
      titulo: "Innovación",
      descripcion: "Combinamos tradición con tecnología moderna para mejores resultados",
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 mb-6 px-4 py-2">
            Nuestra Historia
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Más de{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">25 años</span>{" "}
            creando arte
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Una tradición familiar que trasciende generaciones</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fundada en 1998 por el maestro artesano <strong>Carlos Mendoza</strong>, nuestra empresa nació del sueño
                de preservar y compartir las técnicas ancestrales de trabajo con arcilla que aprendió de su abuelo en
                los talleres tradicionales de <strong>Cusco</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lo que comenzó como un pequeño taller familiar se ha convertido en una empresa líder en artesanías de
                arcilla, reconocida a nivel nacional por la calidad excepcional de nuestros productos y nuestro
                compromiso con la tradición peruana.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoy, con más de <strong>25 años de experiencia</strong>, continuamos innovando mientras honramos
                nuestras raíces, creando piezas únicas que llevan el alma y la calidez del arte peruano a hogares y
                proyectos en todo el país.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-600 mb-2">1998</div>
                <div className="text-gray-600 font-medium">Año de Fundación</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-amber-600 mb-2">3ra</div>
                <div className="text-gray-600 font-medium">Generación Familiar</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
              onClick={() =>
                window.open(
                  "https://wa.me/51934498803?text=Hola, me gustaría conocer más sobre su historia y productos artesanales",
                  "_blank",
                )
              }
            >
              Conoce Más Sobre Nosotros
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Maestro artesano trabajando"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Taller artesanal"
                  width={250}
                  height={200}
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/placeholder.svg?height=200&width=250"
                  alt="Productos terminados"
                  width={250}
                  height={200}
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Familia de artesanos"
                  width={250}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-amber-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">Premio</div>
                <div className="text-sm text-gray-600">Excelencia Artesanal</div>
                <div className="text-xs text-gray-500 mt-1">Ministerio de Cultura 2023</div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada pieza que creamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                    {valor.icono}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{valor.titulo}</h4>
                  <p className="text-gray-600">{valor.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
