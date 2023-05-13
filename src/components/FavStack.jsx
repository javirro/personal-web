import React from "react"
import { FormattedMessage } from "react-intl"
import '../styles/FavStackModal.css'

const FavStack = ( {setIsShownFavStack } ) => {

  return (<div className="fav-stack-modal">
    <div className="fav-stack-content">
      <header className="modal-fav-stack-header">
        <h3><FormattedMessage id="fav-stack" /></h3>
        <button onClick={() => setIsShownFavStack(false)} className="close-btn"><FormattedMessage id="work-experience-fav-close" /></button>
      </header>
      <ul>
        <li>Front-end: <FormattedMessage id="frontend-stack" /> </li>
        <li>Back-end: <FormattedMessage id="backend-stack" /> </li>
        <li>Blockchain: <FormattedMessage id="blockchain-stack" /> </li>
        <li><FormattedMessage id="git-stack" /> </li>
        <li><FormattedMessage id="management-stack" /> </li>
      </ul>
    </div>
  </div>)
}

export default FavStack