import { FormattedMessage } from 'react-intl'
import '../styles/WorkExperience.css'
const WorkExperience = () => {
  const glueDigital = "https://glue.digital/"
  const cetim = "https://cetim.es/"
  const openWebinars = "https://openwebinars.net/profesores/javier-rodriguez-fernandez/"
  return (
    <div>
      {/* <section className="section-container">
        <h3><FormattedMessage id="fav-stack" /></h3>
        <ul>
          <li>Front-end: <FormattedMessage id="frontend-stack" /> </li>
          <li>Back-end: <FormattedMessage id="backend-stack" /> </li>
          <li>Blockchain: <FormattedMessage id="blockchain-stack" /> </li>
          <li><FormattedMessage id="git-stack" /> </li>
          <li><FormattedMessage id="management-stack" /> </li>
        </ul>
      </section> */}
      <h2 className="personal-title"><FormattedMessage id="home-work-experience" />: <FormattedMessage id="dev-position" /></h2>
      <section className="section-container">
        <ul>
          <li>
            <a className="company-name" href={glueDigital} target="_blank" rel="noreferrer">Glue Digital <FormattedMessage id="work-experience-glue" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-glue-dev" /></li>
              <li><FormattedMessage id="work-experience-glue-organise" /></li>
              <li><FormattedMessage id="work-experience-glue-analyse" /></li>
              <li><b><FormattedMessage id="work-experience-stack" /></b><FormattedMessage id="work-experience-glue-tech" /></li>
            </ul>
          </li>
          <li>
            <a className="company-name" href={cetim} target="_blank" rel="noreferrer">Cetim <FormattedMessage id="work-experience-cetim-partial" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-cetim-dev-partial" /></li>
              <li><FormattedMessage id="work-experience-cetim-clients-partial" /></li>
              <li><FormattedMessage id="work-experience-cetim-advise-partial" /></li>
              <li><FormattedMessage id="work-experience-cetim-docu-partial" /></li>
              <li><b><FormattedMessage id="work-experience-stack" /></b> <FormattedMessage id="work-experience-cetim-tech-partial" /></li>
            </ul>
          </li>
          <li>
            <a className="company-name" href={cetim} target="_blank" rel="noreferrer">Cetim <FormattedMessage id="work-experience-cetim-full" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-cetim-dev-full" /></li>
              <li><FormattedMessage id="work-experience-cetim-clients-full" /></li>
              <li><FormattedMessage id="work-experience-cetim-docu-full" /></li>
              <li><b><FormattedMessage id="work-experience-stack" /></b><FormattedMessage id="work-experience-cetim-tech-full" /></li>
            </ul>
          </li>
          <li>
            <a className="company-name" href={openWebinars} target="_blank" rel="noreferrer">OpenWebinars <FormattedMessage id="work-experience-openwebinars" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-opewebinars-description" /></li>
            </ul>
          </li>
          <li>
            <a className="company-name" href={openWebinars} target="_blank" rel="noreferrer"><FormattedMessage id="studies-oviedo" /> <FormattedMessage id="work-experience-university" /></a>
            <ul className="jobs-description-list">
              <li><FormattedMessage id="work-experience-university-description" /></li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default WorkExperience