import { Manifiesto } from '@/interfaces'
import './tableManifestos.css'
import formatDate from '@/hooks/formatDate'
import Link from 'next/link'
import { FaLightbulb } from 'react-icons/fa'

interface Props {
  manifestos: Manifiesto[] | undefined
}

export default function TableManifestos({ manifestos }: Props) {
  return (
    <section className="tableManifestos">
      <div className="tableManifestos_wrapper">
        <table className="tableManifestos_table">
          <thead>
            <tr>
              <th>NRO</th>
              <th>FECHA</th>
              <th>PROVEEDOR</th>
              <th>CLIENTE</th>
              <th>
                TIPO DE <br />
                CARGA
              </th>
              <th>CAJAS</th>
              <th>DESTINO</th>
              <th>
                ORDEN DE <br />
                SERVICIO
              </th>
              <th>VUELO</th>
              <th>ITINERARIO</th>
              <th>
                RECOJO DE CARGA <br />
                EN PLANTA
              </th>

              <th>CONSIGNATARIO 1</th>
              <th>CONSIGNATARIO 2</th>
              <th>OBSERVACIONES</th>
              <th>NOTIFY</th>
            </tr>
          </thead>
          <tbody>
            {manifestos?.map((manifest, index) => (
              <tr
                key={manifest.id}
                className={index % 2 === 0 ? 'tableManifestos-rowEven' : 'tableManifestos-rowOdd'}
              >
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{formatDate(manifest.fecha_manifiesto)}</td>
                <td>{manifest.proveedor}</td>
                <td style={{ minWidth: '200px' }}>{manifest.cliente.nombre}</td>
                <td>{manifest.tipo_carga}</td>
                <td>{manifest.cantidad}</td>
                <td>{manifest.destino}</td>
                <td>
                  <Link
                    href={`/e-tracking/${manifest.orden_servicio}`}
                    title="Conócenos - Quiénes somos"
                    target="_blank"
                  >
                    {manifest.orden_servicio}
                  </Link>
                </td>
                <td>{manifest.vuelo}</td>
                <td>{manifest.itinerario}</td>
                <td>{manifest.pick_up_hora}</td>
                <td style={{ minWidth: '200px' }}>{manifest.consignatario1}</td>
                <td style={{ minWidth: '200px' }}>{manifest.consignatario2}</td>
                <td>{manifest.observacion}</td>
                <td style={{ textAlign: 'center' }}>
                  <Link
                    href={`/notify/${manifest.id}`}
                    title="Nuestros servicios de transporte de carga"
                    target="_blank"
                    style={{
                      fontSize: '1.5rem',
                      color: `${manifest.orden_servicio.length > 0 ? '#13a216' : '#ff6200'}`,
                    }}
                  >
                    <FaLightbulb />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
