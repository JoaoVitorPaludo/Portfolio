import styled from 'styled-components'

export const CompaniesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  gap: 2rem;
  h3 {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
  }
`
export const CompaniesWrapperContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  overflow: hidden; /* Adiciona esta linha */
`
export const CompaniesCard = styled.div`
  display: flex;
  width: 35rem;
  height: 15rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['card-background']};
  border-radius: 1rem;
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
`

interface CompaniesSlideTransitionProps {
  isActive: boolean
  side: 'left' | 'right'
}
export const CompaniesSlideTransition = styled.div<CompaniesSlideTransitionProps>`
  transform: ${(props) =>
    props.isActive
      ? 'none'
      : `${props.side === 'left' ? 'translateX(-1000.5px)' : 'translateX(1000.5px)'} `};

  transition: ${(props) =>
    props.isActive
      ? 'transform 1.5s cubic-bezier(0, 0, 0.2, 1)'
      : 'transform 1.5s cubic-bezier(0, 0, 0, 0)'};
`
