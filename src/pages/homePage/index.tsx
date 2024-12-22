import { Trans, useTranslation } from 'react-i18next'
import { ReactTyped } from 'react-typed'
import { AboutMe } from '../../components/aboutMe'
import { CompaniesSection } from '../../components/companies'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
import { ProjectsSection } from '../../components/projects'
import * as S from './styles'
export function HomePage() {

  const { i18n: { language } } = useTranslation();



  return (
    <S.HomePageContainer>
      <HeaderComponent />
      <S.HomePageMainSection>

        <Trans i18nKey="homePage.welcomeMessage">
          <h1>
            Seja{' '}
            <ReactTyped
              strings={language === "pt" ? [' bem vindo!'] : ['Welcome!']}
              typeSpeed={50}
              backSpeed={50}
              loop={true}
            />
          </h1>
        </Trans>
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
