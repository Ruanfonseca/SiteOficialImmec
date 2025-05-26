'use client'

import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import { Sobre } from "./pages/sobre/sobre";
import { Ministerio } from "./pages/ministerio/ministerio";
import { Celula } from "./pages/celula/celula";
import { Culto } from "./pages/cultos/cultos";
import { Contato } from "./pages/contato/contato";
import { Footer } from "./components/footer/footer";
import { ButtonRelative } from './components/customizaveis/buttonRelative';
import { FadeInOnScroll } from './components/animations/FadeInOnScroll'; // ajuste o caminho se necessário

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <FadeInOnScroll><Ministerio /></FadeInOnScroll>
      <FadeInOnScroll><Sobre /></FadeInOnScroll>
      <FadeInOnScroll><Celula /></FadeInOnScroll>
      <FadeInOnScroll><Culto /></FadeInOnScroll>
      <FadeInOnScroll><Contato /></FadeInOnScroll>

      <Footer />
      <ButtonRelative />
    </>
  );
}
