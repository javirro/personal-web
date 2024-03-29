import { FormattedMessage } from 'react-intl'
const WorkCV = () => {
  const glueDigital = "https://glue.digital/"
  const cetim = "https://cetim.es/"
  const openWebinars = "https://openwebinars.net/profesores/javier-rodriguez-fernandez/"
  return (<section className="section-container">
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
  </section>)
}
export default WorkCV