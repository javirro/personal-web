import '../styles/Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main className='home-container'>
      <article className='box-link'>
        <Link className='link' to="/introduction">Personal introduction</Link>
      </article>
      <article className='box-link'>
        <Link className='link' to="/work-experience">Work experience</Link>
      </article>

      <article className='box-link'>
        <Link className='link' to="/studies">Studies</Link>
      </article>

      <article className='box-link'>
        <Link className='link' to="/example">Some personal works</Link>
      </article>


    </main>
  )
}

export default Home
