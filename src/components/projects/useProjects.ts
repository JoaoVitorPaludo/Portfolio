import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getGithubRepository } from '../../controller/projectsController'

export interface GithubProjectsProps {
  url: string
  name: string
  description: string
  homepage: string
}

export const useProjects = () => {
  const { t } = useTranslation();

  const [githubProjects, setGitGubProjects] = useState<GithubProjectsProps[]>(
    [],
  )
  async function handleGetRepository() {
    try {
      const { data } = await getGithubRepository()
      setGitGubProjects(data)
    } finally {
    }
  }

  useEffect(() => {
    handleGetRepository()
  }, [])
  return {
    githubProjects,
    handleGetRepository,
    t
  }
}
