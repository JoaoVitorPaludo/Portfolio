import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 2rem;
  margin: 0 8rem;
  @media (max-width: 1460px) {
    margin: 0;
  }
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
  @media (max-width: 862px) {
    flex-direction: column;
    img {
      border-radius: 9999px !important;
      width: 14rem !important;
      height: 14rem;
      object-fit: cover;
    }
  }
  img {
    width: 22rem;
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
