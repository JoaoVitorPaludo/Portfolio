import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const HomePageMainSection = styled.section`
  min-height: 96vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  h1,
  span {
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
  }
`

export const SectionCard = styled.section`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
`
