'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ButtonAction } from '@/app/components/customizaveis/buttonAction';
import EnviaEmail from '@/app/services/envioEmail/emailService';

const formSchema = z.object({
  primeiroNome: z.string().min(2, 'Nome muito curto'),
  segundoNome: z.string().min(2, 'Sobrenome muito curto'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(8, 'Telefone inválido'),
  mensagem: z.string().min(10, 'Mensagem muito curta'),
});

export function Contato() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      primeiroNome: '',
      segundoNome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const result = await EnviaEmail(values);
    setLoading(false);

    if (result.success) {
      toast.success('Mensagem enviada com sucesso!');
      form.reset();
    } else {
      toast.error('Erro ao enviar. Tente novamente mais tarde.');
    }
  }

  return (
    <section className="py-16 bg-white" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Entre em Contato</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="primeiroNome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primeiro nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Primeiro nome" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="segundoNome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Segundo nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Segundo nome" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Telefone" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-600" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Mensagem" className="h-32" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <ButtonAction
                  type="submit"
                  className="uppercase px-12 py-3 bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  info={
                    loading ? (
                      <div className="flex items-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                        Enviando...
                      </div>
                    ) : (
                      'Enviar'
                    )
                  }
                  disabled={loading}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
