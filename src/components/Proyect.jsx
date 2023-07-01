import '../styles/proyect.css'
import { PROYECTS } from '../constants'
import game3rowImage from '../images/3row.jpg'
import foodImage from '../images/food.jpg'
import github from '../images/githubIcon.svg'
import { FormattedMessage } from 'react-intl'

const Proyect = ({ title }) => {
  const proyect = PROYECTS[title]
  const { front, back, url } = proyect
  let imgToShow
  if (title === "game3row") {
    imgToShow = game3rowImage
  } else if (title === "food") {
    imgToShow = foodImage
  }

  return (
    <article className='proyect-container'>
      <div className="proyect-info">
        <a href={url} target='_blank' rel='noreferrer' className="description-title"><FormattedMessage id={`examples-${title}-title`} /></a>
        <img src={imgToShow} alt={title} className="proyect-img" />
        <p className="description-text"><FormattedMessage id={`examples-${title}-description`} /></p>
        <div className='git-container'>
          {front && <a href={front} target='_blank' rel='noreferrer' className='front-git-text'><img src={github} alt='github' className='github-img' /></a>}
          {back && <a href={front} target='_blank' rel='noreferrer' className='back-git-text'><img src={github} alt='github' className='github-img' /></a>}
        </div>
      </div>
    </article>)

}

export default Proyect