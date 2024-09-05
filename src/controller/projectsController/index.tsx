import { api } from '../../service/api'

export const getGithubRepository = async () => {
  const response = await api.get(`users/JoaoVitorPaludo/repos`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  })
  return response
}
