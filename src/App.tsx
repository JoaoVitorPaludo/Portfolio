import { ThemeProvider } from 'styled-components'
import { HomePage } from './pages/homePage'
import { lightTheme } from './styles/themes/lightTheme'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <HomePage />
    </ThemeProvider>
  )
}
