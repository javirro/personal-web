import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Home = () => {
  return (
    <main className='home-container'>
      <article className='box-link'>
        <Link className='link' to="/introduction"><FormattedMessage id="home-introduction" /></Link>
      </article>
      <article className='box-link'>
        <Link className='link' to="/work-experience"><FormattedMessage id="home-work-experience" /></Link>
      </article>

      <article className='box-link'>
        <Link className='link' to="/studies"><FormattedMessage id="home-studies" /></Link>
      </article>

      <article className='box-link'>
        <Link className='link' to="/example"><FormattedMessage id="home-projects" /></Link>
      </article>


    </main>
  )
}

export default Home
