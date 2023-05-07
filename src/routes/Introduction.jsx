import pruebaImagen from '../images/fondo.jpg'
import { FormattedMessage } from 'react-intl'
import '../styles/Introduction.css'


const Introduction = () => {
  return (
    <>
      <h2 className="personal-title"><FormattedMessage id="personal-introduction" /></h2>
      <section className="introduction-container">
        <div id="personal-text-container">
          <p className="personal-text"><FormattedMessage id="personal-description" /></p>
          <p className="personal-text"><FormattedMessage id="personal-description-2" /></p>
          <p className="personal-text"><FormattedMessage id="personal-description-3" /></p>
        </div>
        <img src={pruebaImagen} alt="prueba" className="personal-img" />
      </section>

      <h2 className="personal-title"><FormattedMessage id="universitary-studies" /></h2>
      <section className="studies-container">
        <ul className="studies-list">
          <li><FormattedMessage id="studies-pmp" /> <FormattedMessage id="studies-unir" /> (2022)</li>
          <li><FormattedMessage id="studies-master" /> <FormattedMessage id="studies-oviedo" /> (2018 - 2020)</li>
          <li><FormattedMessage id="studies-postgraduate" /> <FormattedMessage id="studies-oviedo" /> (2019)</li>
          <li><FormattedMessage id="studies-bachelor" /> <FormattedMessage id="studies-oviedo" /> (2014 - 2018)</li>
        </ul>
      </section>

      <h2 className="personal-title"><FormattedMessage id="other-studies" /></h2>
      <section className="other-studies-container">
        <ul className="studies-list">
        </ul>
      </section>

    </>
  )

}

export default Introduction