import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Introduction from './routes/Introduction'
import WorkExperience from './routes/WorkExperience'
import Examples from './routes/Examples'
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import { useSelector } from 'react-redux'
import { IntlProvider } from 'react-intl'
import enMessages from './locales/en.json'
import espMessages from './locales/esp.json'


import './styles/App.css'

function App() {
  const language = useSelector(s => s.language)
  return (

    <IntlProvider locale={language === "en" ? "en" : "esp"} messages={language === "en" ? enMessages : espMessages}>
      <div className='global'>
        <BrowserRouter>
          <GlobalHeader />
          <Routes>
            <Route>
              <Route path='/' element={<Home />} />
              <Route path='/personal-info' element={<Introduction />} />
              <Route path='/work-experience' element={<WorkExperience />} />
              <Route path='/example' element={<Examples />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <GlobalFooter />
      </div>
    </IntlProvider>
  )
}

export default App
