import { FormattedMessage } from 'react-intl'
import '../styles/Examples.css'
import Proyect from '../components/Proyect'
const Examples = () => {
  const proyects = ["food", "game3row"]
  return (
    <main className="examples-container">
      {/* <section className="wip-container">
        <h2 className="title-example"> <FormattedMessage id="work-in-progress" /> </h2>
        <Loader />
      </section> */}
      <h2 className="title-example"> <FormattedMessage id="work-in-progress" /> </h2>
      <section className='examples-grid'>
        {proyects.map(p => <Proyect key={p} title={p} />)}
      </section>

    </main>
  )
}

export default Examples