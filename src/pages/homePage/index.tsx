import { FooterComponent } from '../../components/footer'
import { HeaderComponent } from '../../components/header'
import * as S from './styles'
export function HomePage() {
  return (
    <S.HomePageContainer>
      <HeaderComponent />
      <FooterComponent />
    </S.HomePageContainer>
  )
}
