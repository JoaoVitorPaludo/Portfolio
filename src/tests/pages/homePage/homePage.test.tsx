import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { HomePage } from '../../../pages/homePage'
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
describe('HomePage component', () => {
  it('Should open and close the modal', async () => {
    render(<HomePage />)

    // Abre o modal clicando no elemento 'Sobre mim'
    fireEvent.click(screen.getByTestId('home-page-modal'))

    // Verifica se o modal está aberto
    await waitFor(() => {
      expect(screen.getByTestId('close-modal-button')).toBeInTheDocument()
    })

    // Agora simula o fechamento do modal clicando fora dele ou no botão de fechar
    fireEvent.click(screen.getByTestId('close-modal-button')) // Supondo que este seja o botão de fechar

    // Verifica se o modal foi fechado
    await waitFor(() => {
      expect(screen.queryByTestId('close-modal-button')).not.toBeInTheDocument()
    })
  })
})
