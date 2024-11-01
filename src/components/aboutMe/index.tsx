import { Fade, Grow, Slide, Zoom } from '@mui/material'
import { DownloadSimple } from '@phosphor-icons/react'
import image from '../../assets/profileImage.jpeg'
import { useVisibilityObserver } from '../../utils/intersectionObserver'
import * as S from './styles'

export function AboutMe() {
  const { isVisible, elementRef } = useVisibilityObserver(0.1)

  return (
    <S.AboutMeContainer ref={elementRef}>
      <h3>SOBRE MIM</h3>
      <S.AboutMeMainCard>
        <Grow in={isVisible} timeout={2000}>
          <img src={image} alt="" />
        </Grow>
        <aside>
          <Slide in={isVisible} timeout={2000} direction="left">
            <p>
              Olá, sou João Vitor, tenho 22 anos e sou formado em Análise e
              Desenvolvimento de Sistemas pela Universidade de Passo Fundo
              (UPF). Atualmente, resido em Paraí/RS e atuo como desenvolvedor de
              software desde agosto de 2022, com uma paixão especial por
              desenvolvimento web.
              <br />
              Estou sempre em busca de aprimorar meus conhecimentos, tanto
              pessoais quanto profissionais, e adoro enfrentar novos desafios.
              Sou uma pessoa proativa, comprometida e tenho facilidade para
              trabalhar em equipe. Além disso, tenho experiência em liderar
              projetos, o que me motiva a entregar soluções inovadoras e
              eficientes.
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
                    Currículo
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
