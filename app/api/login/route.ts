import { LoginSchema } from "@/lib/zodSchemas";
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { generateToken, verifyToken } from "@/lib/auth";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {
  try {
    const data = await req.json();
    const dadoTratado = LoginSchema.safeParse(data);

    if (!dadoTratado.success) {
      console.warn("Erro de validação:", dadoTratado.error.errors);
      return NextResponse.json({ error: dadoTratado.error.errors }, { status: 400 });
    }

    const { email, senha } = data;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
    }

    const token = generateToken({ id: user.id, email: user.email });

    const response = NextResponse.json({ message: 'Login realizado com sucesso', token });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60, // 1 hora
    });

    return response;
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}


//retorna usuario logado
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });

    const decoded = verifyToken(token) as { id: string };

    const user = await prisma.user.findUnique({
      where: { id: Number(decoded.id) },
      select: { id: true, nome: true, email: true },
    });

    if (!user) return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });

    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
  }
}