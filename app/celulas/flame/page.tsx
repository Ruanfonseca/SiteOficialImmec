'use client'
import Image from "next/image";
import uber from '@/app/assets/uber.svg';
import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";
import { callUber } from "@/app/util/uber";
import { Button } from "@/components/ui/button";
import flame from '@/app/assets/flame.jpeg';

export default function Flame(){
    return(
         <>
           <Navbar />
                <section className="relative py-16 bg-white">
                    <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Texto e detalhes */}
                        <div className="w-full md:w-1/2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Célula Flame</h2>
                            <p className="text-gray-700 leading-relaxed mt-4">
                            Um lugar onde pessoas se conectam para buscar a Deus, gerar relacionamentos saudáveis e viver igreja.
                            <br />
                            Os pequenos grupos são ambientes de amor, comunhão e presença de Deus.
                            <br />
                            <br />
                            Venha nos visitar!
                            <br />
                            Nosso endereço é na Rua Nossa Senhora das Graças, número 94- campo grande.
                            </p>

                            <iframe
                                className="w-full h-72 rounded-md shadow-md"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6923282724975!2d-43.5634578!3d-22.9220161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99749f9cfb1551%3A0xd3e372b7fcb40e35!2sR.%20Nossa%20Sra.%20das%20Gra%C3%A7as%2C%2094%20-%20Campo%20Grande%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023097-230!5e0!3m2!1spt-BR!2sbr!4v1716559320000!5m2!1spt-BR!2sbr"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                />



                            <p className="text-gray-700 leading-relaxed">
                            Liderada por Paulo & Emanuelle.
                            <br />
                            <br />
                            Anfitriões: Avô do irmão thiago.
                            </p>

                            <Button
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black to-gray-900 text-white font-semibold rounded-full shadow-md hover:from-white hover:to-white hover:text-black border border-black transition-all duration-300"
                            onClick={() =>
                                navigator.geolocation.getCurrentPosition(
                                (position) => {
                                    callUber(
                                    "R. Nossa Sra. das Graças, 94 - Campo Grande",
                                    position.coords.latitude,
                                    position.coords.longitude
                                    );
                                },
                                () => {
                                    callUber("R. Nossa Sra. das Graças, 94 - Campo Grande");
                                }
                                )
                            }
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
                            src={flame}
                            alt="Célula flame"
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