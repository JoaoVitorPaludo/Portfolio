import { Grow, useScrollTrigger } from '@mui/material'
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
            return <S.ProjectCard key={index}>Project {index}</S.ProjectCard>
          })}
        </S.ProjectsWrapperContainer>
      </Grow>
    </S.ProjectsSectionContainer>
  )
}
