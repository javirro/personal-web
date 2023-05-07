import { FormattedMessage } from 'react-intl'
import '../styles/WorkExperience.css'
const WorkExperience = () => {
return(
  <div>
    <h2 className="personal-title"><FormattedMessage id="dev-position"/></h2>
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
      <p></p>
    </section>
  </div>
)
}

export default WorkExperience