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
            <a className="company-name" href={cetim} target="_blank" rel="noreferrer">Cetim <FormattedMessage id="work-experience-cetim-partial" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-cetim-dev-partial" /></li>
              <li><FormattedMessage id="work-experience-cetim-clients-partial" /></li>
              <li><FormattedMessage id="work-experience-cetim-advise-partial" /></li>
              <li><FormattedMessage id="work-experience-cetim-docu-partial" /></li>
            </ul>
          </li>
          <li>
            <a className="company-name" href={cetim} target="_blank" rel="noreferrer">Cetim <FormattedMessage id="work-experience-cetim-full" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-cetim-dev-full" /></li>
              <li><FormattedMessage id="work-experience-cetim-clients-full" /></li>
              <li><FormattedMessage id="work-experience-cetim-docu-full" /></li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default WorkExperience