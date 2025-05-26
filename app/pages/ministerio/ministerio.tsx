'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";

import LogoYouth from '@/app/assets/LogoYouth.jpeg';
import LogoKids from '@/app/assets/LogoKids.jpeg';
import Ministeriocasais from '@/app/assets/Ministeriocasais.jpg';
import logoOceans from '@/app/assets/logoOceans.jpeg';
import { ButtonAction } from "@/app/components/customizaveis/buttonAction";


export function Ministerio() {
  const ministerios = [
    {
      titulo: "Immec Youth",
      descricao: "Conheça nosso grupo jovem",
      imagem: LogoYouth,
      link: "/ministerios/detalhes/youth",
    },
    {
      titulo: "Immec Kids",
      descricao: "Ministério infantil",
      imagem:LogoKids ,
      link: "/ministerios/detalhes/kids",
    },
    {
      titulo: "Ministerio De Casais",
      descricao: "Um Ministério voltado para aconselhamento e acompanhamento espiritual de casais casados",
      imagem: Ministeriocasais,
      link: "/ministerios/detalhes/casais",
    },
    {
      titulo: "Oceans Moviment",
      descricao: "Ministério de Dança da Immec Church",
      imagem: logoOceans,
      link: "/ministerios/detalhes/danca",
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-white" id="ministerio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Ministérios</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ministerios.map((min, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white shadow-md p-6 rounded-md border-t-8 border-[#1414b8] transition hover:border-black"
            >
              <div className="w-28 h-20 mb-4">
                <Image
                  src={min.imagem}
                  alt={min.titulo}
                  width={125}
                  height={75}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h5 className="text-lg font-bold uppercase mb-2 text-gray-900">{min.titulo}</h5>
                <p className="text-gray-700 mb-4">{min.descricao}</p>
                <a href={min.link} className="text-black underline hover:no-underline">
                  Ver mais
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <ButtonAction 
          info="Ver Todos"
          className="px-10 py-2 border-black text-black hover:bg-black hover:text-white"
          href="/ministerios" 
        />
        </div>
      </div>
    </section>
  );
}
