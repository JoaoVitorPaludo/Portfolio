import { useScrollTrigger } from '@mui/material'
import dtiLogo from '../../assets/companyLogos/dataintegraLogo.jpg'
import lechlerLogo from '../../assets/companyLogos/lechlerLogo.jpg'

import * as S from './styles'
export function CompaniesSection() {
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
    threshold: 1000,
  })

  return (
    <S.CompaniesSectionContainer>
      <h3>EXPERIÊNCIAS PROFISSIONAIS</h3>
      <S.CompaniesWrapperContainer>
        <S.CompaniesSlideTransition isActive={trigger} side="left">
          <S.CompaniesCard>
            <header>
              <img src={lechlerLogo} alt="" />
              <div className="text-container">
                <h3>Lechler do Brasil</h3>
                <span>06/12/2021 - 25/08/2022</span>
              </div>
            </header>
            <main>
              <p>
                Atuando inicialmente como auxiliar de expedição, gradualmente
                ganhando mais experiências e oportunidades, me tornando operador
                de empilhadeiras na empresa, participando da brigada de
                bombeiros da empresa, e também trabalhando com o faturamento de
                notas fiscais.
              </p>
            </main>
          </S.CompaniesCard>
        </S.CompaniesSlideTransition>

        <S.CompaniesSlideTransition isActive={trigger} side="right">
          <S.CompaniesCard>
            {' '}
            <header>
              <img src={dtiLogo} alt="" />
              <div className="text-container">
                <h3>Dataintegra</h3>
                <span>12/09/2022 - em atividade</span>
              </div>
            </header>
            <main>
              <p>
                Atuo como desenvolvedor de software, tanto em projetos back-end
                utilizando Node e projetos front-end, utilizando frameworks como
                React e demais bibliotecas. <br />
                Atuando principalmente em sistemas com foco hospitalar.
              </p>
            </main>
          </S.CompaniesCard>
        </S.CompaniesSlideTransition>
      </S.CompaniesWrapperContainer>
    </S.CompaniesSectionContainer>
  )
}
