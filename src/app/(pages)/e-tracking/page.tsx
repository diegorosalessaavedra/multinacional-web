'use client'

import { useState } from 'react'
import IndexETracking from './components/indexETracking/IndexETracking'
import DataETracking from './components/dataETracking/DataETracking'
import { LatamResponse } from '@/interfaces'
import Loading from '@/hooks/Loading'

export default function Etracking() {
  const [dataTraking, setDataTraking] = useState<LatamResponse | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <>
      {loading && <Loading />}

      <IndexETracking setDataTraking={setDataTraking} setLoading={setLoading} />
      {dataTraking && <DataETracking dataTraking={dataTraking} />}
    </>
  )
}
