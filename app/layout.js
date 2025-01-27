import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './providers'
import ToastComponent from './components/toaster/ToastComponent'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
        
          {children}
          
          <ToastComponent />
        </Providers>
      </body>
    </html>
  )
}
