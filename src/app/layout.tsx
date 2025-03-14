import { Titillium_Web } from 'next/font/google'
import './globals.css'
import './animations.css'
import './page.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Image from 'next/image'
import { Metadata } from 'next'

const lato = Titillium_Web({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
  title: 'Multinacional Service',
  description:
    'Le ofrecemos una excelente experiencia, eficiente en costos, calidad en servicio y atención pre y post venta.',
  icons: {
    icon: '/cropped-multinacional-service-favicon-2-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
        <a
          className="whatsApp_fixed"
          href="https://wa.me/51997279046"
          title="Contáctanos - Multinacional Service Corp."
          target="_blank"
        >
          <Image
            src="/whats.svg"
            alt="Contáctanos - Multinacional Service Corp."
            width={300}
            height={300}
          />
        </a>
      </body>
    </html>
  )
}
