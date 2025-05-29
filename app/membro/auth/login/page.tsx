'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import logo from '@/public/icon/LogoImmecChurch.jpg';
import { useAuthGuard } from '@/app/hook/useAuthGuard';


const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
    useAuthGuard({ requireAuth: false, redirectIfAuthenticated: '/dashboard' });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    setMessage('Autenticando...');

    try {
      // const res = await fetch('/api/usuario/auth/cadastro', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // const result = await res.json();
      // if (res.ok) {
      //   setMessage('Login realizado com sucesso!');
      //   localStorage.setItem('token', result.token);
      //   // window.location.href = '/dashboard';
      // } else {
      //   setMessage(result.error || 'Erro no login.');
      // }


    } catch (error) {
      setMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-white px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="flex flex-col items-center gap-4">
          <Image
            src={logo}
            alt="Logo IMMEC"
            width={100}
            height={100}
            className="rounded-full bg-white p-2"
          />
          <CardTitle className="text-2xl font-bold text-center">Acessar Conta</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="seuemail@email.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pr-10"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <Button  className="w-full bg-black text-white hover:bg-gray-800 transition">
              <a href="/membro/dashboard">Entrar</a>
            </Button>

            {message && (
              <p className="text-center text-sm text-red-600">{message}</p>
            )}

            <div className="text-center text-sm text-gray-500">
              Esqueceu sua senha?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Recuperar
              </a>
            </div>

            <div className="text-center mt-2">
              <Button variant="outline" className="w-full" asChild>
                <a href="/membro/cadastro">Criar nova conta</a>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
