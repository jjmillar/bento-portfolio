import Icon from '@mdi/react'
import { mdiGithub, mdiEmailOutline, mdiLinkedin, mdiCellphone, mdiMapMarkerOutline, mdiWhatsapp } from '@mdi/js'

export default function Contact () {
  return (
    <div className='contact__wrapper'>
      <a href='https://github.com/jjmillar' className='scaleOnHover' target='blank'><Icon path={mdiGithub} title='githublink' /></a>
      <a href=''><Icon path={mdiEmailOutline} /></a>
      <a href=''><Icon path={mdiLinkedin} /></a>
      <a href=''><Icon path={mdiCellphone} /></a>
      <a href=''><Icon path={mdiMapMarkerOutline} /></a>
      <a href=''><Icon path={mdiWhatsapp} /></a>
    </div>
  )
}
