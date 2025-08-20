import Globe from './components/Globe'
import './App.css'

export default function App() {

  return (
    <div className='app-container'>
      <nav>
        <img src="/icon/favicon.svg" alt="icon" />
        <a href="/" className='' >World Wide Webs</a>
      </nav>

      <main>

        <Globe></Globe>

        <div className='main-bg'>
          <h1 className='bg'>World Wide Webs</h1>
          <h1 className='bg'>World Wide Webs</h1>
          <h1 className='bg'>World Wide Webs</h1>
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

