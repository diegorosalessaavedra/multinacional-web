'use client'
import axios from 'axios'
import { useState } from 'react'
import './indexETracking.css'

import { LatamResponse, PickUp } from '@/interfaces'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

interface Props {
  setDataTraking: (value: LatamResponse) => void
  setPickUp: (value: PickUp) => void

  setLoading: (value: boolean) => void
}

export default function IndexETracking({ setDataTraking, setLoading, setPickUp }: Props) {
  const [code, setCode] = useState<string>('')

  const handleCode = async () => {
    setLoading(true)
    const url = `${process.env.NEXT_PUBLIC_URL_API}/e-tracking/`
    const data = { code }
    try {
      const res = await axios.post(url, data)
      setDataTraking(res.data.parsedData)
    } finally {
      setLoading(false)
    }

    const url2 = `${process.env.NEXT_PUBLIC_URL_API}/e-tracking/${code}`
    try {
      const res2 = await axios.get(url2)
      setPickUp(res2.data.data)
    } finally {
      setLoading(false)
    }
  }
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
          <button className=" button_animated indexETracking_article-button" onClick={handleCode}>
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
