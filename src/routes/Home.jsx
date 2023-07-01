import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import GlobalFooter from '../components/GlobalFooter'

const Home = () => {
  return (
    <>
      <main className="main-home-container">
        <header>
          <h1><FormattedMessage id="home-welcome" /> <span className="wave-hand"> 👋 </span></h1>
        </header>
        <div className="body-home-container">
          <Link className='link' to="/personal-info"><FormattedMessage id="home-introduction" /> </Link>
          <Link className='link' to="/work-experience"><FormattedMessage id="home-work-experience" /></Link>
          <Link className='link' to="/example"><FormattedMessage id="home-projects" /></Link>
        </div>
      </main>
      <GlobalFooter />
    </>
  )
}

export default Home
