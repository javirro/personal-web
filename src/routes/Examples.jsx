import { FormattedMessage } from 'react-intl'
import Loader from '../components/Loader'
import '../styles/Examples.css'
const Examples = () => {
  return (
    <main className="examples-container">
      <section className="wip-container">
        <h2 className="title-example"> <FormattedMessage id="work-in-progress" /> </h2>
        <Loader />
      </section>

    </main>
  )
}

export default Examples