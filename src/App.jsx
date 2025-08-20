import Globe from './components/Globe'
import CityLinks from './components/CityLinks'
import CityInfo from './components/CityInfo'
import './App.css'

export default function App() {

  return (
    <div className='app-container'>
      <nav>
        <a href="/" className='h3' >World Wide Webs</a>
      </nav>

      <main>
        <div className='main-menu'>
          <CityLinks></CityLinks>
        </div>
        <Globe></Globe>
        <div className='main-info'>
          <CityInfo></CityInfo>
        </div>

      </main>

      <footer>
        <div className='footer-center'>
          <a className='link' href="https://github.com/Waximusglub" target='_blanck'>Creator</a>
          <span> | </span>
          <a className='link' href="https://github.com/Waximusglub/world-wide-webs" target='_blanck'>Github</a>
          <span> | </span>
          <a className='link' href="https://www.linkedin.com/in/sergi-florensadev/" target='_blanck'>Linkedin</a>
        </div>
      </footer>

    </div>

  )
}

