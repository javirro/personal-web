import { FormattedMessage } from 'react-intl'
import { useState } from 'react'
import WorkCV from '../components/WorkCV'
import TechnologiesSlideShow from '../components/TechnologiesSlideShow'
import GlobalFooter from '../components/GlobalFooter'
import '../styles/WorkExperience.css'


const WorkExperience = () => {
  const [isShownExperience, setIsShownExperience] = useState(false)
  const handleShowExperience = () => { setIsShownExperience(!isShownExperience) }

  return (
    <>
      <section className="work-experience-container">
        <h2 className="dev-position-title"><FormattedMessage id="dev-position" /></h2>
        <TechnologiesSlideShow />
        <button className="btn-see-work" onClick={handleShowExperience}><FormattedMessage id="see-work-experience" /></button>
        {isShownExperience && <WorkCV />}
      </section>
      <GlobalFooter />
    </>
  )
}

export default WorkExperience