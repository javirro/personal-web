import '../styles/GlobalFooter.css'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'

const GlobalFooter = () => {

  const emailHandleClick = () =>  navigator.clipboard.writeText("javirofe96@gmail.com")
  const linkedinHandleClick = () => window.open('https://www.linkedin.com/in/javirrof', '_blank')
  return (
    <footer>
      <div className='footer-container'>
        <button onClick={linkedinHandleClick}><img src={linkedin} alt="linkedin icon" className='images' /></button>
        <button onClick={emailHandleClick}><img src={email} alt="email icon" className='images' /></button>
      </div>
    </footer>
  )
}

export default GlobalFooter