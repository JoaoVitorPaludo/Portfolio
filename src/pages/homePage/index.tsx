import { ReactTyped } from 'react-typed'
import { AboutMe } from '../../components/aboutMe'
import { CompaniesSection } from '../../components/companies'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
import { ProjectsSection } from '../../components/projects'
import * as S from './styles'
export function HomePage() {
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
      </S.HomePageMainSection>
      <S.SectionCard>
        <AboutMe />
      </S.SectionCard>
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
