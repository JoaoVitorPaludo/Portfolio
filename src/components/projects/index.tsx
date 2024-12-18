import { Grow } from '@mui/material'
import { GithubLogo } from '@phosphor-icons/react'
import { useVisibilityObserver } from '../../utils/intersectionObserver'
import * as S from './styles'
import { useProjects } from './useProjects'
export function ProjectsSection() {
  const { githubProjects, t } = useProjects()
  const { isVisible, elementRef } = useVisibilityObserver(0.1)

  return (
    <S.ProjectsSectionContainer>
      <h3>{t("projects.title")}</h3>
      <Grow in={isVisible} timeout={2000}>
        <S.ProjectsWrapperContainer ref={elementRef}>
          {githubProjects.map((project, index: number) => {
            return (
              <S.ProjectCard key={index} data-testid="project-card">
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
                    {t("projects.link")}
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
