'use client'
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import teen from '@/app/assets/teen.jpg';


export default function Teen(){
    return(
         <>
           <Navbar />
                <div className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
                    <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-start">
                        {/* Texto */}
                        <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900">Ministério Infantil </h2>
                        <div className="text-base leading-relaxed text-gray-800 space-y-6">
                            <p>
                           Em 2010, Deus plantou no meu coração o chamado para trabalhar com adolescentes. De maneira clara e desafiadora, Ele me direcionou a dedicar minha vida para instruir, pastorear e inspirar essa geração, em um momento em que muitos ainda buscavam sua identidade e propósito. Assim começou minha trajetória ministerial, com foco inicial nos adolescentes e, posteriormente, expandindo também para os jovens.

                            Ao longo desses 15 anos de liderança — sendo 9 deles especificamente com adolescentes e jovens — testemunhei inúmeros desafios, mas, acima de tudo, incontáveis manifestações da graça de Deus na transformação de vidas. O ministério cresceu, se firmou e se tornou uma referência de cuidado, discipulado e desenvolvimento de líderes.

                            A visão da igreja para o Ministério de Adolescentes é formar uma geração forte na fé, fundamentada na Palavra de Deus e no caráter de Cristo. Buscamos preparar adolescentes para serem discípulos autênticos, influenciadores do seu tempo, ativos na igreja e relevantes na sociedade. Nosso compromisso é criar um ambiente seguro onde eles possam crescer espiritualmente, emocionalmente e socialmente, sendo capacitados a viver o evangelho no seu dia a dia.
                            </p>
                            <p>
                            <span className="font-medium">Liderança:</span> Ev. Elton & Dcª Simone
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
                            src={teen}
                            alt="kids"
                            className="w-full h-auto object-cover"
                            priority
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
      <Footer />
        </>
    );
}