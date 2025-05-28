'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, LogIn } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links: [string, string][] = [
    ['/#sobre', 'Nossa História'],
    ['/#celula', 'Células'],
    ['/#ministerio', 'Ministérios'],
    ['/pages/eventos', 'Eventos'],
    ['/#contato', 'Contato'],
    ['/#rodape', 'Doação'],
  ];

  const isHome = pathname === '/';

  return (
    <div className="flex flex-col bg-white">
      {/* Top Header */}
      <div className="bg-[#1414b8] text-white py-3 px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hidden lg:block">
          Immec Church
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://web.whatsapp.com/send?phone=5521978998166"
            target="_blank"
            className="hover:text-black flex items-center gap-2"
          >
            <i className="fa fa-phone text-black" />
            Telefone: +55 21 97899-8166
          </a>
          <a
            href="mailto:immecchurch@gmail.com?subject=Email Site&body=Olá,%20Gostaria%20de%20entrar%20em%20contato."
            target="_blank"
            className="hover:text-black flex items-center gap-2"
          >
            <i className="fa fa-envelope text-black" />
            Email: immecchurch@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="bg-[#1414b8] text-white px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold lg:hidden block">
            Immec Church
          </Link>

          {/* Mobile Drawer (esconde se estiver na home '/') */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href="/membro/auth/login" className="text-white flex items-center gap-1">
              <LogIn className="w-5 h-5" />
              <span className="text-sm">Área do Membro</span>
            </Link>

            {!isHome && (
              <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-white">
                  <DrawerHeader>
                    <DrawerTitle className="text-center text-lg text-black font-bold">Menu</DrawerTitle>
                  </DrawerHeader>
                  <ul className="flex flex-col text-black space-y-4 px-6 pb-6">
                    {links.map(([href, label]) => (
                      <li key={label}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2 text-base hover:text-black"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </DrawerContent>
              </Drawer>
            )}
          </div>

          {/* Desktop Menu e Área do Membro */}
          <div className="hidden lg:flex lg:items-center lg:justify-between w-full">
            <ul className="flex space-x-6">
              {links.map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="flex ml-auto w-full max-w-xs">
              <Input
                type="text"
                placeholder="Search here..."
                className="rounded-l-md h-10"
              />
              <Button type="submit" className="bg-black text-white rounded-r-md h-10 px-3">
                <i className="fa fa-search" />
              </Button>
            </form>
            <Link
              href="/membro/auth/login"
              className="ml-4 flex items-center gap-2 text-sm hover:text-black"
            >
              <LogIn className="w-5 h-5" />
              Área do Membro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
