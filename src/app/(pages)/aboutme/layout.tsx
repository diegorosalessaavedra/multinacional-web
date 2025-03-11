import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Somos un equipo de profesionales con larga trayectoria en el rubro logístico expertos en el transporte de carga, contamos con diferentes unidades de bajo, mediano y alto tonelaje capaces de recorrer todo el Perú, así mismo contamos con alianzas estratégicas con diferentes aerolíneas para realizar traslados inmediatos aminorando tiempos y maximizando beneficios.',
  icons: {
    icon: '/cropped-multinacional-service-favicon-2-32x32.png',
  },
}
export default function AboutmeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="page_container">{children}</main>
}
