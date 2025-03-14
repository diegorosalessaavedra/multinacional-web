'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Header.css'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [openMain, setOpenMain] = useState<boolean>(false)

  const isActiveLink = (path: string) => (pathname === path ? 'Header-nav-ul-a-actived' : '')
  const isActiveButton = (path: string) => (pathname === path ? 'Header-nav-button-actived' : '')

  // Función para animar el menú móvil
  const toggleMenu = () => {
    setOpenMain(!openMain)
  }

  // Asegurarse de que el menú se cierre cuando se cambia de página
  useEffect(() => {
    setOpenMain(false)
  }, [pathname])

  return (
    <header className="Header-container">
      <Link className="Header-linkLogo" href="/" title="Ir a la página principal">
        <Image
          src="/logo_multinacional-service.svg"
          alt="Multinacional Service Corp - Transporte de carga en Comas"
          width={400}
          height={200}
          priority
        />
      </Link>

      <div className="Header_openMain">
        <div className=" button_animated" onClick={toggleMenu}>
          <div className={`bars__menu ${openMain ? 'active' : ''}`}>
            <span className={`line1__bars-menu ${openMain ? 'activeLine1__bars-menu' : ''}`}></span>
            <span className={`line2__bars-menu ${openMain ? 'activeLine2__bars-menu' : ''}`}></span>
            <span className={`line3__bars-menu ${openMain ? 'activeLine3__bars-menu' : ''}`}></span>
          </div>
        </div>
      </div>

      <nav
        className={`Header-nav-container ${openMain ? 'activeNav' : ''}`}
        role="navigation"
        aria-label="Menú principal"
      >
        <ul className="Header-nav-ul">
          <li>
            <Link
              className={`Header-nav-ul-a ${isActiveLink('/')}`}
              href="/"
              title="Inicio - Multinacional Service Corp."
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={`Header-nav-ul-a ${isActiveLink('/aboutme')}`}
              href="/aboutme"
              title="Conócenos - Quiénes somos"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className={`Header-nav-ul-a ${isActiveLink('/services')}`}
              href="/services"
              title="Nuestros servicios de transporte de carga"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              className={`Header-nav-ul-a ${isActiveLink('/clients')}`}
              href="/clients"
              title="Nuestros clientes satisfechos"
            >
              Clientes
            </Link>
          </li>
          <li>
            <Link
              className={`button_animated Header-nav-ul-a-button  ${isActiveButton('/e-tracking')}`}
              href="/e-tracking"
              title="Seguimiento de carga en tiempo real"
            >
              <p>Seguimiento</p>
            </Link>
          </li>
          <li>
            <Link
              className={` button_animated Header-nav-ul-a-button Header-nav-ul-a-button-left`}
              href="https://wa.me/51997279046"
              title="Contáctanos - Multinacional Service Corp."
              target="_blank"
            >
              <p>Contáctanos</p>
            </Link>
          </li>
          <li>
            <Link
              className={` button_animated Header-nav-ul-a-button Header-nav-ul-a-button-left ${isActiveButton('/intranet')}`}
              href="/intranet"
              title="intranet"
            >
              <p>Intranet</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
