'use client';
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import casal from "@/app/assets/casal.jpeg"; 
import Image from "next/image";

export default function Casais() {
  return (
    <>
      <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-start">
            {/* Texto */}
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900">Ministério de Casais</h2>
              <div className="text-base leading-relaxed text-gray-800 space-y-6">
                <p>
                  O Ministério de Casais da Immec Church existe para fortalecer a base familiar na igreja. Em meio às diversas
                  dificuldades enfrentadas pelas famílias nos dias de hoje, é crucial contar com um ministério que promova o
                  fortalecimento familiar.
                </p>
                <p>
                  Reconhecemos que um relacionamento saudável entre o casal é essencial para construir uma família resiliente
                  capaz de enfrentar as adversidades da vida.
                </p>
                <p>
                  Nosso propósito é fortalecer os casais, entendendo que ao fazê-lo, as famílias como um todo também serão
                  fortalecidas. Buscamos apoiar, aconselhar, incentivar e resgatar as famílias por meio da integração dos casais,
                  do desenvolvimento do testemunho cristão, da troca de experiências e do cultivo de relacionamentos com uma
                  perspectiva bíblica.
                </p>
                <p>
                  Nosso desejo é que os casais amadureçam e cresçam não apenas em seu relacionamento mútuo, mas também em sua
                  interação com outros membros da igreja e, principalmente, em sua jornada espiritual, conhecendo e buscando o alvo
                  de Deus para a família.
                </p>
                <p>
                  <span className="font-medium">Liderança:</span> Pb Junior Carvalho e Dcª Suellen Carvalho & Dc Sidney e Esposa
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
                  src={casal}
                  alt="Casal IMMEC"
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
