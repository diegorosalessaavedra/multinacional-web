'use client'

import { useState } from 'react'
import IndexETracking from './components/indexETracking/IndexETracking'
import DataETracking from './components/dataETracking/DataETracking'
import { LatamResponse, PickUp } from '@/interfaces'
import Loading from '@/hooks/Loading'

export default function Etracking() {
  const [dataTraking, setDataTraking] = useState<LatamResponse | undefined>()
  const [pickUp, setPickUp] = useState<PickUp>()
  const [loading, setLoading] = useState<boolean>(false)
  console.log(dataTraking)

  return (
    <>
      {loading && <Loading />}

      <IndexETracking
        setDataTraking={setDataTraking}
        setPickUp={setPickUp}
        setLoading={setLoading}
      />

      {dataTraking && <DataETracking dataTraking={dataTraking} pickUp={pickUp} />}
    </>
  )
}
