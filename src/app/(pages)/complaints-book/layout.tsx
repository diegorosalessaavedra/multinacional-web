import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Somos expertos en el transporte de carga de la industria avícola, contamos con una flota de camiones debidamente acondicionados para el transporte seguro de pollos bebe de un día de nacido.  Ofrecemos transporte terrestre llegando a todo el Perú a solicitud del cliente, cubriendo la Costa, Sierra y Selva.',

  icons: {
    icon: '/cropped-multinacional-service-favicon-2-32x32.png',
  },
}
export default function ComplaintsBookLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="page_container">{children}</main>
}
