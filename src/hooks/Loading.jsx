import Image from 'next/image'
import './loading.css'

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading_sniper">
        <Image src="/iso_logo_light.svg" alt="multinacional" width={500} height={500} />
        <div className="spinner"> </div>
      </div>
      <p className="loading-text">
        Cargando... <br />
        Multinacional Service Corp
      </p>
    </div>
  )
}
