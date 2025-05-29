'use client';

import FooterDashboard from "@/app/components/dashboardComponent/footer/footerDashboard";
import NavbarDashboard from "@/app/components/dashboardComponent/navbar/navbarDashboard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
<div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <NavbarDashboard />

      <main className="flex-1 container mx-auto px-4 py-8">
        
        {/* Grade de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Agenda Pastoral",
              description: "Visualize os compromissos da liderança pastoral.",
            },
            {
              title: "Lista de Cadastrados",
              description: "Gerencie os membros cadastrados na plataforma.",
            },
            {
              title: "Relatórios",
              description: "Acompanhe estatísticas e dados administrativos.",
            },
            {
              title: "Retiro",
              description: "Informações sobre o retiro e inscrições.",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow hover:ring-2 hover:ring-primary"
            >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
               <p className="text-sm text-muted-foreground dark:text-gray-400">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <FooterDashboard />
    </div>
  );
}
