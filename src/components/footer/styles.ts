import styled from 'styled-components'

export const FooterComponentContainer = styled.footer`
  min-height: 4rem;
  margin: 0rem 10rem;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  @media (max-width: 566px) {
    margin: 0rem 4rem;
  }
  h3 {
    font-size: 0.8rem !important;
    font-family: system-ui, sans-serif;
  }
`
