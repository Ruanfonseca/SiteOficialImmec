"use client";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/footer/footer";
import { Navbar } from "../components/navbar/navbar";
import PastorMarcelo from "@/app/assets/PastorMarcelo.jpg";
import Image from "next/image";

export default function Historia() {
  return (
    <>
      <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-start">
            {/* Texto */}
            <div className="space-y-4 md:ml-6">
              {" "}
              {/* margem à esquerda em md+ */}
              <h2 className="text-4xl font-extrabold text-gray-900">
                Nossa Trajetória
              </h2>
              <div className="text-base leading-relaxed text-gray-800 space-y-6 text-justify">
                <p>
                  A trajetória da Immec Church é marcada por uma jornada
                  extraordinária desde o seu início, concebida como um projeto
                  em alto mar intitulado "Embarcados com Cristo". Hoje,
                  ancorados em terra firme, celebramos a inauguração da Immec
                  Church em solo, um marco que ocorreu em 19 de junho de 2016,
                  na inspiradora Estrada do Cabuçú, 2692 - Vila Jardim/RJ. Nossa
                  visão transcende as paredes físicas da igreja; é impulsionada
                  pelo compromisso inabalável de alcançar, discipular e enviar.
                  Somos uma comunidade que busca ir além, navegando pelas águas
                  da fé em direção a um propósito maior. Atualmente, vivemos um
                  tempo singular, repleto de fé e poder. Estamos imersos na
                  construção de um novo templo monumental localizado na Estrada
                  do Cabuçu, no deslumbrante cenário do Rio de Janeiro. Esse
                  projeto representa mais do que uma estrutura física; é um
                  testemunho da nossa dedicação em criar um espaço sagrado que
                  sirva como um farol de esperança e espiritualidade. Convidamos
                  você a se juntar a nós nessa jornada emocionante. Seja parte
                  integrante do processo de construção do novo templo,
                  contribuindo não apenas para erguer suas paredes, mas também
                  para fortalecer os alicerces espirituais que o sustentarão.
                  Sua participação é crucial para o sucesso desse empreendimento
                  que transcende o concreto e se enraíza na missão de
                  compartilhar o amor e a palavra de Cristo. Juntos, estamos
                  moldando o futuro da Immec Church, impulsionados por uma fé
                  robusta e uma visão que se estende além do presente. Cada
                  tijolo colocado no novo templo representa um passo em direção
                  a uma comunidade mais forte e vibrante, unida pelo propósito
                  comum de iluminar o caminho para aqueles que buscam a verdade
                  espiritual. Venha fazer parte dessa história, onde a
                  construção do templo se entrelaça com a construção de vidas
                  transformadas. Sua presença e apoio são vitais para o
                  crescimento contínuo da Immec Church e para a realização da
                  nossa missão de impactar vidas e espalhar a luz divina em
                  nossa comunidade e além. O convite está feito: junte-se a nós
                  na construção do novo templo e na expansão do Reino de Deus.
                </p>
                <p>
                  <span className="font-medium">Liderança:</span> Prº Marcelo
                  Dantas
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
            <div className="flex justify-center mt-9 md:justify-end md:mr-6">
              {" "}
              {/* margem à direita em md+ */}
              <div className="w-full md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={PastorMarcelo}
                  alt="Lider da Igreja"
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
