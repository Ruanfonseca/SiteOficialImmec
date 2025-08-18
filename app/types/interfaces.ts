export interface Contato{
      primeiroNome:string;
      segundoNome:string;
      email:string;
      telefone:string;
      mensagem: string;
}
export interface User{
  email: string;
  nome:string;
  senha:string;
  telefone:string;
}

export interface Login{
  email:string;
  senha:string;
}
export interface IUserContext {
  userContext:User
  [key: string]: any; 
}
