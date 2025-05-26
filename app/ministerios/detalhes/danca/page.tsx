'use client'
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import danca from '@/app/assets/Danca.jpg';
import Image from "next/image";

export default function Danca(){
    return(
        <>
      <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-start">
            {/* Texto */}
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900">Ministério de Dança</h2>
              <div className="text-base leading-relaxed text-gray-800 space-y-6">
                <p>
                   O Ministério de Dança da Immec Church tem a missão de formar adoradores, com o propósito de servir ao corpo de Cristo e
                            tocar vidas através da adoração genuína.
                            
                            Somos chamados para avivar corações por meio da proclamação da palavra de Deus através dos movimentos e da arte.
                            
                            A dança é um poderoso instrumento para a pregação do evangelho de forma criativa, afinal, se o nosso Deus é criativo,
                            nós, em parceria com Ele, também o somos.

                </p>
                <p>
                  <span className="font-medium">Liderança:</span> Lider Larissa e Maria Eduarda
                </p>
              </div>

              <Button
                className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-900 transition duration-300"
                asChild
              >
                <a href="/#ministerios">Retornar</a>
              </Button>
            </div>

            {/* Imagem */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={danca}
                  alt="Oceans"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
        </>
    );
}