import Globe from './components/Globe'
import './App.css'

export default function App() {

  return (
    <div className='app-container'>
      <nav>
        <a href="/">World Wide Webs</a>
      </nav>

      <main>
        <div className='main-bg'>
          <h1>WorldWideWebs</h1>
          <h1>WorldWideWebs</h1>
          <h1>WorldWideWebs</h1>

        </div>
        <div className='main-content'>
          <Globe></Globe>
        </div>
      </main>

      <footer>
        <div className='footer-center'>
          <a href="https://github.com/Waximusglub" target='_blanck'>Creator</a>
          <span> | </span>
          <a href="https://github.com/Waximusglub/world-wide-webs" target='_blanck'>Github</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/sergi-florensadev/" target='_blanck'>Linkedin</a>
        </div>
      </footer>
      
    </div>

  )
}

