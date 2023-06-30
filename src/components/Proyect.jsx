import '../styles/proyect.css'
import { PROYECTS } from '../constants'
import game3rowImage from '../images/3row.jpg'
import foodImage from '../images/food.jpg'
import { FormattedMessage } from 'react-intl'

const Proyect = ({ title }) => {
  const proyect = PROYECTS[title]
  const { front, back, url } = proyect
  let imgToShow
  let descriptionToShow = `examples-${title}-description`
  if (title === "game3row") {
    imgToShow = game3rowImage
  } else if (title === "food") {
    imgToShow = foodImage
  }

  return (
    <article className='proyect-container'>
      <div className="proyect-info">
        <h4 className="description-title"><FormattedMessage id="examples-description" /></h4>
        <img src={imgToShow} alt={title} className="proyect-img" />
        <p className="description-text"><FormattedMessage id={descriptionToShow} /></p>
        {url && <a href={url} target='_blank' rel='noreferrer'><FormattedMessage id="examples-url" /></a>}
        {front && <a href={front} target='_blank' rel='noreferrer'><FormattedMessage id="examples-front" /></a>}
        {back && <a href={back} target='_blank' rel='noreferrer'><FormattedMessage id="examples-back" /></a>}
      </div>
    </article>)

}

export default Proyect