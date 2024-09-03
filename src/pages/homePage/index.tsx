import { Fade, useScrollTrigger } from '@mui/material'
import { ReactTyped } from 'react-typed'
import { CompaniesSection } from '../../components/companies'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
import { ProjectsSection } from '../../components/projects'
import * as S from './styles'
export function HomePage() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  })
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
        <Fade in={!trigger} timeout={1000}>
          <h3>Ao meu portfólio</h3>
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
