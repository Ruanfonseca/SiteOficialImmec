"use client";

import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";

export default function Eventos() {
  const eventos = [
    {
      titulo: "Retiro Éden",
      data: "04/03/2025",
      lado: "right",
      fotosUrl:
        "https://drive.google.com/drive/folders/134dAmQJJrZMslbybeFkZR9QbakYEbucU?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/1EVUmdJH54cNVNnFEWrp4ezYhr-43-WeD?usp=drive_link",
    },
    {
      titulo: "Retiro Éden",
      data: "03/03/2025",
      lado: "left",
      fotosUrl:
        "https://drive.google.com/drive/folders/1HpPcgUanGmen9368UJua05Vv8oV9M1XT?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/18HrgeZwI76R6q2YHOzOIVI9hGykkXkCQ?usp=drive_link",
    },
    {
      titulo: "Retiro Éden",
      data: "02/03/2025",
      lado: "right",
      fotosUrl:
        "https://drive.google.com/drive/folders/19Qazl7gyhhp8PXyXvZHHFnjH1JipYtXJ?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/1OOBfW4yx0coLxULpIScqadmN-c7xCJFZ?usp=drive_link",
    },
    {
      titulo: "Retiro Éden",
      data: "01/03/2025",
      lado: "left",
      fotosUrl:
        "https://drive.google.com/drive/folders/1HxMFIlU3kRXcvCnC1m9AIMDKYp7NaAuj?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/1LzOXSAmrY82rrWx0O64ViKeP1Q7-EUd1?usp=drive_link",
    },
  ];

  return (
    <>
      <Navbar />
      {/* PARALLAX / HERO */}
      <section
        className="
    relative
    w-full
    bg-center
    bg-cover
    bg-no-repeat
  "
        style={{
          backgroundImage: "url('/assets/eden.jpg')",
        }}
      >
        {/* overlay escuro */}
        <div className="absolute inset-0 bg-black/70" />

        <main className="relative w-full max-w-4xl mx-auto px-4 py-12">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[8px] -ml-[4px] bg-blue-800 z-0 rounded-full" />
          <div className="flex flex-col gap-12 relative z-10">
            {eventos.map((evento, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start w-full ${
                  evento.lado === "left"
                    ? "md:justify-start md:pr-[55%]"
                    : "md:justify-end md:pl-[55%]"
                }`}
              >
                <div
                  className="
          w-full md:w-[320px]
          p-6
          rounded-3xl
          border border-white/30
          bg-white/55
          backdrop-blur-lg
          shadow-[0_10px_30px_rgba(0,0,0,0.18)]
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:bg-white/65
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
        "
                >
                  <h3 className="text-lg font-semibold text-emerald-950">
                    {evento.titulo}
                  </h3>

                  <p className="text-sm text-emerald-900/70 mt-1">
                    {evento.data}
                  </p>

                  <div className="mt-4 flex gap-3 justify-center md:justify-start">
                    {evento.fotosUrl && (
                      <a
                        href={evento.fotosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                bg-emerald-600/90
                hover:bg-emerald-700
                text-white
                px-4 py-2
                rounded-full
                shadow-md
                text-sm
                transition-all
              "
                      >
                        Ver Fotos
                      </a>
                    )}

                    {evento.videosUrl && (
                      <a
                        href={evento.videosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                bg-emerald-600/90
                hover:bg-emerald-700
                text-white
                px-4 py-2
                rounded-full
                shadow-md
                text-sm
                transition-all
              "
                      >
                        Ver Vídeos
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
}
