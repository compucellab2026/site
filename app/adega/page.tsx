import Link from "next/link"
import Image from "next/image"

const vinhos = [
  {
    id: 1,
    nome: "Vinho Tinto Árabe Premium",
    descricao:
      "Sabor encorpado e marcante, produzido com uvas selecionadas das melhores vinícolas do Oriente Médio. Ideal para acompanhar pratos especiais.",
    preco: "R$ 120,00",
    imagem: "/premium-arabic-red-wine-bottle-with-elegant-label.png",
  },
  {
    id: 2,
    nome: "Vinho Branco Premium",
    descricao:
      "Fresco e sofisticado, com notas cítricas e florais. Perfeito para ocasiões especiais e harmonização com frutos do mar.",
    preco: "R$ 150,00",
    imagem: "/premium-white-wine-bottle-with-sophisticated-desig.png",
  },
  {
    id: 3,
    nome: "Vinho Rosé Especial",
    descricao: "Delicado e aromático, com cor rosada característica. Uma experiência única para paladares refinados.",
    preco: "R$ 135,00",
    imagem: "/elegant-rose-wine-bottle-with-pink-tones.png",
  },
  {
    id: 4,
    nome: "Vinho Tinto Reserva",
    descricao: "Envelhecido em barris de carvalho, oferece complexidade e profundidade de sabores únicos.",
    preco: "R$ 180,00",
    imagem: "/reserve-red-wine-bottle-with-premium-oak-barrel-ag.png",
  },
]

export default function Adega() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#006400] to-[#228B22] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg bg-white/10 flex items-center justify-center">
                <Image
                  src="/elegant-perfume-logo-with-arabic-elements.png"
                  alt="Logotipo"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">🍷 Adega Premium</h1>
                <p className="text-sm opacity-90">Vinhos selecionados para ocasiões especiais</p>
              </div>
            </Link>
            <Link
              href="/"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-300"
            >
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {vinhos.map((vinho) => (
            <div
              key={vinho.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <Image
                    src={vinho.imagem || "/placeholder.svg"}
                    alt={vinho.nome}
                    width={400}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-[#006400] mb-4">{vinho.nome}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{vinho.descricao}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="text-3xl font-bold text-gray-800">{vinho.preco}</span>
                    <button className="bg-gradient-to-r from-[#006400] to-[#228B22] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                      Consultar Disponibilidade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 - Vitrine de Perfumes Árabes | Desenvolvido com elegância</p>
        </div>
      </footer>
    </div>
  )
}
