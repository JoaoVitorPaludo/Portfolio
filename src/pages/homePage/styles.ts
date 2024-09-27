import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const HomePageMainSection = styled.section`
  min-height: 89.5vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  .typed-cursor {
    color: ${(props) => props.theme['second-text-color']};
  }
  h1,
  span {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.5rem;
    //text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme['second-text-color']};
      cursor: pointer;
      transition: transform 0.5s ease-in-out;
    }
  }
`

export const SectionCard = styled.section`
  // min-height: 100vh;
  padding: 2rem;
  padding-bottom: 4rem;
  display: flex;
`
