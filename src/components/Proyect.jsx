import '../styles/proyect.css'
import { PROYECTS } from '../constants'
import game3rowImage from '../images/3row.jpg'
import { FormattedMessage } from 'react-intl'

const Proyect = ({ title }) => {
  const proyect = PROYECTS[title]
  const { front, back, url } = proyect
  const imgToShow = game3rowImage

  return (
    <article className='proyect-container'>
      <div className="proyect-info">
        <img src={imgToShow} alt={title} className="proyect-img" />
        <p><FormattedMessage id="examples-description" /></p>
        {url && <a href={url} target='_blank' rel='noreferrer'><FormattedMessage id="examples-url" /></a>}
        {front && <a href={front} target='_blank' rel='noreferrer'><FormattedMessage id="examples-front" /></a>}
        {back && <a href={back} target='_blank' rel='noreferrer'><FormattedMessage id="examples-back" /></a>}
      </div>
    </article>)

}

export default Proyect