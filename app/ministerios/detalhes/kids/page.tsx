'use client'
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import kids from '@/app/assets/Kids.jpg';


export default function Kids(){
    return(
        <>
           <Navbar />
      <section className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2 items-start">
            {/* Texto */}
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900">Ministério Infantil </h2>
              <div className="text-base leading-relaxed text-gray-800 space-y-6">
                <p>
                   Qual o papel da igreja na educação da criança? Hoje temos visto com que tamanha precocidade as crianças têm se tornado
                            vítimas dos ataques do inimigo. As investidas para destruí-las e afastá-las de Deus começam cedo e tanto a família como
                            a Immec Church possuem responsabilidades no que tange aos cuidados com a vida espiritual dos pequeninos.
                            
                            Considerando Provérbios 20.11 – “Até a criança mostra o que é por suas ações; o seu procedimento revelará se ela é pura
                            e justa”, entendemos que a evangelização e a educação cristã são de suma importância para a vida da criança. Com base
                            nessa demanda e também em cumprimento às ordenanças de Deus acerca do “ide”, que o Departamento Infantil da nossa Immec
                            Church foi criado.
                            
                            Muitos foram os envolvidos nessa árdua tarefa, desde o ensino correto da Palavra, como o preparo para o louvor, cada
                            tarefa tem sido desempenhada com afinco e responsabilidade por todos os líderes e coordenadores que preparam crianças
                            para o tríplice exercício da fé: Salvação – Crescimento – Serviço!
                            
                            Conscientes da situação espiritual das crianças, o Departamento Infantil  da Immec Church não tem
                            medido esforços para pregar o Evangelho redentor de Jesus dentro e fora de nossas igrejas e o compromisso de ensinar a
                            Palavra nos impulsiona a seguir fazendo o melhor em cada aula de Escola Bíblica Dominical ou Culto Infantil, a fim de
                            mantermos, até a volta de Cristo, uma igreja forte e sadia.
                </p>
                <p>
                  <span className="font-medium">Liderança:</span> Dcª Marcelly Siqueira
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
                  src={kids}
                  alt="kids"
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