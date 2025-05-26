'use client';
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import jovem from '@/app/assets/jovem.jpeg';
import Image from "next/image";

export default function Youth() {
  return (
    <>
      <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-gray-900">IMMEC Youth</h2>
              <div className="text-base leading-relaxed text-gray-800 space-y-6">
                <div>
                  <p className="text-lg text-gray-700">
                    A Bíblia dedica uma atenção especial aos jovens:
                  </p>
                  <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700">
                    <strong>1 Pedro 5:5</strong> — "Rogo igualmente aos jovens: sede submissos aos que são mais velhos; outrossim, no trato de
                    uns com os outros, cingi-vos todos de humildade, porque Deus resiste aos soberbos, contudo, aos humildes concede a sua graça."
                  </blockquote>
                  <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700">
                    <strong>1 João 2:13,14</strong> — "Pais, eu vos escrevo, porque conheceis aquele que existe desde o princípio. Jovens, eu
                    vos escrevo, porque tendes vencido o Maligno... porque sois fortes, e a palavra de Deus permanece em vós, e tendes vencido
                    o Maligno."
                  </blockquote>
                </div>

                <div>
                  <p>
                    O nosso propósito para a juventude da Immec Church é equipá-los para que sejam:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Comprometidos com Deus</li>
                    <li>Constantes em suas atitudes e comportamento</li>
                    <li>Comunicadores do Evangelho</li>
                    <li>Conhecedores da Palavra</li>
                  </ul>
                </div>

                <p>
                  Desejamos ver jovens capazes de defender a fé no contexto em que vivem, com uma visão pessoal de
                  ministério, preocupados com outros e capazes de discipular pelo exemplo — alguns até chamados para
                  o ministério em tempo integral.
                </p>

                <p>
                  Siga nosso Instagram:{" "}
                  <a
                    href="https://www.instagram.com/immecchurch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    @immecchurch
                  </a>
                </p>

                <p>
                  <span className="font-medium">Coordenadores:</span>Dcª Luana Oliveira, Pb Fabio Santos, Pb Natanael Paiva e Dcª Marcelly Siqueira.
                </p>
              </div>

              <Button
                className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-900 transition duration-300"
                asChild
              >
                <a href="/#ministerios">Retornar</a>
              </Button>
            </div>

            {/* Imagem menor */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={jovem}
                  alt="Jovens IMMEC"
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
