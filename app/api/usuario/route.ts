import { CadastroSchema } from '@/lib/zodSchemas';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';



export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const dadoTratado = CadastroSchema.safeParse(data);
    
    if (!dadoTratado.success) {
      console.warn("Erro de validação:", dadoTratado.error.errors);
      return NextResponse.json({ error: dadoTratado.error.errors }, { status: 400 });
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    // Criar usuário no banco
    const user = await prisma.user.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        senha: senhaHash,
      },
    });

    console.log("Usuário criado com sucesso:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}