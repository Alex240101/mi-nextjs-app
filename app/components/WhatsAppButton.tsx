"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none"
        onClick={() =>
          window.open(
            "https://wa.me/51934498803?text=Hola, me interesa conocer más sobre sus productos artesanales de arcilla",
            "_blank",
          )
        }
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Chatea con nosotros!
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )
}
