import './App.scss'
import { animateClass } from './utils'
import Contact from '../components/contact'
import Skills from '../components/skills'
import Studies from '../components/studies'
import Experience from '../components/experience'
import Projects from '../components/projects'

function App () {
  return (
    <main className='bento'>
      <section id='bento__photo' className={`bento__photo animate ${animateClass('slideInLeft', 'slideInTop', 'slideInTop')} animate--fast`}>
        <img className='photo__image' src='/profile1.jpg' alt='Julian profile photo' />
      </section>
      <section className={`bento__description animate ${animateClass('slideInTop', 'slideInTop', 'slideInRight')} animate--slow text--wrap`}>
        <label className='title'>Julián Jesús Millar Vollaire</label>
        <h2 className='subtitle'>Desarrollador web | Ingeniero Constructor</h2>
        <p className='text'>Programador con conocimientos en desarrollo y despliegue de aplicaciones web, gestión de proyectos, presupuestos, atención al cliente y trabajo en equipos. Activamente buscando incorporarme en empresas de desarrollo web. Soy de aprendizaje rapido y con buenas habilidades blandas que me han permitido trabajar en equipo y liderar éstos en mi carrera profesional.</p>
      </section>
      <section id='bento__contact' className={`bento__contact animate ${animateClass('slideInLeft', 'slideInRight', 'slideInLeft')} animate--slow`}>
        <label className='title'>Contacto</label>
        <Contact />
      </section>
      <section id='bento__languaje' className={`bento__languaje animate ${animateClass('slideInLeft', 'slideInBottom', 'slideInBottom')} animate--mid`}>
        <label className='title'>Idiomas</label>
        <summary className='languajes'>
          <div className='subtitle'>Español: Nativo</div>
          <div className='subtitle'>Ingles: Avanzado</div>
        </summary>
      </section>
      <section id='bento__skills' className={`bento__skills animate ${animateClass('slideInRight', 'slideInLeft', 'slideInRight')} animete--mid`}>
        <label className='title'>Habilidades</label>
        <Skills />
      </section>
      <section id='bento__experience' className={`bento__experience animate ${animateClass('slideInBottom', 'slideInLeft', 'slideInLeft')} animate--fast`}>
        <label className='title'>Experiencia</label>
        <Experience />
      </section>
      <section id='bento__studies' className={`bento__studies animate ${animateClass('slideInRight', 'slideInRight', 'slideInRight')} animate--slow`}>
        <label className='title'>Estudios</label>
        <Studies />
      </section>
      <section id='bento__projects' className={`bento__projects animate ${animateClass('slideInBottom', 'slideInBottom', 'slideInRight')} animate--fast`}>
        <label className='title'>Proyectos</label>
        <Projects />
      </section>
      <section id='bento__theme' className={`bento__theme animate ${animateClass('slideInRight', 'slideInRight', 'slideInRight')} animate--mid`} />
    </main>
  )
}

export default App
