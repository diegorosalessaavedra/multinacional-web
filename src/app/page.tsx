import Image from 'next/image'
import IndexHome from './components/indexHome/IndexHome'
import ServicesHome from './components/servicesHome/ServicesHome'
import UsInFigures from './components/usInFigures/UsInFigures'
import './page.css'
import OurFleet from './components/ourFleet/OurFleet'
import Agreement from './components/agreement/Agreement'

export default function Home() {
  return (
    <main className="home">
      <div className="home_background">
        <Image
          src="/iso_logo.svg"
          alt="Transporte de carga con Multinacional Service CORP SAC"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <IndexHome />
      <ServicesHome />
      <UsInFigures />
      <OurFleet />
      <Agreement />
    </main>
  )
}
