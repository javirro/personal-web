import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Studies from './routes/Studies'
import Introduction from './routes/Introduction'
import WorkExperience from './routes/WorkExperience'
import Examples from './routes/Examples'
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import './styles/App.css'

function App () {
  return (
    <div className='global'>
      <GlobalHeader />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/introduction' element={<Introduction />} />
            <Route path='/work-experience' element={<WorkExperience />} />
            <Route path='/studies' element={<Studies />} />
            <Route path='/example' element={<Examples />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalFooter />
    </div>
  )
}

export default App
