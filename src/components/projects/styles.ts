import styled from 'styled-components'

export const ProjectsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 2rem;
  h3 {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
  }
`
export const ProjectsWrapperContainer = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const ProjectCard = styled.div`
  display: flex;
  width: 20rem;
  height: 15rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['card-background']};
  border-radius: 1rem;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
`
