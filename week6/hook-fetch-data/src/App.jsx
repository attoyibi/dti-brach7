import React, { useState } from 'react'
import BodyLeft from './BodyLeft'

export default function App() {
  const name = "rizky"
  return (
    <div>
      <BodyLeft name={name} />
    </div>
  )
}
