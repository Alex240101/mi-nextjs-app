import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hammer, Palette, Shield, Clock, Award, Leaf, Users, MapPin } from "lucide-react"

export default function Ventajas() {
  const ventajas = [
    {
      icono: <Hammer className="h-10 w-10 text-white" />,
      titulo: "Artesanía Tradicional",
      descripcion:
        "Cada pieza es elaborada a mano por maestros artesanos con más de 25 años de experiencia, utilizando técnicas ancestrales peruanas transmitidas de generación en generación.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icono: <Palette className="h-10 w-10 text-white" />,
      titulo: "Diseños Únicos",
      descripcion:
        "Texturas, colores y acabados naturales que aportan calidez y personalidad auténtica a tus espacios, inspirados en la rica cultura artesanal del Perú.",
      color: "from-orange-500 to-red-500",
    },
    {
      icono: <Shield className="h-10 w-10 text-white" />,
      titulo: "Máxima Durabilidad",
      descripcion:
        "Materiales de primera calidad cocidos a altas temperaturas que garantizan resistencia excepcional a condiciones climáticas extremas y el paso del tiempo.",
      color: "from-red-500 to-pink-500",
    },
    {
      icono: <Clock className="h-10 w-10 text-white" />,
      titulo: "Entrega Garantizada",
      descripcion:
        "Cumplimos con los plazos acordados gracias a nuestro sistema de producción organizado y nuestra red de distribución a nivel nacional.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icono: <Award className="h-10 w-10 text-white" />,
      titulo: "Calidad Certificada",
      descripcion:
        "Todos nuestros productos pasan por rigurosos controles de calidad y cuentan con garantía extendida que respalda la excelencia de nuestro trabajo.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icono: <Leaf className="h-10 w-10 text-white" />,
      titulo: "Eco-Amigable",
      descripcion:
        "Utilizamos arcilla natural local y procesos de producción sostenibles que respetan el medio ambiente y apoyan a las comunidades locales.",
      color: "from-green-500 to-teal-500",
    },
    {
      icono: <Users className="h-10 w-10 text-white" />,
      titulo: "Atención Personalizada",
      descripcion:
        "Nuestro equipo de expertos te acompaña desde la consulta inicial hasta la instalación final, brindando asesoramiento profesional en cada etapa.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icono: <MapPin className="h-10 w-10 text-white" />,
      titulo: "Cobertura Nacional",
      descripcion:
        "Realizamos entregas en todo el Perú con embalaje especializado que garantiza que tus productos lleguen en perfectas condiciones.",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 mb-6 px-4 py-2">
            Nuestras Ventajas Competitivas
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              nuestras artesanías?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La combinación perfecta entre tradición milenaria, innovación moderna y compromiso con la excelencia.
            Descubre por qué somos la primera opción para proyectos que buscan calidad y distinción.
          </p>
        </div>

        {/* Ventajas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${ventaja.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {ventaja.icono}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {ventaja.titulo}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{ventaja.descripcion}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">25+</div>
              <div className="text-amber-100 font-medium">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">800+</div>
              <div className="text-amber-100 font-medium">Clientes Satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1,500+</div>
              <div className="text-amber-100 font-medium">Proyectos Completados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">99%</div>
              <div className="text-amber-100 font-medium">Satisfacción Garantizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
