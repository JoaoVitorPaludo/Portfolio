import { useScrollTrigger } from '@mui/material'
import * as S from './styles'
export function CompaniesSection() {
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
    threshold: 1000,
  })
  console.log('trig', trigger)
  return (
    <S.CompaniesSectionContainer>
      <h3>EXPERIÊNCIAS PROFISSIONAIS</h3>
      <S.CompaniesWrapperContainer>
        <S.CompaniesSlideTransition isActive={trigger} side="left">
          <S.CompaniesCard />
        </S.CompaniesSlideTransition>

        <S.CompaniesSlideTransition isActive={trigger} side="right">
          <S.CompaniesCard />
        </S.CompaniesSlideTransition>
      </S.CompaniesWrapperContainer>
    </S.CompaniesSectionContainer>
  )
}
