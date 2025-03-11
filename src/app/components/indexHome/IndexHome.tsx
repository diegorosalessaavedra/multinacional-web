'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './IndexHome.css'

export default function IndexHome() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 500
      const progress = Math.min(scrollY / maxScroll, 1)
      const smoothProgress = 1 - Math.pow(1 - progress, 4)
      setScrollProgress(smoothProgress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar una vez al cargar la página

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animaciones basadas en el progreso del scroll con más control
  const calculateTransform = () => {
    const scale = 1 + scrollProgress * 0.8 // Reducir el escalado para un efecto más sutil
    const opacity = 1 - scrollProgress
    const translateY = scrollProgress * 200 // Reducir el desplazamiento vertical

    return {
      transform: `scale(${scale}) translateX(-${translateY}px)`,
      opacity: opacity,
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      willChange: 'transform, opacity',
    }
  }

  return (
    <div className="indexHome_container">
      <section className="indexHome">
        <div className="indexHome__content">
          <h1 className="indexHome__title">
            Ofrecemos soluciones <br /> a medida para el <br />
            transporte de carga
          </h1>
          <p className="indexHome__description">
            Le ofrecemos una excelente experiencia, eficiente en costos,calidad en servicio y
            atención pre y post venta.
          </p>
          <Link
            href="/contacto"
            className="indexHome__cta"
            title="Contáctanos para soluciones de transporte de carga"
            aria-label="Contáctanos para soluciones de transporte de carga"
          >
            <Image
              src="/row_left.svg"
              alt="Más información sobre nuestras soluciones de transporte"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="indexHome__image">
          <Image
            src="/image_inicio.png"
            alt="Transporte de carga con Multinacional Service CORP SAC"
            width={1000}
            height={1000}
            priority
            style={calculateTransform()}
          />
        </div>
      </section>
    </div>
  )
}
