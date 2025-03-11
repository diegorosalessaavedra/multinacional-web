'use client'

import Image from 'next/image'
import './missionVision.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

export default function MissionVision() {
  useIntersectionObserverOnResize('missionVision')

  return (
    <section className="missionVision" id="missionVision">
      <div className="missionVision_mision">
        <Image
          className="missionVision_mision-img"
          src="/image_mision.jpg"
          alt="Misión"
          width={1000}
          height={1000}
        />
        <article className="missionVision_mision-article">
          <h2>Misión</h2>
          <p>
            Brindar al cliente una experiencia satisfactoria en cuanto a transporte de carga,
            resaltando la seguridad, integridad y rapidez del servicio. Además, estamos
            comprometidos con nuestra comunidad y el medioambiente, por lo que nos regimos bajo una
            ética rigurosa.
          </p>
        </article>
      </div>

      <div className="missionVision_mision">
        <Image
          className="missionVision_mision-img"
          src="/image_vision.jpg"
          alt="Misión"
          width={1000}
          height={1000}
        />
        <article className="missionVision_mision-article">
          <h2>Visión</h2>
          <p>
            Convertirnos en una empresa líder en el rubro a nivel nacional, que destaca por la
            calidad del trabajo realizado, el enfoque a las necesidades del cliente y la
            transparencia.
          </p>
        </article>
      </div>
    </section>
  )
}
