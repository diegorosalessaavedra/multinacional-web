export interface LatamResponse {
  basic: BasicInfo
  details: Detail[]
  events: EventInfo[]
  code: string
}

export interface BasicInfo {
  Commodity: string
  Destino: string
  Origen: string
  Peso: string
  Piezas: string
  Productos: string
}

export interface Detail {
  Destino: string
  ETA: string
  ETD: string
  Origen: string
  Peso: string
  Piezas: string
  Vuelos: string
}

export interface EventInfo {
  Adicional: string | undefined
  Descripción: string
  Evento: string
  'Piezas/Peso Real': string
  Posta: string
  SHSH: string | undefined
  'Tiempo real': string | undefined
  Vuelos: string | undefined
}

export interface DataFilter {
  fecha_inicio: string
  fecha_final: string
  por_cliente: string | null
  por_destino: string | null
  por_os: string | null
}

export interface Manifiesto {
  id: number
  id_client: number
  empresa: string
  fecha_manifiesto: string
  proveedor: string
  destino: string
  vuelo: string
  producto: string
  cantidad: string
  itinerario: string
  consignatario1: string
  consignatario2: string
  observacion: string
  factura: boolean
  orden_servicio: string
  vuelo_enviado: string | null
  cajas_enviadas: string | null
  itinerario_enviado: string | null
  estado_envio: string
  status: string
  createdAt: string
  updatedAt: string
  cliente: Cliente
  tipo_carga: string | null
  pick_up_hora: string | null
}

export interface Cliente {
  id: number
  nombre: string
  correo: string
  dni: string
  telefono: string
  status: string
  createdAt: string
  updatedAt: string
}

export interface PickUp {
  id: number
  pick_up: string
  pick_up_hora: string | null
}
