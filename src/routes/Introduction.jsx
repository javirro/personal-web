
import personalImg from '../images/personaPhoto.jpeg'
import { FormattedMessage } from 'react-intl'
import GlobalFooter from '../components/GlobalFooter'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
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
        <LazyLoadImage src={personalImg}
          className='personal-img'
          effect='blur'
          alt="Personal image"
        />
      </section>

      <h2 className="personal-title"><FormattedMessage id="universitary-studies" /></h2>
      <section className="studies-container">
        <ul className="studies-list">
          <li><FormattedMessage id="studies-pmp" /> <FormattedMessage id="studies-unir" /> <span className="year-studies">(2022)</span></li>
          <li><FormattedMessage id="studies-master" /> <FormattedMessage id="studies-oviedo" /> <span className="year-studies">(2018 - 2020)</span></li>
          <li><FormattedMessage id="studies-postgraduate" /> <FormattedMessage id="studies-oviedo" /><span className="year-studies"> (2019)</span> </li>
          <li><FormattedMessage id="studies-bachelor" /> <FormattedMessage id="studies-oviedo" /> <span className="year-studies">(2014 - 2018)</span></li>
        </ul>
      </section>



      <section className='other-studies-container'>
        <div>
          <h2 className="other-title"><FormattedMessage id="other-studies" /></h2>
          <div className="other-studies">
            <article className="other-studies-item">📘 Blockchain developer - Udacity</article>
            <article className="other-studies-item">📗 Blockchain specialization - Coursera</article>
          </div>
        </div>
        <div>
          <h2 className="other-title"><FormattedMessage id="languages-level" /></h2>
          <div className="other-studies">
            <article className="other-studies-item">🇪🇸 <FormattedMessage id="language-esp" />: <FormattedMessage id="languages-native" /></article>
            <article className="other-studies-item"> 🇬🇧 <FormattedMessage id="language-en" />: <FormattedMessage id="languages-english-c1" /></article>
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  )

}

export default Introduction