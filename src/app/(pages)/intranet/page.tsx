'use client'

import { useState } from 'react'
import ManifestFilter from './components/manifestFilter/ManifestFilter'
import TableManifestos from './components/tableManifestos/TableManifestos'
import { Manifiesto } from '@/interfaces'

export default function Intranet() {
  const [manifestos, setManifestos] = useState<Manifiesto[]>([])

  return (
    <>
      <ManifestFilter setManifestos={setManifestos} />
      <TableManifestos manifestos={manifestos} />
    </>
  )
}
