import '../styles/proyect.css'
import { PROYECTS } from '../constants'
import foodImage from '../images/food.jpg'
import tictactoe from '../images/tictactoe.jpg'
import challengesImg from '../images/challenges.png'
import github from '../images/githubIcon.svg'
import { FormattedMessage } from 'react-intl'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from './Loader'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Proyect = ({ title }) => {
  const proyect = PROYECTS[title]
  const { front, back, url } = proyect
  let imgToShow
  if (title === "game3row") {
    imgToShow = tictactoe
  } else if (title === "food") {
    imgToShow = foodImage
  } else if (title === "challenges") {
    imgToShow = challengesImg
  }

  return (
    <article className='proyect-container'>
      <a href={url} target='_blank' rel='noreferrer' className="description-title"><FormattedMessage id={`examples-${title}-title`} /></a>
      <LazyLoadImage src={imgToShow}
        className="proyect-img"
        effect='blur'
        alt="Proyect image"
        placeholder={<Loader />}
      />
      <p className="description-text"><FormattedMessage id={`examples-${title}-description`} /></p>
      <div className='git-container'>
        {front && <a href={front} target='_blank' rel='noreferrer' className='front-git-text'><img src={github} alt='github' className='github-img' /></a>}
        {back && <a href={front} target='_blank' rel='noreferrer' className='back-git-text'><img src={github} alt='github' className='github-img' /></a>}
      </div>
    </article>)

}

export default Proyect