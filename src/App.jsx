import './App.scss'
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js'

function App () {
  return (
    <section className='bento'>
      <div className='bento__photo animate slideInLeft animate--fast'>
        <img className='photo__image' src='/profile1.jpg' alt='Julian profile photo' />
      </div>
      <div className='bento__description animate slideInTop animate--slow'>
        <h1>Julián Jesús Millar Vollaire</h1>
        <h2>Desarrollador web | Ingeniero Constructor</h2>
        <p>Programador con conocimientos en desarrollo y despliegue de aplicaciones web, gestión de proyectos, presupuestos, atención al cliente y trabajo en equipos. Activamente buscando incorporarme en empresas de desarrollo web. Soy de aprendizaje rapido y con buenas habilidades blandas que me han permitido trabajar en equipo y liderar éstos en mi carrera profesional.</p>
      </div>
      <div className='bento__contact animate slideInRight animate--slow'>
        <h1>Contact</h1>
      </div>
      <div className='bento__languaje animate slideInLeft animate--slow'>
        <h1>Languajes</h1>
        <summary>
          <span>Spanish:</span>
          <span>iconos aqui</span>
        </summary>
        <summary>
          <span>English:</span>
          <span>iconos aqui</span>
        </summary>
      </div>
      <div className='bento__skills animate slideInLeft animete--mid'>
        <Icon path={mdiGithub} size={1} />
      </div>
      <div className='bento__experience animate slideInBottom animate--fast'>
        <h1>Experience</h1>
      </div>
      <div className='bento__studies animate slideInRight animate--fast'>
        <h1>Studies</h1>
      </div>
      <div className='bento__projects animate slideInBottom animate--slow'>
        <h1>Projects</h1>
      </div>
      <div className='bento__theme animate slideInRight animate--mid' />
    </section>
  )
}

export default App
