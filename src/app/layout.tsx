import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import WhatsappButton from '@/components/ui/whatsapp-button';
import Script from 'next/script';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Tucont - Contabilidade Integrativa',
  description: 'Tucont - Contabilidade Integrativa Online com Atendimento Humanizado via WhatsApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <head>
        <meta 
          name="adopt-website-id" 
          content="5bf84367-9ecd-4c0f-88c5-9795d4f3c4c9" 
        />
      </head>
      <body className={`font-sans ${montserrat.className} bg-white min-h-screen`}>
        {children}
        <WhatsappButton />

        <Script 
          id="adopt-injector"
          src="https://tag.goadopt.io/injector.js?website_code=5bf84367-9ecd-4c0f-88c5-9795d4f3c4c9"
          className="adopt-injector"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}