'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Laptop, Menu } from "lucide-react";
import { useUser } from "@/app/context/usuarioContext/UsuarioContext";
import logoImmec from '@/public/icon/LogoImmecChurch.jpg';
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";



const menu: MenuItem[] = [
  { title: "Membros", url: "/membros" },
  { title: "Eventos", url: "/eventos" },
  { title: "Célula", url: "/celulas" },
  { title: "Departamentos", url: "/departamentos" },
];

const logo = {
  url: "/",
  alt: "Logo Immec",
  title: "Dashboard",
};

export default function NavbarDashboard() {
 

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700 z-50 relative">

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile */}
          <div className="block lg:hidden w-full">
            <MobileMenu />
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex w-full">
            <DesktopMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopMenu() {
  const { user, token } = useUser()
  const [mock, setMock] = useState(true)
  const { setTheme } = useTheme()

  return (
    <nav className="flex justify-between w-full items-center">
      <div className="flex items-center gap-6">
        <a href={logo.url} className="flex items-center gap-2">
          <Image src={logoImmec} alt={logo.alt} width={32} height={32} className="rounded-full" />
          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {logo.title}
          </span>
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.url}
                  className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-muted hover:text-blue-600 text-gray-700 dark:text-gray-200 transition-colors"
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {mock && (
        <div className="flex items-center gap-4">
          {/* Modal Theme Switch */}
          <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="relative rounded-xl shadow-md hover:bg-muted transition-colors"
                  >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="fixed top-1/2 left-1/2 max-w-[360px] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-300 bg-white dark:bg-gray-900 p-6 shadow-lg focus:outline-none">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Escolha o tema
                    </DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-col gap-3 py-4">
                    <Button
                      variant="ghost"
                      onClick={() => setTheme("light")}
                      className="flex items-center gap-2 justify-start"
                    >
                      <Sun className="w-4 h-4" />
                      Claro
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => setTheme("dark")}
                      className="flex items-center gap-2 justify-start"
                    >
                      <Moon className="w-4 h-4" />
                      Escuro
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => setTheme("system")}
                      className="flex items-center gap-2 justify-start"
                    >
                      <Laptop className="w-4 h-4" />
                      Sistema
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>


          {/* Avatar e nome */}
          <img
            src="https://topview.com.br/wp-content/uploads/2019/04/Marcello-Dantas.jpg"
            alt="Avatar"
            className="rounded-full object-cover w-8 h-8"
          />
          <span className="text-sm font-medium text-muted-foreground">Ruan Fonseca</span>
        </div>
      )}
    </nav>
  )
}

function MobileMenu() {
  const[mock,setMock] = useState(true)
  const { user, token } = useUser();

  return (
    <div className="block lg:hidden w-full">
      <div className="flex items-center justify-between w-full px-2">
        {/* Apenas logo aqui fora */}
        <a href={logo.url} className="flex items-center gap-2">
          <Image src={logoImmec} alt={logo.alt} width={32} height={32} className="rounded-full" />
          <span className="text-base font-semibold">{logo.title}</span>
        </a>

        <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md border">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="overflow-y-auto px-4 pt-6 pb-10 w-[80vw] sm:w-[300px] bg-white dark:bg-gray-900 z-[100]"

              >
                {/* Título acessível para screen readers */}
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de navegação</SheetTitle>
                </SheetHeader>

                {/* Itens do menu */}
                <nav className="flex flex-col gap-4 mt-4">
                  {menu.map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                     className="text-base font-medium px-2 py-2 rounded-md hover:bg-muted hover:text-blue-600 text-gray-700 dark:text-gray-200 transition-colors"

                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Informações do usuário */}
                {mock && (
                  <div className="mt-8 flex flex-col items-center gap-2 border-t pt-6">
                    <img
                        src="https://topview.com.br/wp-content/uploads/2019/04/Marcello-Dantas.jpg"
                        alt="Avatar"
                        className="rounded-full object-cover w-8 h-8"
                      />
                     <span className="text-sm font-medium text-muted-foreground text-center dark:text-gray-300">
                      {'Ruan Fonseca'}
                    </span>
                  </div>
                )}
              </SheetContent>
            </Sheet>

      </div>
    </div>
  );
}
