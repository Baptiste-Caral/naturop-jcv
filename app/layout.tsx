import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/Nav"
import BurgerMenu from '@/components/ui/BurgerMenu'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'THERAMADE Naturo',
  description: 'Justine Caral-Villa Naturopathe à Carros (06)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable}`}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <BurgerMenu />
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
