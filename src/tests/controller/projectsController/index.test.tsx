import { vi } from 'vitest'
import { getGithubRepository } from '../../../controller/projectsController'
import { api } from '../../../service/api'

vi.mock('../../../service/api')

describe('getGithubRepository', () => {
  it('Should call the endpoint on getGithubRepository', async () => {
    const mockData = { data: 'fakeData' }
    vi.mocked(api.get).mockResolvedValue(mockData)

    const response = await getGithubRepository()
    expect(response).toEqual(mockData)
  })
})
