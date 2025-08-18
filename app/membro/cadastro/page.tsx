'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Loader } from "lucide-react";
import logo from '@/public/icon/LogoImmecChurch.jpg';
import { formatTelefone } from '@/app/util/formUtil';
import { registrarUsuario } from '@/app/services/usuarioService/service';
import { CadastroSchema } from '@/lib/zodSchemas';
import { toast } from "sonner"




type FormData = z.infer<typeof CadastroSchema>;

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [telefone, setTelefone] = useState('');
    const [isLoading, setIsLoading] = useState(false);


  const { register, handleSubmit, setValue,reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(CadastroSchema),
  });


async function onSubmit(data: FormData) {
  setIsLoading(true);
  try {
    const userData = {
      nome: data.nome ?? '',
      email: data.email,
      telefone: data.telefone,
      senha: data.senha,
    };

    await registrarUsuario(userData);
    toast.success("Usuário cadastrado com sucesso!");
    reset();
  } catch (error: any) {
    toast.error(error.message || "Erro ao cadastrar usuário");
  } finally {
    setIsLoading(false);
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-xl">
        <CardHeader className="flex flex-col items-center gap-4">
          <Image
            src={logo}
            alt="Logo IMMEC"
            width={100}
            height={100}
            className="rounded-full bg-white p-2"
          />
          <CardTitle className="text-2xl font-bold text-center text-black">Criar Conta</CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Nome completo</label>
              <Input {...register("nome")} className="text-black" placeholder="Seu nome completo" />
              {errors.nome && <p className="text-sm text-red-500">{errors.nome.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Telefone</label>
              <Input
                  type="tel"
                  placeholder="(99) 99999-9999"
                  className="text-black"
                  value={telefone}
                  {...register("telefone")}
                  onChange={(e) => {
                    const formatted = formatTelefone(e.target.value);
                    setTelefone(formatted);
                    setValue("telefone", formatted); 
                  }}
                />

              {errors.telefone && <p className="text-sm text-red-500">{errors.telefone.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" className="text-black" placeholder="seuemail@email.com" {...register("email")} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pr-10 text-black"
                  {...register("senha")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Mostrar ou ocultar senha"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.senha && <p className="text-sm text-red-500">{errors.senha.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Confirmar senha</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pr-10 text-black"
                  {...register("confirmarSenha")}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Mostrar ou ocultar confirmação de senha"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmarSenha && <p className="text-sm text-red-500">{errors.confirmarSenha.message}</p>}
            </div>

           <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 transition flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="animate-spin w-5 h-5" />
              ) : (
                'Cadastrar'
              )}
            </Button>

            <div className="text-center text-sm text-gray-500">
              Já possui uma conta?{" "}
              <a href="/membro/auth/login" className="text-blue-600 hover:underline">
                Acessar
              </a>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
