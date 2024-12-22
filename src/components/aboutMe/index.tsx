import { Fade, Grow, Slide, Zoom } from '@mui/material'
import { DownloadSimple } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import image from '../../assets/profileImage.jpeg'
import { useVisibilityObserver } from '../../utils/intersectionObserver'
import * as S from './styles'

export function AboutMe() {
  const { isVisible, elementRef } = useVisibilityObserver(0.1)
  const { t } = useTranslation();

  return (
    <S.AboutMeContainer ref={elementRef}>
      <h3>{t('aboutMe.title')}</h3>
      <S.AboutMeMainCard>
        <Grow in={isVisible} timeout={2000}>
          <img src={image} alt="" />
        </Grow>
        <aside>

          <Slide in={isVisible} timeout={2000} direction="left">
            <p>
              {t('aboutMe.descriptionOne')}
              <br />
              {t('aboutMe.descriptionTwo')}
            </p>
          </Slide>

          <S.AboutMeSkills>
            <Zoom in={isVisible} timeout={1500}>
              <img
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
            </Zoom>
            <Zoom in={isVisible} timeout={1500}>
              <img
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              />
            </Zoom>
            <Zoom in={isVisible} timeout={1500}>
              <img
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              />
            </Zoom>
            <Zoom in={isVisible} timeout={1500}>
              <img
                alt="golang"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />

            </Zoom>

            <div>
              <Fade in={isVisible} timeout={2000}>
                <a href="/files/Currículo - João Vitor.pdf" download>
                  <button>
                    {t('aboutMe.curriculum')}
                    <DownloadSimple size={16} weight="bold" />
                  </button>
                </a>
              </Fade>
            </div>
          </S.AboutMeSkills>
        </aside>
      </S.AboutMeMainCard>
    </S.AboutMeContainer>
  )
}
