import { Grow } from '@mui/material'
import * as S from './styles'
export function ProjectsSection() {
  const array = [1, 2, 3, 4, 5, 6]
  return (
    <S.ProjectsSectionContainer>
      {array.map((index: number) => {
        return (
          <Grow in={true} timeout={1000} key={index}>
            <S.ProjectCard>Project {index}</S.ProjectCard>
          </Grow>
        )
      })}
    </S.ProjectsSectionContainer>
  )
}
