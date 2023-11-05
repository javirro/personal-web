import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import GlobalFooter from '../components/GlobalFooter'
import landingImgs from '../images/landing'
import '../styles/Home.css'


const Home = () => {
  return (
    <>
      <main className="main-home-container">
        <h1 className="landing-title"><FormattedMessage id="home-welcome" /> <span className="wave-hand"> 👋 </span></h1>

        <section className="body-home-container">
          <div className="individual-landing-container">
            <img src={landingImgs.personalImg} alt='personal logo' className="landing-imgs" />
            <div className="text-container-landing">
              <p className="texts-landings">Discover information about my studies, my passions and the stuffs that I like.</p>
              <Link className='link' to="/personal-info"><FormattedMessage id="home-introduction" /> </Link>
            </div>

          </div>
          <div className="individual-landing-container">
            <div className="text-container-landing">
              <p className="texts-landings">Discover information about my previous work experiences and my favourite tech stack.</p>
              <Link className='link' to="/work-experience"><FormattedMessage id="home-work-experience" /></Link>
            </div>
            <img src={landingImgs.workImg} alt='personal logo' className="landing-imgs" />
          </div>

          <div className="individual-landing-container">
            <img src={landingImgs.websiteImg} alt='personal logo' className="landing-imgs" />
            <div className="text-container-landing">
              <p className="texts-landings">Discover my best personal projects and see how they are implemented.</p>
              <Link className='link' to="/example"><FormattedMessage id="home-projects" /></Link>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  )
}

export default Home
