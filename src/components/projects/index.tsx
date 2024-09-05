import { Grow, useScrollTrigger } from '@mui/material'
import { GithubLogo } from '@phosphor-icons/react'
import * as S from './styles'
import { useProjects } from './useProjects'
export function ProjectsSection() {
  const { githubProjects } = useProjects()
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
  })

  return (
    <S.ProjectsSectionContainer>
      <h3>REPOSITÓRIOS PÚBLICOS</h3>
      <Grow in={trigger} timeout={2000}>
        <S.ProjectsWrapperContainer>
          {githubProjects.map((project, index: number) => {
            return (
              <S.ProjectCard key={index}>
                <S.ProjectCardHeader>
                  <GithubLogo size={35} weight="bold" />
                  <h3>{project.name}</h3>
                </S.ProjectCardHeader>
                <p>{project.description}</p>
                {project.homepage !== null && project.homepage !== '' && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar Site
                  </a>
                )}
              </S.ProjectCard>
            )
          })}
        </S.ProjectsWrapperContainer>
      </Grow>
    </S.ProjectsSectionContainer>
  )
}
