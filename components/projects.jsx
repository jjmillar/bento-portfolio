import './components.scss'
import Icon from '@mdi/react'
import { mdiGithub, mdiWeb } from '@mdi/js'

export default function Projects () {
  return (
    <div className='projects__wrapper'>
      <div className='project__card cardOnHover'>
        <p className='project__title'>webpage para elemental dojo</p>
        <div>
          <a href='https://github.com/jjmillar/glosario-ed' target='blank'><Icon path={mdiGithub} className='scaleOnHover' /></a>
          <a href='https://glosarioed.netlify.app/' target='blank'><Icon path={mdiWeb} className='scaleOnHover' /></a>
        </div>
      </div>
      <div className='project__card cardOnHover'>
        <p className='project__title'>webpage para estética girardi</p>
        <div>
          <a href='https://github.com/jjmillar/react-agenda-online' target='blank'><Icon path={mdiGithub} className='scaleOnHover' /></a>
          <a href='https://esteticagirardi.com/' target='blank'><Icon path={mdiWeb} className='scaleOnHover' /></a>
        </div>
      </div>
    </div>
  )
}
