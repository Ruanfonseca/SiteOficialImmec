'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import logo from '@/public/icon/LogoImmecChurch.jpg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" placeholder="seuemail@email.com" />
          </div>

          <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Senha</label>
                <div className="relative">
                    <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pr-10"
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
                </div>


          <Button className="w-full bg-black text-white hover:bg-gray-800 transition">
            Entrar
          </Button>

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
        </CardContent>
      </Card>
    </div>
  );
}
