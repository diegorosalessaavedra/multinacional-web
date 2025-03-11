'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './ourCompany.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'
export default function OurCompany() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useIntersectionObserverOnResize('ourCompany')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 500
      const progress = Math.min(scrollY / maxScroll, 1)
      const smoothProgress = 1 - Math.pow(1 - progress, 4)
      setScrollProgress(smoothProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const calculateTransform = () => {
    const scale = 1 + scrollProgress * 0.8
    const opacity = 1 - scrollProgress
    const translateY = scrollProgress * 200

    return {
      transform: `scale(${scale}) translateX(-${translateY}px)`,
      opacity: opacity,
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      willChange: 'transform, opacity',
    }
  }

  return (
    <section className="ourCompany" id="ourCompany">
      <div className="ourCompany_content">
        <h1 className="ourCompany_title title">Nuestra empresa</h1>
        <p className="ourCompany_description">
          <strong>Somos un equipo de profesionales</strong> con larga trayectoria en <br /> el rubro
          logístico expertos en el transporte de carga,
          <br /> contamos con diferentes unidades de bajo, mediano y alto <br /> tonelaje capaces de
          recorrer todo el Perú, así mismo <br /> contamos con alianzas estratégicas con diferentes
          aerolíneas <br /> para realizar traslados inmediatos aminorando tiempos y <br />{' '}
          maximizando beneficios.
        </p>
        <Link
          href="/contacto"
          className="button_animated"
          title="Contáctanos para soluciones de transporte de carga"
          aria-label="Contáctanos para soluciones de transporte de carga"
        >
          <p>Conoce nuestros servicios</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor">
            <path d="M7.5,16.5L14,10H0V8h14L7.5,1.5L9,0l9,9l-9,9L7.5,16.5z"></path>
          </svg>
          <div className="transition"></div>
        </Link>
      </div>
      <div className="ourCompany_image">
        <Image
          src="/image_nosotros.png"
          alt="Transporte de carga con Multinacional Service CORP SAC"
          width={1000}
          height={1000}
          priority
          style={calculateTransform()}
        />
      </div>
    </section>
  )
}
