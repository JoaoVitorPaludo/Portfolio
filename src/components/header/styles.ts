import styled from 'styled-components'

export const HeaderComponentContainer = styled.header`
  min-height: 10.5vh;
  height: 10.5vh;
  padding: 1.2rem 12rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  &.scrolled {
    --tw-bg-opacity: 1;
    background-color: rgb(36 38 48/0.2);
    backdrop-filter: blur(16px);
  }

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
