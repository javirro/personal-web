import { FormattedMessage } from 'react-intl'
import { useState } from 'react'
import FavStack from '../components/FavStack'
import GlobalFooter from '../components/GlobalFooter'
import '../styles/WorkExperience.css'
import WorkCV from '../components/WorkCV'

const WorkExperience = () => {
  const [isShownFavStack, setIsShownFavStack] = useState(false)


  const handleFavStackClick = () =>{ setIsShownFavStack(true) }
  return (
    <div className="work-experience-container">
      <h2 className="personal-title"><FormattedMessage id="home-work-experience" />: <span className="dev-position-title"><FormattedMessage id="dev-position" /></span>
      <button className="fav-stack-btn" onClick={handleFavStackClick}>⭐ Fav stack</button>
      </h2>
      {isShownFavStack && <FavStack setIsShownFavStack={setIsShownFavStack}/>}
      <WorkCV />
      <GlobalFooter />
    </div>
  )
}

export default WorkExperience