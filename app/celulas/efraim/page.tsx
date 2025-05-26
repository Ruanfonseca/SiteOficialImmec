'use client'
import { Navbar } from "@/app/components/navbar/navbar";
import { callUber } from "@/app/util/uber";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import uber from '@/app/assets/uber.svg';
import efraimimg from '@/app/assets/efraim.jpeg';
import { Footer } from "@/app/components/footer/footer";
import { useState } from "react";

export default function Efraim() {
  const [loading, setLoading] = useState(false);


   const handleClick = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        callUber(
          "Travessa Moriçaba, 16, Campo Grande, Rio de Janeiro",
          position.coords.latitude,
          position.coords.longitude
        );
        setLoading(false);
      },
      () => {
        callUber("Travessa Moriçaba, 16, Campo Grande, Rio de Janeiro");
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
            {/* Texto e detalhes */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Célula Efraim</h2>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Um lugar onde pessoas se conectam para buscar a Deus, gerar relacionamentos saudáveis e viver igreja.
                  <br />
                  Os pequenos grupos são ambientes de amor, comunhão e presença de Deus.
                  <br />
                  <br />
                  Venha nos visitar!
                  <br />
                  Nosso endereço é na Travessa Moriçaba, número 16.
                </p>

                <iframe
                  className="w-full h-72 rounded-md shadow-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0525411278597!2d-43.528001899999996!3d-22.9111035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd9731638b6ef%3A0xcbb2398e7d944589!2sTravessa%20Mori%C3%A7aba%2C%2016%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023018-410!5e0!3m2!1spt-BR!2sbr!4v1716555880000!5m2!1spt-BR!2sbr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <p className="text-gray-700 leading-relaxed">
                  Liderada por Pr Miguel.
                  <br />
                  <br />
                  Anfitriões: Pr Miguel.
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
                  src={efraimimg}
                  alt="Célula Efraim"
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
