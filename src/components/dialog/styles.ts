import styled from 'styled-components'

export const AboutMeDialogContainer = styled.div`
  background-color: ${(props) => props.theme['background-500']};
  width: 100%;
  max-height: 580px;
  padding: 2rem;
  border-radius: 1rem;
  height: 85vh;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`
export const AboutMeDialogHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h2 {
    color: ${(props) => props.theme['base-text-color']};
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
  svg {
    color: ${(props) => props.theme['base-icon-color']};
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme['second-text-color']};
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  }
`

export const AboutMeDialogMain = styled.main`
  flex: 1;
  display: flex;
  gap: 1rem;
`
export const AboutMeImageSection = styled.section`
  width: 22rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 22rem;
    object-fit: cover;
    border-radius: 10px;
  }
`
export const AboutMeDialogSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  p {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
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
    color: ${(props) => props.theme['base-text-color']};
    line-height: 1.6;
  }
`
