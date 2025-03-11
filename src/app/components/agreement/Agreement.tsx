'use client'

import Image from 'next/image'
import './agreement.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

export default function Agreement() {
  useIntersectionObserverOnResize('agreement')

  return (
    <div className="agreement_container">
      <section className="agreement" id="agreement">
        <h2 className="agreement_h2">Convenios</h2>
        <p className="agreement_p">
          Contamos con <strong>convenios con todas las aerolíneas</strong> que operan en el Perú
          tales como:
        </p>
        <div className="agreement_images">
          <Image src="/logo_latam.png" alt="logo_latam" width={500} height={500} />
          <Image src="/logo_aercaribe.png" alt="logo_aercaribe" width={500} height={500} />
          <Image src="/logo_starperu.png" alt="logo_starperu" width={500} height={500} />
          <Image src="/logo_sky.png" alt="logo_sky" width={500} height={500} />
        </div>
      </section>
    </div>
  )
}
