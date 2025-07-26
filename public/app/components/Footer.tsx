"use client"

import { Button } from "@/components/ui/button"
import { Hammer, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const productos = [
    { nombre: "Tejas Artesanales", href: "#productos" },
    { nombre: "Pastelones Rústicos", href: "#productos" },
    { nombre: "Pisos de Arcilla", href: "#productos" },
    { nombre: "Enchapes Decorativos", href: "#productos" },
    { nombre: "Productos Personalizados", href: "#productos" },
  ]

  const empresa = [
    { nombre: "Sobre Nosotros", href: "#nosotros" },
    { nombre: "Nuestra Historia", href: "#nosotros" },
    { nombre: "Galería de Proyectos", href: "#galeria" },
    { nombre: "Testimonios", href: "#testimonios" },
    { nombre: "Blog Artesanal", href: "#" },
  ]

  const servicios = [
    { nombre: "Cotización Gratuita", href: "#contacto" },
    { nombre: "Asesoría Técnica", href: "#contacto" },
    { nombre: "Instalación Profesional", href: "#contacto" },
    { nombre: "Mantenimiento", href: "#contacto" },
    { nombre: "Garantía Extendida", href: "#contacto" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Hammer className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Artesanías Peruanas
                </h3>
                <p className="text-gray-400 font-medium">Tradición • Calidad • Excelencia</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Más de 25 años creando belleza artesanal con arcilla. Especializados en tejas, pastelones, pisos y
              enchapes que transforman espacios con la calidez y autenticidad del arte peruano tradicional.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+51 934 498 803</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>info@artesaniasperu.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>Av. Los Artesanos 456, Lima, Perú</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white bg-transparent"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white bg-transparent"
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-amber-600 hover:border-amber-600 hover:text-white bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Productos</h4>
            <ul className="space-y-3">
              {productos.map((producto, index) => (
                <li key={index}>
                  <Link
                    href={producto.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {producto.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Empresa</h4>
            <ul className="space-y-3">
              {empresa.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                    {item.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-400">Servicios</h4>
            <ul className="space-y-3">
              {servicios.map((servicio, index) => (
                <li key={index}>
                  <Link
                    href={servicio.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {servicio.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Mantente Informado</h4>
              <p className="text-gray-400">Recibe noticias sobre nuevos productos y ofertas especiales</p>
            </div>
            <Button
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8"
              onClick={() =>
                window.open(
                  "https://wa.me/51934498803?text=Hola, me gustaría suscribirme para recibir información sobre nuevos productos y ofertas",
                  "_blank",
                )
              }
            >
              Suscribirse por WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Artesanías Peruanas. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
