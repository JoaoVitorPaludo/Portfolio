import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { App } from '../App'
import { darkTheme } from '../styles/themes/darkTheme'
import { lightTheme } from '../styles/themes/lightTheme'

beforeAll(() => {
  class IntersectionObserverMock {
    observe() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverMock,
  })
})
describe('App Component', () => {
  it('Should Render the App', () => {
    render(<App />)
    expect(App).toBeDefined()
  })
})

const colorsObject = {
  'white-100': '#fff',
  'black-900': '#000000',
  'background-700': '#1e2125',
  'background-500': '#3c424a',
  'card-background': '#16171a',
  'base-text-color': '#d1d5db',
  'base-icon-color': '#d1d5db',
  'second-text-color': '#AD49E1',
}
describe('App', () => {
  it('Should render the ThemeProvider', () => {
    render(<ThemeProvider theme={darkTheme} />)
    expect(darkTheme).toStrictEqual(colorsObject)
  })
})
describe('App', () => {
  it('Should render the ThemeProvider', () => {
    render(<ThemeProvider theme={lightTheme} />)
    expect(lightTheme).toStrictEqual(colorsObject)
  })
})
