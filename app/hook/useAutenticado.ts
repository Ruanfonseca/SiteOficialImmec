import { useEffect, useState } from 'react';

export function useUsuarioAutenticado() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/login')
      .then(res => res.ok ? res.json() : null)
      .then(data => setUsuario(data))
      .catch(() => setUsuario(null))
      .finally(() => setLoading(false));
  }, []);

  return { usuario, loading };
}
