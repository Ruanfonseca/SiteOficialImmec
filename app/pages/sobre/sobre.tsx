import { ButtonAction } from "@/app/components/customizaveis/buttonAction";




export function Sobre() {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-6">
            <h2 id="historia" className="text-3xl font-bold text-gray-900">Nossa História</h2>
          </div>
          <p className="text-gray-700 mt-4">
            A Immec Church nasceu num projeto em alto mar, um projeto embarcado, por isso o nome "embarcados com Cristo". Hoje nós
            estamos em terra. Inauguramos a Immec Church em terra no dia 19 de junho de 2016, na rua do Turista nº 20. Nosso maior
            objetivo é alcançar, discipular e enviar.
          </p>
          <p className="text-gray-700 mt-4">
            Estamos vivendo um tempo de fé, um tempo poderoso onde estamos construindo um novo templo na Estrada do Cabuçu, Rio de
            Janeiro. Você pode fazer parte desse projeto!
          </p>
          <p className="text-gray-700 mt-4">
            Não somos a igreja perfeita, somos a igreja saudável!
          </p>
          <div className="mt-6">
          <ButtonAction 
              info="Ver Mais" 
              type="submit" 
              className="px-10 py-2 border-black text-black hover:bg-black hover:text-white transition"                  
              href="/historia"
            />
          </div>
        </div>

        <div>
        <video
            className="w-full rounded-lg shadow-md"
            width="600"
            height="400"
            controls
          >
            <source src="/video/videoinstitucional.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>


        </div>
      </div>
    </section>
  );
}

