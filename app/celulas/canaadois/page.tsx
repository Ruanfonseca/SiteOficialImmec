'use client'
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import canaadois from '@/app/assets/CanaaDois.jpeg'
import uber from '@/app/assets/uber.svg';
import { callUber } from "@/app/util/uber";

export default function CanaaDois() {
  return (
    <>
      <Navbar />
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Texto e detalhes */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Célula Canaã 2</h2>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Um lugar onde pessoas se conectam para buscar a Deus, gerar relacionamentos saudáveis e viver igreja.
                  <br />
                  Os pequenos grupos são ambientes de amor, comunhão e presença de Deus.
                  <br />
                  <br />
                  Venha nos visitar!
                  <br />
                  Nosso endereço é na Rua Mora, 403.
                </p>

                <iframe
                  className="w-full h-72 rounded-md shadow-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.3645308369037!2d-43.54830472515802!3d-22.903288437745015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be1467d19ce89%3A0xa877189088e56998!2sR.%20Mora%2C%20403%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023013-620!5e1!3m2!1spt-BR!2sbr!4v1700786715562!5m2!1spt-BR!2sbr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <p className="text-gray-700 leading-relaxed">
                  Liderada por Ruan Fonseca e Marcelly Lais, Alessander Mateini e Luane Abreu.
                  <br />
                  Auxiliados por Fábio Santos e Luana Oliveira, Junior Carvalho e Suellen.
                  <br />
                  Anfitriões: Alessander Mateini e Sandra.
                </p>

                <Button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black to-gray-900 text-white font-semibold rounded-full shadow-md hover:from-white hover:to-white hover:text-black border border-black transition-all duration-300"
                    onClick={() => {
                        navigator.geolocation.getCurrentPosition(
                        (position) => {
                            callUber(
                            "Rua Mora, 403, Campo Grande, Rio de Janeiro",
                            position.coords.latitude,
                            position.coords.longitude
                            );
                        },
                        () => {
                            // Fallback se o usuário negar a localização
                            callUber("Rua Mora, 403, Campo Grande, Rio de Janeiro");
                        }
                        );
                    }}
                    >
                    <Image src={uber} alt="Uber" width={20} height={20} />
                    Chamar Uber
                    </Button>

              </div>
            </div>

            {/* Imagem */}
            <div className="w-full md:w-1/2">
              <div className="rounded overflow-hidden shadow-md">
                <Image
                  src={canaadois}
                  alt="Célula Canaã 2"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
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
