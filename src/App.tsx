import { ThemeProvider } from 'styled-components'
import { HomePage } from './pages/homePage'
import { GlobalStyles } from './styles/global'
import { darkTheme } from './styles/themes/darkTheme'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}
