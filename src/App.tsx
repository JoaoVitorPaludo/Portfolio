import { ThemeProvider } from 'styled-components'
import { HomePage } from './pages/homePage'
import { GlobalStyles } from './styles/global'
import { lightTheme } from './styles/themes/lightTheme'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}
