"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/productos", label: "Productos" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-amber-100/20">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+51 934 498 803</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>info@artesaniasperu.com</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">🇵🇪 Artesanías Peruanas de Calidad Premium</div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Artesanías Peruanas
              </h1>
              <p className="text-sm text-gray-600 font-medium">Tradición • Calidad • Excelencia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              className="hidden lg:flex bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
              onClick={() =>
                window.open("https://wa.me/51934498803?text=Hola, me interesa solicitar una cotización", "_blank")
              }
            >
              <Phone className="h-4 w-4 mr-2" />
              Cotizar Ahora
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
            <nav className="py-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                  onClick={() => {
                    window.open("https://wa.me/51934498803?text=Hola, me interesa solicitar una cotización", "_blank")
                    setIsMenuOpen(false)
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Cotizar Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
