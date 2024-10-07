import { useEffect, useState } from 'react'
import { getGithubRepository } from '../../controller/projectsController'

export interface GithubProjectsProps {
  url: string
  name: string
  description: string
  homepage: string
}

export const useProjects = () => {
  const [githubProjects, setGitGubProjects] = useState<GithubProjectsProps[]>(
    [],
  )
  async function handleGetRepository() {
    try {
      const { data } = await getGithubRepository()
      setGitGubProjects(data)
    } catch (e) {
      console.error('Error fetching repositories:', e)
    }
  }

  useEffect(() => {
    handleGetRepository()
  }, [])
  return {
    githubProjects,
    handleGetRepository,
  }
}
