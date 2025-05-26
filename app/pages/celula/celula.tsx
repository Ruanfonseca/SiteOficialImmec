import Image from "next/image";
import celula from '@/app/assets/celulas.jpg';

export function Celula() {
  const celulas = [
    {
      nome: "Canaã",
      versiculo: "Bem-aventurados os que choram, porque eles serão consolados.\n\nMateus 5:4",
      link: "/celulas/canaa",
      imagem:celula
    },
    {
      nome: "Canaã 2",
      versiculo:
        "Porque, como as aflições de Cristo transbordam para conosco, assim também por meio de Cristo transborda a nossa consolação.\n\n2 Coríntios 1:5",
      link: "/celulas/canaadois",
      imagem:celula
    },
    {
      nome: "Canaã 3",
      versiculo: "Vinde a mim, todos os que estai cansados e oprimidos, e eu vos aliviarei.\n\nMateus 11:28",
      link: "/celulas/canaatres",
      imagem:celula
    },
    {
      nome: "Efraim",
      versiculo:
        "Consequentemente, a fé vem por se ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.\n\nRomanos 10:17",
      link: "/celulas/efraim",
      imagem:celula
    },
    {
      nome: "Ekballo",
      versiculo:
        "Portanto, aqueles que padecem de acordo com a vontade de Deus devem confiar sua vida a seu fiel Criador e seguir praticando o bem.\n\n1 Pedro 4:19",
      link: "/celulas/ekballo",
      imagem:celula
    },
    {
      nome: "Eleve",
      versiculo:
        "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.\n\nJeremias 29:11",
      link: "/celulas/eleve",
      imagem:celula
    },
    {
      nome: "Ágape",
      versiculo:
        "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens,\n\nColossenses 3:23",
      link: "/celulas/agape",
      imagem:celula
    },

    {
      nome: "Flame",
      versiculo:
        "Mil poderão cair ao seu lado;dez mil, à sua direita,mas nada o atingirá.\n\nSalmos 91:7",
      link: "/celulas/flame",
      imagem:celula
    },

    {
      nome: "Flow",
      versiculo:
        "O que as suas mãos tiverem que fazer, que o façam com toda a sua força, pois na sepultura, para onde você vai, não há atividade nem planejamento, não há conhecimento nem sabedoria.\n\nEclesiastes 9:10",
      link: "/celulas/flowcelula",
      imagem:celula
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-white" id="celula">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Células</h2>
          <p className="text-gray-700 mt-2">
            Venha estudar a Bíblia conosco, todos os encontros se iniciam às 19:30 hrs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {celulas.map((celula, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-md p-6 rounded-md border-b-[10px] border-[#1414b8] transition hover:border-black"
            >
              <div className="h-16 mb-4 flex justify-center">
                <Image
                  src={celula.imagem}
                  alt={celula.nome}
                  width={100}
                  height={65}
                  className="h-full object-contain"
                />
              </div>
              <div className="mt-4">
                <h5 className="text-lg font-bold uppercase text-gray-900 mb-2">{celula.nome}</h5>
                <p className="text-gray-700 whitespace-pre-line mb-4">{celula.versiculo}</p>
                <a
                  href={celula.link}
                  className="text-[#1414b8] font-semibold hover:text-black transition-colors"
                >
                  Conheça-nos
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
