import { extendTheme } from '@chakra-ui/react'
import { ColorMode } from '@chakra-ui/color-mode'
import styles from './styles'
import colors from './colors'
import fonts from './fonts'
import components from './components'

const theme = extendTheme({
  initialColorMode: 'light' as ColorMode,
  useSystemColorMode: false,
  styles,
  colors,
  fonts,
  components,
})

export default theme
