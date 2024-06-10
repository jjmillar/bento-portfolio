import Icon from '@mdi/react'
import { mdiGithub, mdiEmailOutline, mdiLinkedin, mdiCellphone, mdiMapMarkerOutline, mdiWhatsapp } from '@mdi/js'

export default function Contact () {
  return (
    <div className='contact__wrapper'>
      <a href='https://github.com/jjmillar' className='scaleOnHover' target='blank'><Icon path={mdiGithub} title='githublink' /></a>
      <a href='mailto:julianjmillar@gmail.com' className='scaleOnHover' target='blank'><Icon path={mdiEmailOutline} /></a>
      <a href='https://www.linkedin.com/in/juli%C3%A1n-millar-vollaire/' className='scaleOnHover' target='blank'><Icon path={mdiLinkedin} /></a>
      <a href='tel:+56972151199' className='scaleOnHover' target='blank'><Icon path={mdiCellphone} /></a>
      <a href='https://maps.app.goo.gl/JgovNRqWAbMXMuQy8' className='scaleOnHover' target='blank'><Icon path={mdiMapMarkerOutline} /></a>
      <a href='https://api.whatsapp.com/send/?phone=56972151199' className='scaleOnHover' target='blank'><Icon path={mdiWhatsapp} /></a>
    </div>
  )
}
