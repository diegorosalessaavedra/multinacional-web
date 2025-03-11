'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './partnersAndClients.css'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

// Array con las imágenes de cada slide (cada slide contiene dos imágenes)
const slides = [
  [
    { src: '/partners/multinacional-service-corp-sac-cliente1.png', alt: 'Cliente 1' },
    { src: '/partners/multinacional-service-corp-sac-cliente2.png', alt: 'Cliente 2' },
  ],
  [
    { src: '/partners/multinacional-service-corp-sac-cliente3.png', alt: 'Cliente 3' },
    { src: '/partners/multinacional-service-corp-sac-cliente4.png', alt: 'Cliente 4' },
  ],
  [
    { src: '/partners/multinacional-service-corp-sac-cliente5.png', alt: 'Cliente 5' },
    { src: '/partners/multinacional-service-corp-sac-cliente6.png', alt: 'Cliente 6' },
  ],
  [
    { src: '/partners/multinacional-service-corp-sac-cliente7.png', alt: 'Cliente 7' },
    { src: '/partners/multinacional-service-corp-sac-cliente8.png', alt: 'Cliente 8' },
  ],
  [
    { src: '/partners/multinacional-service-corp-sac-cliente9.png', alt: 'Cliente 9' },
    { src: '/partners/multinacional-service-corp-sac-cliente10.png', alt: 'Cliente 10' },
  ],
  [
    { src: '/partners/multinacional-service-corp-sac-cliente11.png', alt: 'Cliente 11' },
    { src: '/partners/multinacional-service-corp-sac-cliente12.png', alt: 'Cliente 12' },
  ],
  [
    { src: '/partners/multinacional-service-corp-sac-cliente13.png', alt: 'Cliente 13' },
    { src: '/partners/multinacional-service-corp-sac-cliente14.png', alt: 'Cliente 14' },
  ],
  [
    { src: '/partners/avigen.png', alt: 'Avigen' },
    { src: '/partners/novogen_layers_logo.jpeg', alt: 'Novogen Layers' },
  ],
]

export default function PartnersAndClients() {
  useIntersectionObserverOnResize('partnersAndClients')

  return (
    <section className="partnersAndClients" id="partnersAndClients">
      <div className="partnersAndClients_content">
        <h1 className="partnersAndClients_content-title title">Socios y clientes</h1>
        <p className="partnersAndClients_content-description">
          En Multinacional Service Corp SAC estamos orgullosos de <br />
          formar alianzas estratégicas con nuestra cartera de clientes.
        </p>
        <p className="partnersAndClients_content-description">
          Esto nos ha permitido crecer y generar una sinergia referente <br /> a experiencias, lo
          cual se ve reflejado en la fortificación de los <br /> diferentes vínculos comerciales que
          trascienden en el tiempo.
        </p>
        <p className="partnersAndClients_content-p">Contáctanos:</p>
        <Link
          href="tel:51983806682"
          target="_blank"
          className="button_animated"
          title="Contáctanos para soluciones de transporte de carga"
          aria-label="Contáctanos para soluciones de transporte de carga"
        >
          <svg
            xmlns="http://www.w3.org/10000/svg"
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

      <div className="partnersAndClients_swiper">
        <div className="swiper-pagination"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            nextEl: '.OtherTrips-button-next-custom',
            prevEl: '.OtherTrips-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="partnersAndClients_swiper-div">
                {slide.map((img, i) => (
                  <Image
                    key={i}
                    className="w-full object-cover"
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
