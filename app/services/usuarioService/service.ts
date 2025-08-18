import { Login, User } from "@/app/types/interfaces";

export async function registrarUsuario(data: User) {
  try {    
    const res = await fetch('/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        senha: data.senha,
      })
    });

    if (res.ok) {
      return await res.json();
    } else {
      const error = await res.json();
      throw new Error(error?.error?.[0]?.message || 'Erro ao criar usuário');
    }
  } catch (error: any) {
    console.error(error.message || error);
  }
}

export async function login(data:Login){
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        senha: data.senha,
      })
    });

     if (res.ok) {
      return await res.json();
    } else {
      const error = await res.json();
      throw new Error(error?.error?.[0]?.message || 'Erro ao criar usuário');
    }
  } catch (error:any) {
    console.error(error.message || error);
  }
}

export async function logoutUsuario() {
  const res = await fetch('/api/logout', {
    method: 'POST',
  });

  if (!res.ok) throw new Error('Erro ao fazer logout');
  
  return res.json();
}
