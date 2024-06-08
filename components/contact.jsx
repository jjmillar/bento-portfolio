import Icon from '@mdi/react'
import { mdiGithub, mdiEmailOutline, mdiLinkedin, mdiCellphone, mdiMapMarkerOutline } from '@mdi/js'

export default function Contact () {
  return (
    <div className='contact__wrapper'>
      <Icon path={mdiGithub} />
      <Icon path={mdiEmailOutline} />
      <Icon path={mdiLinkedin} />
      <Icon path={mdiCellphone} />
      <Icon path={mdiMapMarkerOutline} />
    </div>
  )
}
