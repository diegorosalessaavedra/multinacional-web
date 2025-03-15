import { Manifiesto } from '@/interfaces'
import './tableManifestos.css'

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
              <th>FRANJA</th>
              <th>VUELO</th>
              <th>ITINERARIO</th>
              <th>RECOGO DE CARGA</th>

              <th>CONSIGNATARIO 1</th>
              <th>CONSIGNATARIO 2</th>
              <th>OBSERVACIONES</th>
            </tr>
          </thead>
          <tbody>
            {manifestos?.map((manifest, index) => (
              <tr
                key={manifest.id}
                className={index % 2 === 0 ? 'tableManifestos-rowEven' : 'tableManifestos-rowOdd'}
              >
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{manifest.fecha_manifiesto}</td>
                <td>{manifest.proveedor}</td>
                <td style={{ minWidth: '200px' }}>{manifest.cliente.nombre}</td>
                <td>{manifest.tipo_carga}</td>
                <td>{manifest.cajas_enviadas}</td>
                <td>{manifest.destino}</td>
                <td>{manifest.orden_servicio}</td>
                <td>{manifest.producto}</td>
                <td>{manifest.vuelo}</td>
                <td>{manifest.itinerario}</td>
                <td>{manifest.pick_up_hora}</td>
                <td style={{ minWidth: '200px' }}>{manifest.consignatario1}</td>
                <td style={{ minWidth: '200px' }}>{manifest.consignatario2}</td>
                <td>{manifest.observacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
