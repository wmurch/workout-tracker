import React from 'react'
import NavData from '../components/NavData'
import ActiveData from '../components/ActiveData'

export default function Active() {
  return (
    <>
      <header>
        <NavData />
      </header>
      <main>
        <ActiveData />
      </main>
    </>
  )
}
