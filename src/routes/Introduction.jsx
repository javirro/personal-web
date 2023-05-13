import pruebaImagen from '../images/fondo.jpg'
import { FormattedMessage } from 'react-intl'
import '../styles/Introduction.css'


const Introduction = () => {
  return (
    <div className="intro-global-container">
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



      <section className='other-studies-container'>
        <div>
          <h2 className="other-title"><FormattedMessage id="other-studies" /></h2>
          <div className="other-studies">
            <article className="other-courses">📘 Blockchain developer - Udacity</article>
            <article className="other-courses">📗 Blockchain specialization - Coursera</article>
          </div>
        </div>
        <div>
          <h2 className="other-title"><FormattedMessage id="languages-level" /></h2>
          <div className="other-studies">
            <article className="other-courses">🇪🇸 <FormattedMessage id="language-esp" />: <FormattedMessage id="languages-native" /></article>
            <article className="other-courses"> 🇬🇧 <FormattedMessage id="language-en" />: <FormattedMessage id="languages-english-c1" /></article>
          </div>
        </div>
      </section>
    </div>
  )

}

export default Introduction