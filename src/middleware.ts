import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value || ''

  // Rutas protegidas que requieren autenticación
  const protectedRoutes = ['/intranet']

  // Si intenta acceder a la página de login pero ya está autenticado
  if (req.nextUrl.pathname === '/intranet/login' && token) {
    // Redirigir al dashboard o a la página principal del intranet
    return NextResponse.redirect(new URL('/intranet', req.url))
  }

  // Si intenta acceder a rutas protegidas sin token
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !token) {
    // Evitar bucle de redirección
    if (req.nextUrl.pathname === '/intranet/login') return NextResponse.next()
    return NextResponse.redirect(new URL('/intranet/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/intranet/:path*'], // Protege todas las subrutas de /intranet
}
