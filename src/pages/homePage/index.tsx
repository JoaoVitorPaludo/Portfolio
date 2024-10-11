import { Dialog, Fade } from '@mui/material'
import { useState } from 'react'
import { ReactTyped } from 'react-typed'
import { CompaniesSection } from '../../components/companies'
import { AboutMeDialog } from '../../components/dialog'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
import { ProjectsSection } from '../../components/projects'
import { useVisibilityObserver } from '../../utils/intersectionObserver'
import * as S from './styles'
export function HomePage() {
  const { isVisible, elementRef } = useVisibilityObserver(1)
  const [showModal, setShowModal] = useState<boolean>(false)
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
          <h3
            ref={elementRef}
            onClick={() => setShowModal(true)}
            data-testid="home-page-modal"
          >
            Sobre mim
          </h3>
        </Fade>
        <Dialog
          open={showModal}
          data-testid="home-page-dialog"
          onClose={() => setShowModal(false)}
          fullWidth={true}
          maxWidth="md"
          PaperProps={{
            style: {
              background: 'transparent',
            },
          }}
        >
          <AboutMeDialog handleCloseModal={() => setShowModal(false)} />
        </Dialog>
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
