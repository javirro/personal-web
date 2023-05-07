import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../redux/languageSlice'
import '../styles/GlobalHeader.css'

const GlobalHeader = () => {
  const dispatch = useDispatch()
  const languageSelector = (ev) => dispatch(changeLanguage(ev.target.value))

  return (
    <div className='global-header-container'>
      <h2>Javier Rodríguez</h2>
      <select className='lang-selector' onChange={languageSelector}>
        <option defaultValue='Languages' disabled> Choose language / Elige idioma </option>
        <option value='en'> English </option>
        <option value='esp'> Spanish </option>
      </select>
    </div>
  )
}

export default GlobalHeader
