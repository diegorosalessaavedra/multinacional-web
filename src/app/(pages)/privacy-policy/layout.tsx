import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Politica de privacidad',
  description:
    'Somos un equipo de profesionales con larga trayectoria en el rubro logístico expertos en el transporte de carga, contamos con diferentes unidades de bajo, mediano y alto tonelaje capaces de recorrer todo el Perú, así mismo contamos con alianzas estratégicas con diferentes aerolíneas para realizar traslados inmediatos aminorando tiempos y maximizando beneficios.',
  icons: {
    icon: '/cropped-multinacional-service-favicon-2-32x32.png',
  },
}
export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="page_container">
      {children}
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
