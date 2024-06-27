import './components.scss'
import Icon from '@mdi/react'
import { mdiGithub, mdiWeb } from '@mdi/js'

export default function Projects () {
  return (
    <div className='projects__wrapper'>
      <div className='project__card project1 cardOnHover'>
        <p className='project__title'>webpage para elemental dojo</p>
        <div>
          <a href='https://github.com/jjmillar/glosario-ed' target='blank'><Icon path={mdiGithub} className='scaleOnHover' /></a>
          <a href='https://glosarioed.netlify.app/' target='blank'><Icon path={mdiWeb} className='scaleOnHover' /></a>
        </div>
      </div>
      <div className='project__card project2 cardOnHover'>
        <p className='project__title'>webpage para estética girardi</p>
        <div>
          <a href='https://github.com/jjmillar/react-agenda-online' target='blank'><Icon path={mdiGithub} className='scaleOnHover' /></a>
          <a href='https://esteticagirardi.com/' target='blank'><Icon path={mdiWeb} className='scaleOnHover' /></a>
        </div>
      </div>
      <div className='project__card project3 cardOnHover'>
        <p className='project__title'>webpage para Muramasa BJJ</p>
        <div>
          <a href='https://github.com/jjmillar/muramasa-webapp' target='blank'><Icon path={mdiGithub} className='scaleOnHover' /></a>
          <a href='https://muramasabjj.com/' target='blank'><Icon path={mdiWeb} className='scaleOnHover' /></a>
        </div>
      </div>
      <div className='project__card project4 cardOnHover'>
        <p className='project__title'>bot de telegram</p>
        <div>
          <a href='https://github.com/jjmillar/bot-muramasa' target='blank'><Icon path={mdiGithub} className='scaleOnHover' /></a>
        </div>
      </div>
    </div>
  )
}
