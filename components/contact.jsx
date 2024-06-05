import Icon from '@mdi/react'
import { mdiGithub, mdiEmailOutline, mdiLinkedin, mdiCellphone, mdiMapMarkerOutline } from '@mdi/js'

export default function Contact () {
  return (
    <>
      <Icon path={mdiGithub} size={2} />
      <Icon path={mdiEmailOutline} size={2} />
      <Icon path={mdiLinkedin} size={2} />
      <Icon path={mdiCellphone} size={2} />
      <Icon path={mdiMapMarkerOutline} size={2} />
    </>
  )
}
