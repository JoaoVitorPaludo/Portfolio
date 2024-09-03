import 'styled-components'
import { darkTheme } from '../styles/themes/darkTheme'
import { lightTheme } from '../styles/themes/lightTheme'

type LightThemeType = typeof lightTheme
type DarkThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeType {}
}
