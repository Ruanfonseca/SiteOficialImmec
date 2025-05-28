import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: 'Email já registrado.' }, { status: 400 });
  }

  const hashed = hashPassword(password);

  const user = await prisma.user.create({
    data: { email, password: hashed, name }
  });

  return NextResponse.json({ message: 'Usuário registrado com sucesso', user: { id: user.id, email: user.email } });
}
