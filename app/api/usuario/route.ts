export const runtime = "nodejs";

import { CadastroSchema } from "@/lib/zodSchemas";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const parsed = CadastroSchema.safeParse(data);
    if (!parsed.success) {
      console.warn("Erro de validação:", parsed.error.errors);
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }

    const { nome, email, telefone, senha } = parsed.data;

    const senhaHash = await bcrypt.hash(senha, 10);

    const user = await prisma.user.create({
      data: {
        nome,
        email,
        telefone,
        senha: senhaHash,
      },
    });

    // ⚠️ nunca retorne senha
    return NextResponse.json(
      {
        id: user.id,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 },
    );
  }
}
