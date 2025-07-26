"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Award, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 px-4 py-2 text-sm font-semibold">
                ✨ Artesanía Peruana Auténtica
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  Creamos
                </span>
                <br />
                <span className="text-gray-900">belleza con</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  nuestras manos
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Especialistas en <strong>tejas artesanales</strong>, <strong>pastelones</strong>,
                <strong> pisos de arcilla</strong> y <strong>enchapes únicos</strong>. Cada pieza es una obra de arte
                elaborada con técnicas ancestrales peruanas.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 py-6">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-gray-600">
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
                <br />
                <span className="text-sm">+800 clientes satisfechos</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
                onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Productos Premium
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 px-8 py-4 text-lg bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/51934498803?text=Hola, me interesa solicitar una cotización para productos artesanales",
                    "_blank",
                  )
                }
              >
                Cotización Gratuita
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Award className="h-6 w-6 text-amber-600" />
                <span className="font-medium">Calidad Garantizada</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-6 w-6 text-amber-600" />
                <span className="font-medium">25 Años de Experiencia</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-6 w-6 text-amber-600" />
                <span className="font-medium">Entrega Puntual</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl transform -rotate-3 opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-2">
              <Image
                src="/placeholder.svg?height=700&width=600"
                alt="Maestro artesano peruano trabajando con arcilla"
                width={600}
                height={700}
                className="rounded-2xl object-cover w-full"
                priority
              />

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-amber-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Producción Activa</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-amber-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">25+</div>
                  <div className="text-xs text-gray-600">Años de Tradición</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
