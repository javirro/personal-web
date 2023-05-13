import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Home = () => {
  return (
    <main>
      <header>
        <h1>Welcome to my Personal Page</h1>
      </header>
      <div className='home-container'>
        <article className='box-link'>
          <Link className='link' to="/personal-info"><FormattedMessage id="home-introduction" /></Link>
        </article>
        <article className='box-link'>
          <Link className='link' to="/work-experience"><FormattedMessage id="home-work-experience" /></Link>
        </article>
        <article className='box-link'>
          <Link className='link' to="/example"><FormattedMessage id="home-projects" /></Link>
        </article>
      </div>
    </main>
  )
}

export default Home
