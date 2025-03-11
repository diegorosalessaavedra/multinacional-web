import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar Sesion',
  description: 'E-tracking iniciar sesion Multinacional Service',
  icons: {
    icon: '/cropped-multinacional-service-favicon-2-32x32.png',
  },
}
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="page_container">{children}</main>
}
