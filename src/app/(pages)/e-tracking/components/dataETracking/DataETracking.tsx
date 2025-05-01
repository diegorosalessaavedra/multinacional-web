'use client'
import { LatamResponse, PickUp } from '@/interfaces'
import './dataETracking.css'
import React from 'react'

interface Props {
  dataTraking: LatamResponse | undefined
  pickUp: PickUp | undefined
}

// Declarar el array de ciudades antes de usarlo
const citys = [
  { code: 'LIM', name: 'LIMA' },
  { code: 'TBP', name: 'TUMBES' },
  { code: 'PIU', name: 'PIURA' },
  { code: 'CIX', name: 'CHICLAYO' },
  { code: 'TRU', name: 'TRUJILLO' },
  { code: 'AQP', name: 'AREQUIPA' },
  { code: 'TCQ', name: 'TACNA' },
  { code: 'CJA', name: 'CAJAMARCA' },
  { code: 'CUZ', name: 'CUSCO' },
  { code: 'IQT', name: 'IQUITOS' },
  { code: 'PCL', name: 'PUCALLPA' },
  { code: 'TPP', name: 'TARAPOTO' },
  { code: 'PEM', name: 'PUERTO MALDONADO' },
  { code: 'AYP', name: 'AYACUCHO' },
  { code: 'JUL', name: 'JULIACA' },
]

export default function DataETracking({ dataTraking, pickUp }: Props) {
  function citysFind(text: string | undefined) {
    if (!text) return undefined
    const found = citys.find((city) => city.code === text)
    return found ? found.name : undefined
  }

  function formatStringWithBR(text: string | undefined) {
    if (!text) return null
    const parts = text.split('<br>')

    // Renombramos la variable local para evitar conflicto con el array global 'citys'
    const cityCodes = parts[1] ? parts[1].split('-') : []

    return (
      <p>
        {parts[0]}
        <br />
        {cityCodes.map((cityCode, index) => (
          <React.Fragment key={index}>
            {citysFind(cityCode) || cityCode}
            {index !== cityCodes.length - 1 && ' - '}
          </React.Fragment>
        ))}
      </p>
    )
  }

  return (
    <>
      {dataTraking?.code ? (
        <section className="dataETracking">
          <h2 className="dataETracking_code">{dataTraking?.code}</h2>

          <div className="dataETracking_details">
            <table>
              <thead>
                <tr>
                  <th style={{ borderLeft: '0px' }}>Origen</th>
                  <th>Destino</th>
                  <th>Vuelo</th>
                  <th>
                    Estimado tiempo <br />
                    de despegue
                  </th>
                  <th>
                    Estimado tiempo <br />
                    de aterrizaje
                  </th>
                  <th>Piezas</th>
                  <th>Peso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '5px', backgroundColor: 'white' }}> </td>
                </tr>

                {dataTraking?.details.map((detail, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? 'dataETracking_details-rowEven'
                        : 'dataETracking_details-rowOdd'
                    }
                  >
                    <td>{citysFind(detail.Origen)}</td>
                    <td>{citysFind(detail.Destino)}</td>
                    <td>{detail.Vuelos}</td>
                    <td>{formatStringWithBR(detail.ETD)}</td>
                    <td>{formatStringWithBR(detail.ETA)}</td>
                    <td>{detail.Piezas}</td>
                    <td>{detail.Peso.slice(0, -1)} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dataETracking_events">
            <h3>Seguimiento de embarque</h3>
            <table>
              <thead>
                <tr>
                  <th style={{ borderLeft: '0px' }}>Evento</th>
                  <th>Ciudad</th>
                  <th>Vuelos</th>
                  <th>Piezas / Peso Real</th>
                  <th>Tiempo real</th>
                  <th>Parcialización</th>
                  <th>Consignatario</th>
                </tr>
              </thead>
              <tbody>
                {}
                <tr>
                  <td style={{ padding: '5px', backgroundColor: 'white' }}> </td>
                </tr>
                <tr className="dataETracking_events-rowEven">
                  <td style={{ color: '#1a66a3' }}>Recogo de carga en planta</td>

                  <td style={{ color: '#1a66a3' }}>LIMA</td>
                  <td></td>
                  <td></td>
                  <td style={{ color: '#1a66a3' }}>
                    {pickUp?.pick_up === 'PENDIENTE'
                      ? 'Pendiente de Realizar'
                      : pickUp?.pick_up_hora}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="dataETracking_events-rowEven">
                  <td style={{ color: '#1a66a3' }}>Ingreso a terminal de carga </td>

                  <td style={{ color: '#1a66a3' }}>LIMA</td>
                  <td></td>
                  <td></td>
                  <td style={{ color: '#1a66a3' }}>
                    {pickUp?.ingreso_carga === 'PENDIENTE'
                      ? 'Pendiente de Realizar'
                      : pickUp?.ingreso_carga_hora}
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                {dataTraking?.events
                  .slice()
                  .reverse()
                  .map((event, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? 'dataETracking_events-rowOdd'
                          : 'dataETracking_events-rowEven'
                      }
                    >
                      <td>{event.Descripción}</td>
                      <td>{citysFind(event.Posta)}</td>
                      <td>{formatStringWithBR(event.Vuelos)}</td>
                      <td>{event['Piezas/Peso Real']?.slice(0, -4)} Kg</td>
                      <td>{event['Tiempo real']}</td>
                      <td>{event.SHSH ? 'Si' : ''}</td>
                      <td>{event.Adicional}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <div className="dataETracking_message">
          <p>
            Guia aera inexistente, verifique que su valor sea correcto o contacte al area de ventas
          </p>
        </div>
      )}
    </>
  )
}
