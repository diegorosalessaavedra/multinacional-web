'use client'

import Image from 'next/image'
import './ourFleet.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

export default function OurFleet() {
  useIntersectionObserverOnResize('ourFleet')

  return (
    <div className="ourFleet_contianer">
      <section className="ourFleet" id="ourFleet">
        <article className="ourFleet_article">
          <h2 className="ourFleet_article-h2">Nuestra flota</h2>
          <p className="ourFleet_article-p">
            Contamos con unidades de diferentes capacidades que abarcan desde las 2 hasta las 7
            toneladas, cada una de ellas con motorizaciones capaces de poder cubrir toda la
            geografía agreste del Perú, nuestras unidades cuentan con carrocerías de acero contra
            placado para un correcto y seguro traslado de la mercancía a transportar.
          </p>
          <div className="ourFleet_article_images">
            <Image src="/logo_hyundai.svg" alt="hyundai" width={300} height={300} />
            <Image src="/logo_isuzu.svg" alt="isuzu" width={300} height={300} />
            <Image src="/logo_jac.svg" alt="jac" width={300} height={300} />
            <Image src="/logo_hino.svg" alt="hino" width={300} height={300} />
          </div>
        </article>
        <div className="ourFleet_image">
          <Image src="/image_flota.png" alt="flota" width={1000} height={1000} />
        </div>
      </section>
    </div>
  )
}
