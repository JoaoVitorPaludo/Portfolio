import { Fade } from '@mui/material'
import { ReactTyped } from 'react-typed'
import { CompaniesSection } from '../../components/companies'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
import { ProjectsSection } from '../../components/projects'
import { useVisibilityObserver } from '../../utils/intersectionObserver'
import * as S from './styles'
export function HomePage() {
  const { isVisible, elementRef } = useVisibilityObserver(1)

  return (
    <S.HomePageContainer>
      <HeaderComponent />
      <S.HomePageMainSection>
        <h1>
          Seja{' '}
          <ReactTyped
            strings={[' bem vindo!']}
            typeSpeed={50}
            backSpeed={50}
            loop={true}
          />
        </h1>
        <Fade in={isVisible} timeout={1000}>
          <h3 ref={elementRef}>Ao meu portfólio</h3>
        </Fade>
      </S.HomePageMainSection>
      <S.SectionCard>
        <ProjectsSection />
      </S.SectionCard>
      <S.SectionCard>
        <CompaniesSection />
      </S.SectionCard>

      <FooterComponent />
    </S.HomePageContainer>
  )
}
