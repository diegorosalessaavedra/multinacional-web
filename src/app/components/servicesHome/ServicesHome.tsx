'use client'
import Image from 'next/image'
import './servicesHome.css'
import Link from 'next/link'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

export default function ServicesHome() {
  useIntersectionObserverOnResize('servicesHome')

  return (
    <div className="servicesHome_container">
      <section className="servicesHome" id="servicesHome">
        <Link href="/servicios" className="servicesHome_transport">
          <Image
            src="/image_servicio.jpg"
            alt="Más información sobre nuestras soluciones de transporte"
            className="servicesHome_transport_img"
            width={600}
            height={600}
          />
          <article className="servicesHome_transport_article">
            <h2>
              Servicio de <br /> transporte de carga
            </h2>
            <button>
              <Image
                src="/row_left_blue.svg"
                alt="Más información sobre nuestras soluciones de transporte"
                width={100}
                height={100}
              />
              <p>Ver más</p>
            </button>
          </article>
        </Link>
        <article className="servicesHome-data">
          <h2 className="servicesHome-data-h2">
            Buscamos <br /> convertirnos en su <br />
            <strong>socio estratégico</strong>
          </h2>
          <p className="servicesHome-data-p">
            Por ello, ofrecemos <strong>servicios de transporte integrales</strong>
            ,los cuales son llevados a cabo por profesionales con amplia experiencia en el rubro.
          </p>
          <p className="servicesHome-data-p">
            Estamos comprometidos con realizar las tareas asignadas en condiciones más óptimas,
            rigiéndonos siempre bajo las normas establecidas.
          </p>
        </article>
      </section>
    </div>
  )
}
