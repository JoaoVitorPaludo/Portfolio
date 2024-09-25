import styled from 'styled-components'

export const ProjectsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 80%;
  align-items: center;
  gap: 2rem;
  h3 {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
  }
`
export const ProjectsWrapperContainer = styled.div`
  flex-wrap: wrap;

  width: 80%;
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20rem;
  height: 15rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['card-background']};
  border-radius: 1rem;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.5);

  p {
    line-height: 1.6;
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
  }

  a {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    text-decoration: none;
    color: ${(props) => props.theme['second-text-color']};
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;

    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
`
export const ProjectCardHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: fit-content;
  svg {
    color: ${(props) => props.theme['second-text-color']};
  }
  h3 {
    font-size: 1.3rem;
  }
`
