import './App.scss'
import { animateClass } from './utils'
import Contact from '../components/contact'
import Skills from '../components/skills'
import Studies from '../components/studies'

function App () {
  return (
    <main className='bento'>
      <section id='bento__photo' className={`bento__photo animate ${animateClass('slideInLeft', 'slideInTop', 'slideInTop')} animate--fast`}>
        <img className='photo__image' src='/profile1.jpg' alt='Julian profile photo' />
      </section>
      <section className={`bento__description animate ${animateClass('slideInTop', 'slideInTop', 'slideInRight')} animate--slow text--wrap`}>
        <h1 className='title'>Julián Jesús Millar Vollaire</h1>
        <h2>Desarrollador web | Ingeniero Constructor</h2>
        <p>Programador con conocimientos en desarrollo y despliegue de aplicaciones web, gestión de proyectos, presupuestos, atención al cliente y trabajo en equipos. Activamente buscando incorporarme en empresas de desarrollo web. Soy de aprendizaje rapido y con buenas habilidades blandas que me han permitido trabajar en equipo y liderar éstos en mi carrera profesional.</p>
      </section>
      <section id='bento__contact' className={`bento__contact animate ${animateClass('slideInLeft', 'slideInRight', 'slideInLeft')} animate--slow`}>
        <h1 className='title'>Contact</h1>
        <Contact />
      </section>
      <section id='bento__languaje' className={`bento__languaje animate ${animateClass('slideInLeft', 'slideInBottom', 'slideInBottom')} animate--mid`}>
        <h1 className='title'>Languajes</h1>
        <summary>
          <span>Spanish:</span>
          <span>iconos aqui</span>
        </summary>
        <summary>
          <span>English:</span>
          <span>iconos aqui</span>
        </summary>
      </section>
      <section id='bento__skills' className={`bento__skills animate ${animateClass('slideInRight', 'slideInLeft', 'slideInRight')} animete--mid`}>
        <h2 className='title'>Skills</h2>
        <Skills />
      </section>
      <section id='bento__experience' className={`bento__experience animate ${animateClass('slideInBottom', 'slideInLeft', 'slideInLeft')} animate--fast`}>
        <h1 className='title'>Experience</h1>
      </section>
      <section id='bento__studies' className={`bento__studies animate ${animateClass('slideInRight', 'slideInRight', 'slideInRight')} animate--slow`}>
        <h1 className='title'>Studies</h1>
        <Studies />
      </section>
      <section id='bento__projects' className={`bento__projects animate ${animateClass('slideInBottom', 'slideInBottom', 'slideInRight')} animate--fast`}>
        <h1 className='title'>Projects</h1>
      </section>
      <section id='bento__theme' className={`bento__theme animate ${animateClass('slideInRight', 'slideInRight', 'slideInRight')} animate--mid`} />
    </main>
  )
}

export default App
