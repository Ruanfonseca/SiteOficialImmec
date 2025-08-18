import { z } from 'zod';

export const CadastroSchema = z.object({
  nome: z.string().optional(),
  email: z.string().email(),
  telefone: z.string().min(1, "Telefone obrigatório"),
  senha: z.string().min(6, "Senha deve ter ao menos 6 caracteres"),
  confirmarSenha: z.string().min(6).optional(),
}).refine(
  (data) => {
    if (data.confirmarSenha !== undefined) {
      return data.senha === data.confirmarSenha;
    }
    return true; 
  },
  {
    message: "Senhas não conferem",
    path: ["confirmarSenha"],
  }
);


export const LoginSchema = z.object({
   email: z.string().email(),
   senha: z.string().min(6, "Senha deve ter ao menos 6 caracteres"),
})