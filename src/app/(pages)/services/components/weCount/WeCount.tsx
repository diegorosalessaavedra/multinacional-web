'use client'

import Image from 'next/image'
import './weCount.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

export default function WeCount() {
  useIntersectionObserverOnResize('weCount')

  return (
    <section className="weCount" id="weCount">
      <h2 className="weCount_title title_center">Contamos con:</h2>

      <div className="weCount_contents">
        <div className="weCount_content">
          <article className="weCount_content-article">
            <Image
              className="weCount_content-article-img"
              src="/icon_checklist.svg"
              alt="icon_checklist"
              width={100}
              height={100}
            />
            <p className="weCount_content-article-p">
              Alianzas con diferentes <strong>aerolíneas a nivel nacional</strong> para el
              transporte aéreo de pollos bebe de un día de nacido, nos ajustamos a los estándares
              mas altos de las diferentes aerolíneas para cumplir con todos los requisitos de las
              mismas.
            </p>
          </article>
          <article className="weCount_content-article">
            <Image
              className="weCount_content-article-img"
              src="/icon_checklist.svg"
              alt="icon_checklist"
              width={100}
              height={100}
            />
            <p className="weCount_content-article-p">
              Constante comunicación con las diferentes entidades reguladoras del transporte de
              carga para pollos bebe como el <strong>MTC, DGAC y SENASA </strong> para estar al
              pendiente de todo nuevo requisitos o estándar que estas soliciten.
            </p>
          </article>
        </div>
        <Image
          className="weCount_contents-imageMid"
          src="/image_camion.jpg"
          alt=""
          width={1000}
          height={1000}
        />
        <div className="weCount_content">
          <article className="weCount_content-article">
            <Image
              className="weCount_content-article-img"
              src="/icon_checklist.svg"
              alt="icon_checklist"
              width={100}
              height={100}
            />
            <p className="weCount_content-article-p">
              Registro fotografico y videográfico en tiempo real para evidenciar y asegurar una
              correcta manipulación de la carga.
            </p>
          </article>
          <article className="weCount_content-article">
            <Image
              className="weCount_content-article-img"
              src="/icon_checklist.svg"
              alt="icon_checklist"
              width={100}
              height={100}
            />
            <p className="weCount_content-article-p">
              Servicio de control de temperatura en tiempo real a travez de un dispositivo
              electrónico data logger, el cual va adherido a una caja de pollos bebe de un día de
              nacido, para de esta manera monitorear la temperatura durante todo el trayecto del
              transporte ya sea via aerea o terrestre.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
