'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/usuarioContext/UsuarioContext';


type AuthGuardOptions = {
  requireAuth?: boolean; // padrão: true
  redirectIfAuthenticated?: string; // para páginas públicas como /login
};

export function useAuthGuard(options?: AuthGuardOptions) {
  const { user, token } = useUser();
  const router = useRouter();

  const requireAuth = options?.requireAuth ?? true;
  const redirectIfAuthenticated = options?.redirectIfAuthenticated;

  useEffect(() => {
    if (requireAuth && !token) {
      // Protegendo rota privada
      router.replace('/login');
    } else if (token && redirectIfAuthenticated) {
      // Usuário já autenticado acessando rota pública
      router.replace(redirectIfAuthenticated);
    }
  }, [requireAuth, token, redirectIfAuthenticated, router]);
}
