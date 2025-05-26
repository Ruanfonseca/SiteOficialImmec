export function Footer() {
  return (
    <footer className="bg-[#1414b8] text-white pt-10 pb-4 text-sm" id="rodape">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-4">
          
          {/* Redes Sociais */}
                <div className="w-full sm:w-1/2 lg:w-1/4">
                <h4 className="font-bold mb-2">Redes Sociais</h4>
                <p className="mb-3">Seja mais um seguidor em nossas plataformas</p>
                <div className="flex space-x-3">
                    <a href="https://www.facebook.com/immecchurch?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1414b8] w-8 h-8 flex items-center justify-center rounded-full hover:text-black transition">
                    <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1414b8] w-8 h-8 flex items-center justify-center rounded-full hover:text-black transition">
                    <i className="fab fa-twitter" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1414b8] w-8 h-8 flex items-center justify-center rounded-full hover:text-black transition">
                    <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://www.instagram.com/immecchurch/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1414b8] w-8 h-8 flex items-center justify-center rounded-full hover:text-black transition">
                    <i className="fab fa-instagram" />
                    </a>
                </div>
                </div>


          {/* Links */}
          <div className="w-full sm:w-1/2 lg:w-1/5">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="space-y-1">
              <li><a href="#historia" className="hover:text-black">Nossa História</a></li>
              <li><a href="#celulas" className="hover:text-black">Células</a></li>
              <li><a href="#ministerios" className="hover:text-black">Ministérios</a></li>
              <li><a href="#eventos" className="hover:text-black">Eventos</a></li>
              <li><a href="#contato" className="hover:text-black">Contato</a></li>
            </ul>
          </div>

          {/* Localização & Funcionamento */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h4 className="font-bold mb-2">Localização & Funcionamento</h4>
            <ul className="space-y-1">
              <li><a href="https://maps.app.goo.gl/CkHXY1TAdNxnE5rTA" target="_blank" className="flex items-center hover:text-black"><i className="fa fa-map-marker mr-2" />Localização</a></li>
              <li><a href="https://web.whatsapp.com/send?phone=5521978998166" target="_blank" className="flex items-center hover:text-black"><i className="fa fa-phone mr-2" />+55 21 97899-8166</a></li>
              <li><a href="mailto:immecchurch@gmail.com" className="flex items-center hover:text-black"><i className="fa fa-envelope mr-2" />immecchurch@gmail.com</a></li>
              <li className="flex items-center"><i className="fa fa-clock-o mr-2" />Quinta - 19:00 (Oração)</li>
              <li className="flex items-center"><i className="fa fa-clock-o mr-2" />Domingo - 19:00 (Adoração)</li>
            </ul>
          </div>

          {/* Doações */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h4 className="font-bold mb-2">Doações</h4>
            <ul className="space-y-1">
              <li className="flex items-start">
                <i className="fa fa-bank mr-2 mt-1" />
                <span>
                  BANCO SANTANDER<br />
                  AG: 3350<br />
                  CONTA: 13.005872-5<br />
                  IGREJA METODISTA MINISTÉRIO EMBARCADOS COM CRISTO<br />
                  CNPJ: 31.059.169/0001-40
                </span>
              </li>
              <li className="flex items-center"><i className="fa fa-key mr-2" />Chave Pix: 21978998166</li>
              <li className="flex items-center"><i className="fa fa-qrcode mr-2" />QR Code</li>
            </ul>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="text-center border-t border-white mt-6 pt-3 text-xs">
          <p>&copy; Desenvolvido pelo Departamento de Mídia da Immec Church</p>
        </div>
      </div>
    </footer>
  );
}
