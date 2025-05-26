'use client'
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import celulaRute from '@/app/assets/celulaRute.jpg';
import { callUber } from "@/app/util/uber";
import uber from '@/app/assets/uber.svg';
import { useState } from "react";


export default function Agape() {
    const [loading, setLoading] = useState(false);

     const handleClick = () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            callUber(
              "Rua Sivuca, 135, Campo Grande, Rio de Janeiro",
              position.coords.latitude,
              position.coords.longitude
            );
            setLoading(false);
          },
          () => {
            callUber("Rua Sivuca, 135, Campo Grande, Rio de Janeiro");
            setLoading(false);
          }
        );
      };


  return (
    <>
      <Navbar />
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Texto e Detalhes */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Célula Àgape</h2>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Um lugar onde pessoas se conectam para buscar a Deus, gerar relacionamentos saudáveis e viver igreja.
                  <br />
                  Os pequenos grupos são ambientes de amor, comunhão e presença de Deus.
                  <br />
                  <br />
                  Venha nos visitar!
                  <br />
                  Nosso endereço é na Rua Sivuca, 135
                  <br />
                </p>
                <iframe
                  className="w-full h-72 rounded-md shadow-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.9554040740213!2d-43.54083002559953!3d-22.91501567924929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be134f8398085%3A0x3cc9dee4b304b175!2sR.%20Sivuca%2C%20135%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023016-430!5e0!3m2!1spt-BR!2sbr!4v1700789512201!5m2!1spt-BR!2sbr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="text-gray-700 leading-relaxed">
                  Liderada por Dcª Mara
                  <br />
                  Auxiliados por Prª Cleia
                  <br />
                  Anfitriã Dcª Mara
                </p>
                <Button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black to-gray-900 text-white font-semibold rounded-full shadow-md hover:from-white hover:to-white hover:text-black border border-black transition-all duration-300"
                    onClick={handleClick}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Image src={uber} alt="Uber" width={20} height={20} />
                    )}
                    Chamar Uber
                  </Button>

              </div>
            </div>

            {/* Imagem */}
            <div className="w-full md:w-1/2">
              <div className="rounded overflow-hidden shadow-md">
                <Image
                  src={celulaRute}
                  alt="Célula Àgape"
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
