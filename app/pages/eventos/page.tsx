'use client';

import { Footer } from "@/app/components/footer/footer";
import { Navbar } from "@/app/components/navbar/navbar";

export default function Eventos() {
  const eventos = [
    {
      titulo: "Retiro Esfera",
      data: "04/03/2025",
      lado: "right",
      fotosUrl:
        "https://drive.google.com/drive/folders/134dAmQJJrZMslbybeFkZR9QbakYEbucU?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/1EVUmdJH54cNVNnFEWrp4ezYhr-43-WeD?usp=drive_link",
    },
    {
      titulo: "Retiro Esfera",
      data: "03/03/2025",
      lado: "left",
      fotosUrl:
        "https://drive.google.com/drive/folders/1HpPcgUanGmen9368UJua05Vv8oV9M1XT?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/18HrgeZwI76R6q2YHOzOIVI9hGykkXkCQ?usp=drive_link",
    },
    {
      titulo: "Retiro Esfera",
      data: "02/03/2025",
      lado: "right",
      fotosUrl:
        "https://drive.google.com/drive/folders/19Qazl7gyhhp8PXyXvZHHFnjH1JipYtXJ?usp=drive_link",
      videosUrl:
        "https://drive.google.com/drive/folders/1OOBfW4yx0coLxULpIScqadmN-c7xCJFZ?usp=drive_link",
    },
    {
      titulo: "Retiro Esfera",
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
              <div className="bg-white w-full md:w-[320px] p-6 rounded-2xl shadow-lg border border-blue-100 transition-transform hover:scale-105 duration-300">
                <h3 className="text-lg font-semibold text-gray-900">
                  {evento.titulo}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{evento.data}</p>
                <div className="mt-4 flex gap-3 justify-center md:justify-start">
                  {evento.fotosUrl && (
                    <a
                      href={evento.fotosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow text-sm"
                    >
                      Ver Fotos
                    </a>
                  )}
                  {evento.videosUrl && (
                    <a
                      href={evento.videosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow text-sm"
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
      <Footer />
    </>
  );
}
