'use client'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import './indexETracking.css'

import { LatamResponse, PickUp } from '@/interfaces'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'
import { useParams } from 'next/navigation'

interface Props {
  setDataTraking: (value: LatamResponse) => void
  setPickUp: (value: PickUp) => void
  setLoading: (value: boolean) => void
}

export default function IndexETracking({ setDataTraking, setLoading, setPickUp }: Props) {
  const params = useParams()
  const id = typeof params?.id === 'string' ? params.id : params?.id?.[0] || ''

  const [code, setCode] = useState<string>('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null) // Evita múltiples llamados

  const handleCode = async (trackingCode: string) => {
    if (!trackingCode) return

    setLoading(true)
    try {
      const url = `${process.env.NEXT_PUBLIC_URL_API}/e-tracking/`
      const { data: responseData } = await axios.post(url, { code: trackingCode })

      if (responseData?.parsedData) {
        setDataTraking(responseData.parsedData)
      }

      const url2 = `${process.env.NEXT_PUBLIC_URL_API}/e-tracking/${trackingCode}`
      const { data: responseData2 } = await axios.get(url2)

      if (responseData2?.data) {
        setPickUp(responseData2.data)
      }
    } catch (error) {
      console.error('Error fetching tracking data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!id) return

    if (timeoutRef.current) clearTimeout(timeoutRef.current) // Elimina cualquier timeout anterior

    timeoutRef.current = setTimeout(() => {
      handleCode(id)
    }, 500) // Espera 1s antes de ejecutar

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [id, setDataTraking, setPickUp, setLoading])

  useIntersectionObserverOnResize('indexETracking')

  return (
    <section className="indexETracking" id="indexETracking">
      <h1 className="indexETracking-title title">Seguimiento</h1>
      <article className="indexETracking_article">
        <p className="indexETracking_article-description">
          Realiza seguimiento a tu envío. Ingresa el número de guía. Tienen que ser 8 dígitos,
          incluyendo ceros a la izquierda.
        </p>
        <div className="indexETracking_article-div">
          <input
            type="text"
            placeholder="00000000"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={8}
          />
          <button
            className="button_animated indexETracking_article-button"
            onClick={() => handleCode(code)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor">
              <path d="M7.5,16.5L14,10H0V8h14L7.5,1.5L9,0l9,9l-9,9L7.5,16.5z"></path>
            </svg>
            <div className="transition"></div>
          </button>
        </div>
      </article>
    </section>
  )
}
