export default function FooterDashboard(){
    return (
<footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Seção 1 - Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sobre</h3>
          <p className="text-sm">
            Igreja Immec — Comunidade comprometida com fé, amor e serviço.
          </p>
        </div>

        {/* Seção 2 - Links rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/membros" className="hover:text-blue-600">Membros</a></li>
            <li><a href="/eventos" className="hover:text-blue-600">Eventos</a></li>
            <li><a href="/celulas" className="hover:text-blue-600">Células</a></li>
            <li><a href="/departamentos" className="hover:text-blue-600">Departamentos</a></li>
          </ul>
        </div>

        {/* Seção 3 - Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contato</h3>
          <p className="text-sm">Email: contato@immec.org</p>
          <p className="text-sm">Telefone: (11) 99999-9999</p>
          <p className="text-sm">Endereço: Rua da Igreja, 123</p>
        </div>

        {/* Seção 4 - Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Siga-nos</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
            </a>
            <a href="#" className="hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
            </a>
            <a href="#" className="hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Immec Church. Todos os direitos reservados.
      </div>
    </footer>
  );
}