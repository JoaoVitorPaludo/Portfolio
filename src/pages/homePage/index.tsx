import { ReactTyped } from 'react-typed'
import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
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
        <h3>Ao meu portfólio</h3>
      </S.HomePageMainSection>
      <section>section</section>
      <FooterComponent />
    </S.HomePageContainer>
  )
}
