// REACT & NEXT
import React from 'react'
import dynamic from 'next/dynamic'

const NoSSR = dynamic(
  () => import('../components/NoSSR.js'),
  { ssr: false }
)

export default NoSSR



