import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Adicionado para melhor performance
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'TuCont - Contabilidade Integrativa',
  description: 'TuCont - Contabilidade Integrativa Online com Atendimento Humanizado via WhatsApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${inter.className} bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}