import { Grow, useScrollTrigger } from '@mui/material'
import { GithubLogo } from '@phosphor-icons/react'
import * as S from './styles'
export function ProjectsSection() {
  const array = [1, 2, 3, 4, 5]
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
  })
  console.log('trigger', trigger)
  return (
    <S.ProjectsSectionContainer>
      <h3>PROJETOS GITHUB</h3>
      <Grow in={trigger} timeout={2000}>
        <S.ProjectsWrapperContainer>
          {array.map((index: number) => {
            return (
              <S.ProjectCard key={index}>
                <S.ProjectCardHeader>
                  <GithubLogo size={35} weight="bold" />
                  <h3>Titulo repositório</h3>
                </S.ProjectCardHeader>
                <p>
                  texto de teste texto de testetexto de testetexto de testetexto
                  de testetexto de teste
                </p>
              </S.ProjectCard>
            )
          })}
        </S.ProjectsWrapperContainer>
      </Grow>
    </S.ProjectsSectionContainer>
  )
}
