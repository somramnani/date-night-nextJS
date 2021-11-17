import { makeStyles } from '../lib/utils/makeStyles'

const useStyles = makeStyles()(() => ({
  homepageBackgroundPhoto: {
    background-image: url("/fireworks"),
    background-repeat: no-repeat,
    background-size: cover,
    height: 100vh,
    background-attachment: fixed,
    opacity: 1,
    width: 100%,
    background-position: center center,

  },
}))

export default useStyles
