import { FormattedMessage } from 'react-intl'
import Proyect from '../components/Proyect'
import '../styles/Examples.css'

const Examples = () => {
  const proyects = ["food", "game3row"]
  return (
    <main className="examples-container">
      <h2 className="title-example"> <FormattedMessage id="examples-proyects-personal" /> </h2>
      <section className='examples-grid'>
        {proyects.map(p => <Proyect key={p} title={p} />)}
      </section>

    </main>
  )
}

export default Examples