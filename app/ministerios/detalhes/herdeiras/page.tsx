'use client'
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import herdeiras from '@/app/assets/Herdeiras.jpg';


export default function Herdeiras(){
    return(
        <>
      <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-start">
            {/* Texto */}
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900">Ministério de Mulheres</h2>
              <div className="text-base leading-relaxed text-gray-800 space-y-6">
                <p>
                   Talvez nunca tenha havido um momento na história em que o Ministério com Mulheres fosse tão crucial. Não estamos nos
                                referindo a um ministério que exista isoladamente ou que busque apenas preencher uma lacuna na estrutura da igreja, mas
                                sim a um ministério destinado a atender às necessidades pessoais das mulheres. O Ministério de Mulheres na igreja deve
                                esforçar-se para preencher essa lacuna, guiando as mulheres nos caminhos da vontade de Deus. Quando mencionamos o
                                Ministério de Mulheres, não estamos nos referindo apenas a programas, mas sim a um esforço abrangente para
                                verdadeiramente impactar a vida da mulher.
                </p>
                <p>
                  <span className="font-medium">Liderança:</span> Prª Cristiane Lobo
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
                  src={herdeiras}
                  alt="Herdeiras"
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