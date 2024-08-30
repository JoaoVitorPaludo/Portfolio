import styled from 'styled-components'

export const HeaderComponentContainer = styled.header`
  min-height: 4rem;
  margin: 0rem 10rem;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  svg {
    color: ${(props) => props.theme['base-icon-color']};
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`
