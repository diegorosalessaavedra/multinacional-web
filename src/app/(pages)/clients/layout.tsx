import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Clientes',
  description:
    'Somos expertos en el transporte de carga de la industria avícola, contamos con una flota de camiones debidamente acondicionados para el transporte seguro de pollos bebe de un día de nacido.  Ofrecemos transporte terrestre llegando a todo el Perú a solicitud del cliente, cubriendo la Costa, Sierra y Selva.',
  icons: {
    icon: '/cropped-multinacional-service-favicon-2-32x32.png',
  },
}
export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="page_container">
      {children}{' '}
      <Image
        className="page-logo"
        src="/iso_logo_light.svg"
        alt="multinacional"
        width={500}
        height={500}
      />
    </main>
  )
}
