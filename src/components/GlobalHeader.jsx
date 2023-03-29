import React from 'react'
import '../styles/GlobalHeader.css'

const GlobalHeader = () => {
  return (
    <div className='global-header-container'>
      <h2>Javier Rodríguez</h2>
      <select className='lang-selector'>
        <option defaultValue='Languages'> Choose language / Elige idioma </option>
        <option defaultValue='Languages'> English </option>
        <option defaultValue='Languages'> Spanish </option>
      </select>
    </div>
  )
}

export default GlobalHeader
