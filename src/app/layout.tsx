import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '$BEARNECESITIES - Just the Bear Necessities of Degen Life',
  description: 'The Solana meme token powered by pure jungle energy, degen spirit, and absolutely zero stress.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 