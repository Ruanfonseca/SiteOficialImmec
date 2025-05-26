"use client"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import CultoDanca from '@/app/assets/CultoDança.jpeg';

export default function Hero() {
  return (
    <div
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden mt-0 pt-0"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      {/* Imagem de fundo com overlay escura */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={CultoDanca}
          alt="Culto em dança"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="w-full max-w-6xl px-1 sm:px-12">
        <Carousel className="w-full">
          <CarouselContent>
            {[{
              title: "Festa da Multiplicação",
              description: "Domingo foi dia de celebrar o crescimento!",
              href: "https://www.instagram.com/p/DJ4PlM4RX11/?img_index=3",
              cta: "Veja como foi"
            }, {
              title: "Qual a importância da EBD na caminhada cristã?",
              description: "O Senhor tem nos ensinado que a leitura da Sua Palavra é o caminho para ouvirmos a Sua voz com clareza.",
              href: "https://www.instagram.com/p/DI6rySjRQnc/",
              cta: "Ver"
            }, {
              title: "Andamento da Obra",
              description: "A obra do nosso novo templo segue avançando.",
              href: "https://www.instagram.com/p/DI4Cl0URhRY/",
              cta: "Acompanhe"
            }].map(({title, description, href, cta}, i) => (
              <CarouselItem key={i}>
                <div className="text-white max-w-xl drop-shadow-lg">
                  <h1 className="text-5xl font-extrabold mb-5 tracking-tight drop-shadow-md">
                    {title}
                  </h1>
                  <p className="text-lg mb-8 leading-relaxed drop-shadow-sm">{description}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border border-white bg-transparent px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    {cta}
                  </a>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Posicionei os botões no canto inferior esquerdo */}
          <div className="absolute m-12 left-6 flex gap-4">
            <CarouselPrevious className="w-12 h-12 rounded-full bg-white/90 text-black shadow-md hover:bg-white transition" />
            <CarouselNext className="w-12 h-12 rounded-full bg-white/90 text-black shadow-md hover:bg-white transition" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
