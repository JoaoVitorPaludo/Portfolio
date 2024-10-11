import styled from 'styled-components'

export const HeaderComponentContainer = styled.header`
  //  min-height: 4rem;
  min-height: 10.5vh;
  height: 10.5vh;
  margin: 0rem 10rem;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 566px) {
    margin: 0rem 4rem;
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
export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`
