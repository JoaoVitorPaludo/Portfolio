import { X } from '@phosphor-icons/react'
import image from '../../assets/companyLogos/dataintegraLogo.jpg'
import * as S from './styles'
interface AboutMeDialogProps {
  handleCloseModal: () => void
}
export function AboutMeDialog({ handleCloseModal }: AboutMeDialogProps) {
  return (
    <S.AboutMeDialogContainer>
      <S.AboutMeDialogHeader>
        {/* <h2>Sobre Mim</h2> */}
        <X size={30} weight="bold" onClick={() => handleCloseModal()} />
      </S.AboutMeDialogHeader>
      <S.AboutMeDialogMain>
        <S.AboutMeDialogSection>
          <img src={image} alt="Google" />
          <p>
            Me chamo João Vitor, tenho 22 anos e sou formado em Analise e
            Desenvolvimento de Sistemas pela UPF (Universidade de Passo Fundo).
            <br />
            Atualmente resido na cidade de Paraí/RS
          </p>
        </S.AboutMeDialogSection>
        <S.AboutMeDialogSection>b</S.AboutMeDialogSection>
      </S.AboutMeDialogMain>
    </S.AboutMeDialogContainer>
  )
}
