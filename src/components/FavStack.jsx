import React from "react"
import { FormattedMessage } from "react-intl"
import '../styles/FavStackModal.css'

const FavStack = ({ setIsShownFavStack }) => {

  return (
    <div className="fav-stack-modal">
      <div className="fav-stack-content">
        <header className="modal-fav-stack-header">
          <h3 className="fav-stack-modal-title"><FormattedMessage id="fav-stack" /></h3>
          <button onClick={() => setIsShownFavStack(false)} className="close-btn">X <FormattedMessage id="work-experience-fav-close" /></button>
        </header>
        <section className="fav-stack-section">
          <ul>
            <li><b>Front-end:</b> <FormattedMessage id="frontend-stack" /> </li>
            <li><b>Back-end:</b> <FormattedMessage id="backend-stack" /> </li>
            <li><b>Blockchain:</b> <FormattedMessage id="blockchain-stack" /> </li>
            <li><b>Git:</b> <FormattedMessage id="git-stack" /> </li>
            <li><b><FormattedMessage id="fav-management" />:</b> <FormattedMessage id="management-stack" /> </li>
          </ul>
        </section>
      </div>
    </div>)
}

export default FavStack