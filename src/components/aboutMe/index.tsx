import image from '../../assets/profileImage.jpeg'
import * as S from './styles'

export function AboutMe() {
  return (
    <S.AboutMeContainer>
      <h3>SOBRE MIM</h3>
      <S.AboutMeMainCard>
        <img src={image} alt="" />

        <p>
          Me chamo João Vitor, tenho 22 anos e sou formado em Analise e
          Desenvolvimento de Sistemas pela UPF (Universidade de Passo Fundo).
          <br />
          Atualmente resido na cidade de Paraí/RS, trabalho com desenvolvimento
          de software desde 08/2022, sou apaixonado por programação
          especialmente por desenvolvimento web. <br />
          Busco sempre agregar ainda mais meus conhecimentos tanto pessoais como
          profissionais e anseio por novos desafios.
          <br /> Me considero uma pessoa proativa e leal, gosto de trabalhar em
          equipe e atuar na liderança de projetos.
        </p>
      </S.AboutMeMainCard>
    </S.AboutMeContainer>
  )
}
