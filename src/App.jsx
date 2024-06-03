import './App.scss'
import Icon from '@mdi/react'
import { mdiGithub, mdiEmailOutline, mdiLinkedin, mdiCellphone, mdiMapMarkerOutline } from '@mdi/js'

function App () {
  return (
    <main className='bento'>
      <section className='bento__photo animate slideInLeft animate--fast'>
        <img className='photo__image' src='/profile1.jpg' alt='Julian profile photo' />
      </section>
      <section className='bento__description animate slideInTop animate--slow text--wrap'>
        <h1>Julián Jesús Millar Vollaire</h1>
        <h2>Desarrollador web | Ingeniero Constructor</h2>
        <p>Programador con conocimientos en desarrollo y despliegue de aplicaciones web, gestión de proyectos, presupuestos, atención al cliente y trabajo en equipos. Activamente buscando incorporarme en empresas de desarrollo web. Soy de aprendizaje rapido y con buenas habilidades blandas que me han permitido trabajar en equipo y liderar éstos en mi carrera profesional.</p>
      </section>
      <section className='bento__contact animate slideInRight animate--slow'>
        <h1>Contact</h1>
      </section>
      <section className='bento__languaje animate slideInLeft animate--slow'>
        <h1>Languajes</h1>
        <summary>
          <span>Spanish:</span>
          <span>iconos aqui</span>
        </summary>
        <summary>
          <span>English:</span>
          <span>iconos aqui</span>
        </summary>
      </section>
      <section className='bento__skills animate slideInLeft animete--mid'>
        <h2>Contact</h2>
        <Icon path={mdiGithub} size={2} />
        <Icon path={mdiEmailOutline} size={2} />
        <Icon path={mdiLinkedin} size={2} />
        <Icon path={mdiCellphone} size={2} />
        <Icon path={mdiMapMarkerOutline} size={2} />
      </section>
      <section className='bento__experience animate slideInBottom animate--fast'>
        <h1>Experience</h1>
      </section>
      <section className='bento__studies animate slideInRight animate--fast'>
        <h1>Studies</h1>
      </section>
      <section className='bento__projects animate slideInBottom animate--slow'>
        <h1>Projects</h1>
      </section>
      <section className='bento__theme animate slideInRight animate--mid' />
    </main>
  )
}

export default App
