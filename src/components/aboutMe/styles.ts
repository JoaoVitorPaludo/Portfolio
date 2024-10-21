import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 2rem;
  margin: 0 8rem;
  max-width: 100%;
  overflow: hidden;
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
  gap: 2rem;
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
    height: 22rem;
    border-radius: 10px;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.5);
  }
  aside {
    width: 100%;
    height: 100%;
    row-gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      font-size: 1rem;
      font-weight: 500;
      width: 90%;
      font-family: system-ui, sans-serif;
      color: white;
      line-height: 1.8;
    }
  }
`

export const AboutMeSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 90%;

  img {
    background-color: transparent;
    width: 3.75rem;
    height: 3.75rem;
    box-shadow: none;
  }
  div {
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    display: flex;
    padding-right: 1rem;

    a {
      text-decoration: none;
    }
    button {
      background: transparent;
      border: 1px solid ${(props) => props.theme['base-text-color']};
      color: white;
      font-family: system-ui, sans-serif;
      font-weight: 500;
      gap: 0.5rem;
      display: flex;
      align-items: center;
      height: 2rem;
      padding: 0 1.3rem;
      border-radius: 15px;
      &:hover {
        cursor: pointer;
        transform: scale(1.03);
        transition: transform 0.3s ease-in-out;
        border: 1px solid ${(props) => props.theme['second-text-color']};
      }
    }
  }
`
