import Input from '@/hooks/input/Input'
import './manifestFilter.css'
import { DataFilter, Manifiesto } from '@/interfaces'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getAuthHeaders } from '@/utils/getToken'
import useIntersectionObserverOnResize from '@/hooks/useIntersectionObserverOnResize'

const date = new Date().toISOString().split('T')[0]

interface Props {
  setManifestos: (value: Manifiesto[]) => void
}

export default function ManifestFilter({ setManifestos }: Props) {
  const [datasFilter, setDatasFilter] = useState<DataFilter>({
    fecha_inicio: date,
    fecha_final: date,
    por_cliente: null,
    por_destino: null,
    por_os: null,
  })

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_URL_API}/sitio-web?fecha_inicio=${datasFilter.fecha_inicio}&fecha_final=${datasFilter.fecha_final}&por_cliente=${datasFilter.por_cliente}&por_destino=${datasFilter.por_destino}&por_os=${datasFilter.por_os}`

    axios
      .get(url, getAuthHeaders())
      .then((res) => setManifestos(res.data.manifiestos))
      .catch((err) => console.log(err))
  }, [setManifestos, datasFilter])

  const handleInputChange = (name: keyof DataFilter) => (value: string | File | null) => {
    setDatasFilter({
      ...datasFilter,
      [name]: value,
    })
  }

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    window.location.reload()
  }

  useIntersectionObserverOnResize('manifestFilter')

  return (
    <section className="manifestFilter" id="manifestFilter">
      <article className="manifestFilter_title-container">
        <h1 className="manifestFilter-title title">Tus Manifiestos</h1>
        {document.cookie && (
          <button className="manifestFilter_title-button button_animated" onClick={handleLogout}>
            <p>Cerrar Sesión</p>
          </button>
        )}
      </article>
      <div className="manifestFilter_inputs">
        <Input
          className="manifestFilter_input"
          id="fecha_inicio"
          isRequired={true}
          label="Fecha de Inicio"
          name="fecha_inicio"
          type="date"
          value={datasFilter.fecha_inicio}
          onChange={handleInputChange('fecha_inicio')}
        />
        <Input
          className="manifestFilter_input"
          id="fecha_final"
          isRequired={true}
          label="Fecha de Final"
          name="fecha_final"
          type="date"
          value={datasFilter.fecha_final}
          onChange={handleInputChange('fecha_final')}
        />
        <Input
          className="manifestFilter_input"
          id="por_cliente"
          isRequired={true}
          label="Cliente"
          name="por_cliente"
          type="text"
          value={datasFilter.por_cliente ?? ''}
          onChange={handleInputChange('por_cliente')}
        />
        <Input
          className="manifestFilter_input"
          id="por_destino"
          isRequired={true}
          label="Destino"
          name="por_destino"
          type="text"
          value={datasFilter.por_destino ?? ''}
          onChange={handleInputChange('por_destino')}
        />
        <Input
          className="manifestFilter_input"
          id="por_os"
          isRequired={true}
          label="Orden de Servicio"
          name="por_os"
          type="text"
          value={datasFilter.por_os ?? ''}
          onChange={handleInputChange('por_os')}
        />
      </div>
    </section>
  )
}
