import { useScrollTrigger } from '@mui/material';
import dtiLogo from '../../assets/companyLogos/dataintegraLogo.jpg';
import lechlerLogo from '../../assets/companyLogos/lechlerLogo.jpg';

import { useTranslation } from 'react-i18next';
import * as S from './styles';
export function CompaniesSection() {
  const { t } = useTranslation();

  const trigger = useScrollTrigger({
    threshold: 1000,
  })


  return (
    <S.CompaniesSectionContainer>
      <h3>{t('companies.title')}</h3>
      <S.CompaniesWrapperContainer>
        <S.CompaniesSlideTransition $isActive={trigger} side="left">
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
                {t("companies.roleDescriptionOne")}
              </p>
            </main>
          </S.CompaniesCard>
        </S.CompaniesSlideTransition>

        <S.CompaniesSlideTransition $isActive={trigger} side="right">
          <S.CompaniesCard>
            {' '}
            <header>
              <img src={dtiLogo} alt="" />
              <div className="text-container">
                <h3>Dataintegra</h3>
                <span>12/09/2022 - em {t("companies.activity")}</span>
              </div>
            </header>
            <main>
              <p>
                {t("companies.roleDescriptionTwo")}
                <br />
                {t("companies.roleDescriptionTree")}
              </p>
            </main>
          </S.CompaniesCard>
        </S.CompaniesSlideTransition>
      </S.CompaniesWrapperContainer>
    </S.CompaniesSectionContainer>
  )
}
