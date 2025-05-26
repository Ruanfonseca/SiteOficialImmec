import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LogoYouth from '@/app/assets/LogoYouth.jpeg';
import LogoKids from '@/app/assets/LogoKids.jpeg';
import Ministeriocasais from '@/app/assets/Ministeriocasais.jpg';
import logoOceans from '@/app/assets/logoOceans.jpeg';
import mulheres from '@/app/assets/mulheres.jpg';
import Image from "next/image";
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { ButtonAction } from "../components/customizaveis/buttonAction";
import teen from '@/app/assets/IMMEC TEEN.png';


const ministerios = [
  {
    title: "Immec Youth",
    description: "Conheça nosso grupo jovem",
    image: LogoYouth,
    link: "/ministerios/detalhes/youth",
  },
  {
    title: "Immec Kids",
    description: "Ministério infantil",
    image: LogoKids,
    link: "/ministerios/detalhes/kids",
  },
  {
    title: "Ministerio De Casais",
    description:
      "Um Ministerio voltado para aconselhamento e acompanhamento espiritual de casais casados",
    image: Ministeriocasais,
    link: "/ministerios/detalhes/casais",
  },
  {
    title: "Oceans Moviment",
    description: "Ministerio de Dança da immec church",
    image: logoOceans,
    link: "/ministerios/detalhes/danca",
  },
  {
    title: "Herdeiras",
    description: "Ministério das Mulheres da Immec Church",
    image: mulheres,
    link: "/ministerios/detalhes/herdeiras",
  },

  {
    title: "Immec Teen",
    description: "Ministério de Adolescentes",
    image: teen,
    link: "/ministerios/detalhes/teen",
  },
];

export default function MinisteriosPage() {
  return (
    <>
    <Navbar/>
      <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">
            <span id="ministerios">Ministérios</span>
          </h2>
          <p className="text-muted-foreground mt-2"></p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ministerios.map((minist, index) => (
            <Card key={index} className="hover:border-black border-t-8 border-blue-800 shadow-md">
              <CardContent className="flex flex-col items-start p-6">
                <div className="w-32 h-20 mb-4">
                  <Image
                    src={minist.image}
                    alt={minist.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h5 className="text-lg font-bold uppercase mb-1">{minist.title}</h5>
                <p className="text-sm text-muted-foreground mb-4">{minist.description}</p>
                <a
                  href={minist.link}
                  className="text-black font-medium hover:underline text-sm"
                >
                  Ver mais
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">

          <ButtonAction 
                    info="Retornar"
                    className="px-10 py-2 border-black text-black hover:bg-black hover:text-white"
                    href="/" 
                  />
        </div>
      </div>
    </section>

     <Footer/>
    </>
    
  );
}
