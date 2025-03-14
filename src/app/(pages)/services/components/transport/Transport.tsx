'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './transport.css'
import '../../../aboutme/components/ourCompany/ourCompany.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

export default function Transport() {
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

  useIntersectionObserverOnResize('service')

  return (
    <section className="ourCompany" id="service">
      <div className="ourCompany_content">
        <h1 className="ourCompany_title title">
          Transporte <br />
          de carga
        </h1>
        <p className="ourCompany_description transport_content-description">
          Somos expertos en el{' '}
          <strong>
            transporte de carga de la industria <br /> avícola
          </strong>
          , contamos con una flota de camiones debidamente <br /> acondicionados para el transporte
          seguro de pollos bebe de <br />
          un día de nacido. <br />
        </p>
        <p className="ourCompany_description transport_content-description">
          Ofrecemos transporte terrestre llegando a todo el Perú a <br />
          solicitud del cliente, cubriendo la Costa, Sierra y Selva.
        </p>

        <p className="transport_content-p">Contáctanos:</p>
        <Link
          href="tel:51983806682"
          target="_blank"
          className="button_animated ourCompany_button"
          title="Contáctanos para soluciones de transporte de carga"
          aria-label="Contáctanos para soluciones de transporte de carga"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.5"
            height="20"
            viewBox="0 0 12.5 20"
            fill="currentColor"
          >
            <path d="M10.625,0H1.875A1.875,1.875,0,0,0,0,1.875v16.25A1.875,1.875,0,0,0,1.875,20h8.75A1.875,1.875,0,0,0,12.5,18.125V1.875A1.875,1.875,0,0,0,10.625,0ZM6.25,18.75A1.25,1.25,0,1,1,7.5,17.5,1.249,1.249,0,0,1,6.25,18.75Zm4.375-4.219a.47.47,0,0,1-.469.469H2.344a.47.47,0,0,1-.469-.469V2.344a.47.47,0,0,1,.469-.469h7.813a.47.47,0,0,1,.469.469Z"></path>
          </svg>
          <p>+51 983 806 682</p>
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
