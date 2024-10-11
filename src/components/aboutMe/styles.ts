import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 2rem;
  margin: 0 8rem;
  h3 {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
  }
`
export const AboutMeMainCard = styled.main`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  img {
    width: 22rem;

    //object-fit: cover;
    border-radius: 10px;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    font-family: system-ui, sans-serif;
    color: white;
    line-height: 1.8;
  }
`
