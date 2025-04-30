'use client'

import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { Manifiesto } from '@/interfaces'
import Loading from '@/hooks/Loading'
import { useParams } from 'next/navigation'
import axios from 'axios'
import formatDate from '@/hooks/formatDate'
import './styles/generateImage.css'
import Image from 'next/image'
import { formatFirstHourAndSubtract, formatLastHour } from '@/hooks/formatHoure'

export default function EtrackingId() {
  const { id } = useParams()
  const divRef = useRef(null)

  const [manifiesto, setManifiesto] = useState<Manifiesto | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  const downloadImage = () => {
    const element = divRef.current
    if (!element) return

    html2canvas(element).then((canvas) => {
      const link = document.createElement('a')
      link.download = 'manifiesto.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    })
  }

  useEffect(() => {
    setLoading(true)
    const url = `${process.env.NEXT_PUBLIC_URL_API}/sitio-web/${id}`
    axios
      .get(url)
      .then((res) => {
        setManifiesto(res.data.manifiesto)
        // Asegura que el DOM se actualice antes de capturar
        setTimeout(() => {
          downloadImage()
        }, 500) // Puedes ajustar este tiempo si el render es lento
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div className="EtrackingId_container">
      {loading && <Loading />}
      {manifiesto && (
        <div className="GenerateImage_contianer " ref={divRef} style={{ padding: '10px' }}>
          {manifiesto?.empresa === 'Chickenbaby' ? (
            <Image
              src="/logoc.jpg"
              alt=""
              className="GenerateImage_img"
              style={{
                width: '120px',
                height: '100px',
                objectFit: 'cover',
                marginBottom: '0px',
              }}
              width={300}
              height={300}
            />
          ) : (
            <Image src="/logom.jpg" alt="" className="GenerateImage_img" width={300} height={300} />
          )}
          <table
            className={`custom-table ${manifiesto?.empresa === 'Chickenbaby' ? 'Chickenbaby' : ''}`}
          >
            <thead>
              <tr>
                <th>CONSIGNATARIO</th>
                <th>BULTOS</th>
                <th>DESTINO</th>
                <th>O.SERVICIO</th>
                <th>AEROLINIA</th>
                <th>VUELO</th>
                <th>FEC. ENVIO</th>
                <th>HORA SALIDA</th>
                <th>HORA ARRIBO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {manifiesto?.consignatario1}
                  {' - '}
                  {manifiesto?.consignatario2}
                </td>
                <td>{manifiesto?.cantidad}</td>
                <td>{manifiesto?.destino}</td>
                <td>{manifiesto?.orden_servicio}</td>
                <td>LATAM</td>
                <td>{manifiesto?.vuelo}</td>
                <td>{formatDate(manifiesto?.fecha_manifiesto)}</td>
                <td> {formatFirstHourAndSubtract(manifiesto?.itinerario)}</td>
                <td> {formatLastHour(manifiesto?.itinerario)}</td>
              </tr>
            </tbody>
          </table>

          <p className="GenerateImage_p text-ellipsis">
            <b>Nota:</b> Una vez arribada la carga a destino verificar el estado de la misma antes
            de retirarla, en caso de encontrar alguna no conformidad debera registrarla en el
            documento{' '}
            <span>
              &quot;ACTA DE ENTREGA DE CONFORMIDAD Ó CARGO DE ENTREGA DE CARGA Y PARALELAMENTE EL
              LIBRO DE RECLAMACIONES&quot;
            </span>{' '}
            , en caso de no hacerlo no habrá lugar a un posible reclamo ante la aerolinea. Para
            darle seguimiento al estado de su embarque acceder al siguiente enlace:{' '}
            <a href="https://multinacional-service.com/e-tracking" target="_blank">
              multinacional-service.com/e-tracking
            </a>
          </p>
          {manifiesto?.empresa !== 'Chickenbaby' && (
            <Image
              src="/pixelcut.png"
              alt=""
              style={{ marginTop: '20px' }}
              width={500}
              height={500}
            />
          )}
          <h2
            className="generateImage_h2"
            style={{
              width: 'min-content',
              whiteSpace: 'nowrap',
              margin: 'auto',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              fontSize: '1.1rem',
            }}
          >
            www.multinacional-service.com
          </h2>
        </div>
      )}
    </div>
  )
}
