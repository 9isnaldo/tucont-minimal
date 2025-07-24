import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import WhatsappButton from '@/components/ui/whatsapp-button';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'TuCont - Contabilidade Integrativa',
  description: 'TuCont - Contabilidade Integrativa Online com Atendimento Humanizado via WhatsApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <body className={`font-sans ${montserrat.className} bg-white min-h-screen`}>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}