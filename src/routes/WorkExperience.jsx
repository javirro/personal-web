import { FormattedMessage } from 'react-intl'
import '../styles/WorkExperience.css'
const WorkExperience = () => {
  const glueDigital = "https://glue.digital/"
  const cetim = "https://cetim.es/"
  return (
    <div>
      <h2 className="personal-title"><FormattedMessage id="dev-position" /></h2>
      <section className="section-container">
        <h3><FormattedMessage id="fav-stack" /></h3>
        <ul>
          <li>Front-end: <FormattedMessage id="frontend-stack" /> </li>
          <li>Back-end: <FormattedMessage id="backend-stack" /> </li>
          <li>Blockchain: <FormattedMessage id="blockchain-stack" /> </li>
          <li><FormattedMessage id="git-stack" /> </li>
          <li><FormattedMessage id="management-stack" /> </li>
        </ul>
      </section>
      <h2 className="personal-title"><FormattedMessage id="home-work-experience" /></h2>
      <section className="section-container">
        <ul>
          <li>
            <a className="company-name" href={glueDigital} target="_blank" rel="noreferrer">Glue Digital <FormattedMessage id="work-experience-glue" /></a>
            <p><FormattedMessage id="work-experience-glue-description" /></p>
          </li>
          <li>
            <a className="company-name" href={cetim} target="_blank" rel="noreferrer">Cetim </a>
            <ul>(September 2021 – February 2022) – Full time Position
              <p>Front-end, back-end</p>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default WorkExperience