import '@testing-library/jest-dom'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { AxiosError } from 'axios'
import { act } from 'react'
import { vi } from 'vitest'
import { ProjectsSection } from '../../../components/projects'
import { useProjects } from '../../../components/projects/useProjects'
import { getGithubRepository } from '../../../controller/projectsController'
vi.mock('../../../controller/projectsController')

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
describe('Project component', () => {
  it('Should execute the request to populate the repositories', async () => {
    const mockData = [
      {
        url: 'test url',
        name: 'test name',
        description: 'test description',
        homepage: 'test homepage',
      },
    ]

    ;(getGithubRepository as jest.Mock).mockResolvedValue({ data: mockData })
    const { result } = renderHook(() => useProjects())

    await act(async () => {
      await result.current.handleGetRepository()
    })
    render(<ProjectsSection />)
    console.log(result.current.githubProjects)

    await waitFor(() => {
      expect(result.current.githubProjects).toEqual(mockData)
      expect(screen.getByTestId('project-card')).toBeInTheDocument()
    })
    // expect(result.current.githubProjects).toEqual(mockData)
  })

  it('Shoult return a error if the request of repositories fails', async () => {
    const mockError = new AxiosError(
      'Unexpected error',
      '401',
      undefined,
      undefined,
      {
        data: {},
        status: 401,
        headers: {},
        config: {
          headers: 'Content-Type: application/json' as any,
        },
        statusText: 'Unauthorized',
        request: {},
      },
    )
    ;(getGithubRepository as jest.Mock).mockResolvedValue(mockError)
    const { result } = renderHook(() => useProjects())
    await act(async () => {
      await result.current.handleGetRepository()
    })
  })
})
