import React from 'react'
import { useDispatch } from 'react-redux'
import { changeLanguage } from '../redux/languageSlice'
import { FormattedMessage } from 'react-intl'
import { Link, useLocation } from 'react-router-dom'
import '../styles/GlobalHeader.css'

const GlobalHeader = () => {
  const dispatch = useDispatch()
  const languageSelector = (ev) => dispatch(changeLanguage(ev.target.value))
  const location = useLocation()
  const pathname = location?.pathname

  return (
    <div className="global-header-container">
      {pathname !== "/"
        ? <Link className='back-button' to="/"><FormattedMessage id="back-button" /></Link>
        : <h2 className='text-name'>Javier Rodríguez</h2>}
      <select className="lang-selector" onChange={languageSelector}>
        <option defaultValue="Languages" disabled> Choose language / Elige idioma </option>
        <option value="en"><FormattedMessage id="language-en" /> </option>
        <option value="esp"><FormattedMessage id="language-esp" /> </option>
      </select>
    </div>
  )
}

export default GlobalHeader
