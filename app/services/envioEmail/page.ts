'use client';

import emailjs from 'emailjs-com';
import { Contato } from '@/app/types/interfaces';

export default async function EnviaEmail(data: Contato) {
  const templateParams = {
    primeiro_nome: data.primeiroNome,
    segundo_nome: data.segundoNome,
    email: data.email,
    telefone: data.telefone,
    mensagem: data.mensagem,
  };

  try {
    const response = await emailjs.send(
      'service_usk7pz5',
      'template_9j8kc0h',
      templateParams,
      'WwknFyzpsEMdh7pUA'
    );

    console.log('Email enviado com sucesso:', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false };
  }
}
